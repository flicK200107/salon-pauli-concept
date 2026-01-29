import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

// --- 3D Background: Moving "Liquid" Blobs ---
function Blob({ position, color, speed }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t * speed) * 1.5;
    mesh.current.rotation.x = Math.cos(t * 0.5);
    mesh.current.rotation.z = Math.sin(t * 0.3);
  });
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.4} 
        metalness={0.1} 
        transparent 
        opacity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Blob position={[-3, 0, -5]} color="#E6E6FA" speed={0.5} /> {/* Lavender */}
      <Blob position={[3, 2, -4]} color="#F0E68C" speed={0.3} /> {/* Khaki/Gold */}
      <Blob position={[0, -2, -3]} color="#FFB7C5" speed={0.4} /> {/* Sakura */}
    </>
  );
}

// --- Main App ---
function App() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative w-full">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 p-8 flex justify-between items-center mix-blend-multiply">
        <div className="font-italiana text-3xl font-bold tracking-tighter">PAULI.</div>
        <div className="space-x-8 font-manrope text-sm tracking-widest hidden md:block">
          <a href="#" className="hover:line-through">COLLECTION</a>
          <a href="#" className="hover:line-through">STUDIO</a>
          <a href="#" className="hover:line-through">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <motion.div style={{ y: yHero, opacity: opacityHero }}>
          <h1 className="font-italiana text-[15vw] leading-none text-soft-black mix-blend-overlay">
            ELEGANCE
          </h1>
          <p className="font-manrope text-xl md:text-2xl mt-4 tracking-[0.5em] font-light">
            IS AN ATTITUDE
          </p>
        </motion.div>
      </section>

      {/* Image / Content Section */}
      <section className="min-h-screen py-32 px-6 md:px-20 relative z-10 bg-white/30 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="relative h-[80vh] w-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80" 
              className="w-full h-full object-cover scale-110" 
              alt="Model"
            />
          </motion.div>

          <div className="space-y-12">
            <h2 className="font-italiana text-6xl md:text-8xl leading-tight">
              The Art of <br/> 
              <span className="italic">Transformation</span>
            </h2>
            <p className="font-manrope text-lg leading-loose text-gray-700 max-w-md">
              We believe in the power of subtle changes. A nuance in color, a shift in texture. 
              At Salon Pauli, we don't just cut hair. We sculpt your identity.
            </p>
            <button className="px-10 py-4 border border-black font-manrope text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-500">
              DISCOVER OUR ARTISTS
            </button>
          </div>

        </div>
      </section>

      {/* Horizontal Scroll / Gallery Section */}
      <section className="py-32 overflow-hidden bg-white relative z-10">
        <div className="flex space-x-8 px-6 md:px-20 overflow-x-auto pb-8 no-scrollbar">
          {[
             "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          ].map((src, i) => (
            <motion.div 
              key={i} 
              className="min-w-[300px] md:min-w-[400px] aspect-[3/4] relative group"
              whileHover={{ scale: 0.98 }}
            >
              <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Gallery" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity font-manrope text-white text-xs tracking-widest bg-black/50 px-2 py-1 backdrop-blur-md">
                LOOK 0{i+1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="h-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-[#f8f5f2] relative z-10">
        <h2 className="font-italiana text-[10vw] mb-8">CONTACT</h2>
        <div className="flex flex-col md:flex-row gap-12 text-center font-manrope font-light text-xl tracking-wider">
          <p>Brienner Str. 11 <br/> Munich</p>
          <p>+49 89 228469 <br/> hello@salonpauli.de</p>
        </div>
        <button className="mt-20 px-12 py-5 bg-[#f8f5f2] text-[#1a1a1a] font-bold tracking-widest hover:scale-105 transition-transform">
          BOOK ONLINE
        </button>
      </footer>
    </div>
  );
}

export default App;
