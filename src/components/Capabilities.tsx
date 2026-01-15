
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Design',
    description: 'UI/UX, Visual Design, Interaction Design, and Product Design that centers on user needs and business goals.'
  },
  {
    title: 'Development',
    description: 'Frontend & Backend engineering, Creative Coding, and Technical Architecture using modern stacks.'
  },
  {
    title: 'Brand',
    description: 'Identity Systems, Strategy, Verbal Identity, and Art Direction that give your business a distinct voice.'
  },
  {
    title: 'Digital Experiences',
    description: 'Immersive web experiences, Motion Design, and 3D integration that push the boundaries of the browser.'
  }
];

const Capabilities = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 text-white px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-zinc-800 pb-8"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
            Capabilities
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-300 transition-colors">
                {cap.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
