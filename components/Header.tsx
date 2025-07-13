"use client"
import { useState, useEffect } from 'react';
import { MenuIcon, UsersIcon } from '@heroicons/react/outline';
import { usePathname, useRouter } from 'next/navigation';
import axios from "axios";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeUsers, setActiveUsers] = useState<number>(0);
  const currentPage = usePathname();
  const router = useRouter();

  const handleClickOutside = (event: any) => {
    if (!event.target.closest('.header')) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await axios.get('https://wavetalks-server.onrender.com/activeusers');
        setActiveUsers(response.data.activeUsers);
        // setActiveUsers(42); // Mock data for demo
      } catch (error) {
        console.error('Error fetching active users:', error);
      }
    };

    fetchActiveUsers();
    const intervalId = setInterval(fetchActiveUsers, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-white/10 text-white py-4 px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center header sticky top-0 z-50">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center space-x-4">
          {/* Logo with enhanced styling */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Wave</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Talks</span>
            </h1>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            <div className="flex items-center space-x-1">
              <UsersIcon className="h-4 w-4 text-gray-300" />
              <span className="text-sm font-semibold text-gray-300">{activeUsers}</span>
              <span className="text-xs text-gray-400">online</span>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden ml-4">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <MenuIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`lg:flex lg:items-center ${showMenu ? 'block' : 'hidden'} w-full lg:w-auto mt-4 lg:mt-0`}>
        <div className="flex flex-col lg:flex-row lg:space-x-1 space-y-2 lg:space-y-0">
          <a 
            href="#Call" 
            className="group relative px-4 py-2 rounded-lg text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            onClick={(e: any) => {
              if (currentPage === "/about") {
                router.push('/');
              }
            }}
          >
            <span className="relative z-10 flex items-center justify-center lg:justify-start space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Video/Audio Chat</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="/about" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative px-4 py-2 rounded-lg text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center lg:justify-start space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About Us</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#footer" 
            className="group relative px-4 py-2 rounded-lg text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center lg:justify-start space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;