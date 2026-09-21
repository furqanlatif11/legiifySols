import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../constants";

/* ---------------------------------------------------------------------------
   Who we serve — Ledgify Solutions

   What changed
   ------------
   Three rounded cards became three ruled columns. The rules run vertically
   between them, with a double rule across the top, so the eye reads down a
   column rather than across a row of tiles. That vertical axis is the point:
   every other section on this page reads left to right — the hero ledger,
   the add-ons table, the margin notes — and this is the one place where a
   reader is picking between parallel options rather than following an
   argument. Columns are the shape for that.

   The challenges list is now the substance of each column, under its own
   label. "ASC 606 revenue recognition" and "multi-state nexus compliance"
   are the lines that prove domain knowledge; the old layout buried them
   under an icon, a heading, a paragraph and a scale-on-hover transform, then
   set them at text-xs in 60% ink — the smallest, faintest type in the card.

   Also fixed
   ----------
   - Two header paragraphs said the same thing twice. One remains.
   - The eyebrow above the heading is gone.
   - Three full-width "Get a quote" buttons became three quiet text actions
     plus one primary link in the header. Three equal-weight buttons in a row
     give a reader nothing to choose between.
   - Cards were clickable <div>s with a nested <button> held together by
     stopPropagation. The title is the button now; its pseudo-element covers
     the column, so the markup is valid and keyboard access works.
   - Icons, shadow-2xl, border-2, the 3.5rem radius, the scale-110 hover and
     the two appended arrow icons are all removed.
--------------------------------------------------------------------------- */

interface Industry {
  id?: string;
  title: string;
  shortDesc: string;
  challenges: string[];
}

/* Used only if INDUSTRIES is empty — documents the shape. */
const FALLBACK_INDUSTRIES: Industry[] = [
  {
    id: "technology",
    title: "Technology and SaaS",
    shortDesc:
      "Venture-backed firms where revenue timing and equity both need careful treatment.",
    challenges: [
      "ASC 606 revenue recognition",
      "Multi-state nexus compliance",
      "Equity and stock option accounting",
    ],
  },
  {
    id: "real-estate",
    title: "Real estate and development",
    shortDesc:
      "Multi-entity holdings where the structure matters as much as the numbers.",
    challenges: [
      "Passive activity loss rules",
      "Complex depreciation schedules",
      "Joint venture accounting",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare and medical",
    shortDesc:
      "Private practices and med-tech, where compliance sits on top of every entry.",
    challenges: [
      "HIPAA financial privacy",
      "Insurance billing reconciliation",
      "Equipment lease optimization",
    ],
  },
];

const ClientTypes: React.FC<{
  onInquire: (service: string) => void;
  onShowDetails: (industry: any) => void;
}> = ({ onInquire, onShowDetails }) => {
  const source: any[] = INDUSTRIES?.length
    ? INDUSTRIES.slice(0, 3)
    : FALLBACK_INDUSTRIES;

  return (
    <section id="client-types" className="bg-paper py-28 lg:py-36">
      <div className="container mx-auto px-6">
        {/* -------------------------------------------------------- heading */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Accounting for real businesses.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Individuals, founders, agencies, ecommerce brands and companies
              in sectors where the accounting has rules of its own. Three of
              those sectors below.
            </p>
          </div>

          <Link
            to="/industries"
            className="shrink-0 self-start rounded-full bg-ink px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:shadow-[0_12px_26px_-14px_rgba(12,31,24,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:self-auto"
          >
            See everyone we serve
          </Link>
        </div>

        {/* -------------------------------------------------- ruled columns
            Vertical rules on desktop, horizontal on mobile. No cards. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 divide-y divide-rule border-t-2 border-ink md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-16"
        >
          {source.map((industry: any, idx: number) => (
            <div
              key={industry.id ?? idx}
              className={[
                "group relative flex flex-col py-10 transition-colors duration-300 hover:bg-white",
                "md:px-8 md:first:pl-0 md:last:pr-0",
              ].join(" ")}
            >
              <h3 className="text-2xl font-semibold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                <button
                  type="button"
                  onClick={() => onShowDetails(industry)}
                  aria-label={`${industry.title} — see details`}
                  className="relative text-left after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:after:-inset-x-8 md:after:-inset-y-10"
                >
                  <span className="relative inline-block pl-0 transition-[padding] duration-200 group-hover:pl-5">
                    <span className="absolute left-0 top-[0.85rem] h-1.5 w-1.5 rounded-full bg-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    {industry.title}
                  </span>
                </button>
              </h3>

              <p className="mt-4 text-base leading-relaxed text-muted">
                {industry.shortDesc}
              </p>

              {/* The proof. Given a label and room, rather than set as the
                  smallest type in the column. */}
              <p className="mt-8 text-sm font-semibold text-ink">
                What we handle
              </p>
              <ul className="mt-2 border-t border-rule">
                {industry.challenges?.map((item: string) => (
                  <li
                    key={item}
                    className="border-b border-rule py-3 text-[0.9375rem] leading-snug text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onInquire(`Quote for: ${industry.title}`)}
                className="relative z-10 mt-8 self-start border-b-2 border-transparent pb-0.5 text-base font-semibold text-brand transition-colors duration-200 hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand group-hover:border-brand/40"
              >
                Get a quote
              </button>
            </div>
          ))}
        </motion.div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          Not on this list? The work is the same underneath — select a sector
          to see how an engagement is scoped, or ask us about yours.
        </p>
      </div>
    </section>
  );
};

export default ClientTypes;