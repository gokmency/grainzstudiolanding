import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
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
          {/* Brand - Mirada */}
          <div className="flex items-center">
            <div className="font-libre-caslon text-white text-xl">
              Mirada®️
            </div>
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
          <a href="mailto:hello@mirada.com">
            <button className="font-manrope text-sm text-white px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              Reach Out
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
            <a href="mailto:hello@mirada.com" className="font-manrope text-base text-white hover:opacity-70 transition-opacity block">
              Email
            </a>
          </div>
          <div>
            <a href="mailto:hello@mirada.com" className="font-manrope text-base text-white hover:opacity-70 transition-opacity block">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio Section */}
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Design Portfolio */}
          <div className="group cursor-pointer" onClick={() => window.location.href = '/design-portfolio'}>
            <div className="relative overflow-hidden rounded-lg bg-white/5 aspect-[16/10] mb-6 group-hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-libre-caslon font-light text-4xl text-white mb-2">Design</h3>
                  <p className="font-manrope text-sm text-white/70 uppercase tracking-wider-custom">Visual Identity & Branding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Development Portfolio */}
          <div className="group cursor-pointer" onClick={() => window.location.href = '/development-portfolio'}>
            <div className="relative overflow-hidden rounded-lg bg-white/5 aspect-[16/10] mb-6 group-hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-libre-caslon font-light text-4xl text-white mb-2">Development</h3>
                  <p className="font-manrope text-sm text-white/70 uppercase tracking-wider-custom">Web Applications & Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Us Section */}
    <section className="relative bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">
          About Us
        </p>
        <h2 className="font-libre-caslon font-light text-5xl text-white leading-tight mb-8">
          We create moments
          <br />
          that matter.
        </h2>
        <p className="font-manrope text-base text-white/85 leading-relaxed max-w-2xl mx-auto">
          At Mirada, we believe that great design and development go hand in hand. We craft experiences that not only look beautiful but also function seamlessly. Every project is an opportunity to tell a story that resonates with your audience and drives meaningful results.
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">
            Team
          </p>
          <h2 className="font-libre-caslon font-light text-4xl text-white leading-tight">
            The minds behind
            <br />
            the magic.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square bg-white/5 rounded-full mb-6 mx-auto w-48 flex items-center justify-center">
                <span className="font-manrope text-sm text-white/60">Team Member {i + 1}</span>
              </div>
              <h3 className="font-libre-caslon font-light text-xl text-white mb-2">Team Member</h3>
              <p className="font-manrope text-sm text-white/70">Creative Director</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Clients Section */}
    <section className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">
            Clients
          </p>
          <h2 className="font-libre-caslon font-light text-4xl text-white leading-tight">
            Trusted by innovators
            <br />
            worldwide.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="font-manrope text-xs text-white/60">Client {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="relative bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-libre-caslon text-white text-2xl mb-4">
              Mirada®️
            </div>
            <p className="font-manrope text-sm text-white/70 leading-relaxed">
              Creating visual narratives that transcend ordinary. Every project designed to captivate, inspire, and drive results.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">Portfolio</h4>
              <ul className="space-y-2">
                <li><a href="/design-portfolio" className="font-manrope text-sm text-white/70 hover:text-white transition-colors">Design</a></li>
                <li><a href="/development-portfolio" className="font-manrope text-sm text-white/70 hover:text-white transition-colors">Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-manrope text-sm text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="font-manrope text-sm text-white/70 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="font-manrope text-sm text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">Get in Touch</h4>
            <p className="font-manrope text-sm text-white/70 mb-2">hello@mirada.com</p>
            <p className="font-manrope text-sm text-white/70">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-manrope text-xs text-white/50">© 2024 Mirada. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-manrope text-xs text-white/50 hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="font-manrope text-xs text-white/50 hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default LandingPage;
