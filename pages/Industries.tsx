import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../constants";
import { setMeta } from "../utils/seo";
import FAQ from "@/components/faq";

type IndustriesProps = {
  handleInquire: (s?: string) => void;
  handleShowDetails: (item: any) => void;
};

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const IndustriesPage: React.FC<IndustriesProps> = ({
  handleInquire,
  handleShowDetails,
}) => {
  useEffect(() => {
    setMeta({
      title: "Accounting for Businesses at Every Stage | Ledgify Solutions",
      description:
        "Accounting, bookkeeping and tax support for individuals, founders, agencies, ecommerce brands and businesses at every stage across the USA.",
      url: window.location.href,
      image: "/assets/logos/ledgify_solutionss_ogImage.png",
    });
  }, []);

  const industries: any[] = INDUSTRIES ?? [];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white pb-24 pt-40 lg:pt-48"
      >
        <div className="container mx-auto px-6">
          {/* -------------------------------------------------------- heading
            Left aligned, one colour, one weight. */}
          <div className="max-w-3xl">
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]">
              Industries we work in.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              Some sectors carry accounting rules of their own — revenue that
              can't be recognized when it arrives, depreciation that runs on its
              own schedule, privacy obligations that sit on top of every entry.
              These are the ones we work in most, and what each engagement
              usually has to account for.
            </p>
          </div>

          {/* ---------------------------------------------------------- index
            Real navigation, not decoration: with this many sectors, the
            first question is whether yours is here at all. */}
          {industries.length > 3 && (
            <nav
              aria-label="Sectors on this page"
              className="mt-12 border-t border-rule pt-6"
            >
              <p className="text-sm font-semibold text-ink">
                {industries.length} sectors
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
                {industries.map((ind: any) => {
                  const id = ind.id ?? slug(ind.title);
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="inline-block rounded-full border border-rule px-4 py-1.5 text-[0.8125rem] font-medium text-muted transition-colors duration-200 hover:border-ink hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        {ind.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}

          {/* -------------------------------------------------------- entries
            Sector left, the work right. Hairlines between, double rule on
            top — the same field the rest of the site is set in. */}
          <div className="mt-14 border-t-2 border-ink lg:mt-16">
            {industries.map((ind: any) => {
              const id = ind.id ?? slug(ind.title);

              return (
                <article
                  key={id}
                  id={id}
                  className="group relative grid scroll-mt-32 grid-cols-1 gap-x-16 gap-y-8 border-b border-rule py-12 transition-colors duration-300 hover:bg-paper lg:grid-cols-12 lg:py-14"
                >
                  <div className="lg:col-span-5">
                    <h2 className="text-2xl font-semibold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
                      <button
                        type="button"
                        onClick={() => handleShowDetails(ind)}
                        aria-label={`${ind.title} — see details`}
                        className="relative text-left after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:after:-inset-y-14"
                      >
                        <span className="relative inline-block pl-0 transition-[padding] duration-200 group-hover:pl-5">
                          <span className="absolute left-0 top-[0.85rem] h-1.5 w-1.5 rounded-full bg-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          {ind.title}
                        </span>
                      </button>
                    </h2>

                    <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                      {ind.shortDesc}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleInquire(`Quote for: ${ind.title}`)}
                      className="relative z-10 mt-6 inline-block border-b-2 border-transparent pb-0.5 text-base font-semibold text-brand transition-colors duration-200 hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand group-hover:border-brand/40"
                    >
                      Get a quote
                    </button>
                  </div>

                  {/* The proof, given the room it earns. */}
                  <div className="lg:col-span-7">
                    <p className="text-sm font-semibold text-ink">
                      What an engagement accounts for
                    </p>
                    <ul className="mt-3 grid grid-cols-1 border-t border-rule sm:grid-cols-2 sm:gap-x-10">
                      {ind.challenges?.map((challenge: string) => (
                        <li
                          key={challenge}
                          className="border-b border-rule py-3 text-[0.9375rem] leading-snug text-ink"
                        >
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted">
            Your sector isn't here? The underlying work rarely changes — books,
            filings, payroll and reporting — only which rules apply on top. Tell
            us what you do and we'll scope it.
          </p>
        </div>
      </motion.div>

      <FAQ pageId="industries" />
    </>
  );
};

export default IndustriesPage;
