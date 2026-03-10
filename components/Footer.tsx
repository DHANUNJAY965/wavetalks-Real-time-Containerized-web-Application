"use client";
import React from 'react';
import { MailIcon } from '@heroicons/react/solid';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t py-8 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Logo and brand */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight" id="footer">
                Wave<span className="text-primary">Talks</span>
              </div>
            </div>

            {/* Social links - Mobile optimized */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Email link - Mobile first */}
              <a
                href="mailto:contactwavetalks@gmail.com"
                className="group flex items-center justify-center space-x-2 bg-muted/50 rounded-full px-4 py-2 border hover:bg-muted transition-all duration-300 w-full sm:w-auto min-w-0"
              >
                <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200 flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-foreground text-xs sm:text-sm font-medium truncate">
                  contactwavetalks@gmail.com
                </span>
              </a>

              {/* Social icons container */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <a
                  href="https://www.linkedin.com/in/dhanunjay-burada-908494241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 sm:p-3 bg-muted/50 rounded-full border hover:bg-muted transition-all duration-300 touch-manipulation"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </a>

                <a
                  href="https://x.com/DhanunjayInCode?t=z5H_V61FG7Uq0vECLMllTA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 sm:p-3 bg-muted/50 rounded-full border hover:bg-muted transition-all duration-300 touch-manipulation"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation links - Mobile responsive */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
            <a
              href="#Call"
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 w-full sm:w-auto text-center font-medium"
            >
              Call Stranger
            </a>

            <div className="w-full sm:w-px h-px sm:h-6 bg-border sm:block"></div>

            <a
              href="/about"
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 w-full sm:w-auto text-center font-medium"
            >
              About Us
            </a>
          </div>

          {/* Copyright - Mobile optimized */}
          <div className="text-center w-full">
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">&copy; {new Date().getFullYear()} WaveTalks. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-muted-foreground text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <span className="text-red-500 text-base sm:text-lg">❤️</span>
                <span>by</span>
              </div>
              <a
                href="https://dhanu-portfolio-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline transition-all duration-300 touch-manipulation"
              >
                Dhanunjay
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;