import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake } from "lucide-react";

interface StickyConsultationButtonProps {
  onClick: () => void;
}

const StickyConsultationButton: React.FC<
  StickyConsultationButtonProps
> = ({ onClick }) => {
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
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 24,
          }}
          onClick={onClick}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.985 }}
          className="
            group
            fixed bottom-7 left-7 z-30
            overflow-hidden
            flex items-center gap-2.5
            rounded-full
            border border-white/10
            bg-gradient-to-br from-emerald-600 to-emerald-700
            px-4 py-2.5
            text-white
            shadow-[0_10px_30px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
          "
        >
          {/* Subtle Background Pulse */}
          <motion.span
            className="
              absolute inset-0 rounded-full
              bg-white/[0.06]
            "
            animate={{
              opacity: [0.04, 0.1, 0.04],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Icon + Pulse */}
          <div className="relative flex items-center justify-center">
            <motion.span
              className="
                absolute
                h-9 w-9
                rounded-full
                border border-white/20
              "
              animate={{
                scale: [1, 1.45],
                opacity: [0.45, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            <span
              className="
                relative
                inline-flex items-center justify-center
                rounded-full
                bg-white/12
                p-2
                ring-1 ring-white/10
              "
            >
              <Handshake className="h-4 w-4 text-white" />
            </span>
          </div>

          {/* Text */}
          <span
            className="
              relative
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            Book Consultation
          </span>

          {/* Hover Shine */}
          <motion.span
            className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
            initial={{ x: "-120%" }}
            whileHover={{ x: "120%" }}
            transition={{ duration: 0.9 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default StickyConsultationButton;