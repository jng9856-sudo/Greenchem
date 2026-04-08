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
      series: "PH / OPP / NP / DS Serie
