import React, { useState } from "react";
import { Link } from "react-router-dom";
import PolicyModal from "./PolicyModal";
import { POLICIES, POLICY_ORDER, type PolicyId } from "../constants";

/* ---------------------------------------------------------------------------
   Footer — Ledgify Solutions

   The old file was 560 lines, and roughly 480 of them were legal prose
   written as JSX. Three modals sat inside it, hand-copied from one another
   and drifted apart. This file is now layout only; the policies live in
   constants/legal.ts and one dialog renders any of them.

   Layout fixes
   ------------
   The CTA used -translate-y-40 to lift out of the footer and the column grid
   used mt-[-100px] to climb back under it, both fighting a pt-32. Two
   negative offsets against fixed top padding break as soon as the CTA
   heading wraps to a different number of lines, which is why spacing above
   the columns read differently at different widths. The CTA is a band with
   ordinary padding now.

   Contrast
   --------
   Several colours were unreadable on ink: emerald-100/20 on the copyright,
   /30 on the filing notice, /40 on the description. The filing notice is the
   one line here that genuinely has to be read — it was the second faintest
   thing on the page. Everything runs at #9DB2A7, which passes AA on this
   background.

   Behaviour fixed with the modals
   -------------------------------
   The old scroll-lock effect watched isTermsOpen and isPrivacyOpen but not
   the refund modal, so opening that one left the page scrolling behind the
   overlay. A single openPolicy value makes that class of bug impossible —
   there's one thing to check, and PolicyModal owns the lock.

   ⚠ One thing to decide
   ---------------------
   The About and Philosophy pages now end with an ink CTA band ("Start with
   the consultation") and this footer opens with one. Stacked, a visitor
   meets two calls to action in a row. This one asks for a quote rather than
   a consultation so they're at least different asks, but I'd drop the
   page-level band on those two routes.
--------------------------------------------------------------------------- */

interface FooterProps {
  onInquire: () => void;
}

const SERVICE_LINKS = [
  { to: "/services/tax-planning", label: "Tax planning and strategy" },
  { to: "/services/financial-analysis", label: "Financial analysis and review" },
  { to: "/services/virtual-cfo", label: "Fractional CFO support" },
  { to: "/services/tax-resolution", label: "Tax dispute support" },
  { to: "/services#ma-advisory", label: "Books clean-up before a sale" },
];

const COMPANY_LINKS = [
  { to: "/philosophy", label: "How we work" },
  { to: "/industries", label: "Who we serve" },
  { to: "/about", label: "About the firm" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const PAYMENTS = [
  { src: "/assets/logos/visa.svg", alt: "VISA", height: "h-7" },
  { src: "/assets/logos/mastercard.svg", alt: "Mastercard", height: "h-7" },
  { src: "/assets/logos/amex.svg", alt: "American Express", height: "h-7" },
  { src: "/assets/logos/discover.svg", alt: "Discover", height: "h-7" },
  { src: "/assets/logos/bank.svg", alt: "Bank transfer", height: "h-6" },
];

const linkClass =
  "text-[0.9375rem] text-[#9DB2A7] transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE]";

const Footer: React.FC<FooterProps> = ({ onInquire }) => {
  const [openPolicy, setOpenPolicy] = useState<PolicyId | null>(null);

  return (
    <>
      <footer id="contact" className="bg-ink text-white">
        <div className="container mx-auto px-6">
          {/* ---------------------------------------------------------- CTA
              A band, not a floating card. No negative offsets. */}
          <div className="flex flex-col gap-8 border-b border-white/12 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
            <div className="max-w-xl">
              <h2 className="text-[2rem] font-semibold leading-[1.06] tracking-[-0.025em] sm:text-[2.75rem]">
                Ready to get your finances organized?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#9DB2A7]">
                Tell us what you're running and we'll come back with a plan, a
                price, and what the first month looks like.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
              <button
                onClick={onInquire}
                className="rounded-full bg-[#58E0AE] px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_26px_-14px_rgba(0,0,0,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get a quote
              </button>

              <Link
                to="/pricing"
                className="rounded-full border border-white/25 px-8 py-4 text-center text-base font-medium text-white transition-colors duration-200 hover:border-[#58E0AE] hover:text-[#58E0AE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE]"
              >
                See plans and prices
              </Link>
            </div>
          </div>

          {/* ------------------------------------------------------ columns */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-4">
              <img
                src="/assets/logos/ls-mainLogo600x200_footer.svg"
                alt="Ledgify Solutions"
                className="w-56"
              />
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-[#9DB2A7]">
                Accounting and bookkeeping for individuals, founders, agencies,
                ecommerce brands and businesses at every stage across the USA.
                Published prices, organized records, and a close that lands on
                schedule.
              </p>
            </div>

            <nav aria-label="Services" className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul className="mt-5 space-y-3.5">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company" className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-5 space-y-3.5">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Labelled rows rather than icons, matching the firm record on
                the About page. Drops the lucide import entirely. */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs text-[#9DB2A7]">Office</dt>
                  <dd className="mt-1">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Walnut+Ridge,+AR+72476"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Walnut Ridge, AR 72476
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[#9DB2A7]">Phone</dt>
                  <dd className="mt-1">
                    <a href="tel:+18702026004" className={linkClass}>
                      +1 (870) 202-6004
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[#9DB2A7]">Email</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:info@ledgifysolutions.com"
                      className={linkClass}
                    >
                      info@ledgifysolutions.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* ---------------------------------------- payments + filing note
              The filing position sits beside how you take money, which is
              where a reader is most likely to want it. */}
          <div className="grid grid-cols-1 gap-y-8 border-t border-white/12 py-10 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <h3 className="text-sm font-semibold text-white">We accept</h3>
              <ul className="mt-4 flex flex-wrap items-center gap-5">
                {PAYMENTS.map((method) => (
                  <li key={method.alt}>
                    <img
                      src={method.src}
                      alt={method.alt}
                      className={`${method.height} object-contain`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <p className="max-w-xl text-[0.8125rem] leading-relaxed text-[#9DB2A7] lg:col-span-7">
              Ledgify Solutions provides tax preparation and advisory services
              only. We prepare, organize and review your tax documentation and
              walk you through filing, but we do not file returns on clients'
              behalf — that step stays with you or your designated filer.
            </p>
          </div>

          {/* -------------------------------------------------- legal band */}
          <div className="flex flex-col items-start gap-5 border-t border-white/12 py-8 text-[0.8125rem] text-[#9DB2A7] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Ledgify Solutions LLC. Accounting and
              bookkeeping support across the USA.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {POLICY_ORDER.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setOpenPolicy(id)}
                  className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE]"
                >
                  {POLICIES[id].title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal
        policyId={openPolicy}
        onClose={() => setOpenPolicy(null)}
      />
    </>
  );
};

export default Footer;