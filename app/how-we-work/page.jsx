"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Building, Settings, Utensils, Hotel, ChefHat, Scissors, LayoutDashboard } from "lucide-react";
import DividerOrnament from "../../components/DividerOrnament";

export default function HowWeWorkPage() {
  const [activeDetailSection, setActiveDetailSection] = useState(null);

  const pillars = [
    {
      title: "Complete Facility Planning",
      icon: <Building className="w-8 h-8 text-accent" />,
      desc: "End-to-end area programming and project reports to assist developers in executing operationally efficient and viable projects from the ground up."
    },
    {
      title: "Specific Area Planning",
      icon: <LayoutDashboard className="w-8 h-8 text-accent" />,
      desc: "Targeted interventions for specialized zones including specialty restaurants, high-volume kitchens, and luxury rooftop bars."
    },
    {
      title: "Management Contracts",
      icon: <Settings className="w-8 h-8 text-accent" />,
      desc: "Comprehensive operational takeovers ensuring sustained brand excellence, seamless operations, and financial viability."
    }
  ];

  const scopeOfWork = [
    {
      category: "Strategy & Operations",
      items: ["Area Program & Work Floor Efficiency", "Project Costing & Alternate Sourcing", "Food Cost Management", "Menu Planning & Food Trials", "Portion Fixing", "Presentation of Food and Drinks"]
    },
    {
      category: "Departmental Planning",
      items: ["Front Office & Business Centers", "Housekeeping & Laundry", "All Kitchen & B.O.H Areas", "All Restaurants", "Travel Desk & Maintenance", "Personal Department & Sales"]
    },
    {
      category: "Systems & Integration",
      items: ["Staff Training & Time Office", "Telephone & Computer Schedule", "Planning of Staff Areas", "Cloak Room for Guests", "In-house & In-room Facilities Planning"]
    }
  ];

  const detailingWork = [
    {
      id: "kitchen",
      title: "Kitchen & Bakery",
      icon: <ChefHat className="w-6 h-6 text-white/50" />,
      items: ["Systematic Arrangement Plan", "Preliminary & Final Layouts", "Rough-in Drawings (Electrical & Plumbing)", "Section & Elevation of Equipment", "Specification for Local & Imported Equipment", "Tenders & Fabrication Details"]
    },
    {
      id: "fnb",
      title: "Restaurants & Bars",
      icon: <Utensils className="w-6 h-6 text-white/50" />,
      items: ["Restaurant Layout Plan", "Selection of Furniture & Wood Work", "Upholstery Selection", "Menu Designing", "Selection of Crockery, Cutlery & Glassware"]
    },
    {
      id: "rooms",
      title: "Front Office & Rooms",
      icon: <Hotel className="w-6 h-6 text-white/50" />,
      items: ["Location of Telecom / Wi-Fi Outlets", "Lock & Key Specifications", "Hardware Schedule", "Reception Counter Setup", "Bell Desk & Travel Desk Setup", "Courier & Foreign Currency Counter"]
    },
    {
      id: "laundry",
      title: "Laundry Systems",
      icon: <Settings className="w-6 h-6 text-white/50" />,
      items: ["Schematic Layout Plan", "Masonry Work Plan", "Rough in Drawings (Electrical/Plumbing)", "Specifications & Tenders for Equipment", "Standard Details and Drawings"]
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-40 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <DividerOrnament className="mb-10 scale-75 md:scale-100 origin-left" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gradient text-4xl sm:text-5xl md:text-8xl font-serif mb-8"
            >
              The Anatomy of Hospitality
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 font-light text-lg md:text-xl leading-relaxed"
            >
              We provide comprehensive solutions under a single roof. From raw conceptualization and facility planning to operational setup and brand integration, every detail is meticulously engineered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-turquoise-light p-8 md:p-12 rounded-xl hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-start group relative overflow-hidden"
            >
              <div className="mb-6 p-4 bg-background/40 rounded-full border border-white/10 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4">{pillar.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scope of Work - Sticky Layout */}
      <section className="bg-turquoise-dark py-24 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Sticky Header */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
              <h2 className="text-3xl md:text-5xl font-serif text-accent mb-6">Scope of Work</h2>
              <div className="w-12 h-px bg-accent mb-8"></div>
              <p className="text-white/70 font-light text-base md:text-lg leading-relaxed">
                Our technical services span every operational layer. We engineer efficiency from the back of house to the guest experience.
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="w-full lg:w-2/3 space-y-16">
              {scopeOfWork.map((section, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-serif text-white border-b border-white/10 pb-4 mb-6">
                    <span className="text-accent/50 text-sm tracking-widest uppercase mr-4">0{idx + 1}</span>
                    {section.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-white/60 font-light text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Detailing Work - Bento Box Accordion */}
      <section className="py-24 md:py-40 max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif text-gradient mb-6">The Micro-Level Details</h2>
          <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
            Hospitality is defined by the invisible details. Explore our exhaustive planning protocols across specific operational sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {detailingWork.map((section) => {
            const isActive = activeDetailSection === section.id;
            return (
              <motion.div
                key={section.id}
                layout
                onClick={() => setActiveDetailSection(isActive ? null : section.id)}
                className={`cursor-pointer border transition-all duration-500 overflow-hidden ${
                  isActive ? "border-accent bg-white/5" : "border-white/10 bg-transparent hover:border-white/30"
                }`}
              >
                <div className="p-8 md:p-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <h3 className={`text-xl md:text-2xl font-serif transition-colors ${isActive ? "text-accent" : "text-white"}`}>
                      {section.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-6 h-6 ${isActive ? "text-accent" : "text-white/50"}`} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-10 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 border-t border-white/5">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-accent/50 rounded-full flex-shrink-0" />
                            <span className="text-white/70 font-light text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="mt-10 py-32 border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Let's craft your project.</h2>
        <a href="/contact" className="inline-block border border-accent text-accent px-12 py-4 tracking-[0.2em] text-sm uppercase hover:bg-accent hover:text-[#0C0C0C] transition-all duration-300">
          Start a Conversation
        </a>
      </section>
    </main>
  );
}
