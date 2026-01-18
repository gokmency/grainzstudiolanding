
import { useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DevelopmentSection from "./DevelopmentSection";
import DesignSection from "./DesignSection";
import Footer from "./Footer"; // Keeping original footer for now, might need update
// If CustomCursor is used globally in Hero, we might not need it here or pass it down.
// However, the CustomCursor component is designed to be placed once.
// But wait, the CustomCursor in Hero only activates there.
// The prompt asked for a custom cursor that changes shape or label depending on which side of the screen the user is hovering.
// My CustomCursor implementation currently takes props. It should probably handle global state or be smarter.
// Actually, looking at my CustomCursor implementation: it takes `hoveredSection` prop.
// This means it only works inside HeroSection where I used it.
// If we want it globally, we need a context or store.
// But the requirement specifically mentioned "depending on which side of the screen the user is hovering", which implies the split screen context.
// So keeping it in HeroSection is correct for that specific interaction.
// I will just assemble the page.

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll for anchor links - Enhanced
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href && anchor.href.includes('#')) {
        e.preventDefault();
        const id = anchor.href.split('#')[1];
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
    <div className="bg-black text-white overflow-x-hidden font-sans selection:bg-grainz-dev-accent selection:text-black">
      <Navbar />

      <main>
        <HeroSection />
        <DevelopmentSection />
        <DesignSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
