import React, { useState, useEffect } from "react";
import { lockScroll, unlockScroll } from '../utils/scrollLock';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (isTermsOpen || isPrivacyOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isTermsOpen, isPrivacyOpen]);

  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-32">
      <div className="container mx-auto px-6">
        {/* MASSIVE CTA */}
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 -translate-y-40 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
              Ready to Scale your <br />
              Financial Integrity?
            </h3>
            <p className="text-emerald-50 text-xl font-medium">
              Connect with an institutional-grade partner today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 shrink-0 relative z-10">
            <button
              onClick={onInquire}
              className="bg-emerald-950 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl"
            >
              Start Free Audit
            </button>
           
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5 mt-[-100px]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/assets/logos/ls-mainLogo600x200_footer.svg"
                alt="Legify Solutions Logo"
                className="w-80"
              />
            </div>
            <p className="text-emerald-100/40 leading-relaxed mb-10 text-lg font-medium">
              The premier choice for institutional accounting and strategic
              growth in the USA. Protecting your legacy with absolute precision.
            </p>
            <div className="flex gap-4">
              <Link
                to="/"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all hover:scale-110"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                to="/"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all hover:scale-110"
              >
                <Twitter size={22} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-emerald-500">
              Tier 1 Services
            </h4>
            <ul className="space-y-5 text-emerald-100/60 font-bold">
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tax Architecture
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Forensic Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Virtual CFO
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  IRS Defense
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Wealth Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-emerald-500">
              Corporate
            </h4>
            <ul className="space-y-5 text-emerald-100/60 font-bold">
              <li>
                <Link
                  to="/philosophy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Meet the CPAs
                </Link>
              </li>
              <li>
                <Link
                  to="#trust"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Security Standards
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Partner Network
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Office Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-emerald-500">
              HQ Concierge
            </h4>
            <ul className="space-y-6 text-emerald-100/60 font-bold">
              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="text-lg">
                  WALNUT RIDGE, AR 72476
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-6 h-6 text-emerald-500" />
                <span className="text-lg">+1 (870) 202-6004</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-6 h-6 text-emerald-500" />
                <span className="text-lg">info@ledgifysolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100/20">
          <p>© 2026 Legify Solutions LLC. A Global Financial Partner.</p>
          <div className="flex gap-6">
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">Terms &amp; Conditions</button>
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>

        {/* Terms & Privacy Modals */}
        {isTermsOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsTermsOpen(false)}></div>
            <div className="relative bg-white rounded-2xl max-w-3xl w-[90%] p-8 shadow-2xl z-10">
              <h3 className="text-2xl font-black mb-4">Terms &amp; Conditions</h3>
              <div className="text-slate-700 max-h-[60vh] overflow-auto">
                <p className="mb-4">[Insert Terms &amp; Conditions content here...]</p>
                <p className="mb-4">This is a placeholder. Replace with real legal content.</p>
              </div>
                <div className="mt-6 text-right">
                  <button onClick={() => setIsTermsOpen(false)} className="px-6 py-2 bg-emerald-900 text-white rounded-lg font-bold">Close</button>
                </div>
            </div>
          </div>
        )}

        {isPrivacyOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsPrivacyOpen(false)}></div>
            <div className="relative bg-white rounded-2xl max-w-3xl w-[90%] p-8 shadow-2xl z-10">
              <h3 className="text-2xl font-black mb-4">Privacy Policy</h3>
              <div className="text-slate-700 max-h-[60vh] overflow-auto">
                <p className="mb-4">[Insert Privacy Policy content here...]</p>
                <p className="mb-4">This is a placeholder. Replace with the site's privacy policy.</p>
              </div>
              <div className="mt-6 text-right">
                <button onClick={() => setIsPrivacyOpen(false)} className="px-6 py-2 bg-emerald-900 text-white rounded-lg font-bold">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
