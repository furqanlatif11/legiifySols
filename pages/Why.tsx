import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { setMeta } from "../utils/seo";
import FAQ from "@/components/faq";

interface Position {
  title: string;
  body: string;
  rulesOut: string;
}

interface Step {
  title: string;
  body: string;
}

const POSITIONS: Position[] = [
  {
    title: "Accuracy before the date",
    body: "Every statement is reviewed before it leaves us, against double-entry and against professional standards. Where something doesn't reconcile, you hear it from us with what we found and what we propose to do about it.",
    rulesOut:
      "Rules out sending you numbers we haven't finished checking in order to hit a date.",
  },
  {
    title: "Prices you can read before you call",
    body: "Every plan is published, from $80 a month upward, with what's included at each tier. Advisory work is quoted per mandate and confirmed in writing before anything starts.",
    rulesOut:
      "Rules out pricing that depends on what a prospect looks like they can afford.",
  },
  {
    title: "Clear about what we are",
    body: "We prepare, organize and review tax documentation, and we walk you through filing. We don't submit returns on your behalf, and we don't give legal advice. Where something needs an attorney or a credentialed filer, we say so early.",
    rulesOut:
      "Rules out letting a client assume something has been handled when it hasn't.",
  },
  {
    title: "Problems surface when we find them",
    body: "A missed reconciliation, an exposure in another state, a deadline you're closer to than you think — you hear about it in the month we notice it. Not at year end, and not once it's already cost you something.",
    rulesOut:
      "Rules out quiet months that look clean because nobody looked closely.",
  },
];

const STEPS: Step[] = [
  {
    title: "Consultation",
    body: "Free, and it opens every plan. We look at your records, your volume and what your year looks like before recommending anything.",
  },
  {
    title: "Scope and price in writing",
    body: "You get the plan, the price and what's included, confirmed before work begins. Clean-up, if your books need it, is scoped and quoted on its own rather than hidden inside a monthly fee.",
  },
  {
    title: "Onboarding",
    body: "We work in the systems you already use. Access, documents and a first review of your existing books — this is where most of the questions get asked.",
  },
  {
    title: "Monthly close",
    body: "Reconciled ledger, close pack and a summary of what was reconciled, what's outstanding and when it landed. The same format every month, so it's comparable.",
  },
  {
    title: "Review as you grow",
    body: "Volume changes, and the plan should follow it. We'll tell you when a different tier fits better — including when that's a lower one.",
  },
];

const WhyPage: React.FC = () => {
  useEffect(() => {
    setMeta({
      title: "How We Work — Accounting and Bookkeeping | Ledgify Solutions",
      description:
        "The positions behind our accounting work: published prices, statements reviewed before they leave us, and clarity about what we do and don't handle.",
      url: window.location.href,
      image: "/assets/logos/ledgifySols_OGImage.webp",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white pt-40 lg:pt-48"
    >
      <div className="container mx-auto px-6">
        {/* -------------------------------------------------------- heading */}
        <div className="max-w-3xl">
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]">
            How we work.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            Whether you're an individual planning for a steadier few years or a
            company scaling into more complexity, the same four positions hold.
            Each one costs us something, which is the only reason it's worth
            stating.
          </p>
        </div>

        {/* ------------------------------------------------------ positions
            Claim on the left, consequence on the right, and under it the
            line that makes the claim checkable. */}
        <div className="mt-16 border-t-2 border-ink lg:mt-20">
          {POSITIONS.map((position) => (
            <section
              key={position.title}
              className="grid grid-cols-1 gap-x-16 gap-y-5 border-b border-rule py-12 lg:grid-cols-12 lg:py-14"
            >
              <h2 className="text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-[1.75rem] lg:col-span-5">
                {position.title}
              </h2>

              <div className="lg:col-span-7">
                <p className="max-w-2xl text-lg leading-relaxed text-muted">
                  {position.body}
                </p>
                <p className="mt-4 max-w-2xl border-l-2 border-brand pl-4 text-base leading-relaxed text-ink">
                  {position.rulesOut}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------- engagement
          A real sequence, so it gets real numbers. */}
      <section className="mt-24 bg-paper py-24 lg:mt-32 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
              How an engagement runs.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              First contact to steady state. Nothing here is billed before it's
              agreed.
            </p>
          </div>

          <ol className="mt-14 border-t-2 border-ink">
            {STEPS.map((step, idx) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-6 gap-y-2 border-b border-rule py-8 sm:grid-cols-[3.5rem_minmax(0,16rem)_1fr] sm:gap-x-10"
              >
                <span
                  aria-hidden="true"
                  className="text-lg font-semibold text-brand"
                  style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">
                  {step.title}
                </h3>

                <p className="col-start-2 max-w-2xl text-base leading-relaxed text-muted sm:col-start-3">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions this page raises, answered from the shared FAQ store.
          Remove if you'd rather keep FAQs off this route. */}
      <FAQ pageId="philosophy" tone="white" />

      {/* -------------------------------------------------------------- CTA
          Left aligned, one action. The 5rem-radius centred panel with a
          100px border ring is gone. */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-8 border-t-2 border-white pt-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] text-white sm:text-[2.5rem]">
                Start with the consultation.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#9DB2A7]">
                It's free, it opens every plan, and you'll leave it with a
                recommended tier and a price — whether or not you go ahead.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 self-start rounded-full bg-[#58E0AE] px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_26px_-14px_rgba(0,0,0,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:self-auto"
            >
              Request a consultation
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhyPage;
