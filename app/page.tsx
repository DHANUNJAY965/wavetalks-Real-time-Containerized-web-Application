"use client";
import React, { useState } from "react";
import VideoCall from "@/components/VideoCall";
import SupportWaveTalks from "@/components/SupportWaveTalks";
import InfoPage from "@/components/InfoPage";

const Home: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleEndCall = () => {
    setIsConnected(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {!isConnected ? (
          <main className="flex-grow flex flex-col items-center justify-center text-center p-4 relative z-10">
            {/* Main heading with enhanced styling */}
            <div className="mb-8 space-y-4">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  Wave
                </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                  Talks
                </span>
              </h2>

              {/* Subtitle with glow effect */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience seamless video calls with{" "}
                <span className="text-cyan-400 font-semibold">
                  high-quality audio
                </span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">
                  crystal-clear video
                </span>
                .
                <br id="Call" />
                Connect with anyone, anywhere in the world.
              </p>
            </div>

            {/* Enhanced CTA button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button
                onClick={handleConnect}
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-12 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Start a Call</span>
                </span>
              </button>
            </div>

            {/* Instruction text with animation */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                🎯 Click the button above to connect with a stranger instantly
              </p>
            </div>

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  HD Video Quality
                </h3>
                <p className="text-gray-400 text-sm">
                  Crystal clear video calls with adaptive quality
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl mb-3">🎧</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Premium Audio
                </h3>
                <p className="text-gray-400 text-sm">
                  Noise-canceling technology for clear conversations
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Real-time Chat
                </h3>
                <p className="text-gray-400 text-sm">
                  Instant messaging alongside video calls
                </p>
              </div>
            </div>
          </main>
        ) : (
          <div className="flex items-center justify-center relative z-10">
            <VideoCall onEndCall={handleEndCall} />
          </div>
        )}
      </div>
      <SupportWaveTalks />
      <InfoPage />
    </>
  );
};

export default Home;
