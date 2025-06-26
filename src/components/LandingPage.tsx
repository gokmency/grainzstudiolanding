
import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
        <nav className="flex items-center justify-between w-full">
          {/* Brand */}
          <div className="font-libre-caslon text-white text-xl">
            Mirada®
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="font-manrope text-sm text-white hover:opacity-70 transition-opacity">
              Watch
            </a>
            <a href="#" className="font-manrope text-sm text-white hover:opacity-70 transition-opacity">
              Journal
            </a>
            <a href="#" className="font-manrope text-sm text-white hover:opacity-70 transition-opacity">
              About
            </a>
          </div>
          
          {/* Right Button */}
          <button className="font-manrope text-sm text-white px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
            Reach Out
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="flex items-center min-h-screen">
        <div className="w-full max-w-none pl-[10%] pr-8">
          {/* Tagline */}
          <div className="mt-32 mb-4">
            <p className="font-manrope text-sm text-white uppercase tracking-wider-custom">
              Make them remember it.
            </p>
          </div>
          
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="font-libre-caslon font-light text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
              Look once.
              <br />
              They won't forget it.
            </h1>
          </div>
          
          {/* Subparagraph */}
          <div className="max-w-[600px]">
            <p className="font-manrope text-sm text-white/85 leading-relaxed">
              They don't just see it, they feel it. Every detail is designed to leave an impression. In the mood, in the message, and in the memory it creates.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Right Contact Links */}
      <div className="fixed bottom-6 right-8 z-40">
        <div className="text-right space-y-3">
          <div>
            <a href="mailto:hello@mirada.co" className="font-manrope text-base text-white hover:opacity-70 transition-opacity block">
              Email
            </a>
          </div>
          <div>
            <a href="#contact" className="font-manrope text-base text-white hover:opacity-70 transition-opacity block">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
