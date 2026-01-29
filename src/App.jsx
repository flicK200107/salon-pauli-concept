import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MapPin, Clock, Phone } from 'lucide-react';

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative min-h-screen font-cormorant selection:bg-rose-200">
      
      {/* Background Video/Texture */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F5F0]"></div>
        <img 
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
          className="w-full h-full object-cover opacity-80"
          alt="Soft Background"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-darken">
        <div className="text-2xl font-bold tracking-widest text-text-dark">SALON PAULI</div>
        <div className="hidden md:flex space-x-12 font-montserrat text-xs tracking-[0.2em] font-medium">
          <a href="#about" className="hover:text-rose-400 transition-colors">ESSENCE</a>
          <a href="#services" className="hover:text-rose-400 transition-colors">MENU</a>
          <a href="#contact" className="hover:text-rose-400 transition-colors">VISIT</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <div className="glass-panel px-12 py-16 md:px-24 md:py-20 rounded-[2rem] text-center max-w-4xl mx-auto">
            <span className="font-montserrat text-xs tracking-[0.4em] uppercase text-gray-500 mb-6 block">
              Munich's Finest
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl italic font-light text-text-dark mb-8 leading-none">
              Beauty in <br/> Motion
            </h1>
            <p className="font-montserrat text-sm md:text-base tracking-wide text-gray-600 max-w-lg mx-auto leading-relaxed mb-10">
              Where glass meets soul. A sanctuary for your hair, designed to reveal your inner light.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-text-dark text-white px-8 py-4 rounded-full font-montserrat text-xs uppercase tracking-widest hover:bg-rose-400 transition-colors shadow-lg"
            >
              Book Your Moment
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Content Stream */}
      <section className="relative z-10 py-32 px-6 md:px-20">
        
        {/* Card 1: Left */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-40">
          <motion.div style={{ y: y1 }} className="md:w-1/2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                alt="Styling"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </motion.div>
          <div className="md:w-1/2 md:pl-20">
            <h2 className="text-5xl md:text-7xl mb-8">The Craft</h2>
            <p className="font-montserrat text-gray-600 leading-loose text-lg">
              We don't chase trends; we interpret them. Our stylists are artists, using your hair as their canvas. 
              The result is a look that feels effortless, authentic, and undeniably you.
            </p>
          </div>
        </div>

        {/* Card 2: Right */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-40">
          <motion.div style={{ y: y2 }} className="md:w-1/2">
            <div className="glass-panel p-12 rounded-[3rem] h-[500px] flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Sparkles className="w-12 h-12 text-rose-400 mb-6 relative z-10" />
              <h3 className="text-4xl md:text-5xl mb-6 relative z-10">Premium Care</h3>
              <p className="font-montserrat text-gray-600 max-w-xs relative z-10">
                Using only organic, sustainable products that nourish your hair and respect the planet.
              </p>
            </div>
          </motion.div>
          <div className="md:w-1/2 md:pr-20 text-right">
            <h2 className="text-5xl md:text-7xl mb-8">Pure Ingredients</h2>
            <p className="font-montserrat text-gray-600 leading-loose text-lg">
              From Oribe to Davines. We curate the finest products to ensure your hair not only looks spectacular but feels healthy and resilient.
            </p>
          </div>
        </div>

        {/* Menu / Prices */}
        <div className="max-w-4xl mx-auto mb-40">
          <div className="glass-panel p-12 md:p-20 rounded-[2rem]">
            <h2 className="text-center text-5xl mb-16 italic">Service Menu</h2>
            <div className="space-y-8 font-montserrat">
              {[
                { name: "Cut & Styling", price: "from 85€" },
                { name: "Color Brilliance", price: "from 110€" },
                { name: "Balayage Art", price: "from 180€" },
                { name: "Glossing Treatment", price: "from 45€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-gray-300 pb-4 hover:pl-4 transition-all cursor-default">
                  <span className="text-lg font-medium tracking-wide">{item.name}</span>
                  <span className="text-lg font-light text-gray-500">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white py-20 px-6 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-bold tracking-widest mb-6 font-montserrat text-sm">FIND US</h3>
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 mb-4">
              <MapPin size={18} />
              <span>Brienner Str. 11, Munich</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600">
              <Phone size={18} />
              <span>+49 89 228469</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold tracking-widest mb-4">PAULI</h2>
            <p className="text-xs font-montserrat text-gray-400">© 2026. Made with Soul.</p>
          </div>
          <div className="md:text-right">
            <h3 className="font-bold tracking-widest mb-6 font-montserrat text-sm">OPENING HOURS</h3>
            <div className="text-gray-600 space-y-2">
              <p>Tue - Fri: 10:00 - 19:00</p>
              <p>Sat: 09:00 - 16:00</p>
              <p className="text-rose-400 text-xs mt-2">Closed on Mondays</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
