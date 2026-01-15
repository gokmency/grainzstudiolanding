
const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white px-6 md:px-12 border-t border-zinc-900">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight mb-2">GRAINZ STUDIO</h2>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
