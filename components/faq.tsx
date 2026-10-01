
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { getFaqs, getFaqMeta, type FaqPageId, type FaqItem } from "../constants";
import { firmIdentity } from "../data/firm";

/* ---------------------------------------------------------------------------
   FAQ — Ledgify Solutions
   src/components/FAQ.tsx

   Usage
   -----
     <FAQ pageId="industries" />
     <FAQ pageId="home" tone="paper" />
     <FAQ pageId="services" allowMultiple />

   Everything else lives in constants/faqs.ts. This component only decides
   how the list looks and behaves.

   Design
   ------
   Ruled rows on a double rule, the same field as the rest of the site: no
   cards, no radius, no shadow. Heading sits in a sticky left column so the
   questions get the full width of the reading column beside it.

   The open/closed marker is a plus that becomes a minus. Not a chevron —
   chevrons on stacked rows read as navigation, and these aren't links.

   Interaction
   -----------
   One open at a time by default, which keeps the page from jumping as
   answers push each other down; pass allowMultiple to change that. Buttons
   carry aria-expanded and aria-controls, panels are labelled by their
   question, and the height transition is disabled under reduced motion.

   SEO
   ---
   Emits FAQPage JSON-LD for the resolved list and removes it on unmount, so
   two pages can never leave two blocks in the head at once. Pass
   schema={false} on any page that already emits FAQPage from elsewhere —
   duplicate blocks on one URL are worse than none.
--------------------------------------------------------------------------- */

type Tone = "white" | "paper" | "ink";

interface FAQProps {
  pageId: FaqPageId;
  /** Background the section sits on. Default "white". */
  tone?: Tone;
  /** Allow several answers open at once. Default false. */
  allowMultiple?: boolean;
  /** Override the heading from faqs.ts. */
  heading?: string;
  /** Emit FAQPage structured data. Default true. */
  schema?: boolean;
}

const TONES: Record<
  Tone,
  {
    section: string;
    heading: string;
    body: string;
    question: string;
    rule: string;
    topRule: string;
    marker: string;
    hover: string;
    focus: string;
  }
> = {
  white: {
    section: "bg-white",
    heading: "text-ink",
    body: "text-muted",
    question: "text-ink",
    rule: "border-rule",
    topRule: "border-ink",
    marker: "text-brand",
    hover: "hover:bg-paper",
    focus: "focus-visible:outline-brand",
  },
  paper: {
    section: "bg-paper",
    heading: "text-ink",
    body: "text-muted",
    question: "text-ink",
    rule: "border-rule",
    topRule: "border-ink",
    marker: "text-brand",
    hover: "hover:bg-white",
    focus: "focus-visible:outline-brand",
  },
  ink: {
    section: "bg-ink",
    heading: "text-white",
    body: "text-[#9DB2A7]",
    question: "text-white",
    rule: "border-white/12",
    topRule: "border-white",
    marker: "text-[#58E0AE]",
    hover: "hover:bg-white/[0.035]",
    focus: "focus-visible:outline-[#58E0AE]",
  },
};

const FAQ: React.FC<FAQProps> = ({
  pageId,
  tone = "white",
  allowMultiple = false,
  heading,
  schema = true,
}) => {
  const items = useMemo(() => getFaqs(pageId), [pageId]);
  const meta = useMemo(() => getFaqMeta(pageId), [pageId]);
  const [open, setOpen] = useState<string[]>([]);
  const t = TONES[tone];

  /* FAQPage structured data, scoped to this mount. */
  useEffect(() => {
    if (!schema || items.length === 0) return;

    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.dataset.faq = pageId;
    node.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
    document.head.appendChild(node);

    return () => {
      document.head.removeChild(node);
    };
  }, [items, pageId, schema]);

  if (items.length === 0) return null;

  const toggle = (id: string) =>
    setOpen((current) => {
      const isOpen = current.includes(id);
      if (allowMultiple) {
        return isOpen ? current.filter((x) => x !== id) : [...current, id];
      }
      return isOpen ? [] : [id];
    });

  return (
    <section id={`faq-${pageId}`} className={`${t.section} py-24 lg:py-32`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          {/* ------------------------------------------------------ heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-card bg-brandDeep px-8 py-10 text-white sm:px-10 sm:py-12">
              {/* decorative, purely visual — fills the panel so it doesn't read as empty space */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-black/10"
              />

              <h2 className="relative max-w-sm text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] sm:text-[2.5rem]">
                {heading ?? meta.heading}
              </h2>
              {meta.intro && (
                <p className="relative mt-5 max-w-sm text-base leading-relaxed text-white/75">
                  {meta.intro}
                </p>
              )}

              <div className="relative mt-10 border-t border-white/15 pt-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  Still have questions?
                </p>
                <p className="mt-2 max-w-sm text-base leading-relaxed text-white/80">
                  Talk to a specialist directly — no forms, no ticket queue.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-control bg-white px-5 py-3 text-sm font-semibold text-brandDeep transition-colors hover:bg-white/90"
                >
                  Book a free consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-6 flex flex-col gap-3 text-sm text-white/75">
                  <a
                    href={`tel:${firmIdentity.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <PhoneCall className="h-4 w-4 shrink-0" />
                    {firmIdentity.phone}
                  </a>
                  <a
                    href={`mailto:${firmIdentity.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    {firmIdentity.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- list */}
          <div className={`border-t-2 lg:col-span-8 ${t.topRule}`}>
            <dl>
              {items.map((item) => {
                const isOpen = open.includes(item.id);
                const panelId = `faq-panel-${item.id}`;
                const buttonId = `faq-button-${item.id}`;

                return (
                  <div key={item.id} className={`border-b ${t.rule}`}>
                    <dt>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(item.id)}
                        className={`flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${t.hover} ${t.focus}`}
                      >
                        <span
                          className={`text-lg font-semibold leading-snug tracking-[-0.01em] sm:text-xl ${t.question}`}
                        >
                          {item.question}
                        </span>

                        {/* Plus becomes minus. The horizontal stroke stays
                            put; only the vertical one rotates away. */}
                        <span
                          aria-hidden="true"
                          className={`relative mt-1.5 block h-4 w-4 shrink-0 ${t.marker}`}
                        >
                          <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rounded-full bg-current" />
                          <span
                            className={`absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                            }`}
                          />
                        </span>
                      </button>
                    </dt>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          id={panelId}
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p
                            className={`max-w-2xl pb-7 pr-10 text-base leading-relaxed ${t.body}`}
                          >
                            {item.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;