"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled || menuOpen ? "bg-[#151515]/95 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-5 md:py-8 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-serif tracking-widest text-white uppercase flex items-center gap-4">
          <a href="#" aria-label="Topaz Hospitality home">
            <img src="/topaz/logo.png" alt="Topaz Logo" className="h-16 md:h-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]" />
          </a>
        </div>
        <div className="hidden md:flex space-x-12 text-xs tracking-[0.2em] text-gray-400">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors duration-300">
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
        <a href="#contact" className="text-white hidden md:block border-b border-transparent hover:border-white transition-colors duration-300 pb-1 text-xs tracking-[0.2em]">
          REACH US
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden text-white p-2 -mr-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-5 pt-6 pb-5 space-y-1 bg-[#151515]/95 border-t border-white/10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 text-sm tracking-[0.16em] uppercase text-white/80 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block pt-5 text-sm tracking-[0.16em] uppercase text-[#C8AC6B]"
          >
            Reach Us
          </a>
        </div>
      </div>
    </nav>
  );
}
