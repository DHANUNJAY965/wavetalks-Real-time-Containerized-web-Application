
"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  MicrophoneIcon,
  VideoCameraIcon,
  XCircleIcon,
  PhoneMissedCallIcon,
  PaperClipIcon,
} from "@heroicons/react/solid";

import axios from "axios";
interface VideoCallProps {
  onEndCall: () => void; // Callback to handle end call event
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
  const [isConnecting, setIsConnecting] = useState(false); // State to indicate if connecting to partner
  const [isConnected, setIsConnected] = useState(false); // State to indicate if connected to partner

  const currentUser = "me"; // Assuming "me" represents the current user. This can be dynamic based on your application.

  useEffect(() => {
    
    
    ws.current = new WebSocket("ws://localhost:3003");
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
        setIsConnected(true); // Connection established
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
        setMessages((prev : any) => [
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
        setIsConnecting(false); // Connection established, stop showing connecting message
        setIsConnected(true); // Indicate that we're connected to a partner
      }
    };

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    stream.getTracks().forEach((track) => {
      pc.current?.addTrack(track, stream);
    });

    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);
    ws.current?.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));

    setIsConnecting(true); // Indicate that we're attempting to connect
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
    setIsConnecting(false); // Reset connecting state
    setIsConnected(false); // Reset connected state
    onEndCall(); // Notify parent component to update state
  };

  const toggleMute = () => {
    const stream = localVideoRef.current?.srcObject as MediaStream;
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
    setIsMuted(!isMuted);
  };

  const handleKeyDown = (e:any) => {
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
        setMessages((prev : any) => [
          ...prev,
          { image: base64String, sender: currentUser },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="lg:m-20 flex flex-col md:flex-row items-center justify-center w-full md:w-[1200px] h-full md:h-[500px] p-4 md:p-10 rounded-md bg-gray-900">
      <div className="flex flex-col md:flex-row w-full h-full bg-gray-800 rounded-md overflow-hidden space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-shrink-0 w-full md:w-1/2 h-[300px] md:h-full bg-gray-700">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          
          {localVideoRef.current==null ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
              <p className="text-white text-center">
                Please Wait Server establishing the connection...
              </p>
            </div>
          ) : (
            isConnecting &&
            !isConnected && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
                <p className="text-white text-center">
                  Connecting to partner...
                </p>
              </div>
            )
          )}
          <div className="absolute bottom-4 right-4 bg-gray-700 rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <button
              onClick={toggleMute}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
              aria-label="Toggle Mute"
            >
              {isMuted ? (
                <MicrophoneIcon className="w-6 h-6 text-red-500" />
              ) : (
                <MicrophoneIcon className="w-6 h-6 text-white" />
              )}
            </button>
            <button
              onClick={toggleVideo}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
              aria-label="Toggle Video"
            >
              {isVideoOn ? (
                <VideoCameraIcon className="w-6 h-6 text-white" />
              ) : (
                <XCircleIcon className="w-6 h-6 text-red-500" />
              )}
            </button>
            <button
              onClick={endCall}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
              aria-label="End Call"
            >
              <PhoneMissedCallIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        <div className="relative flex-grow w-full  md:w-1/2 h-[300px] md:h-full p-4 bg-gray-800">
          <div className="flex flex-col space-y-2 overflow-y-auto h-full pb-24">
           
          {localVideoRef.current==null  ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
              <p className="text-white text-center">
                Please Wait Server establishing the connection...
              </p>
            </div>
          ) : (
            isConnecting &&
            !isConnected && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
                <p className="text-white text-center">
                  Connecting to partner...
                </p>
              </div>
            )
          )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md break-words max-w-full ${
                  msg.sender === currentUser
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-700 text-white self-start"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Sent image"
                    className="max-w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 flex space-x-2 bg-gray-800">
            {" "}
            {/* Adjusted p-2 and space-x-2 */}
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 p-2 rounded-l-md bg-gray-700 text-white w-10"
              placeholder="Type a message"
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-gray-600 text-white rounded-r-md"
            >
              Send
            </button>
            <label className="p-2 bg-gray-600 text-white rounded-md cursor-pointer">
              <PaperClipIcon className="w-6 h-6" />
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
  );
};

export default VideoCall;
