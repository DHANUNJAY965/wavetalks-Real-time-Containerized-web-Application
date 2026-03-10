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
      <div className="flex flex-col min-h-screen relative overflow-hidden bg-background text-foreground">
        {/* Subtle grid background for modern feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {!isConnected ? (
          <main className="flex-grow flex flex-col items-center justify-center text-center p-4 relative z-10">
            {/* Main heading with enhanced styling */}
            <div className="mb-8 space-y-4 pt-16">
              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
                Welcome to{" "}
                <span className="text-primary">
                  WaveTalks
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Experience seamless video calls with high-quality audio and crystal-clear video. Connect with anyone, anywhere in the world instantly.
              </p>
              <div id="Call"></div>
            </div>
            {/* Enhanced CTA button */}
            <div className="relative group mt-8">
              <button
                onClick={handleConnect}
                className="bg-primary text-primary-foreground hover:bg-primary/90 py-4 px-10 rounded-md font-bold text-lg transition-colors shadow-md inline-flex items-center space-x-2"
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
            <div className="mt-8">
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Click the button above to connect with a stranger instantly
              </p>
            </div>

            {/* Feature highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full pb-16">
              <div className="bg-card text-card-foreground border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4 p-3 bg-secondary rounded-full w-max mx-auto md:mx-0">🎥</div>
                <h3 className="font-semibold text-lg mb-2">
                  HD Video Quality
                </h3>
                <p className="text-muted-foreground text-sm">
                  Crystal clear video calls with adaptive bandwidth management
                </p>
              </div>
              <div className="bg-card text-card-foreground border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4 p-3 bg-secondary rounded-full w-max mx-auto md:mx-0">🎧</div>
                <h3 className="font-semibold text-lg mb-2">
                  Premium Audio
                </h3>
                <p className="text-muted-foreground text-sm">
                  Smart noise-canceling technology for uninterrupted conversations
                </p>
              </div>
              <div className="bg-card text-card-foreground border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4 p-3 bg-secondary rounded-full w-max mx-auto md:mx-0">💬</div>
                <h3 className="font-semibold text-lg mb-2">
                  Real-time Chat
                </h3>
                <p className="text-muted-foreground text-sm">
                  Instant messaging built directly into the video interface
                </p>
              </div>
            </div>
          </main >
        ) : (
          <div className="flex items-center justify-center relative z-10">
            <VideoCall onEndCall={handleEndCall} />
          </div>
        )}
      </div >
      <SupportWaveTalks />
      <InfoPage />
    </>
  );
};

export default Home;
