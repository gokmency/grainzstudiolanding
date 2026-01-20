
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // TODO: Replace with valid poster URL
          style={{ backgroundColor: 'black' }}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background video */}
          <source src="/dunethemebg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mix-blend-difference text-white">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 max-w-6xl">
              Structuring the Intangible.<br />Where Industrial Precision meets Digital Fluidity.
            </h1>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 font-light uppercase tracking-widest">
              GRAINZ STUDIO. Kinetic Interfaces. Digital Craftsmanship. Structural Web Design.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Start a project</span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
