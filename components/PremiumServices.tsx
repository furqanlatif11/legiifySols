
import React from 'react';
import { motion } from 'framer-motion';
import { PREMIUM_SERVICES, ICON_MAP } from '../constants';
import { Check, Star } from 'lucide-react';

const PremiumServices: React.FC<{ 
  onInquire: (service: string) => void;
  onShowDetails: (service: any) => void;
}> = ({ onInquire, onShowDetails }) => {
  return (
    <section id="premium" className="py-32 bg-white text-emerald-950 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-emerald-600 fill-emerald-600 w-5 h-5" />
              <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs">The Elite Tier</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">Strategic Intelligence.</h3>
            <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed max-w-lg">
              High-stakes financial architecture designed for entities managing multi-million dollar capital flows and complex legal structures.
            </p>

            <div className="space-y-6">
              {PREMIUM_SERVICES.map((service) => (
                <motion.div 
                  key={service.id}
                  whileHover={{ x: 15 }}
                  className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 cursor-pointer hover:bg-emerald-900 hover:text-white transition-all duration-500 shadow-sm"
                  onClick={() => onShowDetails(service)}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-emerald-600 p-3 bg-emerald-100 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {ICON_MAP[service.icon]}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 tracking-tight">
                        {service.title}
                      </h4>
                      <p className="text-slate-500 group-hover:text-emerald-100 font-medium leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-emerald-500/10 blur-[120px] rounded-full"></div>
            <div className="relative bg-emerald-950 p-12 md:p-16 rounded-[4rem] shadow-2xl border border-emerald-800 text-white">
              <div className="bg-emerald-500 w-16 h-1 bg-white mb-8"></div>
              <h4 className="text-4xl font-black mb-10 tracking-tight">Executive Advisory Mandate</h4>
              <ul className="space-y-8">
                {[
                  'Bespoke Virtual CFO Integration',
                  'Strategic Capital Planning',
                  'Strategic Nexus Analysis',
                  'Financial Review & Analysis',
                  'Private Wealth Tax Architecture',
                  'Exit Readiness & M&A Support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 font-black" />
                    </div>
                    <span className="text-emerald-50 font-bold text-xl tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onInquire('Elite Executive Advisory')}
                className="w-full mt-16 bg-white text-emerald-950 font-black py-6 rounded-2xl text-xl hover:bg-emerald-50 transition-all shadow-xl hover:shadow-emerald-400/20 transform hover:-translate-y-1"
              >
                Inquire for Terms
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
