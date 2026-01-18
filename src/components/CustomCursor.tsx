
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  hoveredSection: "dev" | "design" | null;
}

const CustomCursor = ({ hoveredSection }: CustomCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Hide cursor on touch devices or if no section is hovered (default pointer)
  // Actually, we want it visible mainly on the hero section when hovering sides
  if (!hoveredSection) return null;

  const isDev = hoveredSection === "dev";

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none hidden md:flex items-center justify-center"
      animate={{
        x: mousePosition.x - 40, // Center the 80px cursor
        y: mousePosition.y - 40,
        scale: 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm border transition-colors duration-300 ${
          isDev
            ? "bg-grainz-dev-accent/20 border-grainz-dev-accent text-grainz-dev-accent"
            : "bg-grainz-design-accent/20 border-grainz-design-accent text-grainz-design-accent"
        }`}
      >
        <span className="text-xs font-mono font-bold tracking-wider uppercase">
          {isDev ? "CODE" : "DESIGN"}
        </span>
      </div>
    </motion.div>
  );
};

export default CustomCursor;
