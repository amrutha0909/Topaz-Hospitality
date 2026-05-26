"use client";
import { motion } from "framer-motion";

export default function OldPortfolioPage() {
  const executedProjects = [
    { name: "Noor Mahal", location: "Karnal", desc: "A 5-Star luxury palace hotel." },
    { name: "Victoria Continental", location: "Dharmapur", desc: "A 100-room, 4-star hotel." },
    { name: "Hotel Harmony", location: "Hisar", desc: "A mid-scale business hotel." },
    { name: "17 Miles", location: "Vijaypur, Samba, J&K", desc: "A 36-room, 4-star hotel." },
    { name: "Hotel Ramada Encore", location: "Dar-es-Salaam, Tanzania", desc: "A 4-star international hotel with 118 rooms." },
    { name: "Viraj Sarovar Portico", location: "Jammu", desc: "A 47-room, 4-star hotel at Bari Brahmana." },
    { name: "K.C. Residency", location: "Jammu", desc: "A 60-room, 4-star hotel." },
    { name: "K.C. Residency", location: "Katra, Jammu", desc: "A 58-room, 4-star hotel near Vaishno Devi." },
    { name: "Peninsula", location: "Panchkula", desc: "A 3-star business hotel." },
    { name: "Palace on Ganges", location: "Assighat, Banaras", desc: "A premium heritage palace hotel on the ghats." },
    { name: "Hotel Pasricha & Banquets", location: "Jabalpur", desc: "A 47-room hotel with 3 restaurants and 5 premium banquet halls." },
    { name: "Imperium Resort", location: "Hisar", desc: "A luxurious city resort." },
    { name: "Elysium Grand", location: "Jalandhar", desc: "A highly renowned, visually charming banquet hall." },
    { name: "Kay Kay Resorts", location: "Damtal, Himachal Pradesh", desc: "A luxury valley resort." },
    { name: "The Permit House", location: "Jalandhar, Punjab", desc: "A highly popular, high-end city club." },
    { name: "The Spice Library & Café", location: "Jalandhar, Punjab", desc: "An educational cafe experience." },
    { name: "Throwback Story", location: "Jalandhar, Punjab", desc: "A premium lounge-bar." },
    { name: "Raasta Group of Restaurants", location: "Delhi NCR & Mumbai", desc: "High-concept lounges located at Hauz Khas, Cyber Hub, and Khar West." }
  ];

  const majorConsultations = [
    { name: "Lemon Tree Hotel", location: "Jammu, J&K", desc: "A 33-room, 3-star hotel." },
    { name: "Tathaghat", location: "Vaishali, Bihar", desc: "A 50-room boutique resort and meditation center." },
    { name: "Airport Snack Bars (PAC)", location: "Multiple Locations", desc: "Managed F&B lounges at Lucknow, Ranchi, Varanasi, Bagdogra, Guwahati, and Raipur airports." },
    { name: "Palash Kothi", location: "Bandhavgarh, Chhattisgarh", desc: "A nature resort spread over 24 acres." },
    { name: "Flight Kitchen of PAC", location: "Varanasi, UP", desc: "Specialized airline catering kitchen." },
    { name: "Saffron Catering Services", location: "Baddi, Himachal Pradesh", desc: "Industrial food preparation kitchen." },
    { name: "Catering at Infosys Campus", location: "Bhubaneswar, Odisha", desc: "Large-scale corporate catering setup servicing over 4,000 employees." },
    { name: "GM Resorts", location: "Hanumangarh, Rajasthan", desc: "An upscale resort and convention hotel." }
  ];

  const managementContracts = [
    { name: "Hotel Urmee", location: "Bhubaneswar, Odisha", desc: "46-room city hotel." },
    { name: "Hotel Miland Palace", location: "Bhubaneswar, Odisha", desc: "38-room business hotel." },
    { name: "Imperium Resorts", location: "Hisar, Haryana", desc: "Resort operations." },
    { name: "Rex Hotel and Resorts Pvt Ltd", location: "Samba, Jammu", desc: "Operational setup." },
    { name: "Kay Kay Resorts", location: "Damtal, Himachal Pradesh", desc: "Operations and resort management." },
    { name: "Elysium Grand Banquet Hall", location: "Jalandhar", desc: "Banquet operations." },
    { name: "Hotel 17 Miles", location: "Jammu", desc: "Hotel management." },
    { name: "Hotel Pasricha", location: "Jabalpur", desc: "Restaurant, banquet, and lawn management." },
    { name: "Hotel Symphony", location: "Hisar", desc: "Mid-scale hotel operations." },
    { name: "GM Resorts", location: "Hanumangarh, Rajasthan", desc: "Full resort management." },
    { name: "The Permit House", location: "Jalandhar", desc: "Club operations." },
    { name: "The Spice Library & Café", location: "Jalandhar", desc: "Cafe operations." },
    { name: "Throwback Story", location: "Jalandhar", desc: "Lounge operations." }
  ];

  const Section = ({ title, items, id }) => (
    <div className="mb-32" id={id}>
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-2xl md:text-4xl font-serif text-accent whitespace-nowrap">{title}</h2>
        <div className="h-px bg-white/10 w-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            className="group"
          >
            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-accent transition-colors duration-300">{item.name}</h3>
            <p className="text-xs tracking-[0.15em] text-white/40 uppercase mb-4">{item.location}</p>
            <p className="text-white/60 font-light text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-40 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-12 mb-24 md:mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gradient text-4xl sm:text-5xl md:text-8xl font-serif mb-8"
            >
              Selected Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 font-light text-lg md:text-2xl leading-relaxed"
            >
              A massive portfolio of prestigious hotel, resort, restaurant, and catering projects across India and East Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="max-w-7xl mx-auto px-5 md:px-12">
        <Section title="Executed Projects" items={executedProjects} id="executed" />
        <Section title="Major Consultations" items={majorConsultations} id="consultations" />
        <Section title="Management Contracts" items={managementContracts} id="management" />
      </section>

      {/* Interstitial CTA */}
      <section className="mt-20 py-32 border-t border-white/10 bg-turquoise-dark/30">
        <div className="max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Ready to start your project?</h2>
          <p className="text-white/60 font-light text-lg mb-12">
            Reach out to our team to discuss how we can bring your hospitality vision to life with uncompromising quality.
          </p>
          <a href="/contact" className="inline-block border border-accent text-accent px-12 py-4 tracking-[0.2em] text-sm uppercase hover:bg-accent hover:text-[#0C0C0C] transition-all duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
