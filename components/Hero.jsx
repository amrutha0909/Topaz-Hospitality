"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[110svh] md:h-[150vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img 
            src="/topaz/hero.jpg" 
            alt="Topaz Hospitality" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 pointer-events-none px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-serif text-white tracking-widest uppercase mb-5 md:mb-6 drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]"
          >
            TOPAZ
          </motion.h1>
          <motion.p
            className="text-xs sm:text-sm md:text-lg text-white/85 tracking-[0.16em] md:tracking-[0.3em] uppercase max-w-xs sm:max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
          >
            We take care of your hospitality needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
