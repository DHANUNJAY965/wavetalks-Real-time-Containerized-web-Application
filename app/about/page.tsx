"use client";
import React from "react";
import Image from "next/image";
const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-8 space-y-6">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">About WaveTalks</h2>
      <p className="text-xl md:text-2xl text-gray-800 mb-8 text-center leading-relaxed max-w-3xl">
        Dream of finding new friends? Need someone to talk to? Want to share your highs and lows with a complete stranger?
        Welcome to WaveTalks, an innovative platform designed to connect you with people from all around the world through instant messaging, audio, and video calls.
      </p>
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why WaveTalks?</h3>
      <ul className="list-disc text-lg md:text-xl text-gray-800 mb-8 space-y-4 max-w-3xl pl-6">
        <li>
          <span className="font-semibold">Seamless Communication:</span> Engage in crystal-clear audio and video calls, along with instant messaging, ensuring a smooth and enjoyable experience.
        </li>
        <li>
          <span className="font-semibold">Instant Connections:</span> Connect with strangers from all over the world instantly. No need for complicated setups or downloads.
        </li>
        <li>
          <span className="font-semibold">User-Friendly Interface:</span> Our intuitive design ensures that you can navigate and enjoy all features effortlessly, regardless of your technical skills.
        </li>
        <li>
          <span className="font-semibold">Privacy and Security:</span> All conversations are end-to-end encrypted, ensuring your privacy and security at all times.
        </li>
        <li>
          <span className="font-semibold">No Registration Required:</span> Start chatting right away without the need for sign-ups or personal information.
        </li>
      </ul>
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join the WaveTalks Community</h3>
      <p className="text-xl md:text-2xl text-gray-800 mb-8 text-center leading-relaxed max-w-3xl">
      WaveTalks is more than just a communication platform; it&apos;s a community where you can share experiences, exchange ideas, and build meaningful connections with strangers.
      Join hundreds of people every day and start conversations that could lead to lasting friendships.
      </p>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <h4 className="text-3xl md:text-4xl font-bold text-gray-900">Support Us</h4>
        <p className="text-lg md:text-xl text-gray-800 text-center max-w-xl">
          Your support helps us improve and maintain the platform. Click the button below to buy us a coffee and show your support!
        </p>
        <a
          href="https://buymeacoffee.com/dhanunjayworks"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/buymeacoffee.png"
            alt="Buy me a coffee"
            className="bg-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
