import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CORE_SERVICES } from "../constants";

/* ---------------------------------------------------------------------------
   Core services — Ledgify Solutions

   Same ink background. What changed is the shape.
   -----------------------------------------------
   The rounded cards are gone. Four services now sit in a ruled 2×2 field —
   hairlines between them, no radius, no card fill, no shadow. It's the same
   vocabulary as the hero ledger and the add-ons table: rules carry the
   structure, type carries the hierarchy, nothing is boxed for decoration.

   It's deliberately a grid rather than another table. The add-ons section
   directly below is a two-column list, and the hero is a ruled ledger; a
   third list in a row would make the page feel like it knows one trick. A
   ruled field reads as the same hand without repeating the same form.

   Each cell gains a deliverables line — the two or three things that
   actually arrive. "Compliance-ready bookkeeping" is a category; "reconciled
   ledger, monthly close pack" is what shows up in your inbox, and that's the
   part a reader can judge.

   Also fixed
   ----------
   - The cards were clickable <div>s with a nested <button> inside. Now the
     title is the button and its pseudo-element covers the cell, so the whole
     area is clickable, the markup is valid, and keyboard and focus work.
   - The 40px rotated circle behind everything is removed. It was at 5%
     opacity and carried no information.
   - Motion is one container fade, matching the add-ons section, instead of
     per-card slides alternating direction by index.
   - Icons dropped. They crowd a ruled field, and the deliverables line is
     doing the work they weren't.

   Content note
   ------------
   DELIVERABLES is keyed by service id with a fallback, same pattern as
   TRIGGERS in PremiumServices. Move these into constants.ts once the wording
   settles — they belong beside the services they describe.
--------------------------------------------------------------------------- */

interface CoreService {
  id: string;
  title: string;
  description: string;
  deliverables?: string;
}

const DELIVERABLES: Record<string, string> = {
  "tax-planning": "Entity structure review, quarterly projections, year-end position",
  bookkeeping: "Reconciled ledger, monthly close pack, clean audit trail",
  payroll: "Filed withholdings, nexus tracking, per-cycle register",
  reporting: "P&L, balance sheet, cash flow, stakeholder summary",
};

/* Used only if CORE_SERVICES is empty — documents the shape and keeps the
   section honest in isolation. */
const FALLBACK_SERVICES: CoreService[] = [
  {
    id: "tax-planning",
    title: "Advanced tax strategy",
    description:
      "Legal structures that shield assets and keep federal and state liability where it should be.",
  },
  {
    id: "bookkeeping",
    title: "Compliance-ready bookkeeping",
    description:
      "Double-entry records maintained month to month, so the numbers hold up whoever asks for them.",
  },
  {
    id: "payroll",
    title: "Multi-state payroll",
    description:
      "Nexus and withholding handled across all 50 states, with labor law compliance built in.",
  },
  {
    id: "reporting",
    title: "Institutional reporting",
    description:
      "Financial disclosures and stakeholder reports at a standard a board can act on.",
  },
];

const CoreServices: React.FC<{
  onInquire: (service: string) => void;
  onShowDetails: (service: any) => void;
}> = ({ onInquire, onShowDetails }) => {
  const source: any[] = CORE_SERVICES?.length ? CORE_SERVICES : FALLBACK_SERVICES;

  return (
    <section
      id="services"
      className="bg-ink py-28 text-white lg:py-36"
      style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
    >
      <div className="container mx-auto px-6">
        {/* -------------------------------------------------------- heading
            Closed with the same double rule the hero ledger uses, so the
            field below reads as a statement rather than a set of tiles. */}
        <div className="flex flex-col gap-8 border-b-2 border-white pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              Accounting and bookkeeping.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#9DB2A7]">
              We keep your books organized, your reports clear, and your next
              financial decision easier to make. Every plan includes all four.
            </p>
          </div>

          <Link
            to="/services"
            className="shrink-0 self-start rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:border-[#58E0AE] hover:text-[#58E0AE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE] md:self-auto"
          >
            View all services
          </Link>
        </div>

        {/* ---------------------------------------------------- ruled field
            2×2 on desktop, stacked on mobile. Hairlines do the separating;
            there are no cards. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2"
        >
          {source.map((service: any, idx: number) => {
            const deliverables =
              DELIVERABLES[service.id] ?? service.deliverables ?? null;
            const isRightColumn = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className={[
                  "group relative border-b border-white/12 py-10 transition-colors duration-300",
                  "hover:bg-white/[0.035]",
                  isRightColumn ? "lg:border-l lg:border-l-white/12 lg:pl-12" : "lg:pr-12",
                ].join(" ")}
              >
                {/* Title carries the click. after:inset-0 stretches its hit
                    area over the whole cell, which keeps the markup valid —
                    no button inside a button. */}
                <h3 className="text-2xl font-semibold tracking-[-0.015em] sm:text-[1.75rem]">
                  <button
                    type="button"
                    onClick={() => onShowDetails(service)}
                    aria-label={`${service.title} — see details`}
                    className="relative text-left after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58E0AE] lg:after:-inset-x-12 lg:after:-inset-y-10"
                  >
                    <span className="relative inline-block pl-0 transition-[padding] duration-200 group-hover:pl-5">
                      <span className="absolute left-0 top-[0.85rem] h-1.5 w-1.5 rounded-full bg-[#58E0AE] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      {service.title}
                    </span>
                  </button>
                </h3>

                <p className="mt-4 max-w-md text-base leading-relaxed text-[#9DB2A7] transition-colors duration-300 group-hover:text-[#C7D4CC]">
                  {service.description}
                </p>

                {deliverables && (
                  <p className="mt-6 max-w-md border-t border-white/12 pt-4 text-sm leading-relaxed text-[#9DB2A7]">
                    <span className="font-medium text-white">What arrives: </span>
                    {deliverables}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => onInquire(service.title)}
                  className="relative z-10 mt-6 inline-block border-b-2 border-transparent pb-0.5 text-base font-semibold text-[#58E0AE] transition-colors duration-200 hover:border-[#58E0AE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58E0AE] group-hover:border-[#58E0AE]/40"
                >
                  Get a quote
                </button>
              </div>
            );
          })}
        </motion.div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#9DB2A7]">
          Select any service to see what the engagement covers. Fractional CFO
          leadership, M&amp;A due diligence and tax dispute support are added
          separately, by mandate.
        </p>
      </div>
    </section>
  );
};

export default CoreServices;