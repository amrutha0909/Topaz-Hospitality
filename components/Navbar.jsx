"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? "glass py-4 border-b border-white/5" : "bg-transparent py-8 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-serif tracking-widest text-white uppercase flex items-center gap-4">
          <img src="/topaz/logo.png" alt="Topaz Logo" className="h-8 md:h-10 object-contain invert brightness-0" />
        </div>
        <div className="hidden md:flex space-x-12 text-xs tracking-[0.2em] text-gray-400">
          <a href="#" className="hover:text-white transition-colors duration-300">SERVICES</a>
          <a href="#" className="hover:text-white transition-colors duration-300">PROJECTS</a>
          <a href="#" className="hover:text-white transition-colors duration-300">CONTACT</a>
        </div>
        <button className="text-white hidden md:block border-b border-transparent hover:border-white transition-colors duration-300 pb-1 text-xs tracking-[0.2em]">
          REACH US
        </button>
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
