"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useState, useEffect } from "react";

export default function HorizontalGallery() {
  const [isMobile, setIsMobile] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-78%" : "-56%"]);

  const projects = [
    { title: "Karnal Palace", img: "/topaz/gallery-1.jpg" },
    { title: "Dharmapur Hotel", img: "/topaz/gallery-2.jpg" },
    { title: "Dar-es-Salaam", img: "/topaz/gallery-3.jpg" },
    { title: "Vijaypur Hotel", img: "/topaz/project-1.jpg" },
    { title: "Imperium Resort", img: "/topaz/project-2.jpg" },
  ];

  return (
    <section id="projects" ref={targetRef} className="relative h-[330svh] md:h-[400vh] bg-background scroll-mt-24">
      <div className="sticky top-0 h-[100svh] md:h-screen w-full flex flex-col justify-center overflow-hidden py-24 md:py-0">
        <div className="px-5 md:px-24 mb-8 md:mb-16">
          <h2 className="text-gradient text-3xl sm:text-4xl md:text-6xl font-serif">View Our Projects</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-5 md:gap-16 px-5 md:px-24 w-max">
          {projects.map((project, index) => (
            <div key={index} className="w-[82vw] md:w-[45vw] h-[58svh] md:h-[60vh] shrink-0 relative group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-secondary">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-85 md:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent md:bg-black/20 md:group-hover:bg-black/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 flex justify-between items-end">
                <p className="text-white font-serif text-2xl md:text-3xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 transform md:translate-y-4 md:group-hover:translate-y-0">
                  {project.title}
                </p>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                  <span className="transform -rotate-45">&#8594;</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
