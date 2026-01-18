
import { motion } from "framer-motion";

interface BentoItem {
  title: string;
  description: string;
  className?: string;
  image?: string;
  tags?: string[];
  theme: "dev" | "design";
}

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid = ({ items }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
      {items.map((item, index) => {
        const isLarge = index === 0 || index === 3; // Make some items span 2 columns
        const themeClass =
          item.theme === "dev"
            ? "bg-grainz-charcoal border-white/10 text-white"
            : "bg-white border-black/5 text-black shadow-sm";
        const tagClass =
            item.theme === "dev"
            ? "bg-grainz-dev-accent/10 text-grainz-dev-accent border-grainz-dev-accent/20"
            : "bg-grainz-design-accent/10 text-grainz-design-accent border-grainz-design-accent/20";

        return (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-2xl border p-6 flex flex-col justify-between ${themeClass} ${
              isLarge ? "md:col-span-2" : "md:col-span-1"
            } h-80`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
             {/* Content */}
             <div className="z-10 relative h-full flex flex-col justify-between">
                <div>
                   <h3 className="text-2xl font-clash font-semibold mb-2">{item.title}</h3>
                   <p className={`text-sm ${item.theme === "dev" ? "text-gray-400" : "text-gray-600"}`}>
                     {item.description}
                   </p>
                </div>

                {item.tags && (
                   <div className="flex flex-wrap gap-2 mt-4">
                     {item.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 text-xs font-mono rounded border ${tagClass}`}>
                           {tag}
                        </span>
                     ))}
                   </div>
                )}
             </div>

             {/* Hover Effect - Subtle Scale */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
