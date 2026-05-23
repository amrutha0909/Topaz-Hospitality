import DividerOrnament from "./DividerOrnament";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-secondary py-24 md:py-40 px-5 md:px-12 scroll-mt-24 mt-8 md:mt-16">
      <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 z-20 pointer-events-none">
        <DividerOrnament className="drop-shadow-2xl scale-[1.5] md:scale-[2.5]" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-gradient text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-8">Let's Build Your Legacy</h2>
        <p className="text-base md:text-lg text-white/60 font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          If you’re planning a custom hospitality project, facility overhaul, or operational restructuring, we’d like to hear about it.
        </p>
        
        <form className="max-w-3xl mx-auto space-y-7 md:space-y-8 text-left bg-orange-mid p-8 md:p-14 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
            <div>
              <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">First Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">Last Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">Email Address</label>
            <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" />
          </div>
          <div>
            <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">Tell us about your project</label>
            <textarea rows="4" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
          </div>
          <div className="pt-8 text-center">
            <button type="button" className="w-full sm:w-auto bg-[#012c3d] text-accent font-serif px-12 py-4 hover:bg-accent hover:text-[#012c3d] transition-colors duration-300 shadow-xl">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 z-20 pointer-events-none">
        <DividerOrnament className="drop-shadow-2xl scale-[1.25] md:scale-[1.75]" />
      </div>
    </section>
  );
}
