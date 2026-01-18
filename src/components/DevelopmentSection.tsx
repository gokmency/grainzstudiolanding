
import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, BarChart } from "lucide-react";
import BentoGrid from "./BentoGrid";

const DevelopmentSection = () => {
  const projects = [
    {
      title: "Fintech Core Banking",
      description: "High-performance transaction processing engine handling 10k+ TPS.",
      theme: "dev" as const,
      tags: ["Node.js", "Rust", "Kafka"],
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization for predictive maintenance in manufacturing.",
      theme: "dev" as const,
      tags: ["React", "D3.js", "Python"],
    },
    {
      title: "Crypto Exchange MVP",
      description: "Zero to One launch of a secure decentralized exchange platform.",
      theme: "dev" as const,
      tags: ["Solidity", "Next.js", "Web3"],
    },
  ];

  return (
    <section
      id="development"
      className="relative min-h-screen bg-grainz-black py-20 overflow-hidden"
    >
      {/* Background Decor - Matrix Rain / Abstract Code */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-grainz-dev-accent to-transparent opacity-20" />
        <div className="absolute top-0 right-20 w-[1px] h-full bg-gradient-to-b from-transparent via-grainz-dev-accent to-transparent opacity-20 delay-700" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-grainz-dev-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-grainz-dev-accent tracking-widest uppercase text-sm mb-4 block">
            // 01. Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-clash font-bold text-white mb-6">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-grainz-dev-accent to-emerald-600">Future</span>.
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg">
            We don't just write code; we build engines that power businesses. From rapid MVP development to enterprise-grade scaling strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            className="p-8 rounded-2xl border border-white/10 bg-grainz-charcoal backdrop-blur-sm hover:border-grainz-dev-accent/50 transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-lg bg-grainz-dev-accent/10 flex items-center justify-center text-grainz-dev-accent mb-6 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-clash font-semibold text-white mb-4">Zero to One (MVP)</h3>
            <p className="text-gray-400 mb-6">
              Turn your idea into a functional product in weeks, not months. We focus on core value propositions to get you to market fast.
            </p>
            <ul className="space-y-2 font-mono text-sm text-gray-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-grainz-dev-accent rounded-full"/> Rapid Prototyping</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-grainz-dev-accent rounded-full"/> Scalable Architecture</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-grainz-dev-accent rounded-full"/> Cloud Infrastructure</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-white/10 bg-grainz-charcoal backdrop-blur-sm hover:border-grainz-dev-accent/50 transition-colors group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-grainz-dev-accent/10 flex items-center justify-center text-grainz-dev-accent mb-6 group-hover:scale-110 transition-transform">
              <BarChart size={24} />
            </div>
            <h3 className="text-2xl font-clash font-semibold text-white mb-4">Growth & Scale</h3>
            <p className="text-gray-400 mb-6">
              Data-driven engineering to handle massive user loads. We optimize performance, SEO, and backend efficiency.
            </p>
             <ul className="space-y-2 font-mono text-sm text-gray-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-grainz-dev-accent rounded-full"/> High Availability Systems</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-grainz-dev-accent rounded-full"/> Performance Optimization</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-grainz-dev-accent rounded-full"/> Data Analytics pipelines</li>
            </ul>
          </motion.div>
        </div>

        {/* Featured Projects Bento Grid */}
        <div className="mb-8">
           <h3 className="text-xl font-mono text-white mb-8 border-b border-white/10 pb-4">Latest Deployments</h3>
           <BentoGrid items={projects} />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
