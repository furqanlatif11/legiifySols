import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { consultationPageConfigs } from "../data/consultation";

/* ---------------------------------------------------------------------------
   Business Consultation teaser — homepage

   Why this section exists
   ------------------------
   Everything above it (core services, advisory add-ons) is the ongoing
   monthly relationship: books kept, taxes filed, numbers reported. Business
   Consultation is a different kind of engagement — scoped, time-boxed
   projects for a specific business problem (growth has stalled, overhead has
   outgrown process, a competitor is taking share, reporting no longer
   reflects reality). A reader needs to see that this exists and that it's
   different, without reading four full service pages to find out.

   Where the content comes from
   -----------------------------
   The four module rows are pulled straight from consultationPageConfigs —
   the same single source of truth that drives /consultation and each
   module's own page. Nothing here is retyped, so the homepage can never
   drift out of sync with the pages it's pointing to.

   Shape
   -----
   Ink background, same as Core services, to keep the white/ink rhythm the
   rest of the page already runs on. Inside it: a statement on the left
   (sticky on desktop, same device PremiumServices uses), and a ruled list of
   the four modules on the right — step index, title, the one-line situation
   that points a reader at it, and an arrow. Rows are links, not cards; no
   icons, no shadows, same vocabulary as every other section on this page.
--------------------------------------------------------------------------- */

const stepIndex = (i: number) => String(i + 1).padStart(2, "0");

const BusinessConsultation: React.FC<{
  onInquire: (service: string) => void;
}> = ({ onInquire }) => {
  const modules = Object.values(consultationPageConfigs);

  return (
    <section
      id="consultation"
      className="bg-ink py-28 text-white lg:py-36"
      style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-16">
          {/* --------------------------------------------------------- claim */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold text-[#58E0AE]">
              Business Consultation
            </p>
            <h2 className="mt-5 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              When the problem isn&apos;t the books.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#9DB2A7]">
              Scoped, time-boxed projects for the growth, process, or
              positioning problem that monthly bookkeeping was never meant to
              solve — quoted in writing before any work starts.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onInquire("Business Consultation overview")}
                className="rounded-full bg-white px-8 py-4 text-center text-base font-semibold text-ink transition-all duration-200 hover:bg-[#58E0AE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE]"
              >
                Book a discovery call
              </button>
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-center font-medium text-white transition-all duration-200 hover:border-[#58E0AE] hover:text-[#58E0AE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE]"
              >
                See all four modules
              </Link>
            </div>
          </div>

          {/* ------------------------------------------------- module rows */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="border-t-2 border-white">
              {modules.map((config, i) => (
                <Link
                  key={config.slug}
                  to={`/consultation/${config.slug}`}
                  className="group grid grid-cols-1 gap-y-3 border-b border-white/12 py-8 transition-colors duration-200 hover:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58E0AE] sm:grid-cols-[2.5rem_1fr_auto] sm:items-start sm:gap-x-6"
                >
                  <span className="text-sm font-semibold tabular-nums text-[#9DB2A7]">
                    {stepIndex(i)}
                  </span>

                  <div>
                    <h3 className="relative inline-block pl-0 text-xl font-semibold tracking-[-0.015em] transition-[padding] duration-200 group-hover:pl-5 sm:text-2xl">
                      <span className="absolute left-0 top-[0.6rem] h-1.5 w-1.5 rounded-full bg-[#58E0AE] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      {config.h1}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-[#9DB2A7] transition-colors duration-300 group-hover:text-[#C7D4CC]">
                      {config.heroSubhead}
                    </p>
                  </div>

                  <ArrowUpRight className="mt-1 hidden h-5 w-5 shrink-0 text-[#9DB2A7] transition-colors duration-200 group-hover:text-[#58E0AE] sm:block" />
                </Link>
              ))}
            </div>

            <p className="mt-8 flex items-start gap-2 text-sm leading-relaxed text-[#9DB2A7]">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
              Not sure which one fits? A discovery call is the fastest way to
              find out — nothing is scoped or priced before that conversation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessConsultation;
