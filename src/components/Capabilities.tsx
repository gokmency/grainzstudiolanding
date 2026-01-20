
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { Box, Code, Layers, Monitor, PenTool } from 'lucide-react';

const capabilities = [
  {
    title: 'Industrial Design',
    description: '3D Modeling, Furniture Design, Product Visualization. We translate physical concepts into digital assets.',
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
    icon: <Box className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Web Design',
    description: 'High-Performance Frontends, Creative Development. Building kinetic interfaces for the modern web.',
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
    icon: <Monitor className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Interactive 3D',
    description: 'Spatial Computing and WebGL experiences that push the boundaries of the browser.',
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
    icon: <Layers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Creative Strategy',
    description: 'Identity Systems and Verbal Identity that give your business a distinct structural voice.',
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
    icon: <PenTool className="h-4 w-4 text-neutral-500" />,
  },
];

const Capabilities = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 text-white px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-zinc-800 pb-8"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
            Services
          </span>
        </motion.div>

        <BentoGrid className="max-w-7xl mx-auto">
          {capabilities.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Capabilities;
