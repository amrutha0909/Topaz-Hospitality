"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import DividerOrnament from "../../components/DividerOrnament";

export default function AboutPage() {
  const directors = [
    { name: "Pramod Sukumaran", role: "Director", image: "/topaz/pramod-sukumaran.jpg" },
    { name: "Ashok Patra", role: "Director", image: "/topaz/ashok-patra.jpg" },
    { name: "Sanju Nair", role: "Director", image: "/topaz/sanju-nair.jpg" },
    { name: "Vikash Yadav", role: "Director", image: "/topaz/vikash-yadav.jpg" },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 mb-24 md:mb-40">
        <div className="flex flex-col items-center text-center">
          <DividerOrnament className="mb-10 scale-75 md:scale-100" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gradient text-4xl sm:text-5xl md:text-8xl font-serif mb-8 max-w-4xl"
          >
            Crafting Enduring Hospitality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 font-light text-lg md:text-2xl max-w-2xl leading-relaxed"
          >
            We are a full-fledged hospitality consulting and management firm comprising experienced, young, and dynamic professionals.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-turquoise-dark py-24 md:py-32 relative">
        <div className="max-w-5xl mx-auto px-5 md:px-12 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-accent mb-6">Our Story</h2>
            <div className="w-12 h-px bg-accent mb-8"></div>
            <p className="text-white/70 font-light text-base md:text-lg leading-loose mb-6">
              Topaz Hospitality Solutions came into existence in 2008 with a single standard: provide end-to-end solutions worth remembering.
            </p>
            <p className="text-white/70 font-light text-base md:text-lg leading-loose">
              From ground-up custom construction to operations management, everything we do is guided by a genuine commitment to craft, transparency, and lasting relationships. We provide comprehensive solutions under a single roof, from conceptualization to brand collaboration and F&B marketing.
            </p>
          </div>
          <div className="md:w-1/2 w-full aspect-square md:aspect-auto md:h-[600px] relative">
            {/* Elegant placeholder or abstract image */}
            <div className="absolute inset-0 border border-white/10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <span className="font-serif text-accent text-9xl opacity-20">2008</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / How We Work CTA */}
      <section className="py-24 md:py-40 max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-serif text-gradient mb-6">How We Work</h2>
          <p className="text-white/60 font-light text-lg max-w-2xl mx-auto mb-10">
            Our modular service framework is divided into specific phases, from pre-development facility planning to final operational launch and management contracts.
          </p>
          <Link href="/how-we-work" className="inline-block border border-accent text-accent px-10 py-4 tracking-[0.2em] text-sm uppercase hover:bg-accent hover:text-[#0C0C0C] transition-all duration-300">
            Explore Our Methodology
          </Link>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div>
              <h2 className="text-3xl md:text-6xl font-serif text-gradient mb-6">Leadership</h2>
              <p className="text-white/60 font-light text-lg max-w-xl">
                Guided by a board of directors with deep roots in hospitality management, driving strategic consultations and operational excellence.
              </p>
            </div>
            <DividerOrnament className="scale-75 origin-right hidden md:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {directors.map((director, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-turquoise-dark relative border border-white/10">
                  {/* Using a placeholder if image fails or isn't present, with grayscale effect */}
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback stylized initials */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-turquoise-dark grayscale group-hover:grayscale-0 transition-all duration-700">
                    <span className="text-6xl font-serif text-accent/50 group-hover:text-accent transition-colors duration-700">
                      {director.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">{director.name}</h3>
                <p className="text-xs tracking-[0.2em] text-white/50 uppercase">{director.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
