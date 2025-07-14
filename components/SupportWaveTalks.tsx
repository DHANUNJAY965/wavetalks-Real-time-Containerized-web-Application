"use client";
import React from 'react';

const SupportWaveTalks: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 p-8 max-w-6xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8" id="Support">
            Support{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Wave
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent animate-pulse">
              Talks
            </span>
          </h2>
        </div>

        {/* Support message */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl md:text-2xl font-medium flex items-center justify-center gap-3">
              Dear{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                WaveTalks Community
              </span>
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Your Support is Our Lifeblood</h3>
                    <p className="text-gray-300">
                      We are incredibly grateful for your contributions. Your involvement is vital in enhancing and maintaining our platform.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">New Features & Growth</h3>
                    <p className="text-gray-300">
                      Help us introduce new features, ensure a seamless experience, and support ongoing operations and infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Deep Appreciation</h3>
                    <p className="text-gray-300">
                      We deeply appreciate your commitment to our success. Every form of support, big or small, contributes to our continued growth.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Part of the Journey</h3>
                    <p className="text-gray-300">
                      Thank you for being an essential part of the WaveTalks journey! Together, we&apos;re building something amazing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
          <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a
              href="https://buymeacoffee.com/dhanunjayworks"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-black text-xl">Buy me a coffee</h3>
                    <p className="text-white/80 text-sm">Support WaveTalks development</p>
                  </div>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          
          <p className="text-gray-400 text-sm max-w-md">
            Your support helps us maintain servers, add new features, and keep WaveTalks free for everyone! 🌟
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-10 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-60" style={{animationDelay: '3s'}}></div>
      </div>
    </div>
  );
};

export default SupportWaveTalks;