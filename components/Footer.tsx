"use client";
import React from 'react';
import { MailIcon } from '@heroicons/react/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and brand */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              
              <div className="text-4xl font-black" id="footer">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Wave</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Talks</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:contactwavetalks@gmail.com" 
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <MailIcon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                <span className="text-gray-300 group-hover:text-white text-sm font-medium">contactwavetalks@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/dhanunjay-burada-908494241" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-200" />
              </a>
              
              <a 
                href="https://x.com/DhanunjayInCode?t=z5H_V61FG7Uq0vECLMllTA&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="h-5 w-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="flex items-center space-x-8">
            <a 
              href="#Call" 
              className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Call Stranger</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <div className="w-px h-6 bg-gray-600"></div>
            
            <a 
              href="#" 
              className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>About Us</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">&copy; 2024 WaveTalks. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse text-lg">❤️</span>
              <span>by</span>
              
              <a 
                href="https://dhanu-portfolio-app.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
              >
               Dhanunjay
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-500 rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '3s'}}></div>
      </div>
    </footer>
  );
};

export default Footer;