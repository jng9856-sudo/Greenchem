"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Paintbrush, Sparkles, Database } from "lucide-react";
import Link from "next/link";

export default function CoatingDetail() {
  const products = [
    {
      id: "amine-ethers",
      name: "Amine Ethers",
      series: "LM / SM / TAM Series",
      description: "Emulsifiers & dispersants with antistatic properties. Ideal for pigment dispersion.",
      benefits: [
        "High-performance emulsification and dispersion",
        "Imparts excellent antistatic properties",
        "Optimized specifically for superior pigment dispersion"
      ],
      tableData: [
        { series: "LM-", structure: "Polyoxyethylene Lauryl Amine Ether", properties: "Weak cationic surfactants (Mainly nonionic surfactants)" },
        { series: "SM-", structure: "Polyoxyethylene Stearyl Amine Ether", properties: "Weak cationic surfactants (Mainly nonionic surfactants)" },
        { series: "TAM-", structure: "Polyoxyethylene Tallow Amine Ether", properties: "Weak cationic surfactants (Mainly nonionic surfactants)" }
      ]
    },
    {
      id: "styrenated",
      name: "Styrenated Ethers",
      series: "SP / DS / TSP Series",
      description: "Strong affinity for aromatic systems. Superior dispersion for organic pigments.",
      benefits: [
        "Exceptionally strong affinity for aromatic systems",
        "Provides superior dispersion capabilities",
        "Ideal for organic pigment stabilization"
      ],
      tableData: [
        { series: "SP-", structure: "Polyoxyethylene di-stylenated Phenyl Ether", properties: "Polyaromatic polyether" },
        { series: "DS-", structure: "Polyoxyethylene di-stylenated Phenyl Ether", properties: "Polyaromatic polyether" },
        { series: "TSP-", structure: "Polyoxyalkylene tri-stylenated Phenyl Ether", properties: "Polyaromatic polyether" }
      ]
    },
    {
      id: "peg",
      name: "PEG / mPEG",
      series: "Polyoxyethylene Glycols",
      description: "Highly hydrophilic. Offers viscosity control, water compatibility, and flow modification.",
      benefits: [
        "Highly hydrophilic properties for aqueous systems",
        "Excellent viscosity control and stabilization",
        "Enhances water compatibility and flow modification"
      ],
      tableData: [
        { series: "PEG-", structure: "Polyoxyethylene glycol (PEG)", properties: "Solubilizing agent" },
        { series: "mPEG-", structure: "Polyoxyethylene Methyl Ether (mPEG)", properties: "Solubilizing agent" }
      ]
    },
    {
      id: "fatty",
      name: "Fatty Acid Ethoxylates",
      series: "ML / MS / MO / CO Series",
      description: "Versatile emulsifiers and solubilizers. Provides lubricity and formulation stability.",
      benefits: [
        "Highly versatile emulsifiers and solubilizers",
        "Improves overall lubricity of the formulation",
        "Significantly enhances long-term formulation stability"
      ],
      tableData: [
        { series: "ML-", structure: "Polyoxyethylene Monolaurate", properties: "Fatty acid ester; Low toxicity" },
        { series: "MS-", structure: "Polyoxyethylene Monostearate", properties: "Fatty acid ester; Low toxicity" },
        { series: "MO-", structure: "Polyoxyethylene Monooleate", properties: "Fatty acid ester; Low toxicity" },
        { series: "CO-", structure: "Polyoxyethylene Castor Oil", properties: "Fatty acid glyceride ester; Low toxicity" }
      ]
    },
    {
      id: "ester",
      name: "Ester resin polyol",
      series: "BA / BAP Series",
      description: "Bisphenol-A derivatives. Enhances leveling, viscosity control, and reactivity.",
      benefits: [
        "High-quality Bisphenol-A derivatives",
        "Substantially enhances surface leveling",
        "Improves viscosity control and chemical reactivity"
      ],
      tableData: [
        { series: "BA-", structure: "Bisphenol A Derivatives", properties: "" },
        { series: "BAP-", structure: "Bisphenol A Derivatives", properties: "" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navigation />

      {/* Subpage Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#business" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-bold tracking-wide mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Business Segments
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                <Paintbrush className="w-8 h-8" />
            </div>
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm border border-emerald-400/30 px-4 py-1.5 rounded-full bg-emerald-950/50">
                Segment Details
            </span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-[5rem] font-playfair font-bold text-white leading-tight mb-6 tracking-tight"
          >
            Paint&Pigment <span className="italic text-emerald-400">Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-50/80 max-w-3xl leading-relaxed font-medium"
          >
            Eco-friendly Solvents, Dispersants & Monomer Bases
          </motion.p>
        </div>
      </section>

      {/* Products Detail Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 gap-12">
            {products.map((product, index) => (
                <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col"
                >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                        {/* Left side: Info */}
                        <div className="lg:w-1/2 flex flex-col justify-between">
                            <div>
                                <div className="inline-block bg-emerald-50 text-emerald-700 font-bold px-4 py-1.5 rounded-lg text-sm mb-4">
                                    {product.series}
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6">
                                    {product.name}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                                    {product.description}
                                </p>
                            </div>
                            
                            <a 
                                href="https://www.korgc.com/eng/cs/menu_03.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white w-full sm:w-fit font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-700 transition-colors shadow-lg block inline-block"
                            >
                                Request Specification File
                            </a>
                        </div>

                        {/* Right side: Benefits */}
                        <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-100/50 flex flex-col justify-center">
                            <h3 className="font-bold text-gray-900 mb-6 tracking-wide text-lg flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-emerald-500" /> Key Formulatory Benefits
                            </h3>
                            <ul className="space-y-4">
                                {product.benefits.map((benefit, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                        <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Full-width Product Series Table */}
                    {product.tableData && (
                        <div className="w-full mt-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <Database className="w-5 h-5 text-emerald-600" /> Detailed Specifications
                            </h3>
                            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left text-sm lg:text-base border-collapse">
                                    <thead>
                                        <tr className="bg-emerald-900 text-white">
                                            <th className="px-6 py-5 font-bold tracking-wide rounded-tl-xl whitespace-nowrap">Product Series</th>
                                            <th className="px-6 py-5 font-bold tracking-wide">Chemical Structure</th>
                                            <th className="px-6 py-5 font-bold tracking-wide rounded-tr-xl">Properties</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-100 bg-white">
                                        {product.tableData.map((row, rIdx) => (
                                            <tr key={rIdx} className="hover:bg-emerald-50/40 transition-colors">
                                                <td className="px-6 py-5 font-bold text-emerald-700 whitespace-nowrap border-r border-emerald-50/50">{row.series}</td>
                                                <td className="px-6 py-5 text-gray-800 font-medium leading-relaxed min-w-[200px] border-r border-emerald-50/50">{row.structure}</td>
                                                <td className="px-6 py-5 text-gray-600 leading-relaxed">{row.properties}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
