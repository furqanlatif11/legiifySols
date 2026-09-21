import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { setMeta } from "../utils/seo";
import FAQ from "../components/faq";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  situation: string;
  need: string;
  message: string;
}

interface ContactPageProps {
  /** Post the form wherever it needs to go. See the note above. */
  onSubmit?: (values: ContactValues) => Promise<void> | void;
  /** Address used by the mailto fallback. */
  inbox?: string;
}

const SITUATIONS = [
  "Individual or solopreneur",
  "Small business",
  "Agency or ecommerce brand",
  "Growing company",
  "Not sure yet",
];

const NEEDS = [
  "Monthly bookkeeping and reporting",
  "Tax preparation and planning",
  "Payroll across one or more states",
  "Clean-up of existing books",
  "CFO-level support or advisory",
  "Something else",
];

const NEXT_STEPS = [
  {
    title: "We read it, not a bot",
    body: "Usually within one business day. If your message needs a real answer rather than an acknowledgement, it may take a little longer.",
  },
  {
    title: "A free consultation",
    body: "We look at your records, your volume and what your year looks like. No charge, and no obligation to continue.",
  },
  {
    title: "A plan and a price, in writing",
    body: "You get a recommended tier and a confirmed price before any work starts — whether or not you go ahead.",
  },
];

const EMPTY: ContactValues = {
  name: "",
  email: "",
  phone: "",
  situation: "",
  need: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-[#6F8379] transition-colors duration-200 focus:border-[#58E0AE] focus:outline-none focus:ring-2 focus:ring-[#58E0AE]/30";
const labelClass = "block text-sm font-medium text-white";

const ContactPage: React.FC<ContactPageProps> = ({
  onSubmit,
  inbox = "info@ledgifysolutions.com",
}) => {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string>("");
  const [trap, setTrap] = useState("");

  useEffect(() => {
    setMeta({
      title: "Contact Ledgify Solutions | Get an Accounting Quote",
      description:
        "Tell us what you're running and we'll come back with a plan and a price. Accounting, bookkeeping, payroll and tax support across the USA.",
      url: window.location.href,
      image: "/assets/logos/ledgify_solutionss_ogImage.png",
    });
  }, []);

  const update =
    (field: keyof ContactValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setValues((current) => ({ ...current, [field]: event.target.value }));

  /* Fallback only. Replace by passing onSubmit. */
  const mailtoFallback = (data: ContactValues) => {
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone && `Phone: ${data.phone}`,
      `Situation: ${data.situation}`,
      `Looking for: ${data.need}`,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${inbox}?subject=${encodeURIComponent(
      `Quote request — ${data.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    if (trap) return; // bot filled the hidden field
    if (!values.name.trim() || !values.email.trim()) {
      setStatus("error");
      setError("Please add your name and email so we can reply.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        mailtoFallback(values);
      }
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setError(
        `Something went wrong sending that. Email us directly at ${inbox} and we'll pick it up from there.`,
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white pt-40 lg:pt-48"
      style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.5rem] lg:text-[4.25rem]">
            Tell us what you're running.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
            We'll come back with a plan, a price and what the first month looks
            like. It costs nothing to ask, and you'll get a straight answer
            about whether we're the right fit.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-y-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-16">
          {/* ------------------------------------------------ what happens
              Stated before the form. Not knowing what a form triggers is
              the most common reason it goes unfilled. */}
          <div className="lg:col-span-5">
            <h2 className="text-base font-semibold text-ink">
              What happens after you send it
            </h2>

            <ol className="mt-4 border-t-2 border-ink">
              {NEXT_STEPS.map((step, idx) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2rem_1fr] gap-x-5 gap-y-1 border-b border-rule py-5"
                >
                  <span
                    aria-hidden="true"
                    className="text-base font-semibold text-brand"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Offered as equals. Some people will never fill in a form, and
                on this page you'd rather have the call. */}
            <h2 className="mt-10 text-base font-semibold text-ink">
              Or reach us directly
            </h2>
            <dl className="mt-4 border-t-2 border-ink">
              <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
                <dt className="text-[0.9375rem] text-muted">Phone</dt>
                <dd className="text-[0.9375rem] font-medium">
                  <a
                    href="tel:+18702026004"
                    className="text-ink transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    +1 (870) 202-6004
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
                <dt className="text-[0.9375rem] text-muted">Email</dt>
                <dd className="text-[0.9375rem] font-medium">
                  <a
                    href={`mailto:${inbox}`}
                    className="text-ink transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {inbox}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
                <dt className="text-[0.9375rem] text-muted">Office</dt>
                <dd className="text-right text-[0.9375rem] font-medium">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Walnut+Ridge,+AR+72476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Walnut Ridge, AR 72476
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-xs leading-relaxed text-muted">
              We prepare, organize and review your tax documentation. Filing
              stays with you or your designated filer, and we walk you through
              that step.
            </p>
          </div>

          {/* -------------------------------------------------------- form */}
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] bg-ink px-6 py-8 shadow-[0_36px_70px_-34px_rgba(12,31,24,.5)] sm:px-9 sm:py-10">
              <h2 className="text-2xl font-semibold tracking-[-0.015em] text-white">
                Request a quote
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#9DB2A7]">
                Five fields. The two dropdowns are what let us quote you
                properly, so they're worth the extra second.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                {/* Honeypot — hidden from people, tempting to bots. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company-website">Company website</label>
                  <input
                    id="company-website"
                    name="company-website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={trap}
                    onChange={(e) => setTrap(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Name or company
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="organization"
                      required
                      value={values.name}
                      onChange={update("name")}
                      className={`${fieldClass} mt-2`}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={update("email")}
                      className={`${fieldClass} mt-2`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone{" "}
                    <span className="font-normal text-[#9DB2A7]">
                      (optional — quicker if you'd rather talk)
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    className={`${fieldClass} mt-2`}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-situation" className={labelClass}>
                      What best describes you
                    </label>
                    <select
                      id="contact-situation"
                      name="situation"
                      value={values.situation}
                      onChange={update("situation")}
                      className={`${fieldClass} mt-2`}
                    >
                      <option value="">Select one</option>
                      {SITUATIONS.map((item) => (
                        <option key={item} value={item} className="text-ink">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-need" className={labelClass}>
                      What you're looking for
                    </label>
                    <select
                      id="contact-need"
                      name="need"
                      value={values.need}
                      onChange={update("need")}
                      className={`${fieldClass} mt-2`}
                    >
                      <option value="">Select one</option>
                      {NEEDS.map((item) => (
                        <option key={item} value={item} className="text-ink">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Anything else worth knowing{" "}
                    <span className="font-normal text-[#9DB2A7]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={update("message")}
                    placeholder="Roughly how many transactions a month, which states you operate in, whether the books are current — whatever you already know."
                    className={`${fieldClass} mt-2 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-[#58E0AE] px-8 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_26px_-14px_rgba(0,0,0,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58E0AE] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send it"}
                </button>

                {/* Announced to screen readers as it changes. */}
                <div aria-live="polite" className="min-h-[1.5rem]">
                  {status === "sent" && (
                    <p className="text-base text-[#58E0AE]">
                      Sent. We'll come back to you within one business day.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-base text-white">{error}</p>
                  )}
                </div>

                <p className="text-xs leading-relaxed text-[#9DB2A7]">
                  We use what you send here to reply and to scope a quote.
                  Nothing is shared with anyone else. Please don't include
                  account numbers or tax identifiers in this form — we'll set
                  up a secure channel for anything sensitive.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FAQ pageId="contact" tone="white" />
    </motion.div>
  );
};

export default ContactPage;