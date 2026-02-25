import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lockScroll, unlockScroll } from '../utils/scrollLock';
import { X, Send, ShieldCheck } from "lucide-react";
import { InquiryFormData } from "../types";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = "",
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    company: "",
    service: initialService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const base = process.env.API_BASE || '/api';
      const response = await fetch(`${base}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Submission failed');
      }

      setIsSuccess(true);
      // clear form and close after a short delay
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          fullName: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      }, 2500);
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      alert('There was an error sending your inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-3xl bg-white rounded-[1.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-10 md:p-14">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-4xl font-black text-emerald-950 tracking-tighter mb-2">
                    Initiate Contact
                  </h2>
                  <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
                    Confidential Consulting Inquiry
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-all"
                >
                  <X className="w-6 h-6 text-emerald-950" />
                </button>
              </div>

              {isSuccess ? (
                <div className="py-20 text-center">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-black text-emerald-950 mb-4 tracking-tight">
                    Transmission Received
                  </h3>
                  <p className="text-slate-500 font-medium text-lg">
                    A Senior Strategist will reach out within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/40 mb-2">
                        Full Legal Name
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. James T. Sterling"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-950"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/40 mb-2">
                        Business Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="j.sterling@firm.com"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-950"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/40 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization LLC"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-950"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/40 mb-2">
                        Primary Mandate
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-950 appearance-none"
                      >
                        <option value="">Select Service Tier</option>
                        <option value="Tax Strategy">Tax Architecture</option>
                        <option value="CFO">Fractional CFO</option>
                        <option value="Audit">Audit Defense</option>
                        <option value="Wealth">Wealth Protection</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/40 mb-2">
                      Brief Summary of Requirement
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your financial objectives..."
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-emerald-950 resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/20 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send Secured Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
