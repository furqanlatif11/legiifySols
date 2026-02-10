import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES, ICON_MAP } from '../constants';
import { setMeta } from '../utils/seo';

type IndustriesProps = {
  handleInquire: (s?: string) => void;
  handleShowDetails: (item: any) => void;
};

const IndustriesPage: React.FC<IndustriesProps> = ({ handleInquire, handleShowDetails }) => {
  useEffect(() => {
    setMeta({
      title: 'Industries — Legify Solutions',
      description: 'Industry-specific financial and tax solutions from Legify Solutions. We support SaaS, manufacturing, and high-growth enterprises.',
      url: window.location.href,
      image: '/favicon.svg'
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-32 max-w-4xl mx-auto">
        <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Market Sovereignty</h2>
        <h1 className="text-6xl md:text-8xl font-black text-emerald-950 tracking-tighter leading-none mb-10">Industries We <br /><span className="text-emerald-600">Shield.</span></h1>
        <p className="text-2xl text-slate-600 font-medium leading-relaxed">
          From venture-backed SaaS innovators to established manufacturing titans, we provide the sector-specific legal and accounting architecture required for market dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {INDUSTRIES.map((ind) => (
          <div 
            key={ind.id} 
            className="group bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:bg-white cursor-pointer"
            onClick={() => handleShowDetails(ind)}
          >
            <div className="text-emerald-950 mb-10 group-hover:scale-110 transition-transform duration-500">
              {ICON_MAP[ind.icon]}
            </div>
            <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">{ind.title}</h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">{ind.shortDesc}</p>
            <ul className="space-y-4 mb-14">
              {ind.challenges.map((challenge: string, i: number) => (
                <li key={i} className="flex items-center gap-4 font-bold uppercase text-[10px] tracking-widest text-emerald-900/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {challenge}
                </li>
              ))}
            </ul>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleInquire(`Mandate: ${ind.title}`);
              }}
              className="w-full bg-emerald-950 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Analyze Mandate
            </button>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
}
export default IndustriesPage;
