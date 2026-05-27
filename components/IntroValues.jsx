"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function IntroValues() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const values = [
    {
      title: "Concept",
      num: "01",
      desc: "Our visions are meant to be enduring. That standard shapes how we approach every facility plan, every material selection, and every brand collaboration.",
      img: "/topaz/gallery-1.jpg",
    },
    {
      title: "Execution",
      num: "02",
      desc: "Every project we undertake is approached with the understanding that what we build will outlast the building process, which makes the details non-negotiable.",
      img: "/topaz/hero.jpg",
    },
    {
      title: "Management",
      num: "03",
      desc: "We say what we mean and follow through on what we have promised. That consistency is what allows our operations to excel well beyond the launch itself.",
      img: "/topaz/project-1.jpg",
    },
  ];

  return (
    <div id="services" className="bg-background relative z-20 pt-24 md:pt-32 scroll-mt-24 px-5 md:px-12">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gradient text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-8 mx-auto"
        >
          Built for Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-xl text-white/60 font-light max-w-2xl leading-relaxed"
        >
          Custom project management, facility planning, and operations, crafted with the care that true hospitality deserves.
        </motion.p>
      </div>

      {/* Sleek Horizontal Columns Accordion */}
      <div className="max-w-7xl mx-auto w-full h-[60vh] md:h-[65vh] flex flex-col md:flex-row gap-4 mb-20 md:mb-32 overflow-hidden">
        {values.map((val, idx) => {
          const isExpanded = hoveredIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onClick={() => setHoveredIndex(idx)}
              className={`relative h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/5 ${
                isExpanded ? "flex-[2.5] md:flex-[2.8] border-accent/20" : "flex-[1]"
              }`}
            >
              {/* Background Image with Reveal Zoom */}
              <div
                className="absolute inset-0 transition-transform duration-1000 ease-out"
                style={{
                  transform: isExpanded ? "scale(1.04)" : "scale(1)",
                }}
              >
                <img
                  src={val.img}
                  alt={val.title}
                  className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700"
                  style={{
                    filter: isExpanded ? "grayscale(0) brightness(0.65)" : "grayscale(1) brightness(0.35)",
                  }}
                />
              </div>

              {/* Card Contents */}
              <div
                className={`absolute inset-0 flex flex-col justify-between z-10 select-none transition-all duration-500 ${
                  isExpanded ? "p-6 md:p-10" : "p-4 py-5 md:px-6 md:py-10"
                }`}
              >
                {/* Header Row */}
                <div className="flex justify-between items-start">
                  <span className="font-serif text-accent text-lg tracking-widest">{val.num}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-accent transition-all duration-500"
                    style={{ opacity: isExpanded ? 1 : 0.2 }}
                  />
                </div>

                {/* Footer Section */}
                <div className="max-w-xl">
                  <h3
                    className={`text-gradient font-serif transition-all duration-500 ${
                      isExpanded
                        ? "text-3xl sm:text-4xl md:text-5xl mb-4"
                        : "text-xl sm:text-2xl mb-0"
                    }`}
                  >
                    {val.title}
                  </h3>
                  
                  {/* Collapsible/Expandable Description Block */}
                  <div
                    className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                      maxHeight: isExpanded ? "200px" : "0px",
                      opacity: isExpanded ? 0.75 : 0,
                    }}
                  >
                    <p className="text-white text-sm md:text-base font-light leading-relaxed mb-2">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ambient Glow Mask */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-transparent to-transparent pointer-events-none transition-opacity duration-700"
                style={{ opacity: isExpanded ? 0.9 : 0.6 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
