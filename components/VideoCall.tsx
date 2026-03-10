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
import { SOCKET_URL } from '@/config/baseUrl';

interface VideoCallProps {
  onEndCall: () => void;
}

const VideoCall: React.FC<VideoCallProps> = ({ onEndCall }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pc = useRef<RTCPeerConnection | null>(null);
  const ws = useRef<WebSocket | null>(null);
  const iceCandidateQueue = useRef<RTCIceCandidate[]>([]);
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

  const flushIceCandidateQueue = () => {
    while (iceCandidateQueue.current.length > 0) {
      const candidate = iceCandidateQueue.current.shift();
      if (candidate && pc.current) {
        pc.current.addIceCandidate(candidate).catch(e => console.error("Error adding queued ice candidate:", e));
      }
    }
  };

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
    ws.current = new WebSocket(SOCKET_URL);
    ws.current.onopen = () => startVideo();

    ws.current.onmessage = async (message) => {
      const data = JSON.parse(message.data);

      if (data.type === "paired") {
        const initiator = data.initiator;
        if (initiator) {
          const offer = await pc.current?.createOffer();
          if (offer) {
            await pc.current?.setLocalDescription(offer);
            ws.current?.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));
          }
        }
      } else if (data.type === "offer") {
        try {
          await pc.current?.setRemoteDescription(new RTCSessionDescription(data));
          flushIceCandidateQueue();
          const answer: any = await pc.current?.createAnswer();
          if (answer) {
            await pc.current?.setLocalDescription(answer);
            ws.current?.send(JSON.stringify({ type: "answer", sdp: answer.sdp }));
          }
        } catch (e) {
          console.error("Error handling offer:", e);
        }
      } else if (data.type === "answer") {
        try {
          await pc.current?.setRemoteDescription(new RTCSessionDescription(data));
          flushIceCandidateQueue();
          setIsConnected(true);
        } catch (e) {
          console.error("Error handling answer:", e);
        }
      } else if (data.type === "candidate") {
        if (data.candidate) {
          const rtcIceCandidate = new RTCIceCandidate(data.candidate);
          if (pc.current && pc.current.remoteDescription) {
            pc.current.addIceCandidate(rtcIceCandidate).catch(e => console.error("Error adding ice candidate:", e));
          } else {
            iceCandidateQueue.current.push(rtcIceCandidate);
          }
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
      if (ws.current) {
        ws.current.close();
      }
      if (pc.current) {
        pc.current.close();
      }
      iceCandidateQueue.current = [];
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
    const configuration = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' }
      ]
    };
    pc.current = new RTCPeerConnection(configuration);

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

    // Notify the signaling server that we are ready to be paired
    ws.current?.send(JSON.stringify({ type: "ready" }));

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
      <div className="min-h-[calc(100vh-80px)] w-full relative bg-muted/20">
        <div className="relative z-10 flex items-center justify-center p-4 lg:p-8 h-full">
          <div className="w-full max-w-7xl mx-auto">
            <div className="bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden h-[85vh]">
              <div className="flex flex-col lg:flex-row h-full">
                {/* Video Section */}
                <div className="relative flex-1 bg-zinc-950 flex flex-col items-center justify-center border-r border-border">
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Connection Status Overlay */}
                  {localVideoRef.current == null ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm z-30">
                      <div className="text-center px-4">
                        <div className="mb-4">
                          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                        </div>
                        <p className="text-white text-base sm:text-lg font-medium">
                          Please wait a moment while we connect you.
                        </p>
                        <p className="text-zinc-400 mt-2 text-sm">The server is waking up...</p>
                      </div>
                    </div>
                  ) : (
                    isConnecting &&
                    !isConnected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm z-30">
                        <div className="text-center px-4">
                          <div className="mb-4">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                          </div>
                          <p className="text-white text-base sm:text-lg font-medium">
                            Searching for a partner to connect you with...
                          </p>
                          <p className="text-zinc-400 mt-2 text-sm">Please wait</p>
                        </div>
                      </div>
                    )
                  )}

                  {/* Local Video (Picture-in-Picture) */}
                  <div className="absolute bottom-6 right-6 w-32 h-44 sm:w-40 sm:h-56 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-xl z-20">
                    <video
                      ref={localVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    {!isVideoOn && (
                      <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">👤</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Control Buttons */}
                  <div className="absolute bottom-16 sm:bottom-4 left-4 flex space-x-2 sm:space-x-3 z-40">
                    <button
                      onClick={toggleMute}
                      className={`p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${isMuted
                        ? 'bg-destructive border-transparent text-destructive-foreground hover:bg-destructive/90'
                        : 'bg-zinc-800 border border-zinc-700 text-zinc-100 hover:bg-zinc-700'
                        }`}
                      aria-label="Toggle Mute"
                    >
                      <MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                      onClick={toggleVideo}
                      className={`p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md ${!isVideoOn
                        ? 'bg-destructive border-transparent text-destructive-foreground hover:bg-destructive/90'
                        : 'bg-zinc-800 border border-zinc-700 text-zinc-100 hover:bg-zinc-700'
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
                        setToastMessage("The call has been ended.");
                        setShowToast(true);
                        setTimeout(() => {
                          setShowToast(false);
                          endCall();
                        }, 2000);
                      }}
                      className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all shadow-md hover:scale-105"
                      aria-label="End Call"
                    >
                      <PhoneMissedCallIcon className="w-6 h-6" />
                    </button>

                    {/* Chat Toggle Button for Mobile */}
                    <button
                      onClick={() => setShowChat(!showChat)}
                      className="lg:hidden p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                      aria-label="Toggle Chat"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Chat Section */}
                <div className={`w-full lg:w-96 bg-card flex flex-col h-[30vh] lg:h-full
                  ${showChat ? 'block' : 'hidden'} lg:flex`}>
                  <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
                    <h3 className="font-semibold text-lg">In-Call Messages</h3>
                    <button
                      onClick={() => setShowChat(false)}
                      className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 bg-card">
                    {localVideoRef.current == null || (isConnecting && !isConnected) ? (
                      <div className="text-center text-muted-foreground py-8">
                        <p className="text-sm">Chat will be available once connected.</p>
                      </div>
                    ) : null}

                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`max-w-[85%] break-words ${msg.sender === currentUser ? 'ml-auto' : 'mr-auto'
                          }`}
                      >
                        <div
                          className={`p-3 rounded-2xl ${msg.sender === currentUser
                            ? 'bg-primary text-primary-foreground rounded-br-sm'
                            : 'bg-muted text-foreground rounded-bl-sm border border-border'
                            }`}
                        >
                          {msg.text && <p className="text-sm leading-relaxed">{msg.text}</p>}
                          {msg.image && (
                            <img
                              src={msg.image}
                              alt="Sent image"
                              className="max-w-full h-auto rounded-lg mt-1"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-border bg-card">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-background text-foreground px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
                        placeholder="Type a message..."
                      />
                      <button
                        onClick={handleSendMessage}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
                      >
                        Send
                      </button>
                    </div>

                    <div className="mt-3">
                      <label className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors text-sm font-medium">
                        <PaperClipIcon className="w-5 h-5" />
                        <span>Share Image</span>
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
      {
        showToast && (
          <div className="fixed top-4 right-4 z-50">
            <div className="bg-card text-card-foreground rounded-lg border shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{Toast}</span>
                <button
                  onClick={() => setShowToast(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default VideoCall;