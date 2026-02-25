import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, Shield } from 'lucide-react';
import { setMeta } from '../utils/seo';

const ContactPage: React.FC = () => {
  useEffect(() => {
    setMeta({
      title: 'Contact — Legify Solutions',
      description: 'Contact Legify Solutions for institutional accounting, tax defense, and CFO services. Request a secured consultation.',
      url: window.location.href,
      image: '/favicon.svg'
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-48 pb-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Concierge Support</h2>
          <h1 className="text-6xl md:text-7xl font-black text-emerald-950 mb-10 tracking-tighter leading-none">Initiate Secured Communication.</h1>
          <p className="text-2xl text-slate-600 mb-16 font-medium leading-relaxed max-w-xl">
            Our strategic advisors are positioned to provide real-time response to high-stakes financial requirements across the USA.
          </p>
          
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm"><Globe className="w-8 h-8" /></div>
              <div>
                <h4 className="text-2xl font-black mb-2 tracking-tight">Global HQ</h4>
                <p className="text-slate-500 font-bold text-lg leading-relaxed">WALNUT RIDGE, AR 72476</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm"><Shield className="w-8 h-8" /></div>
              <div>
                <h4 className="text-2xl font-black mb-2 tracking-tight">Secure Line</h4>
                <p className="text-slate-500 font-bold text-lg">+1 (870) 202-6004</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm"><Mail className="w-8 h-8" /></div>
              <div>
                <h4 className="text-2xl font-black mb-2 tracking-tight">Hot Support</h4>
                <p className="text-slate-500 font-bold text-lg">info@ledgifysolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-950 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 tracking-tight">Direct Mandate</h3>
              <p className="text-emerald-100/60 mb-12 font-bold text-lg">Please provide your corporate details for initial due diligence.</p>
              <form className="space-y-8">
                <input placeholder="Legal Name" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:border-emerald-500 outline-none font-black text-lg text-white" />
                <input placeholder="Business Email" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:border-emerald-500 outline-none font-black text-lg text-white" />
                <textarea placeholder="Describe your financial objectives" rows={4} className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:border-emerald-500 outline-none font-black text-lg text-white resize-none"></textarea>
                <button className="w-full bg-emerald-500 py-6 rounded-2xl font-black text-2xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">Send Mandate</button>
              </form>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
        </div>
      </div>
    </div>
  </motion.div>
);
}
export default ContactPage;
