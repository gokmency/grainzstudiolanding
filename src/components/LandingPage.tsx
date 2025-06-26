import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/dunethemebg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
        <nav className="flex items-center justify-between w-full">
          {/* Brand - GRAINZ Studio Logo */}
          <div className="flex items-center">
            <a href="https://grainz.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/Grainz Logobeyazpng-03 (1).png" 
                alt="Grainz Studio" 
                className="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="https://grainz.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-manrope text-sm text-white hover:opacity-70 transition-opacity">
              Portfolio
            </a>
            <a href="https://grainz.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-manrope text-sm text-white hover:opacity-70 transition-opacity">
              Services
            </a>
            <a href="https://grainz.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-manrope text-sm text-white hover:opacity-70 transition-opacity">
              About
            </a>
          </div>
          
          {/* Right Button */}
          <a href="https://grainz.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="font-manrope text-sm text-white px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              Start Project
            </button>
          </a>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-20 flex items-center min-h-screen">
        <div className="w-full max-w-none pl-[10%] pr-8">
          {/* Tagline */}
          <div className="mt-32 mb-4">
            <p className="font-manrope text-sm text-white uppercase tracking-wider-custom">
              Creative Excellence Delivered.
            </p>
          </div>
          
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="font-libre-caslon font-light text-6xl md:text-7xl lg:text-8xl text-white leading-tight">
              Ideas that
              <br />
              spark movements.
            </h1>
          </div>
          
          {/* Subparagraph */}
          <div className="max-w-[600px]">
            <p className="font-manrope text-sm text-white/85 leading-relaxed">
              We craft visual narratives that transcend ordinary. From brand identity to digital experiences, every project is designed to captivate, inspire, and drive results.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Right Contact Links */}
      <div className="fixed bottom-6 right-8 z-40">
        <div className="text-right space-y-3">
          <div>
            <a href="mailto:hello@grainzstudio.com" className="font-manrope text-base text-white hover:opacity-70 transition-opacity block">
              Email
            </a>
          </div>
          <div>
            <a href="https://grainz.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-manrope text-base text-white hover:opacity-70 transition-opacity block">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
