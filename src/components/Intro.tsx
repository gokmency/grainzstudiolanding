
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 mb-8 uppercase">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
            GRAINZ STUDIO is a full-service digital studio that designs and builds end-to-end digital experiences, from concept to launch.
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl">
            We are not just designers or developers. We are strategic partners who combine design, technology, and branding to create products that scale. No buzzwords, just results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
