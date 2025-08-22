import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Add event listeners
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="flex justify-between items-center px-10 py-6">
          <div className="font-libre text-2xl font-bold">MIRADA</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="font-manrope text-base font-medium hover:opacity-70 transition-opacity">Services</a>
            <a href="#projects" className="font-manrope text-base font-medium hover:opacity-70 transition-opacity">Work</a>
            <a href="#clients" className="font-manrope text-base font-medium hover:opacity-70 transition-opacity">Clients</a>
            <a href="#contact" className="font-manrope text-base font-medium hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 relative">
        <h1 className="font-libre font-bold text-4xl md:text-7xl lg:text-8xl leading-tight max-w-5xl mb-6">
          WE ARE A CREATIVE STUDIO FOCUSED ON GROWTH AND BUILDING BRANDS
        </h1>
        <p className="font-manrope text-lg md:text-xl max-w-2xl opacity-80 mb-12">
          We help brands stand out through powerful design and strategic thinking.
        </p>
        
        <div className="absolute bottom-10 flex flex-col items-center gap-3">
          <span className="font-manrope text-sm uppercase tracking-widest">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-10">
        <h2 className="font-libre text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="animate-on-scroll bg-zinc-900 p-10 rounded-xl hover:translate-y-[-10px] hover:bg-zinc-800 transition-all duration-300">
            <div className="text-4xl mb-6">✏️</div>
            <h3 className="font-manrope text-2xl font-semibold mb-4">Brand Identity</h3>
            <p className="font-manrope text-base opacity-70 leading-relaxed">
              We create unique visual identities that communicate your brand's values and resonate with your audience.
            </p>
          </div>
          <div className="animate-on-scroll bg-zinc-900 p-10 rounded-xl hover:translate-y-[-10px] hover:bg-zinc-800 transition-all duration-300">
            <div className="text-4xl mb-6">💻</div>
            <h3 className="font-manrope text-2xl font-semibold mb-4">Web Design</h3>
            <p className="font-manrope text-base opacity-70 leading-relaxed">
              Custom websites designed to convert visitors into customers and reflect your brand's personality.
            </p>
          </div>
          <div className="animate-on-scroll bg-zinc-900 p-10 rounded-xl hover:translate-y-[-10px] hover:bg-zinc-800 transition-all duration-300">
            <div className="text-4xl mb-6">📈</div>
            <h3 className="font-manrope text-2xl font-semibold mb-4">Digital Strategy</h3>
            <p className="font-manrope text-base opacity-70 leading-relaxed">
              Data-driven strategies to grow your online presence and achieve your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-10 bg-zinc-950">
        <h2 className="font-libre text-4xl md:text-5xl font-bold text-center mb-16">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Nova Clothing", category: "Brand Identity, Web Design", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop" },
            { title: "Lumina Events", category: "Brand Strategy, Identity", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop" },
            { title: "Artisan Coffee", category: "Packaging, Web Design", image: "https://images.unsplash.com/photo-1556655845-34a35c3b5dc0?w=400&h=400&fit=crop" }
          ].map((project, index) => (
            <Link 
              key={index}
              to="/design-portfolio"
              className="animate-on-scroll relative h-96 overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-manrope text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="font-manrope text-base opacity-70">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-32 px-10">
        <h2 className="font-libre text-4xl md:text-5xl font-bold text-center mb-16">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 max-w-6xl mx-auto items-center">
          {Array.from({ length: 6 }, (_, i) => (
            <div 
              key={i} 
              className="animate-on-scroll bg-zinc-800 h-20 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <span className="font-manrope text-white text-sm">CLIENT {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-10 bg-zinc-950 text-center">
        <h2 className="font-libre text-4xl md:text-5xl font-bold mb-10">Let's Work Together</h2>
        <div className="max-w-2xl mx-auto">
          <p className="font-manrope text-xl mb-12 opacity-80">
            We're always excited to hear about new projects and opportunities. Get in touch to start a conversation.
          </p>
          <a 
            href="mailto:hello@mirada.com" 
            className="inline-block bg-white text-black font-manrope text-base font-semibold px-10 py-4 rounded-full hover:translate-y-[-5px] hover:bg-gray-200 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 text-center">
        <div className="flex justify-center gap-8 mb-10">
          <a href="#services" className="font-manrope text-base hover:opacity-70 transition-opacity">Services</a>
          <a href="#projects" className="font-manrope text-base hover:opacity-70 transition-opacity">Work</a>
          <a href="#clients" className="font-manrope text-base hover:opacity-70 transition-opacity">Clients</a>
          <a href="#contact" className="font-manrope text-base hover:opacity-70 transition-opacity">Contact</a>
          <a href="#" className="font-manrope text-base hover:opacity-70 transition-opacity">Privacy Policy</a>
        </div>
        
        <div className="flex justify-center gap-6 mb-10">
          <a href="#" className="text-xl hover:opacity-70 transition-opacity">📷</a>
          <a href="#" className="text-xl hover:opacity-70 transition-opacity">🐦</a>
          <a href="#" className="text-xl hover:opacity-70 transition-opacity">💼</a>
          <a href="#" className="text-xl hover:opacity-70 transition-opacity">🎨</a>
        </div>
        
        <p className="font-manrope text-sm opacity-50">© 2024 MIRADA Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
