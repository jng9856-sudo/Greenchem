"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Factory, Sparkles, Database } from "lucide-react";
import Link from "next/link";

export default function ConstructionDetail() {
  const products = [
    {
      id: "pce",
      name: "Polycarboxylate Ester(PCE) Raw Materials",
      series: "RS / MA / MEG Series",
      structure: "Allyl / Methallyl / Methoxy Polyethylene Glycol",
      description: "Essential raw materials designed to deliver outstanding reactivity and fluidity for modern concrete admixtures and construction applications.",
      benefits: [
        "High reactivity for PCE backbone synthesis",
        "Tunable side-chain length (MW 200~5000+)",
        "Excellent water solubility & steric hindrance"
      ],
      tableHeaders: ["Product Series", "Chemical Structure", "Properties"],
      tableData: [
        { cols: ["RS-", "APEG (Polyoxyethylene allyl ether)", "MW 2400~4500; Raw material for making directly ethylene copolymer"] },
        { cols: ["MA-", "VPEG (Polyoxyethylene methallyl ether)", "MW 2400~4500; Raw material for making directly ethylene copolymer"] },
        { cols: ["MEG-", "mPEG (Polyoxyethylene methyl ether)", "MW 2000~5000; Raw material for primary ester reaction"] }
      ]
    },
    {
      id: "cga",
      name: "Cement Grinding Aids",
      series: "EDIPA / DEIPA / ETA Series",
      structure: "Ethanol-Diisopropanol amine / Diethanol-isopropanol amine / Ethanol Amines",
      description: "Specialized amine formulations that significantly enhance the efficiency of the cement grinding process while boosting early and late compressive strength.",
      benefits: [
        "Prevents agglomeration in cement mills",
        "Improves early & late compressive strength",
        "Effective neutralization & dispersion"
      ],
      tableHeaders: ["Product Series", "Chemical Structure", "Properties"],
      tableData: [
        { cols: ["EDIPA", "Ethanol Diisopropanol Amine", "Ethanol/Isopropanol Amine"] },
        { cols: ["DEIPA", "Diethanol isopropanol Amine", "Ethanol/Isopropanol Amine"] },
        { cols: [{text: "ETA", link: "https://www.korgc.com/eng/product/menu_02.html?co1_idx=23"}, "MEA, DEA, TEA", "Ethanol Amine"] },
        { cols: ["TEA-H", "Triethanol amine (Include Heavy)", "TEA Min 90%, Heavy Max 10%"] }
      ]
    },
    {
      id: "defoamer",
      name: "Specialty Defoamers",
      series: "NEORIN Series",
      structure: "Polyoxyalkylene Alkyl Ether (EO/PO)",
      description: "High-performance defoamers offering robust, rapid, and durable foam control specifically tailored for challenging construction conditions.",
      benefits: [
        "Rapid & durable foam knockdown",
        "Stable in high-pH concrete conditions",
        "Easy dispersion in aqueous systems"
      ],
      tableHeaders: ["Product Name", "Appear.(at 20°C)", "Cloud Point(°C)", "Viscosity(25°C, cps)", "Specific Gravity(20°C)"],
      tableData: [
        { cols: ["NEORIN-310", "Liquid", "28", "121", "0.97"] },
        { cols: ["NEORIN-400", "Liquid", "29", "320", "1.00"] },
        { cols: ["NEORIN-415", "Liquid", "33", "270", "0.99"] },
        { cols: ["NEORIN-420", "Liquid", "33", "240", "0.99"] },
        { cols: ["NEORIN-430", "Liquid", "43", "230", "0.99"] }
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#business" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-bold tracking-wide mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Business Segments
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                <Factory className="w-8 h-8" />
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
            Construction <span className="italic text-emerald-400">Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-50/80 max-w-3xl leading-relaxed font-medium"
          >
            High-performance chemical solutions designed to enhance durability and workability in the construction industry.
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
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">General Chemical Structure</span>
                                    <span className="text-emerald-700 font-bold">{product.structure}</span>
                                </div>
                            </div>

                            <a 
                                href="https://www.korgc.com/eng/cs/menu_03.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white w-full sm:w-fit font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-700 transition-colors shadow-lg block inline-block mt-auto"
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

                    {/* Dynamic Product Series Table */}
                    {product.tableData && product.tableHeaders && (
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <Database className="w-5 h-5 text-emerald-600" /> Detailed Specifications
                            </h3>
                            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left text-sm lg:text-base border-collapse">
                                    <thead>
                                        <tr className="bg-emerald-900 text-white">
                                            {product.tableHeaders.map((header, hIdx) => (
                                                <th key={hIdx} className={`px-6 py-5 font-bold tracking-wide ${hIdx === 0 ? 'rounded-tl-xl whitespace-nowrap' : ''} ${hIdx === product.tableHeaders.length - 1 ? 'rounded-tr-xl' : ''}`}>
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-100 bg-white">
                                        {product.tableData.map((row, rIdx) => (
                                            <tr key={rIdx} className="hover:bg-emerald-50/40 transition-colors">
                                                {row.cols.map((col, cIdx) => (
                                                    <td key={cIdx} className={`px-6 py-5 text-gray-800 font-medium leading-relaxed ${cIdx === 0 ? 'font-bold text-emerald-700 whitespace-nowrap border-r border-emerald-50/50' : 'border-r border-emerald-50/50'}`}>
                                                        {typeof col === 'object' && col !== null && 'link' in col ? (
                                                            <Link href={col.link as string} target="_blank" className="text-emerald-600 underline decoration-2 underline-offset-4 cursor-pointer hover:text-emerald-400 flex items-center gap-1.5 w-fit">
                                                                {col.text as string}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                            </Link>
                                                        ) : (
                                                            col as React.ReactNode
                                                        )}
                                                    </td>
                                                ))}
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
