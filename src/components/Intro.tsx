
import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './ui/InfiniteMarquee';

const Intro = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
              Who We Are
            </span>
          </motion.div>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Structuring the Intangible.
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="text-gray-500">We operate at the intersection of Industrial Precision and Digital Fluidity.</span>
            </motion.div>
          </div>
        </h2>

        <div className="overflow-hidden mb-16">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
              We don't just build websites; we construct Kinetic Interfaces and Digital Craftsmanship.
              GRAINZ STUDIO fuses structural web design with spatial computing to create products that feel weighty, premium, and visceral.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full relative z-0 opacity-50">
        <InfiniteMovingCards
            items={[
                { title: "Industrial Design" },
                { title: "Digital Craftsmanship" },
                { title: "Kinetic Interfaces" },
                { title: "Structural Web Design" },
                { title: "Spatial Computing" },
                { title: "3D Visualization" },
            ]}
            direction="right"
            speed="slow"
        />
      </div>
    </section>
  );
};

export default Intro;
