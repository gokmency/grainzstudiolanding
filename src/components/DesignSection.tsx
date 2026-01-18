
import { motion } from "framer-motion";
import { Box, Layers, PenTool, Printer } from "lucide-react";
import BentoGrid from "./BentoGrid";

const DesignSection = () => {
  const projects = [
    {
      title: "Ergonomic Smart Chair",
      description: "Industrial design for a next-gen office chair with sensor integration.",
      theme: "design" as const,
      tags: ["Industrial Design", "Ergonomics", "CMF"],
    },
    {
      title: "Medical Device Housing",
      description: "Injection molding ready casing for a portable ECG monitor.",
      theme: "design" as const,
      tags: ["SolidWorks", "Prototyping", "Medical"],
    },
    {
      title: "Consumer Tech Packaging",
      description: "Sustainable yet premium unboxing experience for audio gear.",
      theme: "design" as const,
      tags: ["Packaging", "Sustainability", "Branding"],
    },
  ];

  return (
    <section
      id="design"
      className="relative min-h-screen bg-grainz-design-base py-20 overflow-hidden"
    >
      {/* Background Decor - Clay / Wireframe */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Abstract Clay Blobs */}
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-white to-gray-200 rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-40 blur-3xl" />

        {/* Wireframe Grid */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "60px 60px"
            }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-right md:text-left" // Align right on mobile for variety, switch on desktop maybe? Stick to left for consistency.
        >
          <span className="font-mono text-grainz-design-accent tracking-widest uppercase text-sm mb-4 block">
            // 02. Design
          </span>
          <h2 className="text-4xl md:text-6xl font-clash font-bold text-grainz-black mb-6">
            Crafting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-grainz-design-accent to-blue-500">Tangible</span>.
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg">
            We bridge the gap between digital concepts and physical reality. From ergonomic product design to high-fidelity 3D rendering.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            className="p-8 rounded-2xl border border-black/5 bg-white/50 backdrop-blur-sm hover:border-grainz-design-accent/30 hover:shadow-lg transition-all group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-lg bg-grainz-design-accent/10 flex items-center justify-center text-grainz-design-accent mb-6 group-hover:rotate-12 transition-transform">
              <Box size={24} />
            </div>
            <h3 className="text-2xl font-clash font-semibold text-grainz-black mb-4">Industrial Design</h3>
            <p className="text-gray-600 mb-6">
              Designing physical products that are both functional and beautiful. We consider ergonomics, manufacturing, and aesthetics.
            </p>
            <ul className="space-y-2 font-mono text-sm text-gray-500">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-grainz-design-accent rounded-full"/> Product Aesthetics</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-grainz-design-accent rounded-full"/> Ergonomics</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-grainz-design-accent rounded-full"/> DFM (Design for Mfg)</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-black/5 bg-white/50 backdrop-blur-sm hover:border-grainz-design-accent/30 hover:shadow-lg transition-all group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-grainz-design-accent/10 flex items-center justify-center text-grainz-design-accent mb-6 group-hover:rotate-12 transition-transform">
              <Printer size={24} />
            </div>
            <h3 className="text-2xl font-clash font-semibold text-grainz-black mb-4">3D Tech & Prototyping</h3>
            <p className="text-gray-600 mb-6">
              Visualizing the unseen. High-end rendering, 3D printing, and rapid physical prototyping to validate concepts.
            </p>
             <ul className="space-y-2 font-mono text-sm text-gray-500">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-grainz-design-accent rounded-full"/> 3D Modeling (CAD)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-grainz-design-accent rounded-full"/> Photorealistic Rendering</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-grainz-design-accent rounded-full"/> 3D Printing</li>
            </ul>
          </motion.div>
        </div>

        {/* Featured Projects Bento Grid */}
        <div className="mb-8">
           <h3 className="text-xl font-mono text-grainz-black mb-8 border-b border-black/10 pb-4">Selected Works</h3>
           <BentoGrid items={projects} />
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
