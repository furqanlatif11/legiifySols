import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lockScroll, unlockScroll } from '../utils/scrollLock';
import { useModalA11y } from '../utils/useModalA11y';
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
  const containerRef = useModalA11y(isOpen, onClose);
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    company: "",
    service: initialService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ fullName?: string; email?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    if (name === "fullName" && !value.trim()) {
      return "Enter your name.";
    }
    if (name === "email") {
      if (!value.trim()) return "Enter an email address we can reach you on.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
    }
    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name !== "fullName" && name !== "email") return;
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

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
    const nameError = validateField("fullName", formData.fullName);
    const emailError = validateField("email", formData.email);
    if (nameError || emailError) {
      setFieldErrors({ fullName: nameError, email: emailError });
      return;
    }
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const base = import.meta.env.VITE_API_BASE || process.env.API_BASE || '/api';
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
      setSubmitError('We could not send your inquiry. Check your connection and try again.');
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
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-modal-title"
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-3xl bg-white rounded-[1.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-10 md:p-14 h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-4xl font-semibold text-ink tracking-tighter mb-2" id="inquiry-modal-title">
                    Initiate contact
                  </h2>
                  <p className="text-brand font-semibold text-xs">
                    Confidential consulting inquiry
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 bg-paper hover:bg-emerald-50 rounded-2xl transition-all"
                >
                  <X className="w-6 h-6 text-ink" />
                </button>
              </div>

              {isSuccess ? (
                <div className="py-20 text-center">
                  <div className="w-24 h-24 bg-emerald-100 text-brand rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-semibold text-ink mb-4 tracking-tight">
                    Transmission received
                  </h3>
                  <p className="text-muted font-medium text-lg">
                    A senior strategist will reach out within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {submitError && (
                    <div role="alert" className="bg-flag/10 border border-flag/30 text-flag text-sm font-medium rounded-lg p-4">
                      {submitError}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-ink/40 mb-2">
                        Full legal name
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!fieldErrors.fullName}
                        aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                        placeholder="e.g. James T. Sterling"
                        className="w-full px-6 py-4 bg-paper border border-rule rounded-2xl focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all font-semibold text-ink"
                      />
                      {fieldErrors.fullName && (
                        <p id="fullName-error" className="mt-2 text-sm text-flag">{fieldErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink/40 mb-2">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                        placeholder="you@example.com"
                        className="w-full px-6 py-4 bg-paper border border-rule rounded-2xl focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all font-semibold text-ink"
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="mt-2 text-sm text-flag">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-ink/40 mb-2">
                        Company or individual name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization or Personal Name"
                        className="w-full px-6 py-4 bg-paper border border-rule rounded-2xl focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all font-semibold text-ink"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink/40 mb-2">
                        Primary mandate
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-paper border border-rule rounded-2xl focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all font-semibold text-ink appearance-none"
                      >
                        <option value="">Select Service Tier</option>
                        <option value="Tax Strategy">Tax Architecture</option>
                        <option value="CFO">Fractional CFO</option>
                        <option value="Bookkeeping">Bookkeeping Support</option>
                        <option value="Wealth">Wealth Protection</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink/40 mb-2">
                      Brief summary of requirement
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your financial objectives..."
                      className="w-full px-6 py-4 bg-paper border border-rule rounded-2xl focus:ring-4 focus:ring-brand/10 focus:border-brand outline-none transition-all font-semibold text-ink resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-ink hover:bg-brandDeep text-white font-semibold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-ink/20 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send secured inquiry
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
