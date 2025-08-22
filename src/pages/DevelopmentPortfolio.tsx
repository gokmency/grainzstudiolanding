import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevelopmentPortfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
        <nav className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-manrope text-sm">Back</span>
          </Link>
          
          <div className="font-libre-caslon text-white text-xl">
            Mirada®️
          </div>
          
          <a href="mailto:hello@mirada.com">
            <button className="font-manrope text-sm text-white px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              Reach Out
            </button>
          </a>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-manrope text-sm text-white uppercase tracking-wider-custom mb-4">
              Development Portfolio
            </p>
            <h1 className="font-libre-caslon font-light text-6xl text-white leading-tight mb-6">
              Code That
              <br />
              Creates Impact.
            </h1>
            <p className="font-manrope text-sm text-white/85 max-w-[600px]">
              We build digital experiences that perform flawlessly. From responsive websites to complex applications, every line of code is written with precision and purpose.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden mb-4 group-hover:bg-white/10 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-manrope text-sm text-white/60">Project {i + 1}</span>
                  </div>
                </div>
                <h3 className="font-libre-caslon font-light text-xl text-white mb-2">
                  Development Project {i + 1}
                </h3>
                <p className="font-manrope text-sm text-white/70">
                  Web Development, Frontend & Backend
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevelopmentPortfolio;