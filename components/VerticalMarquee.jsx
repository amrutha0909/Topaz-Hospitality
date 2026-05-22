"use client";
import { motion } from "framer-motion";

export default function VerticalMarquee() {
  const images = [
    "/topaz/gallery-1.jpg",
    "/topaz/project-1.jpg",
    "/topaz/gallery-2.jpg",
    "/topaz/project-2.jpg",
    "/topaz/gallery-3.jpg",
    "/topaz/reveal.jpg",
  ];

  // We duplicate images to create a seamless infinite loop
  const loopImages = [...images, ...images];

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden h-[90svh] md:h-[120vh]">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background via-transparent to-background"></div>
      
      {/* Text Overlay in Foreground */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-gradient uppercase tracking-wide mb-6 md:mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
        >
          Types of Projects<br />Undertaken
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[11px] md:text-sm lg:text-base text-white/90 font-bold tracking-[0.12em] md:tracking-[0.2em] uppercase max-w-xs md:max-w-4xl leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
        >
          Hotels | Motels | Restaurants | Resorts | Bars | Pubs | Industrial<br />
          Catering | Canteens | Clubs
        </motion.p>
      </div>

      <div className="flex justify-center gap-4 md:gap-8 h-[180vh] md:h-[200vh] gallery-marquee -mt-[40vh] opacity-40">
        
        {/* Column 1 (Scrolls Up) */}
        <motion.div 
          animate={{ y: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4"
        >
          {loopImages.map((src, i) => (
            <div key={`col1-${i}`} className="h-[34vh] md:h-[40vh] w-full rounded-lg overflow-hidden shrink-0">
              <img src={src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Topaz Gallery" />
            </div>
          ))}
        </motion.div>

        {/* Column 2 (Scrolls Down) */}
        <motion.div 
          animate={{ y: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-[10vh]"
        >
          {loopImages.map((src, i) => (
            <div key={`col2-${i}`} className="h-[40vh] md:h-[50vh] w-full rounded-lg overflow-hidden shrink-0">
              <img src={src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Topaz Gallery" />
            </div>
          ))}
        </motion.div>

        {/* Column 3 (Scrolls Up) */}
        <motion.div 
          animate={{ y: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex flex-col gap-4 md:gap-8 w-1/3 md:w-1/4 pt-[20vh] hidden md:flex"
        >
          {loopImages.map((src, i) => (
            <div key={`col3-${i}`} className="h-[45vh] w-full rounded-lg overflow-hidden shrink-0">
              <img src={src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Topaz Gallery" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
