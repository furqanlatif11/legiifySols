import React from "react";
import PricingSection from "../components/PricingSection";

interface PricingPageProps {
  handleInquire: (service: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ handleInquire }) => {
  return (
    <div className="pt-24">
      <PricingSection
        onInquire={(plan) => handleInquire(`${plan} Plan Inquiry`)}
      />

      {/* FAQ Section (optional) */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 font-medium text-lg">
              Have questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan?",
                answer:
                  "Absolutely. You can change your plan at any time. Changes take effect at your next billing cycle, and we'll adjust your billing accordingly.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No hidden fees. Our pricing is completely transparent. The monthly fee is all you pay, plus any optional add-ons you choose.",
              },
              {
                question: "Do you offer annual discounts?",
                answer:
                  "Yes, we offer 15% off when you commit to annual billing. Contact our team to learn more about volume discounts for enterprise plans.",
              },
              {
                question: "What's included in the free consultation?",
                answer:
                  "A senior strategist will review your current situation, identify opportunities, and recommend the best plan. No obligation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-emerald-300 transition-all"
              >
                <h3 className="text-lg font-black text-emerald-950 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
