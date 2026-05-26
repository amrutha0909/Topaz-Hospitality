"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/how-we-work" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || menuOpen ? "bg-background/95 backdrop-blur-md py-2 border-b border-white/5" : "bg-transparent py-5 md:py-8 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center w-full">
        <div className="flex items-center select-none">
          <Link href="/" aria-label="Topaz Hospitality home" className="block">
            <div 
              className={`overflow-hidden transition-all duration-500 flex justify-center items-start ${
                scrolled 
                  ? "h-11 w-11 md:h-12 md:w-12" 
                  : "h-20 w-24 md:h-24 md:w-28"
              }`}
            >
              <img 
                src="/topaz/logo.png" 
                alt="Topaz Logo" 
                className={`w-full h-auto object-contain transition-all duration-500 transform origin-top ${
                  scrolled 
                    ? "-translate-y-1 scale-95" 
                    : "scale-100"
                }`} 
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-12 text-xs tracking-[0.2em] text-gray-400">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`group relative transition-colors duration-300 ${isActive ? "text-white" : "hover:text-accent"}`}>
                <span className={`absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </div>
        <Link href="/contact" className="text-white hidden md:block border-b border-transparent hover:border-white transition-colors duration-300 pb-1 text-xs tracking-[0.2em]">
          REACH US
        </Link>
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
        <div className="px-5 pt-6 pb-5 space-y-1 bg-background/95 border-t border-white/10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-4 text-sm tracking-[0.16em] uppercase border-b border-white/10 group relative ${isActive ? "text-white" : "text-white/80 hover:text-accent transition-colors"}`}
              >
                <span className={`inline-block mr-2 w-1.5 h-1.5 rounded-full bg-accent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
