
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { INDUSTRIES, ICON_MAP } from '../constants';

const ClientTypes: React.FC<{ 
  onInquire: (service: string) => void;
  onShowDetails: (industry: any) => void;
}> = ({ onInquire, onShowDetails }) => {
  // Only show first 3 on homepage
  const homepageIndustries = INDUSTRIES.slice(0, 3);

  return (
    <section id="client-types" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Targeted Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tighter leading-none mb-6">Who We Serve.</h3>
            <p className="text-xl text-slate-600 font-medium">Industry-specific financial strategies for the USA’s most complex sectors.</p>
          </div>
          <Link 
            to="/industries" 
            className="bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all shadow-xl flex items-center gap-3"
          >
            Global Coverage <Globe className="w-6 h-6" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {homepageIndustries.map((industry, idx) => (
            <div 
              key={idx} 
              className={`p-12 rounded-[3.5rem] border-2 transition-all group bg-white shadow-sm hover:shadow-2xl border-emerald-100 hover:border-emerald-600 cursor-pointer`}
              onClick={() => onShowDetails(industry)}
            >
              <div className={`text-emerald-950 mb-10 group-hover:scale-110 transition-transform duration-500`}>
                {ICON_MAP[industry.icon]}
              </div>
              <h4 className="text-3xl font-black mb-6 tracking-tight">{industry.title}</h4>
              <p className={`mb-10 text-lg leading-relaxed font-medium text-slate-600`}>{industry.shortDesc}</p>
              <ul className="space-y-5 mb-14">
                {industry.challenges.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold uppercase text-xs tracking-widest text-emerald-900/60">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onInquire(`Mandate for: ${industry.title}`);
                }}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 border-2 border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-white`}
              >
                Inquire Mandate
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;
