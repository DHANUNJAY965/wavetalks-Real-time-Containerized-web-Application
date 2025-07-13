"use client";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="relative group">
      {/* Background with gradient and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-800/50 to-cyan-900/20 backdrop-blur-sm rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Explore the World of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conversations
            </span>
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg md:text-xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">
              WaveTalks
            </span>
            , your destination for meaningful audio/video conversations with
            people from around the globe. Say goodbye to the ordinary and
            immerse yourself in the extraordinary world of connecting with
            strangers through the power of voice and video.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-sm">🌍</span>
                </div>
                Global Connections
              </h3>
              <p className="text-gray-300">
                At WaveTalks, we&apos;ve reimagined online interactions, focusing on
                the magic of audio/video connections. Connect with people from
                every corner of the world.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-sm">🎯</span>
                </div>
                Seamless Platform
              </h3>
              <p className="text-gray-300">
                We provide a seamless and user-friendly platform for anonymous
                voice and video chats. Whether you&apos;re seeking language exchange
                partners or new friendships.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🔒</span>
              </div>
              Privacy & Meaningful Interactions
            </h3>
            <p className="text-gray-300">
              WaveTalks is designed for those who value privacy and meaningful
              interactions. With audio/video involved, you can be yourself and
              connect on a deeper level. It&apos;s a space where you can practice
              languages, explore diverse cultures, or just have a great time
              chatting with fellow global citizens.
            </p>
          </div>

          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/20">
            <p className="text-lg text-white font-medium">
              Join us on{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">
                WaveTalks
              </span>{" "}
              today and rediscover the joy of spontaneous conversations.
            </p>
            <p className="text-cyan-400 text-xl font-bold mt-2">
              It&apos;s more than just a chat – it&apos;s an experience. ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommunicationGuidelines: React.FC = () => {
  const guidelines = [
    {
      icon: "🔞",
      text: "Be at least over 18 :)",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "👋",
      text: "Greet people politely",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🙋",
      text: "Introduce yourself (do not give out personal information)",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "😊",
      text: "Be friendly and approachable",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "👂",
      text: "Listen to people",
      color: "from-yellow-500 to-orange-500",
    },
    { icon: "💯", text: "Be genuine", color: "from-pink-500 to-rose-500" },
    { icon: "⚠️", text: "Use caution", color: "from-amber-500 to-yellow-500" },
    {
      icon: "💬",
      text: "Engage in meaningful conversations",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: "🤝",
      text: "Don't take it personally if others decline your call",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="relative group">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-800/50 to-blue-900/20 backdrop-blur-sm rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Communication{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Guidelines
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${guideline.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-sm">{guideline.icon}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {guideline.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning section */}
        <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 rounded-xl p-6 border border-red-500/30">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Important Warning</h3>
          </div>
          <p className="text-red-300 text-lg font-semibold leading-relaxed">
            Improper use of the service, including sexual statements, offensive,
            or violent behavior, is
            <span className="text-red-400 font-bold underline">
              {" "}
              a violation
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto py-16 px-4 lg:px-8 relative z-10">
        <div className="space-y-12">
          <AboutUs />
          <CommunicationGuidelines />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
