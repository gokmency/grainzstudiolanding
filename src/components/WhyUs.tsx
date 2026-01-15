
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Global Standards',
    description: 'We adhere to international design standards, ensuring your product competes on a global stage.'
  },
  {
    title: 'Business First',
    description: 'We don’t just make things look good. We build tools that drive revenue, retention, and growth.'
  },
  {
    title: 'Integrated Team',
    description: 'Designers who code, developers who design. A seamless workflow that eliminates handoff friction.'
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-black text-white px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-8">
              Why GRAINZ
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
              We build brands that define the future.
            </h2>
          </motion.div>

          <div className="space-y-12 lg:pt-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <h3 className="text-xl font-medium mb-3 text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
