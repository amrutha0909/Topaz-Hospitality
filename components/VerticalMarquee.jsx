"use client";
import { motion } from "framer-motion";

export default function VerticalMarquee() {
  const projects = [
    {
      title: "Hotels & Motels",
      desc: "Full-scale luxury accommodations and business hotels.",
      img: "/topaz/gallery-1.jpg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Resorts & Spa",
      desc: "Boutique retreats, wellness spas, and structural resort plans.",
      img: "/topaz/project-2.jpg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Restaurants & Cafés",
      desc: "Conceptual dining venues and specialty kitchen setups.",
      img: "/topaz/gallery-2.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Clubs, Bars & Pubs",
      desc: "High-volume city clubs and lounge-bars.",
      img: "/topaz/project-1.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Industrial Catering",
      desc: "Large-scale institutional kitchens and flight catering F&B plans.",
      img: "/topaz/reveal.jpg",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-32 relative px-5 md:px-12 scroll-mt-24">
      {/* Background vignette elements */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />

      {/* Foreground Titles */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gradient text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-8"
        >
          Sectors We Serve
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-white/50 font-light max-w-2xl leading-relaxed tracking-wider uppercase"
        >
          Hotels &bull; Motels &bull; Restaurants &bull; Resorts &bull; Bars &bull; Pubs &bull; Industrial Catering &bull; Canteens &bull; Clubs
        </motion.p>
      </div>

      {/* Premium Static Masonry Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px] relative z-20">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            className={`group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-accent/40 transition-all duration-700 ease-out ${proj.span}`}
          >
            {/* Image Zoom & Grayscale Transitions */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.6] group-hover:scale-102 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>

            {/* Static Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/85 via-[#0C0C0C]/10 to-transparent pointer-events-none" />

            {/* Card Content Description */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
              <h3 className="text-white font-serif text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors duration-500">
                {proj.title}
              </h3>
              <p className="text-white/50 font-light text-xs md:text-sm leading-relaxed max-w-md translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                {proj.desc}
              </p>
            </div>

            {/* Accent Corner Glow */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
