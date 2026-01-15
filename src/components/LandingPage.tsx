import { useEffect } from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Capabilities from './Capabilities';
import SelectedWork from './SelectedWork';
import Process from './Process';
import WhyUs from './WhyUs';
import Cta from './Cta';
import Footer from './Footer';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
          <a href="#" className="text-xl font-bold tracking-tight">GRAINZ STUDIO</a>
          <div className="hidden md:flex gap-10">
            <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <a 
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Intro />
        <Capabilities />
        <SelectedWork />
        <Process />
        <WhyUs />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
