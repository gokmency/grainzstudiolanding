
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Have a project in mind?
        </h2>
        <p className="text-xl text-gray-400 mb-12 font-light">
          Let’s build something meaningful together.
        </p>

        <a
          href="mailto:hello@grainzstudio.com"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-medium text-xl overflow-hidden transition-transform hover:scale-105"
        >
          <span className="relative z-10">Start a conversation</span>
          <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </a>
      </motion.div>
    </section>
  );
};

export default Cta;
