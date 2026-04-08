"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Leaf, Sparkles, Database } from "lucide-react";
import Link from "next/link";

export default function AgrochemicalDetail() {
  const products = [
    {
      id: "emulsifiers",
      name: "Emulsifiers & Solubilizers",
      series: "Fatty Acid Esters (ML/MS/MO/CO/CAW) / Styrenated Ethers (SP/DS/TSP)",
      description: "Surfactant solutions designed to perfectly emulsify and solubilize complex agricultural formulations.",
      benefits: [
        "Excellent solvent matching for aromatic actives",
        "Provides robust formulation stability",
        "Wide compatibility with diverse agrochemicals"
      ],
      tableData: [
        { series: "ML-, MS-, MO-", structure: "Polyoxyethylene Monolaurate/Stearate/Oleate", use: "Emulsifier", properties: "Good emulsification, dispersion, and spreading performance" },
        { series: "CO-, CAW-", structure: "Polyoxyethylene Castor Oil / Castor Wax", use: "Emulsifier", properties: "Excellent compatibility with hydrophobic actives, enhanced penetration" },
        { series: "SP, DS-, TSP-", structure: "Polyoxyalkylene/Polyoxyethylene styrenated Phenyl Ether", use: "Emulsifier", properties: "Excellent compatibility with polar organic solvents" }
      ]
    },
    {
      id: "penetrants",
      name: "Penetrants & Wetters",
      series: "Tallow Amine Ethers (TAM) / Wetting Agents (NF/DA/LA)",
      description: "High-performance wetting agents that significantly lower surface tension for maximum leaf coverage and absorption.",
      benefits: [
        "Powerful wetting into crop surfaces",
        "Deep penetration through waxy plant cuticles",
        "Accelerates herbicide and pesticide efficacy"
      ],
      tableData: [
        { series: "TAM-", structure: "Polyoxyethylene Tallow Amine Ether", use: "Penetration enhancer", properties: "Powerful wetting and deep penetration through waxy cuticle layers" },
        { series: "LF-,DA-,LA-", structure: "Polyoxyethylene Lauryl/Tridecyl ether", use: "Wetting, Spreading agents", properties: "High foaming and excellent wetting properties" }
      ]
    },
    {
      id: "functional-additives",
      name: "Functional Additives",
      series: "Defoaming & Dispersion (NF/LF/PE Series)",
      description: "Essential additives to dynamically regulate physical properties of tank mixes during application.",
      benefits: [
        "Dynamically control foam generation",
        "Improve dispersion stability securely in tank mixes",
        "High defoaming & targeted low-foaming performance"
      ],
      tableData: [
        { series: "NF-, PE-", structure: "Polyoxyalkylene alkyl ether / EO-PO-EO Type", use: "Emulsifier/Defoamer", properties: "Excellent wetting, defoaming, and dispersion control" }
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
          style={{ backgroundImage: "url('/images/agro.png')" }}
        >
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#business" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-bold tracking-wide mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Business Segments
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                <Leaf className="w-8 h-8" />
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
            Agrochemical Adjuvants
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-50/80 max-w-3xl leading-relaxed font-medium"
          >
            Enhancing bio-efficacy through superior wetting, spreading, and penetration.
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
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <Database className="w-5 h-5 text-emerald-600" /> Detailed Specifications
                            </h3>
                            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left text-sm lg:text-base border-collapse">
                                    <thead>
                                        <tr className="bg-emerald-900 text-white">
                                            <th className="px-6 py-5 font-bold tracking-wide rounded-tl-xl whitespace-nowrap">Product Series</th>
                                            <th className="px-6 py-5 font-bold tracking-wide">Chemical Structure</th>
                                            <th className="px-6 py-5 font-bold tracking-wide whitespace-nowrap">Use</th>
                                            <th className="px-6 py-5 font-bold tracking-wide rounded-tr-xl">Properties</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-100 bg-white">
                                        {product.tableData.map((row, rIdx) => (
                                            <tr key={rIdx} className="hover:bg-emerald-50/40 transition-colors">
                                                <td className="px-6 py-5 font-bold text-emerald-700 whitespace-nowrap border-r border-emerald-50/50">{row.series}</td>
                                                <td className="px-6 py-5 text-gray-800 font-medium leading-relaxed min-w-[200px] border-r border-emerald-50/50">{row.structure}</td>
                                                <td className="px-6 py-5 text-gray-600 font-medium leading-relaxed min-w-[150px] border-r border-emerald-50/50">{row.use}</td>
                                                <td className="px-6 py-5 text-gray-600 leading-relaxed min-w-[250px]">{row.properties}</td>
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
