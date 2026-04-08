"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const backgrounds = [
  '/images/forest_hero_bg.png',
  '/images/forest_bg_2_1775475806944.png',
  '/images/forest_bg_3_1775475823116.png',
  '/images/forest_bg_4_1775475840522.png',
  '/images/forest_bg_5_1775475861172.png'
];

export function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gray-950">
        <AnimatePresence>
          <motion.div 
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgrounds[bgIndex]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 z-10 bg-gray-900/60" /> {/* Dark overlay for text readability */}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >


          {/* Headlines */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-playfair font-bold tracking-tight text-white leading-[1.1] drop-shadow-xl">
              High-Value <br />
              <span className="text-emerald-400 italic">Specialty Chemicals</span>
            </h1>
            <div className="space-y-3 pt-6">
              <p className="text-2xl md:text-3xl text-white font-bold leading-snug drop-shadow-md">
                Green Chemical, a leading company in Korea <br className="hidden sm:block" />
                for manufacturing basic compound
              </p>
              <p className="text-sm md:text-base text-emerald-50/80 font-medium tracking-widest uppercase leading-relaxed drop-shadow-md">
                COAT OUR LIFE SMARTLY & <br className="hidden sm:block" />
                ECO-FRIENDLY WITH OUR FUNCTIONAL MONOMER
              </p>
            </div>
          </div>

          {/* Dual CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <a 
              href="/Greenchemical.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-emerald-500 text-gray-900 font-bold px-8 py-4 rounded-full w-full sm:w-auto hover:bg-emerald-400 transition-all text-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
            >
              Company Profile <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#business" 
              className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 font-bold px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
            >
              Explore Business
            </a>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
