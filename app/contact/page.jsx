import ContactCTA from "../../components/ContactCTA";
import DividerOrnament from "../../components/DividerOrnament";

export default function ContactPage() {
  const offices = [
    {
      city: "Bhubaneswar (Regd. Office)",
      address: "Hotel Urmee, Rasulgarh Square, Plot No - 424, Bhubaneswar - 751010, Odisha."
    },
    {
      city: "Jalandhar",
      address: "421 R, near Thind Eye Hospital, Abadpura, Model Town, Jalandhar, Punjab 144001."
    },
    {
      city: "Jammu",
      address: "12 BC, Gandhi Nagar, Jammu - 180004."
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-40">
      <section className="max-w-7xl mx-auto px-5 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
          <div className="w-full md:w-1/2">
            <DividerOrnament className="mb-10 scale-75 md:scale-100 origin-left" />
            <h1 className="text-gradient text-4xl sm:text-5xl md:text-8xl font-serif mb-8">
              Reach Us
            </h1>
            <p className="text-white/60 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Whether you are planning a custom hospitality project, facility overhaul, or operational restructuring, our team is ready to assist.
            </p>
            
            <div className="mb-12">
              <h3 className="text-accent text-xs tracking-widest uppercase mb-6 font-serif">Direct Lines</h3>
              <ul className="space-y-3 text-white/80 font-light text-lg">
                <li>+91 9400054001</li>
                <li>+91 9149449859</li>
                <li>+91 7008072143</li>
                <li className="pt-2">
                  <a href="mailto:info@topazhospitality.com" className="text-accent hover:text-white transition-colors">
                    info@topazhospitality.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 bg-turquoise-dark p-10 md:p-14 border border-white/10 shadow-2xl relative">
            <h3 className="text-accent text-xs tracking-widest uppercase mb-10 font-serif border-b border-white/10 pb-4">Our Offices</h3>
            <div className="space-y-10">
              {offices.map((office, idx) => (
                <div key={idx}>
                  <h4 className="text-white text-lg font-serif mb-3">{office.city}</h4>
                  <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The existing Contact Form Component */}
      <div className="pb-24">
        <ContactCTA />
      </div>
    </main>
  );
}
