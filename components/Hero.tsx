
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const services = [
    "Financial Legacy.",
    "Tax Strategy.",
    "CFO Leadership.",
    "Asset Shielding.",
    "M&A Advisory."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-50">
      {/* Visual Depth Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:block overflow-hidden">
         <div className="absolute inset-0 bg-emerald-950/80 z-10" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
         <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Financial District" 
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-12 bg-emerald-500"></div>
            <span className="text-emerald-700 text-sm font-black uppercase tracking-[0.3em]">
              Precision Accounting Specialists
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="min-h-[220px] md:min-h-[280px]">
            <h1 className="text-6xl md:text-8xl font-black text-emerald-950 leading-[0.95] mb-8 tracking-tighter">
              Build Your <br />
              <div className="h-auto md:h-[1.1em] overflow-visible md:overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={services[serviceIndex]}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="text-emerald-600 w-full block whitespace-normal break-words md:absolute md:left-0 md:top-0 relative"
                  >
                    {services[serviceIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-700/80 mb-10 leading-relaxed font-medium max-w-xl">
            We provide institutional-grade accounting, aggressive tax defense, and strategic CFO leadership for the USA’s most ambitious firms.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-14">
            <button 
              onClick={onInquire}
              className="group bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-800 transition-all shadow-2xl hover:shadow-emerald-900/30 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Consult an Expert
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="bg-white text-emerald-900 border-2 border-emerald-900/10 px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
            >
              View Portfolios
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-emerald-900/10 pt-10">
            {[
              { label: 'Asset Protection', icon: <TrendingUp className="w-5 h-5" /> },
              { label: 'IRS Certified CPAs', icon: <CheckCircle2 className="w-5 h-5" /> },
              { label: 'Elite Security', icon: <TrendingUp className="w-5 h-5" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-emerald-900/70 font-bold uppercase text-xs tracking-widest">
                <span className="text-emerald-500">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Graphic */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
