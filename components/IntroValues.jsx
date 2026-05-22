"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroValues() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Layer 2 (Execution) Animation: Text slides from right, Image slides from left
  const execTextX = useTransform(scrollYProgress, [0.15, 0.45], ["100%", "0%"]);
  const execImageX = useTransform(scrollYProgress, [0.15, 0.45], ["-100%", "0%"]);

  // Layer 3 (Management) Animation: Text slides from left, Image slides from right
  const manageTextX = useTransform(scrollYProgress, [0.55, 0.85], ["-100%", "0%"]);
  const manageImageX = useTransform(scrollYProgress, [0.55, 0.85], ["100%", "0%"]);

  return (
    <div className="bg-[#2e2e2e] relative z-20 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-32 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gradient text-4xl md:text-6xl font-serif mb-8 mx-auto"
        >
          Built for Excellence
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-white/80 font-light leading-relaxed"
        >
          Custom project management, facility planning, and operations — crafted with the care that true hospitality deserves.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-white/60 font-light leading-relaxed mt-8 max-w-3xl mx-auto"
        >
          TOPAZ HOSPITALITY SOLUTIONS came into existence in 2008 with a single standard: provide end-to-end solutions worth remembering. From ground-up custom construction to operations management, everything we do is guided by a genuine commitment to craft, transparency, and lasting relationships.
        </motion.p>
      </div>

      <section ref={containerRef} className="h-[300vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex">
          
          {/* Layer 1: Concept (Base Layer) */}
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-10">
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#1a1a1a] flex flex-col justify-center px-8 md:px-24">
              <h2 className="text-gradient text-5xl md:text-7xl font-serif mb-6">Concept</h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Our visions are meant to be enduring. That standard shapes how we approach every facility plan, every material selection, and every brand collaboration.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
              <img src="/topaz/gallery-1.jpg" alt="Concept" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Layer 2: Execution */}
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row pointer-events-none z-20">
            {/* Execution Image (Left) */}
            <motion.div style={{ x: execImageX }} className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden pointer-events-auto shadow-2xl">
              <img src="/topaz/reveal.jpg" alt="Execution" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            
            {/* Execution Text (Right) */}
            <motion.div style={{ x: execTextX }} className="w-full md:w-1/2 h-1/2 md:h-full bg-[#222222] flex flex-col justify-center px-8 md:px-24 pointer-events-auto shadow-2xl">
              <h2 className="text-gradient text-5xl md:text-7xl font-serif mb-6">Execution</h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Every project we undertake is approached with the understanding that what we build will outlast the building process — which makes the details non-negotiable.
              </p>
            </motion.div>
          </div>

          {/* Layer 3: Management */}
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row pointer-events-none z-30">
            {/* Management Text (Left) */}
            <motion.div style={{ x: manageTextX }} className="w-full md:w-1/2 h-1/2 md:h-full bg-[#111111] flex flex-col justify-center px-8 md:px-24 pointer-events-auto shadow-2xl">
              <h2 className="text-gradient text-5xl md:text-7xl font-serif mb-6">Management</h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                We say what we mean and follow through on what we’ve promised. That consistency is what allows our operations to excel well beyond the launch itself.
              </p>
            </motion.div>
            
            {/* Management Image (Right) */}
            <motion.div style={{ x: manageImageX }} className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden pointer-events-auto shadow-2xl">
              <img src="/topaz/project-1.jpg" alt="Management" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
