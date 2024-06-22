"use client";
import React, { useState } from 'react';
import VideoCall from '@/components/VideoCall';
import SupportWaveTalks from '@/components/SupportWaveTalks';
import InfoPage from '@/components/InfoPage';

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      
        {!isConnected ? (<main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to <span className="text-yellow-500">Wave</span>
        <span className="text-green-500">Talks</span></h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Seamless video calls with high-quality audio and video along with chatting. Connect with anyone, anywhere.
        </p>
          <button
            onClick={handleConnect}
            id='Call'
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Start a Call
          </button>
          <p className="text-lg md:text-xl text-gray-600 mb-8 py-3 px-6">
          Click on the Call button to Connect to a Stranger
        </p>
          </main>
        ) : (
          <div className="flex items-center justify-center">
            <VideoCall onEndCall={handleEndCall} />
          </div>
        )}
    </div>
      <SupportWaveTalks/>
      <InfoPage/>
    </>
    
  );
};

export default Home;
