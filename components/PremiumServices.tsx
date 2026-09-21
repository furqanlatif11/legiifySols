import React from "react";
import { motion } from "framer-motion";
import { PREMIUM_SERVICES } from "../constants";

/* ---------------------------------------------------------------------------
   Premium services — Ledgify Solutions

   The problem with the previous version
   -------------------------------------
   Two service lists sat side by side. "Advisory add-ons" was the eyebrow on
   the left and also the title of the panel on the right, so a reader met the
   same phrase twice and had no way to tell why the two lists were separate
   or which one to act on. The CTA lived under the list that wasn't
   clickable; the clickable cards had no CTA. The blur blob, the second panel
   and four competing corner radii were all carrying decoration rather than
   information.

   What replaces it
   ----------------
   One list, ruled, with a second column that is the whole point: reach for
   this when. Nobody shopping this page knows whether they need a fractional
   CFO — they know their situation. Naming the situation is what turns a list
   of service names into something a reader can place themselves in.

   It's set as a table because that's what it is: two columns, aligned rows,
   a header on a double rule. Same accountant's vocabulary as the hero
   ledger, so the two sections read as one hand.

   Rows are buttons. Hovering or focusing one brings up a brand marker at the
   left edge; clicking opens the detail panel, same handler as before.

   Motion: one container fade on entry, to stay consistent with the rest of
   the page. Nothing per-row. If you'd rather it be still, delete the
   motion.div wrapper and the framer-motion import — nothing else depends on
   them.

   Content note
   ------------
   TRIGGERS below is keyed by service id and falls back to the service's own
   description, so it works with whatever PREMIUM_SERVICES currently holds.
   Move these strings into constants.ts when you're happy with the wording —
   they belong next to the services they describe.
--------------------------------------------------------------------------- */

interface Addon {
  id: string;
  title: string;
  trigger: string;
}

/* Reach-for-this-when clauses, keyed by service id. Anything not matched
   falls back to the service description. */
const TRIGGERS: Record<string, string> = {
  "virtual-cfo":
    "Decisions are being made on instinct, and the numbers arrive too late to help.",
  "cash-flow":
    "Payroll clears every month, but you couldn't say what next quarter looks like.",
  "tax-planning":
    "You've hired your first employee outside your home state.",
  "financial-analysis":
    "The numbers look fine and something still doesn't add up.",
  "founder-tax":
    "Your personal return and the business return have started pulling against each other.",
  "books-cleanup":
    "A buyer has asked for three years of clean records.",
};

/* Used only if PREMIUM_SERVICES is empty — keeps the section honest in
   isolation and documents the shape. */
const FALLBACK_ADDONS: Addon[] = [
  {
    id: "virtual-cfo",
    title: "Fractional CFO support",
    trigger: TRIGGERS["virtual-cfo"],
  },
  {
    id: "cash-flow",
    title: "Budgeting and cash flow planning",
    trigger: TRIGGERS["cash-flow"],
  },
  {
    id: "tax-planning",
    title: "Multi-state tax planning",
    trigger: TRIGGERS["tax-planning"],
  },
  {
    id: "financial-analysis",
    title: "Financial review and analysis",
    trigger: TRIGGERS["financial-analysis"],
  },
  {
    id: "founder-tax",
    title: "Owner and founder tax planning",
    trigger: TRIGGERS["founder-tax"],
  },
  {
    id: "books-cleanup",
    title: "Books clean-up before a sale",
    trigger: TRIGGERS["books-cleanup"],
  },
];

const PremiumServices: React.FC<{
  onInquire: (service: string) => void;
  onShowDetails: (service: any) => void;
}> = ({ onInquire, onShowDetails }) => {
  const source = PREMIUM_SERVICES?.length ? PREMIUM_SERVICES : FALLBACK_ADDONS;

  return (
    <section id="premium" className="bg-white py-28 text-ink lg:py-36">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-16">
          {/* --------------------------------------------------------- claim
              Sticky on large screens so the argument stays beside the rows
              it's making a case for. */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Practical financial planning.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Advisory work sits on top of your plan, added when the situation
              calls for it. Founders, agencies, ecommerce brands and businesses
              at every stage — clearer numbers, and a plan for what they mean.
            </p>

            <button
              onClick={() => onInquire("Advisory Add-Ons")}
              className="mt-9 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_12px_26px_-14px_rgba(12,31,24,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Get a quote
            </button>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Priced per mandate, quoted before any work starts.
            </p>
          </div>

          {/* ------------------------------------------------ scope of work
              Two columns: what it is, and when you'd reach for it. The
              second column is the one doing the work. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-[1fr] items-baseline gap-x-8 border-b-2 border-ink pb-3 sm:grid-cols-[minmax(0,15rem)_1fr]">
              <span className="text-base font-semibold text-ink">Add-on</span>
              <span className="hidden text-sm text-muted sm:block">
                Reach for this when
              </span>
            </div>

            <ul>
              {source.map((service: any) => {
                const trigger =
                  TRIGGERS[service.id] ?? service.trigger ?? service.description;

                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onShowDetails(service)}
                      aria-label={`${service.title} — see details`}
                      className="group grid w-full grid-cols-[1fr] items-baseline gap-x-8 gap-y-2 border-b border-rule py-6 text-left transition-colors duration-200 hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:grid-cols-[minmax(0,15rem)_1fr]"
                    >
                      <span className="relative block pl-0 text-lg font-semibold tracking-[-0.01em] text-ink transition-[padding] duration-200 group-hover:pl-4 group-focus-visible:pl-4">
                        <span className="absolute left-0 top-[0.6rem] h-1.5 w-1.5 rounded-full bg-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                        {service.title}
                      </span>

                      <span className="block text-base leading-relaxed text-muted transition-colors duration-200 group-hover:text-ink">
                        {trigger}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              Select any line to see what the engagement covers. None of it is
              bundled into your monthly plan — you add what you need, when the
              situation arrives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;