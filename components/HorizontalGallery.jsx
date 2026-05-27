"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useState, useEffect } from "react";

export default function HorizontalGallery() {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollDistance = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = Math.max(0, trackWidth - viewportWidth);
      setScrollDistance(distance);
    };

    // Measure initially and after paints
    updateScrollDistance();
    const timer = setTimeout(updateScrollDistance, 150);

    window.addEventListener("resize", updateScrollDistance);
    return () => {
      window.removeEventListener("resize", updateScrollDistance);
      clearTimeout(timer);
    };
  }, []);

  const projects = [
    {
      title: "Noormahal Palace",
      img: "/topaz/gallery-1.jpg",
      link: "https://www.makemytrip.com/hotels/noormahal_palace_hotel-details-karnal.html"
    },
    {
      title: "Elysium Grand",
      img: "/topaz/gallery-2.jpg",
      link: "https://weddingz.in/jalandhar/elysium-grand-banquets-rama-mandi/"
    },
    {
      title: "Permit House",
      img: "/topaz/gallery-3.jpg",
      link: "https://www.zomato.com/jalandhar/the-permit-house-model-town"
    },
    {
      title: "Hotel 17 Miles",
      img: "/topaz/project-1.jpg",
      link: "https://www.makemytrip.com/hotels/hotel_17_miles-details-samba.html"
    },
    {
      title: "Imperium Resort",
      img: "/topaz/project-2.jpg",
      link: "https://www.makemytrip.com/hotels/imperium_resort-details-hisar.html"
    },
  ];

  return (
    <section id="projects" ref={targetRef} className="relative h-[330svh] md:h-[400vh] bg-background scroll-mt-24">
      <div className="sticky top-0 h-[100svh] md:h-screen w-full flex flex-col justify-center overflow-hidden py-24 md:py-0">
        <div className="px-5 md:px-24 mb-8 md:mb-16">
          <h2 className="text-gradient text-3xl sm:text-4xl md:text-6xl font-serif">View Our Projects</h2>
        </div>
        <motion.div ref={trackRef} style={{ x }} className="flex gap-5 md:gap-16 px-5 md:px-24 w-max">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[82vw] md:w-[45vw] h-[58svh] md:h-[60vh] shrink-0 relative group cursor-pointer overflow-hidden rounded-lg bg-secondary block"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-85 md:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent md:bg-black/20 md:group-hover:bg-black/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-full p-5 md:p-8 flex justify-between items-end">
                <p className="text-white font-serif text-2xl md:text-3xl opacity-100 transition-opacity duration-700">
                  {project.title}
                </p>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-100 group-hover:bg-accent group-hover:text-[#0C0C0C] group-hover:border-accent transition-all duration-300">
                  <span className="transform -rotate-45">&#8594;</span>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
