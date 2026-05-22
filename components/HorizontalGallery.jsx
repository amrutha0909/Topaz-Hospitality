"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const projects = [
    { title: "Karnal Palace", img: "/topaz/gallery-1.jpg" },
    { title: "Dharmapur Hotel", img: "/topaz/gallery-2.jpg" },
    { title: "Dar-es-Salaam", img: "/topaz/gallery-3.jpg" },
    { title: "Vijaypur Hotel", img: "/topaz/project-1.jpg" },
  ];

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-4 md:px-24 mb-12">
          <h2 className="text-xs tracking-[0.3em] text-gray-500 uppercase">Featured Developments</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-12 px-4 md:px-24">
          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] md:w-[45vw] h-[55vh] md:h-[65vh] shrink-0 relative group cursor-pointer">
              <img 
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
              <p className="absolute bottom-8 left-8 text-white font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
                {project.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
