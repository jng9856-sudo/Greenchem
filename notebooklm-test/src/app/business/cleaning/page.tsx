"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Droplets, Sparkles, Database } from "lucide-react";
import Link from "next/link";

export default function CleaningDetail() {
  const products = [
    {
      id: "low-foam",
      name: "Low-Foam Surfactants",
      series: "LF / NF / TDA Series",
      structure: "Polyoxyalkylene Alkyl Ether / Tridecyl Ether",
      description: "Advanced low-foaming agents designed specifically for industrial cleaning where rapid and high-efficiency dynamic soil removal is required.",
      benefits: [
        "High wetting power with minimal foam",
        "Ideal for CIP & high-pressure spray cleaning",
        "Excellent detergency & rinsing properties"
      ],
      tableData: [
        { series: "LF", structure: "Polyoxyalkylene alkyl ether", use: "Low-foam Surfactant", properties: "Delivering excellent wetting, low foaming, and detergency for CIP systems" },
        { series: "NF", structure: "Polyoxyalkylene alkyl ether", use: "Defoamer / Wetting", properties: "Controlled foam and efficient soil removal in dynamic systems" },
        { series: "DA", structure: "Polyoxyethylene Isodecyl Ether", use: "Wetting / Emulsifier", properties: "Offering strong wetting, emulsification, and low-foam performance" },
        { series: "TDA", structure: "Polyoxyethylene tridecyl ether", use: "Low-foam Cleaner", properties: "Low-foaming wetting and powerful detergency for industrial cleaning" }
      ]
    },
    {
      id: "emulsifiers",
      name: "Emulsifiers & Degreasers",
      series: "LA / OA / CSA Series",
      structure: "Polyoxyethylene Lauryl / Oleyl / Cetyl Stearyl Ether",
      description: "Robust emulsification systems formulated to lift and disperse heavy industrial grease and oils from surfaces efficiently.",
      benefits: [
        "Strong grease removal & oil emulsification",
        "Stable formulation for heavy-duty cleaners",
        "Biodegradable & efficient soil suspension"
      ],
      tableData: [
        { series: "LA", structure: "Polyoxyethylene Lauryl Ether", use: "Wetting / Detergent", properties: "Efficient wetting, detergency, and emulsification with good biodegradability" },
        { series: "OA", structure: "Polyoxyethylene Oleyl Ether", use: "Emulsifier / Degreaser", properties: "Strong emulsification and grease removal with enhanced spreading" },
        { series: "CSA", structure: "Polyoxyethylene Cetyl Stearyl Ether", use: "Emulsifier / Stabilizer", properties: "Offering excellent emulsification and formulation stability in concentrated systems" }
      ]
    },
    {
      id: "defoamers",
      name: "Defoamers & Foam Control",
      series: "RP / PE Series",
      structure: "EO/PO Block Copolymers (Reverse Pluronic type)",
      description: "Highly effective foam knockdown and prevention chemistry specifically tailored for aqueous systems and severe treatment environments.",
      benefits: [
        "Efficient foam knockdown in aqueous systems",
        "Temperature-responsive solubility (cloud point)",
        "Prevents foam buildup in treatment tanks"
      ],
      tableData: [
        { series: "RP", structure: "Poly(oxyethylene-oxypropylene) copolymer (PO-EO-PO Type)", use: "Defoamer", properties: "Excellent defoaming and wetting control in aqueous systems" },
        { series: "PE", structure: "Poly(ethylene-propylene) copolymer (EO-PPG-EO Block copolymer)", use: "Dispersant / Defoamer", properties: "Providing dispersion stability and foam suppression in water treatment systems" }
      ]
    },
    {
      id: "dispersants",
      name: "High-Performance Dispersants",
      series: "TE Series",
      structure: "Polyoxyalkylene Ethylenediamine Ether",
      description: "Specialized high-performance molecules aimed at harsh condition dispersion, significantly extending the limits of structural suspension.",
      benefits: [
        "Robust wetting & dispersing in harsh conditions",
        "Prevents scale & soil redeposition",
        "Synergistic performance with other surfactants"
      ],
      tableData: [
        { series: "TE", structure: "Polyoxyalkylene ethylenediamine ether", use: "High-performance Surfactant", properties: "Strong wetting, dispersing, and defoaming performance under harsh conditions" }
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
          style={{ backgroundImage: "url('/images/cleaning.png')" }}
        >
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#business" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-bold tracking-wide mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Business Segments
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                <Droplets className="w-8 h-8" />
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
            I&I Cleaning & Water Management
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-50/80 max-w-3xl leading-relaxed font-medium"
          >
            Industrial Cleaning, Degreasing & Water Management
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
                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-6">
                                    {product.description}
                                </p>
                                
                                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 mb-8 inline-block w-full">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Chemical Structure</span>
                                    <span className="text-emerald-700 font-bold">{product.structure}</span>
                                </div>
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
                                <Sparkles className="w-5 h-5 text-emerald-500" /> Key Benefits
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
                                            <th className="px-6 py-5 font-bold tracking-wide rounded-tl-xl whitespace-nowrap">Product</th>
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
