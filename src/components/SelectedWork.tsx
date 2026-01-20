
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Fintech Product Platform',
    category: 'Product Design / Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Luxury Fashion E-commerce',
    category: 'Web Design / Development',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop'
  },
  {
    title: 'SaaS Dashboard Redesign',
    category: 'UI/UX / System Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: 'Tech Brand Identity',
    category: 'Branding / Web Experience',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
  }
];

const getUnsplashUrl = (url: string, width: number) => {
  const u = new URL(url);
  u.searchParams.set('w', width.toString());
  return u.toString();
};

const generateSrcSet = (url: string) => {
  const widths = [640, 1024, 1500, 2070];
  return widths.map(w => `${getUnsplashUrl(url, w)} ${w}w`).join(', ');
};

interface Project {
  title: string;
  category: string;
  image: string;
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);
  const ySpring = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="group cursor-pointer perspective-1000"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: ySpring,
          rotateY: xSpring,
        }}
        className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-sm bg-zinc-900 mb-8 transform-gpu transition-all duration-200 ease-linear"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
        <motion.img
          src={project.image}
          srcSet={generateSrcSet(project.image)}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-zinc-800 pt-6">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold mb-2 text-white group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 font-mono text-sm">
            {project.category}
          </p>
        </div>
        <div className="mt-4 md:mt-0 overflow-hidden">
          <button className="inline-block transform translate-y-0 text-sm font-medium uppercase tracking-wider px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
            View Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 bg-black text-white px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 md:mb-0">
            Selected Work
          </span>
          <p className="text-gray-400 text-sm max-w-xs text-right hidden md:block">
            A curated selection of our recent digital partnerships.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
