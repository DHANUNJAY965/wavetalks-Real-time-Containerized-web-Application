"use client";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Wave
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
              Talks
            </span>
          </h1>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Dream of finding new friends? Need someone to talk to? Want to
              share your highs and lows with a complete stranger?
            </p>
            <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed">
              Welcome to WaveTalks, an innovative platform designed to connect
              you with people from all around the world through instant
              messaging, audio, and video calls.
            </p>
          </div>
        </div>

        {/* Why WaveTalks Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Why{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              WaveTalks?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-white font-bold text-xl mb-3">
                Seamless Communication
              </h3>
              <p className="text-gray-400">
                Engage in crystal-clear audio and video calls, along with
                instant messaging, ensuring a smooth and enjoyable experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-white font-bold text-xl mb-3">
                Instant Connections
              </h3>
              <p className="text-gray-400">
                Connect with strangers from all over the world instantly. No
                need for complicated setups or downloads.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-white font-bold text-xl mb-3">
                User-Friendly Interface
              </h3>
              <p className="text-gray-400">
                Our intuitive design ensures that you can navigate and enjoy all
                features effortlessly, regardless of your technical skills.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-white font-bold text-xl mb-3">
                Privacy and Security
              </h3>
              <p className="text-gray-400">
                All conversations are end-to-end encrypted, ensuring your
                privacy and security at all times.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-white font-bold text-xl mb-3">
                No Registration Required
              </h3>
              <p className="text-gray-400">
                Start chatting right away without the need for sign-ups or
                personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                WaveTalks Community
              </span>
            </h2>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                WaveTalks is more than just a communication platform; it&apos;s
                a community where you can share experiences, exchange ideas, and
                build meaningful connections with strangers.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Join hundreds of people every day and start conversations that
                could lead to lasting friendships.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
              Support Us
            </span>
          </h2>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Your support helps us improve and maintain the platform. Click the
              button below to buy us a coffee and show your support!
            </p>

            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-12 rounded-2xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="flex items-center space-x-2">
                  <span>☕</span>
                  <span>Buy us a Coffee</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
