import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

interface StickyConsultationButtonProps {
  onClick: () => void;
}

const StickyConsultationButton: React.FC<StickyConsultationButtonProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;
      setIsVisible(scrolled && !reachedBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="fixed bottom-8 left-8 z-30 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-105 active:scale-95"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Handshake className="w-5 h-5" />
      <span>Book Consultation</span>
    </motion.button>
  );
};

export default StickyConsultationButton;
