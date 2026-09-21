import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ---------------------------------------------------------------------------
   Hero — Ledgify Solutions  ·  v3, the ledger now cycles the plans

   What changed
   ------------
   The right panel used to hold one fixed schedule. It now holds all five
   published plans and moves through them on its own, one at a time. The row
   labels never move — Suitable for, Transactions, Reporting, Support,
   Strategy — only the values swap, staggered top to bottom, so the eye reads
   the difference between tiers instead of re-reading a new card each time.
   The closing line under the double rule is the price for whichever plan is
   showing.

   "Suitable for" leads deliberately. Somebody landing cold does not know
   whether they are a Starter or a Pro; they know they are a solopreneur, or
   an agency with real volume. That row answers the question they actually
   have, and it is the first thing under the plan name.

   Interaction
   -----------
   - Auto-advances every 5.4s, with a progress line showing where it is.
   - Tabs above the panel jump straight to a plan; arrow keys and Home/End
     work once a tab has focus.
   - Hovering or focusing anywhere in the panel pauses it. Picking a tab
     stops the auto-advance for good — once someone has chosen, the panel
     stops taking the wheel back.
   - prefers-reduced-motion disables the auto-advance and every transition;
     the panel stays fully usable as tabs.

   Everything else — headline, supporting copy, CTAs, trust marks, filing
   notice, layout mapping — is unchanged from v2.

   Typeface
   --------
   IBM Plex Sans, weights 400/500/600, self-hosted. Chosen for its tabular
   figures — the numerals are load-bearing here, and system font stacks render
   them differently on every OS. Alternates: Geist, Inter.

   Tokens
   ------
     paper   #FCFBF8   warm off-white
     ink     #0C1F18   deep green-black; the panel, and all display type
     rule    #DFE4E0   hairline on paper
     brand   #0B6B4F   deepened emerald — buttons and links on paper
     mint    #58E0AE   accent inside the ink panel only
     muted   #58655D   secondary text on paper, AA
     on-ink  #9DB2A7   secondary text on ink, AA
--------------------------------------------------------------------------- */

const CYCLE_MS = 5400;

interface Plan {
  id: string;
  name: string;
  price: string;
  priceLabel: string;
  badge?: string;
  values: Record<string, string>;
}

interface TrustMark {
  label: string;
  detail: string;
}

interface HeroProps {
  onInquire: () => void;
  statusNote?: string;
  plans?: Plan[];
  rows?: { key: string; label: string }[];
  trustMarks?: TrustMark[];
}

const DEFAULT_STATUS = "Taking on clients for the March close";

const DEFAULT_ROWS = [
  { key: "suitableFor", label: "Suitable for" },
  { key: "transactions", label: "Transactions" },
  { key: "reporting", label: "Reporting" },
  { key: "support", label: "Support" },
  { key: "strategy", label: "Strategy" },
];

const DEFAULT_PLANS: Plan[] = [
  {
    id: "individual",
    name: "Individual",
    price: "$80",
    priceLabel: "From",
    values: {
      suitableFor: "Individuals and solopreneurs",
      transactions: "Up to 50 a month",
      reporting: "Monthly summary",
      support: "Email",
      strategy: "Free opening consultation",
    },
  },
  {
    id: "starter",
    name: "Starter",
    price: "$100 – $199",
    priceLabel: "Per month",
    values: {
      suitableFor: "Small businesses finding their footing",
      transactions: "Up to 200 a month",
      reporting: "Monthly reports, basic analytics",
      support: "Email",
      strategy: "Free opening consultation",
    },
  },
  {
    id: "growth",
    name: "Growth",
    price: "$200 – $399",
    priceLabel: "Per month",
    badge: "Most chosen",
    values: {
      suitableFor: "Agencies and ecommerce brands scaling up",
      transactions: "Higher volume",
      reporting: "Custom reporting, advanced insights",
      support: "Priority",
      strategy: "Quarterly sessions",
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: "$400 – $599",
    priceLabel: "Per month",
    values: {
      suitableFor: "Growing teams on multiple systems",
      transactions: "Up to 2,000 a month",
      reporting: "Advanced analytics",
      support: "Dedicated, with integration help",
      strategy: "Quarterly sessions",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$600 – $1,199",
    priceLabel: "Per month",
    values: {
      suitableFor: "Multi-entity groups and complex structures",
      transactions: "Unlimited",
      reporting: "Custom integrations and disclosures",
      support: "24/7, with an account manager",
      strategy: "Ongoing strategic consulting",
    },
  },
];

const DEFAULT_TRUST: TrustMark[] = [
  { label: "Asset protection", detail: "Structures built to shield what you hold" },
  { label: "Professional team", detail: "Deep USA regulatory experience" },
  { label: "Secure data handling", detail: "AES-256 encryption, strict confidentiality" },
];

const Hero: React.FC<HeroProps> = ({
  onInquire,
  statusNote = DEFAULT_STATUS,
  plans = DEFAULT_PLANS,
  rows = DEFAULT_ROWS,
  trustMarks = DEFAULT_TRUST,
}) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [reduced, setReduced] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* Reduced motion: no auto-advance, no transitions. */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (paused || stopped || reduced) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % plans.length),
      CYCLE_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, stopped, reduced, plans.length]);

  const choose = useCallback((i: number) => {
    setActive(i);
    setStopped(true);
  }, []);

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    const last = plans.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    choose(next);
    tabRefs.current[next]?.focus();
  };

  const plan = plans[active];
  const running = !paused && !stopped && !reduced;

  return (
    <section
      className="relative overflow-hidden bg-[#FCFBF8] pt-24 pb-20 lg:pt-32 lg:pb-28"
      style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
    >
      <style>{`
        @keyframes ledgify-row {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes ledgify-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .4; transform: scale(.8); }
        }
        @keyframes ledgify-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .ledgify-row  { animation: ledgify-row 480ms cubic-bezier(.22,1,.36,1) both; }
        .ledgify-dot  { animation: ledgify-pulse 2.4s ease-in-out infinite; }
        .ledgify-progress {
          transform-origin: left;
          animation: ledgify-progress linear both;
        }
        @media (prefers-reduced-motion: reduce) {
          .ledgify-row, .ledgify-dot, .ledgify-progress {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:items-start lg:gap-x-16 lg:gap-y-12">
          {/* ------------------------------------------------ claim + actions
              lg: top-left.  mobile: first.                                  */}
          <div className="order-1 lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D6DDD7] bg-white/70 py-1.5 pl-3 pr-4 backdrop-blur">
              <span className="ledgify-dot block h-1.5 w-1.5 rounded-full bg-[#0B6B4F]" />
              <span className="text-[0.8125rem] font-medium text-[#0C1F18]">
                {statusNote}
              </span>
            </div>

            <h1 className="mt-6 max-w-2xl text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#0C1F18] sm:text-[3.5rem] lg:text-[4.25rem]">
              Build your financial legacy.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-snug text-[#0C1F18] sm:text-xl">
              Precision accounting, tax architecture and CFO leadership for
              individuals, founders and growth companies across the USA.
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#58655D]">
              We help individuals, agencies, ecommerce brands and small
              businesses manage their books, reduce costs and stay financially
              organized — without hiring in-house staff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onInquire}
                className="rounded-full bg-[#0B6B4F] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C1F18] hover:shadow-[0_12px_26px_-14px_rgba(12,31,24,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6B4F] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Consult an expert
              </button>

              <Link
                to="/pricing"
                className="rounded-full border border-[#D6DDD7] px-8 py-4 text-center text-base font-medium text-[#0C1F18] transition-colors hover:border-[#0C1F18] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6B4F]"
              >
                See plans and prices
              </Link>
            </div>
          </div>

          {/* ------------------------------------------------- the plan ledger
              lg: right column, spans both rows.  mobile: second, right after
              the buttons — it is the element that earns the page.          */}
          <div
            className="order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="mx-auto max-w-md lg:mx-0">
              {/* Tabs. Sentence case, no all-caps — they are plan names, not
                  labels, and people read them as names. */}
              <div
                role="tablist"
                aria-label="Plans"
                onKeyDown={onTabKeyDown}
                className="flex flex-wrap gap-2"
              >
                {plans.map((p, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={p.id}
                      ref={(el) => (tabRefs.current[i] = el)}
                      role="tab"
                      id={`ledgify-tab-${p.id}`}
                      aria-selected={on}
                      aria-controls="ledgify-plan-panel"
                      tabIndex={on ? 0 : -1}
                      onClick={() => choose(i)}
                      className={[
                        "rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium transition-colors duration-200",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6B4F]",
                        on
                          ? "border-[#0C1F18] bg-[#0C1F18] text-[#FCFBF8]"
                          : "border-[#D6DDD7] text-[#58655D] hover:border-[#0C1F18] hover:text-[#0C1F18]",
                      ].join(" ")}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>

              <figure
                id="ledgify-plan-panel"
                role="tabpanel"
                aria-labelledby={`ledgify-tab-${plan.id}`}
                className="mt-4 rounded-[1.75rem] bg-[#0C1F18] px-7 pb-8 pt-7 shadow-[0_36px_70px_-34px_rgba(12,31,24,.5)] sm:px-9"
              >
                {/* Progress line. Re-keyed per plan so the animation restarts;
                    paused rather than reset when the cursor is in the panel. */}
                <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    key={`${plan.id}-${stopped}`}
                    className={running ? "ledgify-progress h-full bg-[#58E0AE]" : "h-full bg-white/15"}
                    style={
                      running
                        ? {
                            animationDuration: `${CYCLE_MS}ms`,
                            animationPlayState: paused ? "paused" : "running",
                          }
                        : undefined
                    }
                  />
                </div>

                <figcaption className="mt-6 flex items-baseline justify-between gap-4 border-b-2 border-[#FCFBF8] pb-4">
                  <span
                    key={`${plan.id}-name`}
                    className="ledgify-row text-lg font-semibold text-[#FCFBF8]"
                  >
                    {plan.name}
                  </span>
                  {plan.badge ? (
                    <span className="shrink-0 rounded-full bg-[#58E0AE]/15 px-3 py-1 text-xs font-medium text-[#58E0AE]">
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="shrink-0 text-sm text-[#9DB2A7]">
                      Plan {active + 1} of {plans.length}
                    </span>
                  )}
                </figcaption>

                {/* Labels hold still; values swap. Suitable for leads — it is
                    the row that tells someone which tier is theirs. */}
                <dl>
                  {rows.map((row, i) => (
                    <div
                      key={row.key}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-white/10 py-3.5"
                    >
                      <dt className="text-[0.9375rem] text-[#9DB2A7]">
                        {row.label}
                      </dt>
                      <dd
                        key={`${plan.id}-${row.key}`}
                        className="ledgify-row text-right text-[0.9375rem] text-[#FCFBF8]"
                        style={{ animationDelay: `${i * 70}ms` }}
                      >
                        {plan.values[row.key] ?? "—"}
                      </dd>
                    </div>
                  ))}

                  {/* Double rule under the closing figure — how an accountant
                      marks a total. The one ornament here, and it does real
                      work: the price is the last thing the eye lands on. */}
                  <div className="flex items-baseline justify-between gap-6 border-b-4 border-double border-[#FCFBF8] py-5">
                    <dt className="text-[0.9375rem] font-semibold text-[#FCFBF8]">
                      {plan.priceLabel}
                    </dt>
                    <dd
                      key={`${plan.id}-price`}
                      className="ledgify-row shrink-0 text-2xl font-semibold tracking-[-0.02em] text-[#58E0AE]"
                      style={{ animationDelay: `${rows.length * 70}ms` }}
                    >
                      {plan.price}
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 text-xs leading-relaxed text-[#9DB2A7]">
                  Every plan opens with a free consultation. Fractional CFO
                  leadership, M&amp;A due diligence and tax dispute support are
                  added by mandate.
                </p>
              </figure>
            </div>
          </div>

          {/* ------------------------------------------- trust marks + notice
              lg: bottom-left, under the CTAs.  mobile: last.               */}
          <div className="order-3 lg:col-span-6 lg:col-start-1 lg:row-start-2">
            <div className="max-w-lg border-t border-[#DFE4E0] pt-7">
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                {trustMarks.map((mark) => (
                  <li key={mark.label}>
                    <p className="text-sm font-semibold text-[#0C1F18]">
                      {mark.label}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[#58655D]">
                      {mark.detail}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-xs leading-relaxed text-[#58655D]">
                We prepare, organize and review your tax documentation. Filing
                stays with you or your designated filer, and we walk you
                through that step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;