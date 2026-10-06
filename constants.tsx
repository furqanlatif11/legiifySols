
import React from 'react';
import { 
  Calculator, 
  BarChart3, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Scale, 
  PieChart, 
  DollarSign,
  Gavel,
  Globe,
  Building2,
  Lock,
  SearchCode,
  Handshake,
  Rocket,
  Stethoscope,
  Truck,
  UserCheck
} from 'lucide-react';
import { Service, Testimonial, Metric } from './types';

export interface Industry {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  challenges: string[];
  mandates: string[];
}

export type FaqPageId =
  | "home"
  | "industries"
  | "services"
  | "consultation"
  | "pricing"
  | "about"
  | "philosophy"
  | "contact";

export interface FaqItem {
  /** Stable id. Used for anchors, accordion state and schema. */
  id: string;
  question: string;
  /** Plain text. Rendered as a paragraph and used verbatim in FAQPage schema. */
  answer: string;
}

export interface FaqPage {
  /** Optional override for the section heading. */
  heading?: string;
  /** Optional line under the heading. */
  intro?: string;
  /** Ids from SHARED_FAQS, rendered first, in this order. */
  shared?: string[];
  /** Questions specific to this page. */
  items?: FaqItem[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'tech-saas',
    title: 'Technology & SaaS',
    shortDesc: 'Venture-backed firms requiring ASC 606 revenue recognition and R&D tax credit optimization.',
    fullDesc: 'Growing technology businesses need records and reporting that keep pace with their operations. We support subscription-based revenue records, multi-state payroll information for remote teams, and organized documentation for tax planning.',
    icon: 'Rocket',
    challenges: ['ASC 606 Revenue Recognition', 'Multi-state Nexus Compliance', 'Equity & Stock Option Accounting'],
    mandates: ['R&D Tax Credit Study', 'Series A-D Readiness', 'Burn-Rate Strategy']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Dev',
    shortDesc: 'Real estate bookkeeping, entity records, and tax-planning coordination.',
    fullDesc: 'We help real estate businesses keep project records, entity information, and tax-planning documentation organized. Specialized studies and legal work can be coordinated separately when needed.',
    icon: 'Building2',
    challenges: ['Passive Activity Loss Rules', 'Complex Depreciation Schedules', 'Joint Venture Accounting'],
    mandates: ['Cost Segregation Study', '1031 Exchange Facilitation', 'Portfolio Shielding']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    shortDesc: 'Compliance-heavy accounting for private practices, surgery centers, and med-tech startups.',
    fullDesc: 'Medical practices need organized records, clear expense tracking, and practical financial reporting. We support bookkeeping and planning workflows while specialized clinical, legal, and privacy requirements remain with the appropriate professionals.',
    icon: 'Stethoscope',
    challenges: ['HIPAA Financial Privacy', 'Insurance Billing Reconciliation', 'Equipment Lease Optimization'],
    mandates: ['Practice Valuation', 'Distribution Strategy', 'Compliance Review']
  },
  {
    id: 'manufacturing',
    title: 'Mfg & Logistics',
    shortDesc: 'Inventory valuation, supply chain cost analysis, and international trade tax strategies.',
    fullDesc: 'Manufacturers and logistics businesses need clear inventory and cost records. We help organize financial information, review operating costs, and prepare reports that support everyday decisions.',
    icon: 'Truck',
    challenges: ['Inventory Cost Capitalization', 'Duty Drawback Optimization', 'Supply Chain Analysis'],
    mandates: ['Inventory Valuation', 'Logistics Tax Shielding', 'Operational Review']
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    shortDesc: 'High-revenue law firms, architectural groups, and creative agencies.',
    fullDesc: 'Service-based firms thrive on billable efficiency and partner distribution equity. We provide the financial structure to manage overhead, optimize partner k-1s, and ensure the firm is structured for a future buy-out or generational succession.',
    icon: 'Briefcase',
    challenges: ['Partner Equity Tracking', 'Overhead Allocation', 'Succession Planning'],
    mandates: ['Partner Distribution Model', 'Succession Architecture', 'Profitability Review']
  },
  {
    id: 'hnw-individuals',
    title: 'Individuals & Solopreneurs',
    shortDesc: 'Bookkeeping, tax organization, and planning support for individuals and solopreneurs.',
    fullDesc: 'Ledgify Solutions helps individuals and solopreneurs keep financial records organized, understand their tax documents, and plan around their income and business activity. Trust, estate, and international tax work requires separate specialist coordination.',
    icon: 'UserCheck',
    challenges: ['Estate & Gift Tax Exposure', 'Global Asset Reporting', 'Trust & Estate Accounting'],
    mandates: ['Wealth Transfer Strategy', 'FBAR/FATCA Compliance', 'Estate Architecture']
  }
];

export const CORE_SERVICES: (Service & { blueprint: string[] })[] = [
  {
    id: 'tax-strategy',
    title: 'Advanced Tax Strategy',
    description: 'We help owners understand tax options, entity choices, and estimated payments.',
    icon: 'FileText',
    category: 'core',
    blueprint: ['Nexus Study & Analysis', 'Strategic Entity Selection', 'Quarterly Liability Projections', 'State & Local Tax (SALT) Optimization']
  },
  {
    id: 'bookkeeping',
    title: 'Compliance-Ready Bookkeeping',
    description: 'Professional financial records maintained with double-entry precision for accuracy and organization.',
    icon: 'Calculator',
    category: 'core',
    blueprint: ['Accrual-Basis Ledger Mgmt', 'Monthly Bank Reconciliation', 'Monthly & Annual Financial Reporting', 'Financial Review Support']
  },
  {
    id: 'payroll-compliance',
    title: 'Multi-State Payroll',
    description: 'Complex nexus and withholding management across all 50 states, ensuring labor law compliance.',
    icon: 'DollarSign',
    category: 'core',
    blueprint: ['Nexus Determination', 'Local Tax Withholding', 'Compliance Verification', 'Quarterly Compliance Filings']
  },
  {
    id: 'reporting',
    title: 'Monthly & Annual Financial Reporting',
    description: 'Monthly and annual financial reports that make business performance easier to understand.',
    icon: 'BarChart3',
    category: 'core',
    blueprint: ['GAAP Compliance Review', 'KPI Dashboard Implementation', 'Consolidated Reporting', 'Stakeholder Deck Prep']
  }
];

export const PREMIUM_SERVICES: (Service & { blueprint: string[] })[] = [
  {
    id: 'fractional-cfo',
    title: 'Fractional CFO Support',
    description: 'Budgeting, cash flow forecasting, and monthly financial review support for growing businesses.',
    icon: 'TrendingUp',
    category: 'premium',
    blueprint: ['Capital Allocation Strategy', 'Budget vs Actual Modeling', 'Board Meeting Representation', 'Funding Round Support']
  },
  {
    id: 'irs-dispute',
    title: 'Tax Dispute Support',
    description: 'Professional support for complex tax matters and resolution strategies.',
    icon: 'Gavel',
    category: 'premium',
    blueprint: ['Documentation Preparation', 'Record Organization', 'Communication Coordination', 'Resolution Strategy Support']
  },
  {
    id: 'ma-advisory',
    title: 'Books Clean-Up Before a Sale',
    description: 'Books clean-up and financial review support before a sale or ownership change.',
    icon: 'Handshake',
    category: 'premium',
    blueprint: ['Quality of Earnings (QofE)', 'Asset Purchase Allocation', 'Synergy Analysis', 'Integration Roadmap']
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis & Review',
    description: 'Financial review to identify discrepancies, trends, and questions worth addressing.',
    icon: 'SearchCode',
    category: 'premium',
    blueprint: ['Pattern Recognition', 'Data Analysis Support', 'Documentation Review', 'Detailed Reporting']
  }
];

export const SHARED_FAQS: FaqItem[] = [
  {
    id: "pricing-start",
    question: "How much does it cost?",
    answer:
      "Plans start at $80 a month for individuals and solopreneurs and run to $600–$1,199 for enterprise engagements, with Starter, Growth and Pro in between. Every price is published on the pricing page — you don't need to book a call to see one. Advisory add-ons such as fractional CFO support are quoted separately, before any work starts.",
  },
  {
    id: "filing",
    question: "Do you file my tax return for me?",
    answer:
      "No. We prepare, organize and review your tax documentation, and we walk you through the filing step, but the return is submitted by you or by your designated filer. We don't e-file or submit returns to the IRS or state agencies on your behalf.",
  },
  {
    id: "data-security",
    question: "How is my financial data protected?",
    answer:
      "Client information is held under AES-256 encryption with verified security controls, and every engagement runs under strict non-disclosure terms. You can ask at any point what we hold, where it sits and who has had access to it.",
  },
  {
    id: "getting-started",
    question: "How do we start?",
    answer:
      "Every plan opens with a free consultation. We look at your current records, how many transactions you're running and what your year looks like, then recommend a plan and confirm the price before any work begins. Most engagements start with a review of your existing books.",
  },
  {
    id: "switching",
    question: "What if my books are behind or messy?",
    answer:
      "That's a normal starting point, not a problem. We'll tell you what shape the records are in and what it takes to bring them current before you commit to a monthly plan. Clean-up is scoped and quoted separately so it doesn't sit hidden inside your ongoing fee.",
  },
  {
    id: "location",
    question: "Where are you based, and who do you work with?",
    answer:
      "Ledgify Solutions LLC is based in Walnut Ridge, Arkansas, and works with clients across the USA — individuals, founders, agencies, ecommerce brands and companies at every stage. Everything runs remotely, so your location doesn't change how an engagement works.",
  },
  {
    id: "software",
    question: "Do I have to change my accounting software?",
    answer:
      "No. We work in the systems you already use and will tell you plainly if something about your current setup is going to cost you time or accuracy. Any migration is your decision, and we'd scope it as its own piece of work.",
  },
];
export const PAGE_FAQS: Record<FaqPageId, FaqPage> = {
  home: {
    heading: "Questions people ask first",
    shared: ["pricing-start", "filing", "getting-started", "data-security", "location"],
    items: [
      {
        id: "home-whats-included",
        question: "What's included in a monthly plan?",
        answer:
          "Every plan covers the same four things: compliance-ready bookkeeping, tax strategy, multi-state payroll and financial reporting. What changes between tiers is volume, reporting depth and how much strategy time you get. Fractional CFO leadership, M&A due diligence and tax dispute support are added by mandate on top of any plan.",
      },
      {
        id: "home-in-house",
        question: "Is this cheaper than hiring someone in-house?",
        answer:
          "For most businesses at this size, yes — a part-time bookkeeper is a salary, and an accountant with multi-state and tax experience is a larger one. A monthly plan gives you that range of work at a published price, without the hire, the software licences or the cover when someone is away.",
      },
    ],
  },

  industries: {
    heading: "Questions about sector work",
    intro:
      "Specific to the industries on this page. General questions about price, filing and getting started are answered below them.",
    shared: ["pricing-start", "filing", "getting-started", "data-security"],
    items: [
      {
        id: "industries-not-listed",
        question: "My industry isn't listed. Can you still help?",
        answer:
          "Almost certainly. The underlying work rarely changes — books, filings, payroll and reporting — only which rules apply on top of it. The sectors on this page are the ones we see most often, not the only ones we take. Tell us what you do and we'll scope it.",
      },
      {
        id: "industries-why-sector",
        question: "Why does my sector change how the accounting works?",
        answer:
          "Because the rules sitting on top of the books differ. A SaaS company recognizes revenue on a schedule rather than when cash lands. A property business runs depreciation and passive loss rules that don't apply elsewhere. A practice handling patient data carries privacy obligations on every entry. Same bookkeeping underneath, different treatment above it.",
      },
      {
        id: "industries-multiple",
        question: "We operate across more than one of these sectors. What then?",
        answer:
          "That's common with holding structures and groups. We scope the engagement around the entities rather than the label, so each one gets the treatment its own activity calls for, and the consolidated reporting still ties out.",
      },
      {
        id: "industries-multi-state",
        question: "We operate in several states. Does that complicate things?",
        answer:
          "It adds nexus and withholding questions, which is exactly what multi-state payroll and tax strategy are for. Every plan covers payroll across all 50 states. What matters is telling us early where you have people, property or sales, because that's what creates the obligation.",
      },
    ],
  },

  services: {
    heading: "Questions about the work",
    shared: ["pricing-start", "filing", "switching", "software", "data-security"],
    items: [
      {
        id: "services-core-vs-addons",
        question: "What's the difference between a plan and an add-on?",
        answer:
          "A plan is the ongoing work that runs every month — bookkeeping, tax strategy, payroll and reporting. Add-ons are engagements you reach for when the situation calls for one: a fractional CFO, a clean-up before a sale, support on a tax dispute. They're priced per mandate and quoted before any work starts.",
      },
      {
        id: "services-reporting",
        question: "What do I actually receive each month?",
        answer:
          "A close pack: reconciled ledger, profit and loss, balance sheet, cash flow and a summary of what was reconciled, what's outstanding and when it landed. Higher tiers add custom reporting and advanced analytics on top of that.",
      },
      {
        id: "services-timeline",
        question: "How quickly does the month-end close land?",
        answer:
          "Close timing depends on how fast source documents reach us and how clean the starting records are. We agree a target date during the consultation and tell you if something is going to push it, rather than letting the date pass quietly.",
      },
    ],
  },

  consultation: {
    heading: "Questions about business consultation",
    intro:
      "Specific to the four consulting modules on this page. General questions about getting started and data security are answered below them.",
    shared: ["getting-started", "data-security", "location"],
    items: [
      {
        id: "consultation-vs-plans",
        question: "How is this different from the monthly accounting plans?",
        answer:
          "The monthly plans are ongoing compliance work — bookkeeping, tax strategy, payroll and reporting that runs every period whether or not anything changes. Business Consultation is project-based: a scoped engagement built around a specific outcome, like a growth roadmap or a financial architecture rebuild, with a defined start and finish.",
      },
      {
        id: "consultation-pricing",
        question: "Why isn't pricing published the way the monthly plans are?",
        answer:
          "Scope varies too much to publish one number. A growth roadmap for a 5-person business and a market-entry strategy for a 60-person company aren't the same engagement. Every module is scoped on a discovery call and quoted in writing before anything starts, so you're never billed against an assumption.",
      },
      {
        id: "consultation-duration",
        question: "How long does a typical engagement run?",
        answer:
          "Most modules open with a 2-4 week diagnostic and roadmap phase, followed by an implementation or review cadence that runs as long as you need it — monthly check-ins are common. We agree the shape of this during scoping, not after you've signed.",
      },
      {
        id: "consultation-combine",
        question: "Can we run a consulting engagement alongside an existing monthly plan?",
        answer:
          "Yes, and it's common. Clients on a monthly plan often add a consulting module when they hit a specific inflection point — a stalled growth curve, a messy reporting structure, a competitor gaining ground. The two run side by side without disrupting your existing plan.",
      },
    ],
  },

  pricing: {
    heading: "Questions about pricing",
    shared: ["filing", "getting-started", "switching", "software"],
    items: [
      {
        id: "pricing-tier-choice",
        question: "Which plan is right for me?",
        answer:
          "Transaction volume is the usual deciding factor: up to 50 a month fits Individual, up to 200 fits Starter, and Pro covers up to 2,000. Beyond volume, it comes down to how much reporting and strategy time you want. The free consultation exists to get this right — we'd rather place you correctly than sell you up.",
      },
      {
        id: "pricing-ranges",
        question: "Why are some plans shown as a range?",
        answer:
          "Because the work inside a tier varies with volume, entity count and how many systems we're reconciling across. The range is the honest span; your figure is confirmed after the consultation and before anything starts.",
      },
      {
        id: "pricing-changes",
        question: "Can I change plans later?",
        answer:
          "Yes. Volume changes as a business grows, and the plan should follow it. We review the fit as part of ongoing work and will tell you when a different tier makes more sense — including when a lower one does.",
      },
      {
        id: "pricing-contract",
        question: "Am I locked into a contract?",
        answer:
          "Terms are set out in writing before you start, including notice. Ask about this during the consultation so the answer is on record rather than assumed.",
      },
    ],
  },

  about: {
    heading: "Questions about working with us",
    shared: ["location", "data-security", "getting-started", "filing"],
    items: [
      {
        id: "about-who",
        question: "Who will I be dealing with?",
        answer:
          "You work with the same people month to month rather than a rotating queue. Higher tiers include dedicated support and, at enterprise level, a named account manager. Whoever handles your books is someone you can reach directly.",
      },
      {
        id: "about-communication",
        question: "How often will I hear from you?",
        answer:
          "At minimum, every close. Beyond that it depends on the plan: email support on the lower tiers, priority and dedicated support higher up, and quarterly strategy sessions from Growth onward. If we find something that needs a decision, you hear about it when we find it, not at year end.",
      },
    ],
  },

  philosophy: {
    heading: "Questions about how we work",
    shared: ["data-security", "filing", "getting-started"],
    items: [
      {
        id: "philosophy-standards",
        question: "What review does my work go through?",
        answer:
          "Every statement is reviewed before it leaves us, against double-entry and against professional standards. If something doesn't reconcile, you hear about it from us first, with what we found and what we propose to do about it.",
      },
    ],
  },

  contact: {
    heading: "Before you get in touch",
    shared: ["getting-started", "pricing-start", "location", "filing"],
  },
};
const SHARED_BY_ID: Record<string, FaqItem> = SHARED_FAQS.reduce(
  (acc, item) => ({ ...acc, [item.id]: item }),
  {} as Record<string, FaqItem>,
);

/** Returns the resolved list for a page: shared entries first, then its own. */
export const getFaqs = (pageId: FaqPageId): FaqItem[] => {
  const page = PAGE_FAQS[pageId];
  if (!page) return [];

  const shared = (page.shared ?? [])
    .map((id) => {
      const found = SHARED_BY_ID[id];
      if (!found && typeof console !== "undefined") {
        console.warn(`[faqs] "${pageId}" references unknown shared id "${id}".`);
      }
      return found;
    })
    .filter(Boolean) as FaqItem[];

  return [...shared, ...(page.items ?? [])];
};

/** Heading and intro for a page's FAQ section, with sensible defaults. */
export const getFaqMeta = (pageId: FaqPageId) => ({
  heading: PAGE_FAQS[pageId]?.heading ?? "Common questions",
  intro: PAGE_FAQS[pageId]?.intro,
});


/* ---------------------------------------------------------------------------
   Legal policies — Ledgify Solutions
   src/constants/legal.ts

   The three policies were previously hardcoded as JSX inside Footer.tsx,
   which meant ~500 lines of legal prose sitting in a layout component, three
   near-identical modal implementations around them, and no way to reuse the
   text anywhere else. They're data now.

   The text below is VERBATIM from the existing modals. Nothing has been
   reworded — these are legal documents and changing them isn't a design
   decision. But several passages look like they came from a template written
   for a different kind of business, and they should go to whoever drafted
   them. Each one is flagged with a ⚠ REVIEW comment at the section it
   affects. None of this is legal advice; it's a list of things that look
   inconsistent with an accounting firm, for a lawyer to confirm.

   Worth doing next
   ----------------
   These should also live at real URLs — /terms, /privacy, /refund-policy —
   not only inside modals. Policy pages in a modal are invisible to search
   engines, can't be linked to directly, and can't be cited in a contract or
   a payment processor review. Now that the content is here, a policy page
   route is a few lines: read the same record, render the same sections.
--------------------------------------------------------------------------- */

export type PolicyId = "terms" | "privacy" | "refund";

export interface PolicySection {
  heading: string;
  paragraphs: string[];
}

export interface Policy {
  id: PolicyId;
  /** Shown in the footer link and as the dialog title. */
  title: string;
  /** Optional. Rendered under the title — worth filling in; readers and
   *  payment processors both look for it. */
  updated?: string;
  sections: PolicySection[];
}

export const POLICIES: Record<PolicyId, Policy> = {
  terms: {
    id: "terms",
    title: "Terms and conditions",
    sections: [
      {
        heading: "Customer support",
        paragraphs: [
          "Ledgify Solutions LLC prides itself on fast and courteous customer service. For any questions regarding the purchase or sale of services, contact us directly with your name, email, and order number.",
        ],
      },
      {
        heading: "Digital services and completion time",
        paragraphs: [
          "All plan services are provided digitally via the Internet. Services are expected to be completed within 1 to 7 days, depending on project complexity and contractual agreements.",
        ],
      },
      {
        /* ⚠ REVIEW — the second paragraph here describes an information
           product, not an accounting engagement: "educational and
           entertainment purposes only", "no income is guaranteed",
           "additional purchases may be required to start a business". On a
           firm that prepares tax documentation, "educational and
           entertainment purposes only" contradicts what the rest of the site
           says the service is, and a client could reasonably point at it. */
        heading: "Restrictions on use of materials",
        paragraphs: [
          "All materials on this site, including text, graphics, databases, HTML code, and other intellectual property, are protected under International Copyright Laws. They may not be copied, reprinted, published, re-engineered, hosted, translated, or distributed without explicit permission. Trademarks are property of their respective owners and used with permission.",
          "Services are for educational and entertainment purposes only. No income is guaranteed. Additional purchases may be required to start a business. All decisions are made at your own discretion.",
        ],
      },
      {
        heading: "Database ownership, license, and use",
        paragraphs: [
          "You may use information obtained from this site only for private or internal purposes. You may not sell, reproduce, redistribute, or publish any part of the databases in any form. Unauthorized use may result in legal action.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          'Materials are provided "as is" without warranties of any kind. Ledgify Solutions LLC does not guarantee uninterrupted or error-free functionality, nor assume liability for damages arising from use. Applicable laws may limit exclusions or limitations of liability.',
          "Total liability shall not exceed the amount paid, if any, for accessing services from this site.",
        ],
      },
      {
        heading: "Accuracy of information",
        paragraphs: [
          "Information on this website is believed accurate at the time of posting. Content is for informational purposes and does not constitute legal, financial, or tax advice. Services are offered only where legally permitted.",
        ],
      },
      {
        heading: "Links and marks",
        paragraphs: [
          "Links to third-party sites are for convenience only. Ledgify Solutions LLC is not responsible for external content. Trademarks, logos, and trade names displayed are the property of their respective owners. Unauthorized use is prohibited.",
        ],
      },
      {
        /* ⚠ REVIEW — "coaching, webinars, seminars, and proprietary
           software" doesn't match the services the site sells. */
        heading: "Returns and refund policies",
        paragraphs: [
          "Returnable services are covered by a 30-day money-back guarantee. Services, coaching, webinars, seminars, and proprietary software are eligible for refund within 30 days from completion of services (see Refund Policy for details); after the 30-day period they are generally non-refundable. Please refer to service sales pages for additional details.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "Subscriber codes, usernames, passwords, and all information accessed through password-protected areas must be kept strictly confidential and not shared with others.",
        ],
      },
      {
        /* ⚠ REVIEW — arbitration seated in "Manitoba, Canada" for an
           Arkansas LLC serving US clients. This is the single most likely
           copy-paste error in the document and the most consequential: a
           dispute clause pointing at a foreign forum is the kind of thing
           that gets a whole clause struck, or worse, enforced. */
        heading: "Legal and governing law",
        paragraphs: [
          "Terms apply to all access and use of this site. Ledgify Solutions LLC may revise these Terms, with the revised version applying immediately upon publication. Terms are governed by U.S. law. Intellectual property violations may result in legal action in U.S. courts.",
          "Disputes will first attempt timely resolution. Unresolved disputes will be submitted to confidential arbitration in Manitoba, Canada, except for intellectual property violations enforceable in U.S. courts under exclusive jurisdiction.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "Terms of Use remain effective until terminated. You may terminate by destroying all materials obtained. The agreement terminates immediately if you fail to comply with any term.",
        ],
      },
      {
        heading: "Copyright and security",
        paragraphs: [
          "All website content is protected by international copyright laws. Unauthorized use will result in legal action. Payments and personal information are protected via SSL encryption.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For any questions regarding these Terms and Conditions, email us at info@ledgifysolutions.com.",
        ],
      },
    ],
  },

  privacy: {
    id: "privacy",
    title: "Privacy policy",
    sections: [
      {
        /* ⚠ REVIEW — opening a privacy policy with an instruction to leave
           the site reads as hostile, and "WE HATE SPAM!" in capitals sits
           oddly on a firm holding clients' financial records. Content is
           unchanged here; tone is a decision for you and your lawyer. */
        heading: "Notice — read this page",
        paragraphs: [
          "If you do not agree to these Terms, discontinue using the site immediately.",
        ],
      },
      {
        heading: "Introduction",
        paragraphs: [
          'Company/Seller (herein referred to as "this Site") strives to offer its visitors the advantages of Internet technology and to provide an interactive and personalized experience. Ledgify Solutions LLC may use Personally Identifiable Information (your name, e-mail address, street address, telephone number) subject to the terms of this privacy policy. We will never sell, barter, or rent your email address to any unauthorized third party. WE HATE SPAM!',
        ],
      },
      {
        heading: "Information collection",
        paragraphs: [
          "How we collect and store information depends on the page you are visiting, the activities in which you participate, and the services provided. This may include registration, newsletters, purchases, contests, chat areas, and other interactive areas. We may also collect information automatically via cookies and other tools.",
        ],
      },
      {
        /* ⚠ REVIEW — "more personalized content and advertising" and the
           advertising/affiliate section below describe an ad-supported
           business. If Ledgify doesn't run advertising or share data with
           advertisers, these paragraphs commit you to practices you don't
           have and undercut the security claims made elsewhere on the site. */
        heading: "Use of collected information",
        paragraphs: [
          "Information is collected to enhance your experience and deliver more personalized content and advertising. Aggregated data may be used for analytics to improve our site and services. Personal information may be used to communicate about your registration, customization preferences, services, and other topics of interest. We do not sell your email or credit card information.",
          "Your information may also be used for site administration, e-commerce processing, contests, or communications. Certain technical third parties may access your data as required by law or for operational purposes.",
        ],
      },
      {
        heading: "Third parties, ads, and affiliated sites",
        paragraphs: [
          "Third-party partners, advertisers, and affiliates may have their own data collection practices. We are not responsible for their privacy policies. Cookies and other tracking technologies may be used by advertisers and partners. Information you voluntarily disclose on message boards or chat areas may be collected and used by third parties.",
        ],
      },
      {
        heading: "Compliance with laws",
        paragraphs: [
          "Online Privacy Protection Act: we comply with the Act and will not distribute personal information without consent.",
          "Children's Online Privacy Protection Act (COPPA): no information is collected from anyone under 13.",
          "CAN-SPAM Act: we comply with anti-spam laws and never send misleading information.",
        ],
      },
      {
        /* ⚠ REVIEW — support hours are given in CST, while the firm is in
           Arkansas (Central). Worth confirming which is correct, since this
           is the only place on the site that states hours at all. */
        heading: "Contacting us",
        paragraphs: [
          "Support is available Monday to Friday, 9am–7pm CST, and Saturday to Sunday, 10am–5pm CST. Phone and chat support are available during standard hours. Tickets are responded to within 12 business hours. For privacy concerns, email us at info@ledgifysolutions.com.",
        ],
      },
      {
        heading: "Governing law and dispute resolution",
        paragraphs: [
          "This policy and site use are governed by U.S. law. Disputes will first attempt mediation, and if unsuccessful, binding arbitration within the United States applies. This policy does not create contractual or legal rights on behalf of any party.",
        ],
      },
      {
        heading: "Credit card security",
        paragraphs: [
          "Payments and personal information are protected via industry-standard SSL encryption. Ledgify Solutions LLC does not share customer information with third-party providers.",
        ],
      },
    ],
  },

  refund: {
    id: "refund",
    title: "Refund policy",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Ledgify Solutions LLC offers a 30-day money-back guarantee for new purchases. If you are dissatisfied with our work, we may issue a refund within 30 working days either as credits or a direct deposit to your account.",
        ],
      },
      {
        /* ⚠ REVIEW — "any design or service" suggests this was written for a
           design studio. */
        heading: "Refund and cancellation policy",
        paragraphs: [
          "Clients are encouraged to read and familiarize themselves with our refund policy. Ledgify Solutions LLC strives to provide high-quality services. Refunds may be issued for any design or service, but internal management reserves the right to reject a refund request at its discretion.",
          "Refunds will generally be issued to the original payment method. Clients must specify account details and reason for the refund to our associates.",
        ],
      },
      {
        heading: "Return period for services",
        paragraphs: [
          "For services (including consulting, implementations, coaching, webinars, and similar engagements), clients may request a refund within 30 days from the completion of services. The 30-day period begins on the date Ledgify Solutions LLC notifies the client that the services are complete or the completion date specified in the applicable agreement, whichever is earlier. Refunds requested after this 30-day period will generally not be eligible, except at the sole discretion of our management.",
        ],
      },
      {
        heading: "Non-delivery of service",
        paragraphs: [
          "If delivery emails are not received due to mailing issues, contact us for assistance. Claims must be submitted within 30 days from delivery; otherwise, the service will be considered successfully delivered.",
        ],
      },
      {
        /* ⚠ REVIEW — downloading and unzipping files is not something an
           accounting engagement involves. Almost certainly template residue. */
        heading: "Download and unzipping issues",
        paragraphs: [
          "Problems with downloading or unzipping services must be reported to our Technical Support Department. Failure to report within 30 days may result in the refund being declined.",
        ],
      },
      {
        heading: "Service not as described",
        paragraphs: [
          "Issues must be reported within 30 days with clear evidence that the service differs from its description. Complaints based on false expectations or personal preferences will not be honored.",
        ],
      },
      {
        heading: "Children policy",
        paragraphs: [
          "Only persons aged 18 or older may access our services. We do not knowingly collect information from children under 13. Parents or guardians discovering that their child has provided personal information should contact us immediately. Any information collected from children under 13 will be removed, and the order canceled.",
        ],
      },
    ],
  },
};

export const POLICY_ORDER: PolicyId[] = ["terms", "privacy", "refund"];

// No real client testimonials with consent + full attribution (name, title, company, photo/link) exist yet.
// Do not add fabricated names/quotes/avatars here — the Testimonials component intentionally renders nothing when this is empty.
export const TESTIMONIALS: Testimonial[] = [];

export const METRICS: Metric[] = [
  { label: 'Case Resolution', value: '100%', description: 'Successful case outcomes.' },
  { label: 'Client Satisfaction', value: '$3.8B+', description: 'Assets managed for clients.' },
  { label: 'Client Net Growth', value: '22%', description: 'Average annual wealth increase for clients.' },
  { label: 'Professional Team', value: '60+', description: 'Experienced financial professionals.' }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  DollarSign: <DollarSign className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Gavel: <Gavel className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Users: <Users className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  PieChart: <PieChart className="w-6 h-6" />,
  Building2: <Building2 className="w-8 h-8" />,
  Lock: <Lock className="w-6 h-6" />,
  SearchCode: <SearchCode className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  UserCheck: <UserCheck className="w-8 h-8" />
};
