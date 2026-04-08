"use client";

import { motion } from "framer-motion";

export function Competencies() {
  const competencies = [
    {
      title: "EO & PO-based Specialty Chemical Platform",
      bullets: [
        "Direct EO pipeline supply",
        "Advanced EO/PO derivative synthesis capability",
        "Extensive portfolio of specialty chemical applications"
      ]
    },
    {
      title: "Advanced UV-Curable Acrylate Monomer Platform",
      bullets: [
        "High-performance functional monomer development",
        "Hybrid monomer design for enhanced hardness and high refractive index",
        "Applications in advanced coatings for optical, display, and protective materials"
      ]
    },
    {
      title: "Flexible, Rapid, and Customized Production System",
      bullets: [
        "Specialized in multi-product and small-batch production",
        "Responsive to diverse customer formulation requirements",
        "Balancing high performance with sustainability"
      ]
    },
    {
      title: "Global Network & Reliability",
      bullets: [
        "Global supply network",
        "ISO 9001 & 14001 Certified",
        "Over 45 years of EO/PO chemistry expertise"
      ]
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Content (Left) */}
          <div className="lg:w-5/12">
            <span className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-6 block">
              Core Competencies
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-8 text-gray-900 tracking-tight leading-[1.1]"
            >
              High-Purity Synthesis <br className="hidden sm:block" /> in <span className="italic text-emerald-700">Every Project.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 font-medium text-balance mb-12"
            >
              With years of trusted service, we transform complex industrial demands into reliable, high-performing chemical solutions tailored for your business.
            </motion.p>
            

            
            <div className="mt-16 space-y-8">
                {competencies.map((comp, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 font-bold text-2xl font-outfit">
                            {idx + 1}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-emerald-700 mb-3 leading-tight">{comp.title}</h3>
                            <ul className="text-gray-500 font-medium leading-relaxed space-y-1.5 text-sm">
                                {comp.bullets.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-2 text-emerald-400 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

          </div>

          {/* Masonry Image Gallery (Right) */}
          <div className="lg:w-7/12 grid grid-cols-2 gap-6 h-[600px] lg:h-[800px]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl h-[90%] mt-auto"
            >
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/coating.png')" }}
                />
            </motion.div>
            <div className="flex flex-col gap-6 h-full">
                <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl h-[45%]"
                >
                    <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/cleaning.png')" }}
                    />
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl h-[55%]"
                >
                    <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/agro.png')" }}
                    />
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
