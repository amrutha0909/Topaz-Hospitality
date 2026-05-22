"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const projects = [
    { title: "Karnal Palace", img: "/topaz/gallery-1.jpg" },
    { title: "Dharmapur Hotel", img: "/topaz/gallery-2.jpg" },
    { title: "Dar-es-Salaam", img: "/topaz/gallery-3.jpg" },
    { title: "Vijaypur Hotel", img: "/topaz/project-1.jpg" },
    { title: "Imperium Resort", img: "/topaz/project-2.jpg" },
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#2e2e2e]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-4 md:px-24 mb-16">
          <h2 className="text-gradient text-4xl md:text-6xl font-serif">View Our Projects</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-4 md:px-24 w-max">
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] md:w-[45vw] h-[60vh] shrink-0 relative group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <p className="text-white font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
                  {project.title}
                </p>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <span className="transform -rotate-45">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
