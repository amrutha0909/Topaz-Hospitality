import DividerOrnament from "./DividerOrnament";

export default function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="flex justify-center mb-16 md:mb-24">
          <DividerOrnament className="scale-75 md:scale-100 opacity-50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <img src="/topaz/logo.png" alt="Topaz Logo" className="h-14 md:h-10 object-contain mb-6 md:mb-8" />
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Topaz works with a select number of clients each year across custom construction, renovation, and management throughout India and beyond.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-accent text-xs tracking-widest uppercase mb-6 font-serif">Our Offices</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li>Regd. Office: Bhubaneswar, Odisha</li>
              <li>Jalandhar, Punjab</li>
              <li>Gandhi Nagar, Jammu</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-accent text-xs tracking-widest uppercase mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/how-we-work" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-accent text-xs tracking-widest uppercase mb-6 font-serif">Contact</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li>+91 9400054001</li>
              <li>+91 9149449859</li>
              <li>+91 7008072143</li>
              <li><a href="mailto:info@topazhospitality.com" className="hover:text-white transition-colors mt-2 block">info@topazhospitality.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 pt-8 border-t border-white/10 text-xs text-white/40 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Topaz Hospitality. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Client Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
