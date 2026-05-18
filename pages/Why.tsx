import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Shield } from 'lucide-react';
import { setMeta } from '../utils/seo';

const WhyPage: React.FC = () => {
  useEffect(() => {
    setMeta({
      title: 'Philosophy — Ledgify Solutions',
      description: 'The Ledgify Method: precision engineering and proactive defense for individuals, founders, and enterprises.',
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-48 pb-24 bg-white">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-32">
        <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">The Ledgify Method</h2>
        <h1 className="text-6xl md:text-8xl font-black text-emerald-950 tracking-tighter leading-none">Built for <br /><span className="text-emerald-600">Longevity.</span></h1>
        <p className="text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mt-10">
          Whether you are an individual planning a secure financial future or an organization scaling with complexity, our philosophy centers on personal accountability, legal clarity, and operational certainty.
        </p>
      </div>
      
      <div className="space-y-32">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-8 tracking-tight">1. Precision Engineering</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We don't just "do taxes." We engineer financial frameworks. By analyzing the legal intersection of your assets and liabilities, we build a defensive perimeter around your capital that traditional accounting firms simply don't have the legal bandwidth to construct.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-80 bg-slate-50 rounded-[4rem] flex items-center justify-center text-emerald-900/5 shadow-inner">
            <Calculator size={180} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-8 tracking-tight">2. Proactive Defense</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Most accountants react to the IRS. We anticipate them. Our zero-friction methodology ensures every statement is bulletproof before it ever leaves our desk. We represent you with the authority of an institutional power.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-80 bg-emerald-50 rounded-[4rem] flex items-center justify-center text-emerald-600/5 shadow-inner">
            <Shield size={180} />
          </div>
        </div>

        <div className="bg-emerald-950 text-white p-20 rounded-[5rem] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-5xl font-black mb-10 tracking-tight">Experience the Ledgify Difference.</h3>
            <p className="text-emerald-100/60 mb-12 text-xl font-medium max-w-2xl mx-auto">Elevate your financial standing from "compliant" to "strategic". Request your initial consultation today.</p>
            <a href="/contact" className="inline-block w-full sm:w-auto bg-emerald-500 text-white px-8 sm:px-16 py-5 sm:py-8 rounded-3xl font-black text-2xl text-center hover:bg-emerald-400 transition-all shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 sm:hover:-translate-y-1">
              Request Consultation
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[100px] border-emerald-500/5 rounded-full"></div>
        </div>
      </div>
    </div>
  </motion.div>
);
}
export default WhyPage;
