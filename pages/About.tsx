import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { setMeta } from "../utils/seo";
import FAQ from "../components/faq";

interface RecordRow {
  label: string;
  value: string;
}

const FIRM_RECORD: RecordRow[] = [
  { label: "Entity", value: "Ledgify Solutions LLC" },
  { label: "Based in", value: "Walnut Ridge, Arkansas" },
  { label: "Serving", value: "Clients across the USA, remotely" },
  // ⚠ Fill in the real year, or leave empty and this row won't render.
  { label: "Founded", value: "" },
  // ⚠ Replace with something factual about the team — size, or the
  //    credentials actually held. Leave empty rather than approximate.
  { label: "Team", value: "" },
  { label: "Engagements", value: "Monthly plans from $80" },
  { label: "Data handling", value: "AES-256, strict non-disclosure" },
  { label: "Tax filing", value: "Prepared and reviewed, not submitted" },
];

interface Commitment {
  title: string;
  body: string;
}

const COMMITMENTS: Commitment[] = [
  {
    title: "Your data stays yours",
    body: "Client information is held under AES-256 encryption with verified security controls, and every engagement runs under strict non-disclosure. Ask us at any point what we hold, where it sits and who has had access — that's a question we expect, not one we deflect.",
  },
  {
    title: "Federal and 50-state coverage",
    body: "Payroll, withholding and nexus across every state, on every plan. If you have people, property or sales somewhere new, that's the moment to tell us — the obligation usually starts before anyone notices it has.",
  },
  {
    title: "The same people, month to month",
    body: "You're not routed through a queue. Whoever keeps your books is someone you can reach directly, and higher tiers add dedicated support and a named account manager.",
  },
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    setMeta({
      title: "About Ledgify Solutions | Accounting and Bookkeeping",
      description:
        "Ledgify Solutions LLC, based in Walnut Ridge, Arkansas, provides accounting, bookkeeping and tax support for individuals and businesses at every stage across the USA.",
      url: window.location.href,
      image: "/assets/logos/ledgifySols_OGImage.webp",
    });
  }, []);

  const record = FIRM_RECORD.filter((row) => row.value.trim().length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white pt-40 lg:pt-48"
      style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
    >
      <div className="container mx-auto px-6">
        {/* -------------------------------------------------------- heading */}
        <div className="max-w-3xl">
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]">
            About Ledgify Solutions.
          </h1>
        </div>

        {/* ------------------------------------------- statement + record
            Prose on the left at reading width; the firm's own record on the
            right, set as a ledger. Same shape the hero uses, because for an
            accounting firm the most persuasive About page reads like a
            record rather than a pitch. */}
        <div className="mt-12 grid grid-cols-1 gap-y-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-xl leading-relaxed text-ink">
              We keep books for people who would rather be running their
              business than reconciling it.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Most of our clients arrive in one of two states. Either nobody has
              been keeping the records properly and the year is closing in, or
              the records exist but nobody can say what they mean. Both are
              fixable, and neither is unusual enough to be embarrassed about.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              What we provide is the steady version of that work: books closed
              on a schedule, payroll and withholding handled across every state
              you operate in, tax documentation prepared and reviewed, and
              reporting in the same format every month so it's actually
              comparable. When the situation calls for more — a CFO-level view,
              a clean-up before a sale, support on a dispute — that's added as
              its own mandate and quoted first.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              We publish our prices for the same reason we publish our filing
              position: a client should be able to work out what we cost and
              what we do without booking a call to find out.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/pricing"
                className="rounded-full bg-brand px-8 py-4 text-center text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_12px_26px_-14px_rgba(12,31,24,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                See plans and prices
              </Link>
              <Link
                to="/philosophy"
                className="rounded-full border border-rule px-8 py-4 text-center text-base font-medium text-ink transition-colors duration-200 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                How we work
              </Link>
            </div>
          </div>

          {/* --------------------------------------------------- the record */}
          <div className="lg:col-span-5">
            <figure className="lg:sticky lg:top-28">
              <figcaption className="flex items-baseline justify-between gap-6 border-b-2 border-ink pb-3">
                <span className="text-base font-semibold text-ink">
                  Firm record
                </span>
                <span className="text-sm text-muted">As published</span>
              </figcaption>

              <dl>
                {record.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-rule py-4"
                  >
                    <dt className="text-[0.9375rem] text-muted">{row.label}</dt>
                    <dd className="text-right text-[0.9375rem] font-medium text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 text-xs leading-relaxed text-muted">
                We prepare, organize and review your tax documentation. Filing
                stays with you or your designated filer, and we walk you through
                that step.
              </p>
            </figure>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- commitments
          Replaces the three icon pillars. Each one is written so a client
          could tell whether it had been kept. */}
      <section className="mt-24 bg-paper py-24 lg:mt-32 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
              What you can hold us to.
            </h2>
          </div>

          <div className="mt-12 border-t-2 border-ink lg:mt-14">
            {COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-x-12 gap-y-3 border-b border-rule py-9 md:grid-cols-[minmax(0,16rem)_minmax(0,42rem)] md:py-10"
              >
                <h3 className="text-base font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ pageId="about" tone="white" />

      {/* -------------------------------------------------------------- CTA */}
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

export default AboutPage;
