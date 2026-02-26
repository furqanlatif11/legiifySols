import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setMeta } from '../utils/seo';
import { PREMIUM_SERVICES, CORE_SERVICES, ICON_MAP } from '../constants';
import { ArrowRight, TrendingUp } from 'lucide-react';

type ServicesProps = {
  handleInquire: (s?: string) => void;
  handleShowDetails: (item: any) => void;
};

const ServicesPage: React.FC<ServicesProps> = ({ handleInquire, handleShowDetails }) => {
  useEffect(() => {
    setMeta({
      title: 'Services — Ledgify Solutions',
      description: 'Explore Ledgify Solutions premium and core accounting services including tax strategy, CFO leadership, and IRS defense.',
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-32">
        <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Capabilities</h2>
        <h1 className="text-6xl md:text-8xl font-black text-emerald-950 tracking-tighter leading-none">Full Service Spectrum.</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
        <div className="col-span-full mb-10 border-b-4 border-emerald-900/10 pb-8">
          <h2 className="text-4xl font-black text-emerald-900 tracking-tight">Institutional Growth (Premium)</h2>
        </div>
        {PREMIUM_SERVICES.map((s) => (
          <div 
            key={s.id} 
            className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
            onClick={() => handleShowDetails(s)}
          >
            <div className="flex justify-between items-start mb-10">
              <div className="text-emerald-600 p-5 bg-emerald-50 rounded-2xl group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                {ICON_MAP[s.icon]}
              </div>
              <TrendingUp className="text-emerald-100 w-16 h-16" />
            </div>
            <h3 className="text-4xl font-black mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">{s.title}</h3>
            <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium">{s.description}</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleInquire(s.title);
              }}
              className="bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all flex items-center gap-3 shadow-xl"
            >
              Book Deep Dive <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-48">
        <div className="col-span-full mb-10 border-b-4 border-emerald-900/10 pb-8">
          <h2 className="text-4xl font-black text-emerald-900 tracking-tight">Essential Compliance (Core)</h2>
        </div>
        {CORE_SERVICES.map((s) => (
          <div 
            key={s.id} 
            className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-500 transition-all shadow-sm cursor-pointer"
            onClick={() => handleShowDetails(s)}
          >
            <div className="text-emerald-500 mb-8">{ICON_MAP[s.icon]}</div>
            <h4 className="text-2xl font-black mb-4 leading-tight">{s.title}</h4>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">{s.description}</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleInquire(s.title);
              }}
              className="text-emerald-600 font-black uppercase text-xs tracking-[0.2em] border-b-2 border-emerald-600 pb-1"
            >
              Inquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
}
export default ServicesPage;
