"use client";

import { motion } from "framer-motion";
import { TreePine, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-sm py-2 md:py-4' : 'bg-transparent py-3 md:py-6'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-start h-12 w-32 sm:h-16 sm:w-40 md:h-20 md:w-48 relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/logo.png?v=3" 
              alt="Green Chemical Logo" 
              className="w-full h-full object-contain object-left"
            />
          </motion.div>
        </Link>
        
        <div className={`hidden md:flex items-center gap-10 text-base md:text-lg font-bold tracking-wide ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
          <Link href="/#about" className="hover:text-emerald-400 transition-colors">About Us</Link>
          <Link href="/#business" className="hover:text-emerald-400 transition-colors">Business Segments</Link>
          <Link href="/#materials" className="hover:text-emerald-400 transition-colors">Other Materials</Link>
        </div>

        <div className="hidden md:flex items-center relative">
          <a 
            href="https://www.korgc.com/eng/cs/menu_05.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-base md:text-lg font-bold tracking-wide px-8 py-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20' : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20'}`}>
            Contact Us
          </a>
        </div>

        <button 
          className="md:hidden p-2 hover:opacity-70"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-emerald-900/10 p-4 flex flex-col gap-4 bg-white/95 text-gray-900 shadow-xl"
        >
          <div className="flex flex-col gap-4 p-4">
            <Link href="/#about" className="text-lg font-bold hover:text-emerald-600">About Us</Link>
            <Link href="/#business" className="text-lg font-bold hover:text-emerald-600">Business</Link>
            <Link href="/#materials" className="text-lg font-bold hover:text-emerald-600">Other Materials</Link>
            <a href="https://www.korgc.com/eng/cs/menu_05.html" target="_blank" rel="noopener noreferrer" className="mt-4 bg-emerald-600 text-white font-bold py-3 rounded-xl text-center block w-full">
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
