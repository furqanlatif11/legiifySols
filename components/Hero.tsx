import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

const Hero: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const services = [
    "Financial Legacy.",
    "Tax Strategy.",
    "CFO Leadership.",
    "Asset Shielding.",
    "M&A Advisory.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  //   },
  // };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      // use cubic-bezier array for typed easing
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-50">
      {/* Visual Depth Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:block overflow-hidden">
        <div
          className="absolute inset-0 bg-emerald-950/80 z-10"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
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
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[2px] w-12 bg-emerald-500"></div>
            <span className="text-emerald-700 text-sm font-black uppercase tracking-[0.3em]">
              Precision Accounting Specialists
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-black text-emerald-950 leading-[0.95] mb-8 tracking-tighter">
              <span className="block relative z-20">Build Your</span>

              {/*
                Animated text slot — no fixed height, no overflow-hidden.
                The outer div uses `display: grid` with a single row.
                AnimatePresence swaps the inner span; the grid row
                naturally sizes to whatever height the text needs,
                so wrapped lines on small screens are never clipped.
              */}
              <div className="mt-2 relative">
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "1fr",
                  }}
                >
                  <div style={{ overflow: "hidden", paddingBottom: "0.15em" }}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={services[serviceIndex]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="text-emerald-600 block whitespace-normal break-words text-6xl md:text-8xl leading-[0.95]"
                        aria-live="polite"
                      >
                        {services[serviceIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-700/80 mb-10 leading-relaxed font-medium max-w-xl"
          >
            We help individuals, agencies, ecommerce brands, and small businesses manage
            their books, reduce costs, and stay financially organized — without
            hiring in-house staff.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 mb-14"
          >
            <button
              onClick={onInquire}
              className="group bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-800 transition-all shadow-2xl hover:shadow-emerald-900/30 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Consult an Expert
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-emerald-900/10 pt-10"
          >
            {[
              {
                label: "Asset Protection",
                icon: <TrendingUp className="w-5 h-5" />,
              },
              {
                label: "Professional Team",
                icon: <CheckCircle2 className="w-5 h-5" />,
              },
              {
                label: "Elite Security",
                icon: <TrendingUp className="w-5 h-5" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-emerald-900/70 font-bold uppercase text-xs tracking-widest"
              >
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