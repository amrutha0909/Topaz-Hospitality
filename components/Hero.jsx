"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src="/topaz/hero.jpg" 
          alt="Topaz Hospitality" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-6xl md:text-[8rem] font-serif text-white mb-6 tracking-tighter uppercase"
        >
          Topaz
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto font-light tracking-[0.2em] mb-12 uppercase"
        >
          We take care of your hospitality needs. Since 2008.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="px-10 py-4 bg-white text-black font-medium tracking-[0.2em] text-xs uppercase hover:bg-gray-200 transition-colors duration-300"
        >
          Explore Projects
        </motion.button>
      </div>
    </section>
  );
}
