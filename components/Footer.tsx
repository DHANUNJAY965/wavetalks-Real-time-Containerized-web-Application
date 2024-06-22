
"use client";
import React from 'react';
import { MailIcon } from '@heroicons/react/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-purple-200 shadow-md py-8 ">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <div className="text-3xl font-bold mb-2">
            <span className="text-yellow-500" id="footer">Wave</span>
            <span className="text-green-500">Talks</span>
          </div>
          <div className="flex space-x-2">
            <a href="mailto:contactwavetalks@gmail.com" className="flex items-center hover:text-gray-400 transition duration-300">
              <MailIcon className="h-6 w-6" />
              <span>contactwavetalks@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/dhanunjay-burada-908494241" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/DhanunjayInCode?t=z5H_V61FG7Uq0vECLMllTA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-center mb-4">
          <p>&copy; 2024 WaveTalks. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 text-center">
          <a href="#" className="hover:text-gray-400 transition duration-300">Call Stranger</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400 transition duration-300">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
