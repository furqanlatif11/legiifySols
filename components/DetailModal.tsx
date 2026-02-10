
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ICON_MAP } from '../constants';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: string;
  points?: string[];
  featuresTitle?: string;
  features?: string[];
  onInquire: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  icon, 
  points = [], 
  featuresTitle = "Mandate Scope", 
  features = [],
  onInquire 
}) => {
  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8 md:p-16">
              <div className="flex justify-between items-start mb-12">
                <div className="flex gap-6 items-center">
                  {icon && (
                    <div className="w-20 h-20 bg-emerald-900 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-900/20">
                      {ICON_MAP[icon]}
                    </div>
                  )}
                  <div>
                    <h2 className="text-4xl font-black text-emerald-950 tracking-tighter mb-2">{title}</h2>
                    <p className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-xs">Technical Deep Dive</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-4 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-all"
                >
                  <X className="w-8 h-8 text-emerald-950" />
                </button>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xl font-black text-emerald-900 mb-4 uppercase tracking-widest flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    Objective
                  </h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">{description}</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section>
                    <h3 className="text-lg font-black text-emerald-900 mb-6 uppercase tracking-widest">{featuresTitle}</h3>
                    <ul className="space-y-4">
                      {features.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-lg font-black text-emerald-900 mb-6 uppercase tracking-widest">Key Pillars</h3>
                    <ul className="space-y-4">
                      {points.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => {
                      onClose();
                      onInquire();
                    }}
                    className="flex-1 bg-emerald-950 text-white py-6 rounded-2xl font-black text-xl hover:bg-emerald-800 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    Initiate Mandate
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={onClose}
                    className="flex-1 border-2 border-slate-200 text-slate-500 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all"
                  >
                    Return to Catalog
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
