"use client";
import React from 'react';

const SupportWaveTalks: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto text-center space-y-8 mt-12">
        {/* Main heading */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 tracking-tight" id="Support">
            Support <span className="text-primary">WaveTalks</span>
          </h2>
        </div>

        {/* Support message */}
        <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 border shadow-sm">
          <div className="space-y-8 leading-relaxed">
            <p className="text-xl md:text-2xl font-medium flex items-center justify-center gap-3">
              Dear <span className="text-primary font-bold">WaveTalks Community</span>
              <span className="text-yellow-500 text-2xl">⚡</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💝</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Lifeblood</h3>
                    <p className="text-muted-foreground text-sm">
                      We are incredibly grateful for your contributions. Your involvement is vital in enhancing and maintaining our platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">New Features</h3>
                    <p className="text-muted-foreground text-sm">
                      Help us introduce new features, ensure a seamless experience, and support ongoing operations and infrastructure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🙏</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Deep Appreciation</h3>
                    <p className="text-muted-foreground text-sm">
                      We deeply appreciate your commitment to our success. Every form of support contributes to our continued growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Journey</h3>
                    <p className="text-muted-foreground text-sm">
                      Thank you for being an essential part of the WaveTalks journey! Together, we&apos;re building something amazing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center space-y-6 pt-8">
          <a
            href="https://buymeacoffee.com/dhanunjayworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-primary text-primary-foreground rounded-xl p-6 shadow-md transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-4 border">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">☕</span>
              </div>
              <div className="text-left pr-4">
                <h3 className="font-black text-xl">Buy me a coffee</h3>
                <p className="opacity-90 text-sm">Support WaveTalks development</p>
              </div>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>

          <p className="text-muted-foreground text-sm max-w-md">
            Your support helps us maintain servers, add new features, and keep WaveTalks free for everyone! 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportWaveTalks;