"use client";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
            About <span className="text-primary">WaveTalks</span>
          </h1>

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dream of finding new friends? Need someone to talk to? Want to
              share your highs and lows with a complete stranger?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
              Welcome to WaveTalks, an innovative platform designed to connect
              you with people from all around the world through instant
              messaging, audio, and video calls.
            </p>
          </div>
        </div>

        {/* Why WaveTalks Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-primary">WaveTalks?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card text-card-foreground rounded-xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                Seamless Communication
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Engage in crystal-clear audio and video calls, along with
                instant messaging, ensuring a smooth and enjoyable experience.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                Instant Connections
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect with strangers from all over the world instantly. No
                need for complicated setups or downloads.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                User-Friendly Interface
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our intuitive design ensures that you can navigate and enjoy all
                features effortlessly, regardless of your technical skills.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                Privacy and Security
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All conversations are end-to-end encrypted, ensuring your
                privacy and security at all times.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-md md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">
                No Registration Required
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Start chatting right away without the need for sign-ups or
                personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-24">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-16 border text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Join the <span className="text-primary">WaveTalks Community</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                WaveTalks is more than just a communication platform; it&apos;s
                a community where you can share experiences, exchange ideas, and
                build meaningful connections with strangers.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                Join hundreds of people every day and start conversations that
                could lead to lasting friendships.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">
            Support Us
          </h2>

          <div className="max-w-2xl mx-auto bg-card text-card-foreground rounded-2xl p-8 border shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Your support helps us improve and maintain the platform. Click the
              button below to buy us a coffee and show your support!
            </p>

            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-12 px-8 py-2 w-full sm:w-auto shadow-sm">
              <span className="mr-2 text-lg">☕</span>
              Buy us a Coffee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
