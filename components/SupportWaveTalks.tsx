"use client";
import React from 'react';
import Image from 'next/image';
const SupportWaveTalks: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8 space-y-6">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6" id='Support'>Support <span className="text-yellow-500">Wave</span>
      <span className="text-green-500">Talks</span></h2>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center leading-relaxed max-w-3xl">
        Dear WaveTalks Community,
        <br />
        <br />
        Your support is the lifeblood of WaveTalks. We are incredibly grateful for your contributions. Your involvement is vital in enhancing and maintaining our platform, helping us introduce new features, ensuring a seamless and enjoyable experience, and supporting ongoing operations and infrastructure.
        <br />
        <br />
        We deeply appreciate your commitment to our success. Every form of support, big or small, contributes to our continued growth and sustainability. Thank you for being an essential part of the WaveTalks journey!
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
  );
};

export default SupportWaveTalks;
