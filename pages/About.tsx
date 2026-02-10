import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Award } from 'lucide-react';

const AboutPage: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Our Pedigree</h2>
        <h1 className="text-5xl md:text-8xl font-black text-emerald-950 mb-10 tracking-tighter leading-none">The Architects of <br /><span className="text-emerald-600">Financial Integrity.</span></h1>
        <p className="text-2xl text-slate-600 leading-relaxed mb-16 font-medium">
          Founded by veterans of the "Big Four" and international tax legal scholars, Legify Solutions LLC was created to bridge the gap between traditional accounting and the sophisticated needs of modern, high-growth enterprises.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-3xl font-black mb-6 text-emerald-950">Our Mission</h3>
            <p className="text-slate-600 font-medium leading-relaxed text-lg">
              To empower US businesses with the same level of financial strategy and tax architecture typically reserved for the Fortune 500. We believe precision is the ultimate form of asset protection.
            </p>
          </div>
          <div className="bg-emerald-950 text-white p-12 rounded-[3.5rem] shadow-2xl">
            <h3 className="text-3xl font-black mb-6 text-emerald-400">Our Culture</h3>
            <p className="text-emerald-100/60 font-medium leading-relaxed text-lg">
              Discretion, precision, and proactive defense. Our team operates with an institutional mindset, ensuring every ledger and filing is a testament to your corporate legitimacy.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-24">
          <h3 className="text-4xl font-black mb-16 text-center tracking-tight">Core Pillars of Excellence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="w-10 h-10" />, title: "Absolute Security", desc: "Military-grade data protocols for every client." },
              { icon: <Globe className="w-10 h-10" />, title: "USA Compliance", desc: "Native expertise in federal and 50-state nexus." },
              { icon: <Award className="w-10 h-10" />, title: "Certified Talent", desc: "Every strategist is a CPA or JD specialized in finance." }
            ].map((pillar, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{pillar.title}</h4>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default AboutPage;
