"use client";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 text-gray-900 rounded-md shadow-md mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center text-purple-900">
  Explore the World of Conversations with WaveTalks
</h2>

      <p className="mb-4 text-lg text-gray-700">
        Welcome to WaveTalks, your destination for meaningful audio conversations with people from around the globe. Say goodbye to the ordinary and immerse yourself in the extraordinary world of connecting with strangers through the power of voice.
      </p>
      <p className="mb-4 text-lg text-gray-700">
        At WaveTalks, we’ve reimagined online interactions, focusing solely on the magic of audio connections. We understand that sometimes you just want to talk to strangers, share stories, and discover new perspectives without the need for video cameras. That’s where we come in.
      </p>
      <p className="mb-4 text-lg text-gray-700">
        What sets WaveTalks apart? It’s simple – we provide a seamless and user-friendly platform for anonymous voice chats. Whether you’re seeking language exchange partners, looking to make new friends, or simply craving engaging conversations, WaveTalks is your go-to destination.
      </p>
      <p className="mb-4 text-lg text-gray-700">
        Why choose us? WaveTalks is designed for those who value privacy and meaningful interactions. With no cameras involved, you can be yourself and connect on a deeper level. It’s a space where you can practice languages, explore diverse cultures, or just have a great time chatting with fellow global citizens.
      </p>
      <p className="text-lg text-gray-700">
        Join us on WaveTalks today and rediscover the joy of spontaneous conversations. It’s more than just a chat – it’s an experience.
      </p>
    </div>
  );
};

const CommunicationGuidelines: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 text-gray-900 rounded-md shadow-md">
      <h2 className="text-4xl font-bold mb-4 text-center text-teal-900">Communication Guidelines</h2>
      <ul className="list-disc list-inside mb-4 text-lg text-gray-700">
        <li>Be at least over 18 :)</li>
        <li>Greet people politely</li>
        <li>Introduce yourself (do not give out personal information)</li>
        <li>Be friendly and approachable</li>
        <li>Listen To People</li>
        <li>Be genuine</li>
        <li>Use caution</li>
        <li>Engage in meaningful conversations</li>
        <li>Don&apos;t take it personally if others decline your call</li>
      </ul>
      <p className="text-red-500 text-lg font-semibold">
        Improper use of the service, including sexual statements, offensive, violent behavior, will result in an irrevocable ban.
      </p>
    </div>
  );
};

const InfoPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-20">
      <AboutUs />
      <CommunicationGuidelines />
    </div>
  );
};

export default InfoPage;
