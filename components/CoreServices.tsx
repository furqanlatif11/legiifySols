
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CORE_SERVICES, ICON_MAP } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const CoreServices: React.FC<{ 
  onInquire: (service: string) => void;
  onShowDetails: (service: any) => void;
}> = ({ onInquire, onShowDetails }) => {
  return (
    <section id="services" className="py-32 bg-emerald-950 text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-emerald-400 font-black uppercase tracking-[0.4em] text-xs mb-6">Operational Core</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter">Institutional Accounting.</h3>
            <p className="text-xl text-emerald-100/60 mt-6 font-medium leading-relaxed">
              We provide the bedrock of financial legitimacy for firms ready for the next tier of growth.
            </p>
          </div>
          <Link to="/services" className="bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
            Full Service Catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-emerald-900/40 p-10 rounded-[3rem] border border-emerald-800/50 flex flex-col sm:flex-row gap-8 hover:bg-emerald-900 hover:border-emerald-700 transition-all duration-500 cursor-pointer"
              onClick={() => onShowDetails(service)}
            >
              <div className="shrink-0 w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-3xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                {ICON_MAP[service.icon]}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-3xl font-black tracking-tight">{service.title}</h4>
                  <ArrowUpRight className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-emerald-100/60 text-lg mb-8 font-medium leading-relaxed group-hover:text-emerald-100 transition-colors">
                  {service.description}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onInquire(service.title);
                  }}
                  className="text-emerald-400 font-black uppercase tracking-widest text-xs border-b-2 border-emerald-500/0 group-hover:border-emerald-500 transition-all pb-1"
                >
                  Initiate Inquiry
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-emerald-500 rounded-full rotate-45"></div>
      </div>
    </section>
  );
};

export default CoreServices;
