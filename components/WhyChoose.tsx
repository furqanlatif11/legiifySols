
import React from 'react';
import { motion } from 'framer-motion';
import { ICON_MAP } from '../constants';

const features = [
  {
    title: 'Professional Experience',
    description: 'Our team comprises experienced financial professionals with deep USA regulatory knowledge.',
    icon: 'Users',
    color: 'bg-emerald-900 text-emerald-100'
  },
  {
    title: 'Fortress Security',
    description: 'We deploy multi-layered encryption and SOC2-compliant data storage for absolute client privacy.',
    icon: 'Lock',
    color: 'bg-emerald-600 text-white'
  },
  {
    title: 'Strategic Growth',
    description: 'Accounting is defensive; strategy is offensive. We provide both to maximize enterprise value.',
    icon: 'TrendingUp',
    color: 'bg-emerald-500 text-white'
  },
  {
    title: 'Accuracy & Compliance',
    description: 'Every statement is thoroughly reviewed to ensure compliance with professional standards.',
    icon: 'ShieldCheck',
    color: 'bg-emerald-950 text-emerald-400'
  }
];

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">About Our Legacy</h2>
            <h3 className="text-5xl md:text-6xl font-black text-emerald-950 mb-8 tracking-tighter leading-tight">
              The Ledgify Standard: <br />
              <span className="text-emerald-600/60 italic">Uncompromising Precision.</span>
            </h3>
          </div>
          <div className="lg:w-1/2">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Founded on the principles of institutional integrity and digital agility, Ledgify Solutions LLC serves as the financial backbone for businesses that refuse to settle for standard accounting. We merge old-world financial discipline with new-world technological speed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${feature.color} group-hover:scale-110 transition-transform`}>
                {ICON_MAP[feature.icon]}
              </div>
              <h4 className="text-2xl font-black text-emerald-950 mb-4">{feature.title}</h4>
              <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
