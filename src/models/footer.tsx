import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  ChevronUp,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-500 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.02] uppercase pointer-events-none select-none">
        Acrel Insight
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Mission & News */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <span className="text-3xl font-black text-white tracking-tighter uppercase transition-colors group-hover:text-emerald-500">
                TokenPap
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
               Smart Metering & Vending Solution
            </p>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Subscribe for Updates</p>
              <div className="flex bg-white/5 p-1 rounded-sm border border-white/10 focus-within:border-emerald-500 transition-colors">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none focus:ring-0 text-xs px-3 py-2 w-full text-white" 
                />
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-sm transition-colors text-[10px] font-black uppercase">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Solutions</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/Applications" className="hover:text-emerald-400 transition-colors">Software Development</Link></li>
              <li><Link to="/Networking" className="hover:text-emerald-400 transition-colors">Connectivity Systems</Link></li>
              <li><Link to="/Infrastructure" className="hover:text-emerald-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/Cybersecurity" className="hover:text-emerald-400 transition-colors">Advanced Security</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Headquarters</h4>
            <ul className="space-y-6 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Nairobi, Kenya<br/>Kiambere Road, Upper Hill</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+254741099909" className="hover:text-white transition-colors">+254 741 099 909</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:info@tokenpap.com" className="hover:text-white transition-colors">info@tokenpap.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Links & Social */}
          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Quick Links</h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest mb-10">
              <Link to="/about" className="hover:text-emerald-400 transition-colors">About TokenPap</Link>
              <Link to="/contact" className="hover:text-emerald-400 transition-colors">Get A Quote</Link>
              <Link to="/careers" className="hover:text-emerald-400 transition-colors">Global Careers</Link>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <p>&copy; {currentYear} TOKENPAP. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block opacity-20">|</span>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-emerald-500 transition-colors"
          >
            Back to Top
            <div className="p-2 bg-white/5 border border-white/10 rounded-sm group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all">
              <ChevronUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
