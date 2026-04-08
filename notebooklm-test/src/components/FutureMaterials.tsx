"use client";

import { motion } from "framer-motion";
import { Cpu, Battery, Monitor } from "lucide-react";

export function FutureMaterials() {
  const materials = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "ETA (Ethanolamine)",
      subtitle: "Sole Domestic Manufacturer",
      description: "An essential high-purity material for semiconductor cleaning and gas purification processes.",
      link: "https://www.korgc.com/eng/product/menu_02.html?co1_idx=23"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "DMC (Dimethyl Carbonate)",
      subtitle: "Eco-Friendly Lithium-Ion Material",
      description: "A next-generation core material used as a lithium-ion battery electrolyte and eco-friendly solvent.",
      link: "https://www.korgc.com/eng/product/menu_03.html?co1_idx=24"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "AM (Acrylate Monomer)",
      subtitle: "High-Performance Coating Material",
      description: "A premium coating raw material that maximizes the durability of displays and mobile devices.",
      link: "https://www.korgc.com/eng/product/menu_04.html?co1_idx=25"
    }
  ];

  return (
    <section id="materials" className="relative py-24 sm:py-32 bg-gray-950 overflow-hidden">
      {/* Dark mode background glow */}
      <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-emerald-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-teal-900/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white tracking-tight"
          >
            Other Materials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 font-medium text-balance max-w-2xl mx-auto leading-relaxed"
          >
            Green Chemical's high-value material lineup serving as the foundation for the leap in advanced future industries such as semiconductors, secondary batteries, and displays.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 cursor-pointer" aria-label={`View ${item.title} Details`} />}
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-emerald-500 tracking-wider uppercase mb-2 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-playfair text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
