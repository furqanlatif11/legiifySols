import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
          <motion.div className="relative bg-white rounded-2xl max-w-3xl w-[90%] p-8 shadow-2xl z-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {title && <h3 className="text-2xl font-black mb-4">{title}</h3>}
            <div className="text-slate-700">{children}</div>
            <div className="mt-6 text-right">
              <button onClick={onClose} className="px-6 py-2 bg-emerald-900 text-white rounded-lg font-bold">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
