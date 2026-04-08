"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, FlaskConical, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ReactionDetail() {
  const products = [
    {
      id: "bisphenol-a",
      name: "Bisphenol-A Derivatives",
      series: "BA / BAP / BPE Series",
      description: "High-performance resin modifiers and crosslinkers offering excellent hardness and stability.",
      benefits: [
        "Provides a very high refractive index",
        "Ensures low volatility during processing",
        "Offers excellent hardness and water resistance"
      ],
      seriesList: [
        { name: "BA" },
        { name: "BAP" },
        { name: "BPE" }
      ],
      tableData: [
        { series: "BF-", structure: "Polyoxyethylene Bisphenol-A Ether", use: "Display, Automotive", properties: "High refractive index, good elasticity" },
        { series: "BA-", structure: "Polyoxyethylene Bisphenol-A Ether", use: "Display, Coating, 3D printing, Resin", properties: "High refractive index, low volatility, Hardness" },
        { series: "BAP-", structure: "Polyoxypropylene Bisphenol-A Ether", use: "Coating, Ink", properties: "High refractive index, low volatility, Flexibility, Water resistance" },
        { series: "BPE-", structure: "Polyoxyalkylene Bisphenol-A Ether", use: "Display, Coating, 3D printing, Resin", properties: "High refractive index, low volatility" }
      ]
    },
    {
      id: "multifunctional",
      name: "Multifunctional Polyols",
      series: "TM / TP / EP / EPP / GP Series",
      description: "Based on Trimethylolpropane, Pentaerythritol & Glycerol. Formulated for high-reactivity crosslinking and structural integrity.",
      benefits: [
        "Derived from premium Trimethylolpropane, Pentaerythritol & Glycerol bases",
        "Ensures an exceptionally fast cure speed",
        "Greatly enhances crosslinking density and chemical resistance"
      ],
      seriesList: [
        { name: "TM" },
        { name: "TP" },
        { name: "EP" },
        { name: "EPP" },
        { name: "GP" }
      ],
      tableData: [
        { series: "GP-", structure: "Polyoxypropylene Glycerol Ether", use: "Paint, Ink", properties: "Fast cure speed, good hardness, good chemical resistance" },
        { series: "TM-", structure: "Polyoxyethylene Trimethylolpropane Ether", use: "Commodity, Ink, Resin", properties: "Good flexibility, fast cure speed, good chemical resistance" },
        { series: "TP-", structure: "Polyoxypropylene Trimethylolpropane Ether", use: "Coating, Ink", properties: "Low skin irritation" },
        { series: "EP-", structure: "Polyoxyethylene Pentaerythritol Ether", use: "Hard Coating", properties: "Fast cure speed, good chemical resistance, good scratch" },
        { series: "EPP-", structure: "Polyoxypropylene Pentaerythritol Ether", use: "UV/EB Ink", properties: "Flexibility, Low shrinkage" },
        { series: "DPE-", structure: "Polyoxyethylene Dipentaerythritol Ether", use: "Paint, UV Coating", properties: "Scratch resistance, elasticity, flexibility" }
      ]
    },
    {
      id: "phenol",
      name: "Phenol Derivatives",
      series: "PH / OPP / NP / DS Series",
      description: "Specialized functional monomers and diluents engineered for precise industrial resin applications.",
      benefits: [
        "Promotes remarkably robust adhesion",
        "Maintains very low shrinkage profiles",
        "Delivers high refractive index (specifically in OPP/DS series)"
      ],
      seriesList: [
        { name: "PH" },
        { name: "OPP" },
        { name: "NP" },
        { name: "DS" }
      ],
      tableData: [
        { series: "PH-", structure: "Polyoxyethylene Phenyl Ether", use: "Display, Adhesive", properties: "Low volatility, good adhesion, low shrinkage" },
        { series: "OPP-", structure: "Polyoxyethylene Phenylphenol Ether", use: "Display", properties: "High refractive index, low shrinkage, good adhesion" },
        { series: "NP-", structure: "Polyoxyethylene Nonylphenyl Ether", use: "Ink, Adhesive, DFR", properties: "Emulsification, Wettability" }
      ]
    },
    {
      id: "linear-polyols",
      name: "Linear Polyols & Diluents",
      series: "PEG / PE / MEG / DIG Series",
      description: "Highly efficient diluents and polyols designed to regulate viscosity and improve flow properties seamlessly.",
      benefits: [
        "Excellent water solubility for aqueous systems",
        "Provides necessary steric hindrance for stabilization",
        "Serves as highly effective low viscosity diluents"
      ],
      seriesList: [
        { name: "PEG" },
        { name: "PE" },
        { name: "MEG" },
        { name: "DIG" }
      ],
      tableData: [
        { series: "PEG-", structure: "Polyethylene Glycol (PEG)", use: "Hydrogel, Etchant", properties: "Water solubility, Flexibility" },
        { series: "PE-", structure: "Poly(oxyethylene-oxypropylene) Block Copolymer", use: "Display, Adhesive", properties: "Good flexibility, low odor, low skin irritation" },
        { series: "MEG-", structure: "Methoxy Polyethylene Glycol", use: "Coating, Ink", properties: "Low viscosity, Steric hindrance" },
        { series: "DIG-", structure: "Polyoxyethylene Diglycerol Ether", use: "Cosmetics, Hydrogel", properties: "Moisture retention, Skin mildness" }
      ]
    },
    {
      id: "specialty",
      name: "Specialty Alcohols",
      series: "TH / RS / HD / NPG Series",
      description: "Includes diverse bases like TH (Tetrahydrofurfuryl), RS (Allyl), HD (Hexanediol), and NPG (Neopentyl glycol).",
      benefits: [
        "Significantly improves both adhesion and flexibility",
        "Engineered and formulated to ensure low skin irritation",
        "Versatile chemical foundation for specialized resin modifications"
      ],
      seriesList: [
        { name: "TH", detail: "Tetrahydrofurfuryl" },
        { name: "RS", detail: "Allyl" },
        { name: "HD", detail: "Hexanediol" },
        { name: "NPG", detail: "Neopentyl glycol" }
      ],
      tableData: [
        { series: "TH-", structure: "Polyoxyethylene Tetrahydrofurfuryl Ether", use: "Adhesive, Ink", properties: "Good adhesion, low toxicity, low viscosity" },
        { series: "RS-", structure: "Polyoxyethylene Allyl Ether", use: "Coating, Ink", properties: "Good water solubility, excellent wetting" },
        { series: "HD-", structure: "Polyoxyethylene Hexanediol Ether", use: "Commodity, Ink", properties: "Good dilution power, weatherability, fast cure speed" },
        { series: "NPG-", structure: "Polyoxypropylene Neopentyl Glycol Ether", use: "Coating, Ink", properties: "Good flexibility, low skin irritation, weatherability" }
      ]
    },
    {
      id: "high-purity-polyols",
      name: "High-Purity Polyols Platform",
      series: "SK / RT / TR / FC Series",
      description: "A premium platform tailored for Electronics & High-End Polyurethane applications. Features SK Series (High Purity PEG), RT Series (High Purity EO/PO Copolymer), and TR/FC Series (Glycerol EO/PO Polyols).",
      benefits: [
        "Strict Ion Control: Na/K ions < 1ppm options available",
        "Extremely low alkali metal ion content (SK Series for electronics)",
        "Controls hydrophilicity/hydrophobicity balance (RT Series)",
        "Improves water repellency, flexibility, and hand-feel (TR/FC Series)",
        "Advanced Customization: Tailored EO/PO ratios upon request"
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/#business" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white font-bold tracking-wide mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Business Segments
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                <FlaskConical className="w-8 h-8" />
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
            Reaction Intermediates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-50/80 max-w-3xl leading-relaxed font-medium"
          >
            Resin Modifiers, Crosslinkers & Functional Monomers
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
                    className={`bg-white rounded-3xl p-8 lg:p-12 shadow-xl border ${product.id === 'high-purity-polyols' ? 'border-emerald-300 ring-4 ring-emerald-50' : 'border-gray-100'} flex flex-col`}
                >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                        {/* Left side: Info */}
                        <div className="lg:w-1/2 flex flex-col justify-between">
                            <div>
                                <div className={`inline-block font-bold px-4 py-1.5 rounded-lg text-sm mb-4 ${product.id === 'high-purity-polyols' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-50 text-emerald-700'}`}>
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
                        <div className={`lg:w-1/2 rounded-2xl p-8 flex flex-col justify-center border ${product.id === 'high-purity-polyols' ? 'bg-emerald-50/50 border-emerald-100' : 'bg-gray-50 border-gray-100/50'}`}>
                            <h3 className="font-bold text-gray-900 mb-6 tracking-wide text-lg flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-emerald-500" /> {product.id === 'high-purity-polyols' ? 'Key Advantages' : 'Key Benefits'}
                            </h3>
                            <ul className="space-y-4">
                                {product.benefits.map((benefit, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-4">
                                        <CheckCircle2 className={`w-6 h-6 shrink-0 ${product.id === 'high-purity-polyols' ? 'text-emerald-600' : 'text-emerald-500'}`} />
                                        <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    {/* Full-width Product Series Table */}
                    {product.tableData && (
                        <div className="w-full mt-12 mb-4">
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
                                        {product.tableData.map((row: any, rIdx) => (
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
