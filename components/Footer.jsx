export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest text-white uppercase mb-8">TOPAZ HOSPITALITY</h2>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed tracking-wide">
              A full-fledged hospitality solutions firm providing end to end solutions in conceptualisation, facility planning, and operations. We take care of your hospitality needs.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-8">Offices</h4>
            <ul className="space-y-5 text-gray-500 font-light text-sm tracking-wide">
              <li>Regd. Office: Bhubaneswar, Odisha</li>
              <li>Jalandhar, Punjab</li>
              <li>Gandhi Nagar, Jammu</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-8">Services</h4>
            <ul className="space-y-5 text-gray-500 font-light text-sm tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Project Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Facility Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Brand Collaboration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Marketing Services</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 tracking-[0.3em] uppercase">
          <p>&copy; {new Date().getFullYear()} TOPAZ HOSPITALITY & DEVELOPMENT SERVICES PVT. LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors duration-300">TERMS</a>
            <a href="#" className="hover:text-white transition-colors duration-300">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
