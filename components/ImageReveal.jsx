"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ImageReveal({ src, alt }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative overflow-hidden group w-full h-[50vh] md:h-[80vh]">
      <motion.div
        initial={{ y: "0%" }}
        animate={isInView ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 bg-background z-10"
      />
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
      />
    </div>
  );
}
