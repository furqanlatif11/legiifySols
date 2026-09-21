import React from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------------------------------------
   Why choose / About — Ledgify Solutions

   What the previous version was doing
   -----------------------------------
   Four identical rounded cards, each with a coloured icon tile, a shadow, a
   hover lift and a staggered entrance. The icon colours alternated ink,
   brand, brand, ink — a pattern with no meaning behind it. Underneath the
   treatment, the four claims were interchangeable: "we apply practical
   accounting knowledge", "we use practical security controls". A reader
   could swap any two and lose nothing, which is the sign that the section is
   asserting rather than telling.

   What replaces it
   ----------------
   A statement with notes in the margin. Short labels hang at the left,
   aligned to the first line of each note; the notes themselves run as real
   prose at reading width, separated by hairlines. It's the form a firm uses
   when it is documenting how it works rather than advertising — which is
   what this section is for, sitting where it does.

   Deliberately not another table or grid. The hero is a ruled ledger, core
   services is a ruled 2×2 field, add-ons is a two-column table. A fourth
   aligned grid would flatten the page. Margin notes share the vocabulary —
   hairlines, ink on paper, no cards, no shadows — without repeating the
   shape.

   The copy is rewritten to say specific things. "Practical security
   controls" became AES-256 and the confidentiality terms; "practical
   accounting knowledge" became what the team actually tracks. Claims a
   reader can check are worth more than claims they can only accept.

   The sign-off at the end is a real address from the site. A named place is
   a stronger trust signal on an accounting page than four icon tiles.
--------------------------------------------------------------------------- */

interface Note {
  label: string;
  body: string;
}

interface WhyChooseProps {
  notes?: Note[];
  signOff?: string;
}

const DEFAULT_NOTES: Note[] = [
  {
    label: "Accounting experience",
    body: "The team works in USA federal and state rules daily — the filing deadlines you're subject to, the thresholds that move year to year, and the treatment that applies to your entity rather than to a general case. That knowledge is applied to the records in front of us, not offered as a reading list.",
  },
  {
    label: "How we protect your data",
    body: "Client information is held under AES-256 encryption with verified security controls, and every engagement runs under strict non-disclosure. You can ask us at any point what we hold, where it sits, and who has seen it.",
  },
  {
    label: "Practical financial planning",
    body: "Accurate books tell you where you stand. Budgeting and cash flow planning tell you what to do next — what you can commit to, what a hire costs you across a full year, and what the quarter looks like before it arrives rather than after.",
  },
  {
    label: "Accurate records and compliance",
    body: "Every statement is reviewed before it leaves us, against double-entry and against professional standards. If something doesn't reconcile, you hear about it from us first, with what we found and what we propose to do about it.",
  },
];

const DEFAULT_SIGNOFF =
  "Ledgify Solutions LLC · Walnut Ridge, Arkansas · Serving clients across the USA";

const WhyChoose: React.FC<WhyChooseProps> = ({
  notes = DEFAULT_NOTES,
  signOff = DEFAULT_SIGNOFF,
}) => {
  return (
    <section id="why-choose" className="bg-white py-28 lg:py-36">
      <div className="container mx-auto px-6">
        {/* ------------------------------------------------------- statement
            One weight, one colour, no italic accent on the second line. The
            size is carrying the emphasis. */}
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <h2 className="max-w-md text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Clear, accurate financial support.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <p className="max-w-2xl text-xl leading-relaxed text-muted">
              Ledgify Solutions helps individuals, founders, agencies,
              ecommerce brands and businesses at every stage keep their books
              organized, understand their numbers, and plan with more
              confidence. Four things hold that up.
            </p>
          </div>
        </div>

        {/* ---------------------------------------------------- margin notes
            Labels hang left, aligned to the first line of each note. On
            mobile they stack above, which is the same reading order. */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 border-t-2 border-ink lg:mt-20"
        >
          {notes.map((note) => (
            <div
              key={note.label}
              className="grid grid-cols-1 gap-x-12 gap-y-3 border-b border-rule py-8 md:grid-cols-[minmax(0,12rem)_minmax(0,42rem)] md:py-10"
            >
              <dt className="text-base font-semibold leading-snug text-ink">
                {note.label}
              </dt>
              <dd className="text-lg leading-relaxed text-muted">
                {note.body}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* --------------------------------------------------------- sign-off
            A named place does more for trust here than an icon tile. */}
        <p className="mt-8 text-sm leading-relaxed text-muted">{signOff}</p>
      </div>
    </section>
  );
};

export default WhyChoose;