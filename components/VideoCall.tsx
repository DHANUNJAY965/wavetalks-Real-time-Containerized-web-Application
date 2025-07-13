"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  MicrophoneIcon,
  VideoCameraIcon,
  XCircleIcon,
  PhoneMissedCallIcon,
  PaperClipIcon,
} from "@heroicons/react/solid";
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import { usePathname, useRouter } from 'next/navigation';

interface VideoCallProps {
  onEndCall: () => void;
}

const VideoCall: React.FC<VideoCallProps> = ({ onEndCall }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pc = useRef<RTCPeerConnection | null>(null);
  const ws = useRef<WebSocket | null>(null);
  const [user, setusers] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [messages, setMessages] = useState<
    { text: string; sender: string; image?: string }[]
  >([]);
  const [chatInput, setChatInput] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [Toast, setToastMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const currentUser = "me";
  const currentPage = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkMediaDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasAudio = devices.some(device => device.kind === 'audioinput');
      const hasVideo = devices.some(device => device.kind === 'videoinput');

      if (!hasAudio || !hasVideo) {
        ws.current?.close();
        alert('You do not have a microphone or camera, so you cannot access our website.');
        onEndCall();
        return;
      }
    };
    checkMediaDevices();
    ws.current = new WebSocket("wss://wavetalks-server.onrender.com");
    ws.current.onopen = () => startVideo();

    ws.current.onmessage = async (message) => {
      const data = JSON.parse(message.data);

      if (data.type === "offer") {
        await pc.current?.setRemoteDescription(new RTCSessionDescription(data));
        const answer: any = await pc.current?.createAnswer();
        if (answer) {
          await pc.current?.setLocalDescription(answer);
          ws.current?.send(JSON.stringify({ type: "answer", sdp: answer.sdp }));
        }
      } else if (data.type === "answer") {
        await pc.current?.setRemoteDescription(new RTCSessionDescription(data));
        setIsConnected(true);
      } else if (data.type === "candidate") {
        if (data.candidate) {
          await pc.current?.addIceCandidate(
            new RTCIceCandidate(data.candidate)
          );
        }
      } else if (data.type === "chat") {
        console.log("Received chat message:", data.message);
        setMessages((prev) => [
          ...prev,
          { text: data.message, sender: "other" },
        ]);
      } else if (data.type === "image") {
        console.log("Received image message:", data.image);
        setMessages((prev: any) => [
          ...prev,
          { image: data.image, sender: "other" },
        ]);
      } else if (data.type === "callEnded") {
        handleCallEnded();
      }
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const startVideo = async () => {
    let stream: any;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    }
    catch (err: any) {
      if (err.name === 'NotAllowedError') {
        ws.current?.close();
        alert('You need to allow access to the microphone and camera to use Wavetalks.');
        router.push('/');
        onEndCall();
        return;
      } else {
        console.error('Error accessing media devices:', err);
      }
    }
    pc.current = new RTCPeerConnection();

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        ws.current?.send(
          JSON.stringify({ type: "candidate", candidate: event.candidate })
        );
      }
    };

    pc.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
        setIsConnecting(false);
        setIsConnected(true);
      }
    };

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    stream.getVideoTracks().forEach((track: any) => {
      track.enabled = false;
    });
    setIsVideoOn(false);

    stream.getTracks().forEach((track: any) => {
      pc.current?.addTrack(track, stream);
    });

    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);
    ws.current?.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));

    setIsConnecting(true);
  };

  const endCall = () => {
    ws.current?.send(JSON.stringify({ type: "endCall" }));
    handleCallEnded();
  };

  const handleCallEnded = () => {
    if (pc.current) {
      pc.current.onicecandidate = null;
      pc.current.ontrack = null;
      pc.current.close();
      pc.current = null;
    }
    if (localVideoRef.current) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      stream?.getTracks().forEach((track) => track.stop());
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
    setIsConnecting(false);
    setIsConnected(false);
    onEndCall();
  };

  const toggleMute = () => {
    const stream = localVideoRef.current?.srcObject as MediaStream;
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
    setIsMuted(!isMuted);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleVideo = () => {
    const stream = localVideoRef.current?.srcObject as MediaStream;
    stream.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
    setIsVideoOn(!isVideoOn);
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const message = { type: "chat", message: chatInput };
      ws.current?.send(JSON.stringify(message));
      console.log("Sent chat message:", chatInput);
      setMessages((prev) => [
        ...prev,
        { text: chatInput, sender: currentUser },
      ]);
      setChatInput("");
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        const imageMessage = { type: "image", image: base64String };
        ws.current?.send(JSON.stringify(imageMessage));
        console.log("Sent image message:", base64String);
        setMessages((prev: any) => [
          ...prev,
          { image: base64String, sender: currentUser },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen p-2 sm:p-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row h-[100vh] lg:h-[500px]">
                {/* Video Section */}
                <div className="relative flex-1 bg-gray-900/50 backdrop-blur-sm h-[70vh] lg:h-full">
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Connection Status Overlay */}
                  {localVideoRef.current == null ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/75 backdrop-blur-sm">
                      <div className="text-center px-4">
                        <div className="mb-4">
                          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        </div>
                        <p className="text-white text-base sm:text-lg font-medium">
                          Please wait a moment while we connect you.
                        </p>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">The server is waking up...</p>
                      </div>
                    </div>
                  ) : (
                    isConnecting &&
                    !isConnected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/75 backdrop-blur-sm">
                        <div className="text-center px-4">
                          <div className="mb-4">
                            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                          </div>
                          <p className="text-white text-base sm:text-lg font-medium">
                            Searching for a partner to connect you with...
                          </p>
                          <p className="text-gray-400 mt-2 text-sm sm:text-base">Please wait</p>
                        </div>
                      </div>
                    )
                  )}

                  {/* Local Video (Picture-in-Picture) */}
                  <div className="absolute bottom-16 sm:bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-800 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                    <video
                      ref={localVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    {!isVideoOn && (
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">👤</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Control Buttons */}
                  <div className="absolute bottom-16 sm:bottom-4 left-4 flex space-x-2 sm:space-x-3">
                    <button
                      onClick={toggleMute}
                      className={`p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 ${
                        isMuted
                          ? 'bg-red-500/20 border-red-500/50 text-red-400'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      aria-label="Toggle Mute"
                    >
                      <MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                      onClick={toggleVideo}
                      className={`p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 ${
                        !isVideoOn
                          ? 'bg-red-500/20 border-red-500/50 text-red-400'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      aria-label="Toggle Video"
                    >
                      {isVideoOn ? (
                        <VideoCameraIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <VideocamOffIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setToastMessage("The call has been ended !");
                        setShowToast(true);
                        setTimeout(() => {
                          setShowToast(false);
                          endCall();
                        }, 2000);
                      }}
                      className="p-2 sm:p-3 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-red-500/30"
                      aria-label="End Call"
                    >
                      <PhoneMissedCallIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Chat Toggle Button for Mobile */}
                    <button
                      onClick={() => setShowChat(!showChat)}
                      className="lg:hidden p-2 sm:p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                      aria-label="Toggle Chat"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Chat Section */}
                <div className={`w-full lg:w-96 bg-gray-900/30 backdrop-blur-sm flex flex-col border-l border-white/10 h-[30vh] lg:h-full
                  ${showChat ? 'block' : 'hidden'} lg:flex`}>
                  <div className="p-3 sm:p-4 border-b border-white/10 flex items-center justify-between">
                    <h3 className="text-white font-semibold text-base sm:text-lg">Chat</h3>
                    <button
                      onClick={() => setShowChat(false)}
                      className="lg:hidden text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 min-h-0">
                    {localVideoRef.current == null ? (
                      <div className="text-center text-gray-400 py-4 sm:py-8">
                        <div className="mb-2 sm:mb-4">
                          <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        </div>
                        <p className="text-sm sm:text-base">Please wait a moment while we connect you.</p>
                        <p className="text-xs sm:text-sm mt-1 sm:mt-2">The server is waking up...</p>
                      </div>
                    ) : (
                      isConnecting &&
                      !isConnected && (
                        <div className="text-center text-gray-400 py-4 sm:py-8">
                          <div className="mb-2 sm:mb-4">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                          </div>
                          <p className="text-sm sm:text-base">Searching for a partner to connect you with...</p>
                          <p className="text-xs sm:text-sm mt-1 sm:mt-2">Please wait</p>
                        </div>
                      )
                    )}

                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`max-w-xs break-words ${
                          msg.sender === currentUser ? 'ml-auto' : 'mr-auto'
                        }`}
                      >
                        <div
                          className={`p-2 sm:p-3 rounded-2xl ${
                            msg.sender === currentUser
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                              : 'bg-white/10 text-gray-300 backdrop-blur-md'
                          }`}
                        >
                          {msg.text && <p className="text-xs sm:text-sm">{msg.text}</p>}
                          {msg.image && (
                            <img
                              src={msg.image}
                              alt="Sent image"
                              className="max-w-full h-auto rounded-lg"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 sm:p-4 border-t border-white/10">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-white/10 backdrop-blur-md text-white placeholder-gray-400 px-3 sm:px-4 py-2 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Type a message..."
                      />
                      <button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-2 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                      >
                        Send
                      </button>
                    </div>

                    <div className="mt-2">
                      <label className="inline-flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <PaperClipIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm">Share Image</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-medium">{Toast}</span>
              <button
                onClick={() => setShowToast(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCall;