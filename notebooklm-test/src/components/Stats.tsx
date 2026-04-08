"use client";

import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { label: "Over 45 years of accumulated EO/ PO and derivative technology expertise", value: "1977" },
    { label: "25 multi-purpose reactors (3-30MT) for flexible production (EOD & AM)", value: "25" },
    { label: "Annual production of 215,000MT (EOD, ETA, DMC, AM)", value: "215K" },
    { label: "Annual Revenue", value: "$230M" },
    { label: "Professional Workforce", value: "200+" },
  ];

  return (
    <section id="about" className="bg-white relative z-20 py-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Block */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          <div className="lg:w-1/4">
            <span className="text-sm font-bold text-emerald-600 tracking-wider uppercase">
              About Us
            </span>
          </div>
          <div className="lg:w-3/4 max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-gray-900 leading-[1.15] tracking-tight mb-8"
            >
              At <span className="italic text-emerald-700">Green Chemical</span>&nbsp;we've been turning core materials into thriving industries since 1977, with 215k+ MT annual capacity.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl"
            >
              Every successful industrial innovation begins with high-quality foundational materials. We take pride in delivering tailored specialty chemicals—from world-class EOD bases to advanced polymers—that match your precise quality, scale, and schedule requirements.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 pt-16 border-t border-gray-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-2"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-emerald-600 mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 leading-relaxed font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
