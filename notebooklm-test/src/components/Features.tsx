"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Paintbrush, Sprout, Wrench } from "lucide-react";
import Link from "next/link";

export function Features() {

  const segments = [
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      title: "Construction",
      description: "High-performance chemical solutions designed to enhance durability and workability in the construction industry.",
      link: "/business/construction",
      details: [
        {
          title: "Polycarboxylate Ester(PCE) Raw Materials",
          items: ["RS / MA / MEG Series"]
        },
        {
          title: "Cement Grinding Aids",
          items: ["EDIPA / DEIPA / ETA Series"]
        },
        {
          title: "Specialty Defoamers",
          items: ["NEORIN Series"]
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
      title: "Paint&Pigment",
      description: "Key intermediates and high-value polymer solutions to maximize the performance of paints, coatings, and resins.",
      link: "/business/coating",
      details: [
        { title: "Amine Ethers", items: ["LM / SM / TAM Series"] },
        { title: "Styrenated Ethers", items: ["SP / DS / TSP Series"] },
        { title: "PEG / mPEG", items: ["Polyoxyethylene Glycols"] },
        { title: "Fatty Acid Ethoxylates", items: ["ML / MS / MO / CO Series"] },
        { title: "Ester resin polyol", items: ["BA / BAP Series"] }
      ]
    },
    {
      image: "/images/lubricant.png",
      title: "Lubricants & Metalworking Fluids",
      description: "We provide synthetic PAG lubricants optimized for extreme environments and next-generation refrigerants.",
      link: "/business/lubricant",
      details: [
        { title: "PAG Synthetic Base Fluids", items: ["KONLUB BP / BR / DR Series"] },
        { title: "Emulsifiers & Wetting Agents", items: ["KONION NF / OA / OP Series"] },
        { title: "Performance Additives", items: ["KONION PE / RP Series"] }
      ]
    },
    {
      image: "/images/cleaning.png",
      title: "I&I Cleaning & Water Treatment",
      description: "Providing low-foam/defoaming solutions and NPE-Free eco-friendly detergents for industrial applications.",
      link: "/business/cleaning",
      details: [
        { title: "Low-Foam Surfactants", items: ["LF / NF / TDA Series"] },
        { title: "Emulsifiers & Degreasers", items: ["LA / OA / CSA Series"] },
        { title: "Defoamers & Foam Control", items: ["RP / PE Series"] },
        { title: "High-Performance Dispersants", items: ["TE Series"] }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      title: "Reaction Intermediates",
      description: "High-quality intermediates for various chemical synthesis and manufacturing processes.",
      link: "/business/reaction",
      details: [
        { title: "Bisphenol-A Derivatives", items: ["BA / BAP Series"] },
        { title: "Multifunctional Polyols", items: ["TM / TP / EP / EPP / GP Series"] },
        { title: "Phenol / Linear Polyols", items: ["PH / OPP / NP / DS Series", "PEG / PE / MEG Series"] },
        { title: "Specialty Alcohols", items: ["RS / HD / NPG Series"] },
        { title: "High-Purity Polyols Platform", items: ["SK / RT / TR / FC Series"] }
      ]
    },
    {
      image: "/images/agro.png",
      title: "Agrochemical",
      description: "We provide total solutions to enhance the stability, penetration, and spreading power of agrochemical formulations.",
      link: "/business/agrochemical",
      details: [
        { title: "Emulsifiers & Solubilizers", items: ["Fatty Acid Esters (ML/CO/CAW)", "Styrenated Ethers (SP/DS/TSP)"] },
        { title: "Penetrants & Wetters", items: ["Tallow Amine Ethers (TAM)", "Wetting Agents (NF/DA/LA)"] },
        { title: "Functional Additives", items: ["Defoaming & Dispersion (NF/LF/PE)"] }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
      title: "Textile",
      description: "Advanced chemical auxiliaries and solutions for the textile processing industry.",
      link: "/business/textile",
      details: [
        { title: "Scouring & Wetting", items: ["Low-Foam Detergents (NF/BTA)", "Wetting Agents (OT/TDA/DA)"] },
        { title: "Dyeing Auxiliaries", items: ["Leveling Agents (Amine Ethers/RP)", "Dispersants (SP/DS/TSP)"] },
        { title: "Lubrication & Finishing", items: ["Spin Finish Oils (FB/PEG Esters)"] }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
      title: "Cosmetic",
      description: "Premium functional ingredients for personal care and specialized cosmetic formulations.",
      link: "/business/cosmetic",
      details: [
        { title: "Humectants & Solvents", items: ["Polyethylene Glycols (PEG-200~23000)"] },
        { title: "Emulsifiers & Solubilizers", items: ["PEG Esters", "Solubilizers (CO/CAW)"] },
        { title: "Conditioning Agents", items: ["Amine Ethers (LM/SM/TAM)"] }
      ]
    }
  ];

  return (
    <section id="business" className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 border-t border-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            Solutions Designed to Keep Your <span className="italic text-emerald-700">Business Thriving</span>
          </motion.h2>
        </div>

        {/* Business Segments Grid (Exact layout match) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image with intersecting title box */}
              <div 
                className="w-full h-80 sm:h-[400px] bg-cover bg-center rounded-2xl relative mb-12 shadow-sm group-hover:shadow-xl transition-all duration-500 overflow-visible"
                style={{ backgroundImage: `url(${segment.image})` }}
              >
                {/* Intersecting White Box (Bottom Left) */}
                <div className="absolute -bottom-8 left-8 bg-white py-6 pr-16 pl-8 rounded-xl shadow-xl z-20 flex items-center justify-between border border-gray-100 min-w-[280px]">
                    <h3 className="text-2xl font-bold text-gray-900 font-outfit tracking-tight">
                        {segment.title}
                    </h3>
                    {segment.link ? (
                        <Link href={segment.link} className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer transform hover:scale-110 duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    ) : (
                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-emerald-600 transition-colors cursor-pointer transform group-hover:scale-110 duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    )}
                </div>
              </div>
              
              {/* Card Text Content */}
              <div className="px-2">
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                  {segment.description}
                </p>
                
                {segment.details && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                    {segment.details.map((detail, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <span className="font-bold text-gray-900 text-sm sm:text-base">{detail.title}</span>
                        <ul className="text-gray-500 text-sm space-y-2">
                          {detail.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-emerald-500 mt-0.5 text-lg leading-none">•</span>
                              <span className="leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
