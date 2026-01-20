import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          lenis.scrollTo(element);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 flex items-center gap-8 shadow-2xl">
          <a href="#" className="text-lg font-bold tracking-tight">GRAINZ</a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <a 
            href="#contact"
            className="hidden md:inline-flex px-4 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors"
          >
            Let's Talk
          </a>
        </nav>
      </div>

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
