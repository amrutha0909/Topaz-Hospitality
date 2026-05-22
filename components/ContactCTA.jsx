export default function ContactCTA() {
  return (
    <section className="bg-[#1a1a1a] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-gradient text-4xl md:text-6xl font-serif mb-8">Let's Build Your Legacy</h2>
        <p className="text-lg text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          If you’re planning a custom hospitality project, facility overhaul, or operational restructuring, we’d like to hear about it.
        </p>
        
        <form className="max-w-2xl mx-auto space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">First Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#C8AC6B] transition-colors" />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">Last Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#C8AC6B] transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">Email Address</label>
            <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#C8AC6B] transition-colors" />
          </div>
          <div>
            <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">Tell us about your project</label>
            <textarea rows="4" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#C8AC6B] transition-colors resize-none"></textarea>
          </div>
          <div className="pt-8 text-center">
            <button type="button" className="bg-[#C8AC6B] text-black font-serif px-12 py-4 hover:bg-white transition-colors duration-300">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
