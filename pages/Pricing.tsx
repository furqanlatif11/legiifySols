import React, { useEffect } from "react";
import PricingSection from "../components/PricingSection";
import { setMeta } from "../utils/seo";

interface PricingPageProps {
  handleInquire: (service: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: 'Accounting Solutions Pricing | Ledgify Solutions',
      description: 'Published monthly pricing for bookkeeping, accounting, tax planning, and fractional finance support, from $80 for individuals to $1,199 for enterprise tier.',
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  return (
    <div className="pt-24">
      <PricingSection
        onInquire={(plan) => handleInquire(`${plan} Plan Inquiry`)}
      />

      {/* FAQ Section (optional) */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-ink tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted font-medium text-lg">
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
                  "Yes, we offer 15% off when you commit to annual billing. Contact our team to learn more about discounts across plans for individuals, small businesses, and enterprise clients.",
              },
              {
                question: "What's included in the free consultation?",
                answer:
                  "A senior strategist will review your current situation, identify opportunities, and recommend the best plan. No obligation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-paper border border-rule rounded-2xl p-8 hover:border-emerald-300 transition-all"
              >
                <h3 className="text-lg font-semibold text-ink mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted font-medium leading-relaxed">
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
