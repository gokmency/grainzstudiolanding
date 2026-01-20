
import { motion } from 'framer-motion';

const steps = [
  {
    phase: '01',
    title: 'Discovery',
    description: 'We dive deep into your business, audience, and goals to uncover the core challenge.'
  },
  {
    phase: '02',
    title: 'Strategy',
    description: 'We define the roadmap, user experience, and technical approach to ensure scalability.'
  },
  {
    phase: '03',
    title: 'Design',
    description: 'We craft visual systems and interfaces that are beautiful, intuitive, and brand-aligned.'
  },
  {
    phase: '04',
    title: 'Development',
    description: 'We build robust, high-performance digital products using modern technologies.'
  },
  {
    phase: '05',
    title: 'Launch & Scale',
    description: 'We support your launch and help iterate based on real-world usage and data.'
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white px-6 md:px-12 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">How we build</h2>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-baseline border-b border-zinc-900 pb-12 last:border-0"
            >
              <span className="text-sm font-mono text-gray-600 w-24 mb-4 md:mb-0">
                {step.phase}
              </span>
              <div className="flex-1 md:grid md:grid-cols-2 gap-10">
                <h3 className="text-2xl font-medium mb-4 md:mb-0">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
