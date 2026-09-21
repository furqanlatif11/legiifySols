import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { setMeta, setJsonLd, getSiteUrl } from "../utils/seo";
import { servicePageConfigs } from "../data/services";
import { PREMIUM_SERVICES, CORE_SERVICES } from "../constants";
import FAQ from "../components/faq";


/* ⚠ Move to data/services.ts as a `legacyId` on each config. */
const GUIDE_BY_LEGACY_ID: Record<string, string> = {
  "tax-strategy": "tax-planning",
  "fractional-cfo": "virtual-cfo",
  "irs-dispute": "tax-resolution",
  "financial-analysis": "financial-analysis",
};

interface ServiceEntry {
  id: string;
  title: string;
  description: string;
  guideSlug?: string;
  priceFrom?: string;
  source: any;
}

type ServicesProps = {
  handleInquire: (s?: string) => void;
  handleShowDetails: (item: any) => void;
};

const ServicesPage: React.FC<ServicesProps> = ({
  handleInquire,
  handleShowDetails,
}) => {
  const location = useLocation();
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const configsBySlug: Record<string, any> = useMemo(
    () =>
      Object.values(servicePageConfigs).reduce(
        (acc: Record<string, any>, config: any) => ({
          ...acc,
          [config.slug]: config,
        }),
        {},
      ),
    [],
  );

  /* A service is defined by the constants; a guide page is something it may
     or may not have. That's the inversion the old file was missing. */
  const toEntry = (service: any): ServiceEntry => {
    const slug = GUIDE_BY_LEGACY_ID[service.id];
    const config = slug ? configsBySlug[slug] : undefined;

    return {
      id: service.id,
      title: config?.h1 ?? service.title,
      description: config?.heroSubhead ?? service.description,
      guideSlug: config ? slug : undefined,
      priceFrom: config?.pricing?.from,
      source: service,
    };
  };

  const monthly = useMemo(
    () => (CORE_SERVICES ?? []).map(toEntry),
    [configsBySlug],
  );

  const mandates = useMemo(() => {
    const base = (PREMIUM_SERVICES ?? []).map(toEntry);
    const covered = new Set(
      [...(CORE_SERVICES ?? []), ...(PREMIUM_SERVICES ?? [])]
        .map((s: any) => GUIDE_BY_LEGACY_ID[s.id])
        .filter(Boolean),
    );

    /* Any guide with no matching constant still deserves a row rather than
       disappearing off the hub. */
    const orphans = Object.values(servicePageConfigs)
      .filter((config: any) => !covered.has(config.slug))
      .map((config: any) => ({
        id: config.slug,
        title: config.h1,
        description: config.heroSubhead,
        guideSlug: config.slug,
        priceFrom: config.pricing?.from,
        source: config,
      }));

    return [...base, ...orphans];
  }, [configsBySlug]);

  useEffect(() => {
    setMeta({
      title: "Accounting, Tax Planning and CFO Support | Ledgify Solutions",
      description:
        "What runs every month inside a plan, and what you add when the situation calls for it. Accounting, bookkeeping, payroll, tax and advisory support across the USA.",
      url: window.location.href,
      image: "/assets/logos/ledgify_solutionss_ogImage.png",
    });
  }, []);

  useEffect(() => {
    const site = getSiteUrl();
    setJsonLd("services-hub", {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: Object.values(servicePageConfigs).map(
        (config: any, i: number) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: config.h1,
            url: `${site}/services/${config.slug}`,
          },
        }),
      ),
    });
    return () => setJsonLd("services-hub", null);
  }, []);

  /* Deep links. React owns the highlight rather than classList. */
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const scroll = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlighted(id);
    }, 100);
    const clear = setTimeout(() => setHighlighted(null), 2400);

    return () => {
      clearTimeout(scroll);
      clearTimeout(clear);
    };
  }, [location.hash]);

  const renderRow = (entry: ServiceEntry) => (
    <div
      key={entry.id}
      id={entry.id}
      className={`grid scroll-mt-32 grid-cols-1 gap-x-12 gap-y-5 border-b border-rule py-9 transition-colors duration-300 lg:grid-cols-12 lg:py-10 ${
        highlighted === entry.id ? "bg-emerald-50" : "hover:bg-white"
      }`}
    >
      <div className="lg:col-span-7">
        <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink sm:text-2xl">
          {entry.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {entry.description}
        </p>
      </div>

      <div className="lg:col-span-5">
        {entry.priceFrom && (
          <p className="text-[0.9375rem] font-medium text-ink">
            {entry.priceFrom}
          </p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          {entry.guideSlug ? (
            <Link
              to={`/services/${entry.guideSlug}`}
              className="border-b-2 border-brand/30 pb-0.5 text-base font-semibold text-brand transition-colors duration-200 hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Read the guide
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => handleShowDetails(entry.source)}
              className="border-b-2 border-transparent pb-0.5 text-base font-semibold text-ink transition-colors duration-200 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              See what's covered
            </button>
          )}

          <button
            type="button"
            onClick={() => handleInquire(entry.title)}
            className="border-b-2 border-transparent pb-0.5 text-base font-medium text-muted transition-colors duration-200 hover:border-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-paper pt-40 lg:pt-48"
      style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
    >
      <div className="container mx-auto px-6">
        {/* -------------------------------------------------------- heading */}
        <div className="max-w-3xl">
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]">
            Everything we do, and when you'd need it.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            Some of this runs every month whether or not anything happens —
            that's what a plan is. The rest you reach for when the situation
            arrives: a sale, a dispute, a year of books nobody kept. Both lists
            are below, with prices where they're published.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/pricing"
              className="rounded-full bg-brand px-8 py-4 text-center text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_12px_26px_-14px_rgba(12,31,24,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              See plans and prices
            </Link>
            <button
              type="button"
              onClick={() => handleInquire("Services overview")}
              className="rounded-full border border-rule px-8 py-4 text-center text-base font-medium text-ink transition-colors duration-200 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Ask what you need
            </button>
          </div>
        </div>

        {/* ------------------------------------------------- every month */}
        {monthly.length > 0 && (
          <section aria-labelledby="monthly-heading" className="mt-20 lg:mt-24">
            <div className="max-w-2xl">
              <h2
                id="monthly-heading"
                className="text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[2.5rem]"
              >
                Every month.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Included in every plan, from $80 a month. What changes between
                tiers is volume and depth, not which of these you get.
              </p>
            </div>

            <div className="mt-10 border-t-2 border-ink">
              {monthly.map(renderRow)}
            </div>
          </section>
        )}

        {/* ------------------------------------------------ when it comes up */}
        {mandates.length > 0 && (
          <section aria-labelledby="mandates-heading" className="mt-20 lg:mt-28">
            <div className="max-w-2xl">
              <h2
                id="mandates-heading"
                className="text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[2.5rem]"
              >
                When it comes up.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Added to any plan by mandate, scoped and quoted before work
                starts. None of it is bundled into your monthly fee.
              </p>
            </div>

            <div className="mt-10 border-t-2 border-ink">
              {mandates.map(renderRow)}
            </div>
          </section>
        )}

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          We prepare, organize and review your tax documentation. Filing stays
          with you or your designated filer, and we walk you through that step.
        </p>
      </div>

      <FAQ pageId="services" tone="paper" />
    </motion.div>
  );
};

export default ServicesPage;