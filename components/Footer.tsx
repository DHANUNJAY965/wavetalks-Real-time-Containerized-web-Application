"use client";
import React from 'react';
import { MailIcon } from '@heroicons/react/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-8 sm:py-12 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Logo and brand */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black" id="footer">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Wave</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Talks</span>
              </div>
            </div>
            
            {/* Social links - Mobile optimized */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Email link - Mobile first */}
              <a 
                href="mailto:contactwavetalks@gmail.com" 
                className="group flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-0"
              >
                <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-white text-xs sm:text-sm font-medium truncate">
                  contactwavetalks@gmail.com
                </span>
              </a>
              
              {/* Social icons container */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <a 
                  href="https://www.linkedin.com/in/dhanunjay-burada-908494241" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-2.5 sm:p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-200" />
                </a>
                
                <a 
                  href="https://x.com/DhanunjayInCode?t=z5H_V61FG7Uq0vECLMllTA&s=09" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-2.5 sm:p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 touch-manipulation"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation links - Mobile responsive */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
            <a 
              href="#Call" 
              className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center touch-manipulation"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">Call Stranger</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <div className="w-full sm:w-px h-px sm:h-6 bg-gray-600 sm:block"></div>
            
            <a 
              href="#" 
              className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center touch-manipulation"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base">About Us</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Copyright - Mobile optimized */}
          <div className="text-center w-full">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">&copy; 2024 WaveTalks. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-gray-400 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse text-base sm:text-lg">❤️</span>
                <span>by</span>
              </div>
              <a 
                href="https://dhanu-portfolio-app.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold hover:from-purple-300 hover:to-pink-300 transition-all duration-300 touch-manipulation"
              >
               Dhanunjay
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect - Performance optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 sm:top-10 left-4 sm:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse opacity-60 will-change-transform"></div>
        <div className="absolute top-16 sm:top-20 right-8 sm:right-20 w-1 h-1 bg-cyan-500 rounded-full animate-pulse opacity-80 will-change-transform" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-pink-500 rounded-full animate-pulse opacity-70 will-change-transform" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-8 sm:bottom-10 right-4 sm:right-10 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-60 will-change-transform" style={{animationDelay: '3s'}}></div>
      </div>
    </footer>
  );
};

export default Footer;