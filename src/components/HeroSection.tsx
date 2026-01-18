
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Code, PenTool } from "lucide-react";
import CustomCursor from "./CustomCursor";

const HeroSection = () => {
  const [hoveredSide, setHoveredSide] = useState<"dev" | "design" | null>(null);

  // Animation variants
  const leftVariant = {
    initial: { width: "50%" },
    hover: { width: "70%" },
    shrink: { width: "30%" },
  };

  const rightVariant = {
    initial: { width: "50%" },
    hover: { width: "70%" },
    shrink: { width: "30%" },
  };

  const contentVariant = {
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
    hidden: { opacity: 0.3, filter: "blur(4px)", transition: { duration: 0.4 } },
  };

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black">
      <CustomCursor hoveredSection={hoveredSide} />

      {/* Development Side (Left) */}
      <motion.div
        className="relative h-1/2 md:h-full flex flex-col justify-center items-center overflow-hidden border-r border-white/10"
        initial="initial"
        animate={
          hoveredSide === "dev"
            ? "hover"
            : hoveredSide === "design"
            ? "shrink"
            : "initial"
        }
        variants={leftVariant}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onMouseEnter={() => setHoveredSide("dev")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => {
           const element = document.getElementById("development");
           if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {/* Background Visuals - Matrix/Code Style */}
        <div className="absolute inset-0 bg-grainz-dev-base z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-grainz-dev-dim to-transparent opacity-40" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(0, 255, 148, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 148, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        {/* Content */}
        <motion.div
          className="z-10 text-center px-4"
          animate={hoveredSide === "design" ? "hidden" : "visible"}
          variants={contentVariant}
        >
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-grainz-dev-accent/10 border border-grainz-dev-accent/30 text-grainz-dev-accent">
              <Code size={32} />
            </div>
          </div>
          <h2 className="text-sm md:text-base font-mono text-grainz-dev-accent mb-2 tracking-widest uppercase">
            The Engineer
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold text-white mb-4">
            Build & Scale
          </h1>
          <p className="max-w-md mx-auto text-gray-400 font-sans text-sm md:text-base hidden md:block">
            Robust architectures, clean code, and scalable solutions for the digital age.
          </p>

          <motion.div
            className="mt-8 hidden md:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <div className="inline-flex items-center gap-2 text-grainz-dev-accent font-mono text-xs uppercase tracking-widest border-b border-grainz-dev-accent/50 pb-1 cursor-pointer">
               Explore Development
             </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Design Side (Right) */}
      <motion.div
        className="relative h-1/2 md:h-full flex flex-col justify-center items-center overflow-hidden"
        initial="initial"
        animate={
          hoveredSide === "design"
            ? "hover"
            : hoveredSide === "dev"
            ? "shrink"
            : "initial"
        }
        variants={rightVariant}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onMouseEnter={() => setHoveredSide("design")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => {
           const element = document.getElementById("design");
           if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {/* Background Visuals - Clay/Clean Style */}
        <div className="absolute inset-0 bg-grainz-design-base z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-grainz-design-dim to-transparent opacity-60" />
           {/* Abstract shapes simulating 3D */}
           <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-white to-gray-200 rounded-full opacity-40 blur-3xl" />
           <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-100 to-white rounded-full opacity-40 blur-3xl" />
        </div>

        {/* Content */}
        <motion.div
          className="z-10 text-center px-4"
          animate={hoveredSide === "dev" ? "hidden" : "visible"}
          variants={contentVariant}
        >
          <div className="mb-6 flex justify-center">
             <div className="p-4 rounded-full bg-white shadow-lg text-grainz-design-accent">
              <PenTool size={32} />
            </div>
          </div>
          <h2 className="text-sm md:text-base font-mono text-grainz-design-accent mb-2 tracking-widest uppercase">
            The Designer
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold text-grainz-design-text mb-4">
            Form & Function
          </h1>
          <p className="max-w-md mx-auto text-gray-600 font-sans text-sm md:text-base hidden md:block">
            Aesthetics meets ergonomics. Crafting intuitive experiences and beautiful interfaces.
          </p>

          <motion.div
            className="mt-8 hidden md:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <div className="inline-flex items-center gap-2 text-grainz-design-accent font-mono text-xs uppercase tracking-widest border-b border-grainz-design-accent/50 pb-1 cursor-pointer">
               Explore Design
             </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/50 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="animate-bounce" size={16} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
