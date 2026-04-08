import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Competencies } from "@/components/Competencies";
import { Features } from "@/components/Features";
import { FutureMaterials } from "@/components/FutureMaterials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Competencies />
      <Features />
      <FutureMaterials />
      <Footer />
    </main>
  );
}
