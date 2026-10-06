import { ConsultationPageConfig } from '../../types';

// Firm-wide metrics reused from constants.tsx METRICS (already published on the homepage).
// No new per-service statistics are invented here.
export const financialArchitectureConfig: ConsultationPageConfig = {
  slug: 'financial-architecture',
  h1: 'Financial Architecture',
  metaTitle: 'Financial Architecture Consulting for Businesses | Ledgify',
  metaDescription: 'Financial Architecture consulting: a one-time rebuild of your reporting structure, chart of accounts, and KPI framework for lender- or investor-ready financials.',
  heroSubhead: 'For businesses whose reporting does not reflect how the business actually runs, and needs a structural rebuild rather than another patch.',
  supportingHeading: 'Our Financial Architecture Approach',
  supportingIntro: 'Financial Architecture is a one-time build: we redesign the chart of accounts, reporting structure, and KPI framework so your numbers tell the truth about the business, on demand, not just at year-end.',
  credentialLine: undefined,
  authorityStats: [
    { value: '$3.8B+', label: 'Assets managed across client engagements' },
    { value: '60+', label: 'Financial professionals supporting delivery' }
  ],
  images: {
    hero: 'Wide (16:9) shot evoking financial structure — a clean KPI dashboard or report open on a laptop/monitor, or an architectural blueprint-style graphic used as a metaphor for “building” financial structure. Avoid generic calculator/spreadsheet clichés.',
    heroSrc: "/assets/images/Financial_Architecture_hero.webp",
    context: 'An anonymized screenshot of a KPI dashboard or chart-of-accounts structure, or an original data-visualization graphic — should feel like “the numbers finally reconcile,” not stock photography.',
    contextSrc: "/assets/images/Financial_Architecture_Context.webp",
    method: 'A blueprint-style diagram showing the four build phases (audit → design → build → handoff) matching the method steps below — an architectural/engineering visual metaphor works well here.',
    methodSrc: "/assets/images/Financial_Architecture_method.webp"
  },
  problems: [
    'Your chart of accounts was set up years ago and no longer matches how the business is actually organized.',
    'You are preparing for a lender review, audit, or investor diligence process and your reporting is not ready for it.',
    'You run more than one entity or system and the consolidated numbers do not reliably tie out.'
  ],
  scope: [
    { deliverable: 'Capital structure & chart-of-accounts review', cadence: 'Once, at engagement start', format: 'Written report' },
    { deliverable: 'Reporting architecture design (KPI & dashboard framework)', cadence: 'Once', format: 'Framework document' },
    { deliverable: 'Systems & integration review across your accounting stack', cadence: 'Once', format: 'Working session + memo' },
    { deliverable: 'Lender- or investor-readiness package', cadence: 'Once, where applicable', format: 'Reporting package' },
    { deliverable: 'Handoff documentation & playbook', cadence: 'Once, at close-out', format: 'Playbook document' }
  ],
  outOfScope: [
    'This is a one-time structural build, not an ongoing finance-leadership relationship — for recurring monthly leadership, see Virtual CFO Services.',
    'We do not prepare or file tax returns as part of this engagement.',
    'Ongoing bookkeeping and payroll processing are separate services (see our monthly accounting plans).'
  ],
  method: [
    { step: 'Current-state audit', detail: 'We review your existing chart of accounts, reporting cadence, and systems against how the business is actually run today.', timeframe: 'Weeks 1-2' },
    { step: 'Architecture design', detail: 'A new reporting structure and KPI framework is designed around the decisions you actually need to make.', timeframe: 'Weeks 3-4' },
    { step: 'Build & documentation', detail: 'The new structure is built out and documented, including any lender- or investor-readiness package needed.', timeframe: 'Weeks 5-6' },
    { step: 'Handoff & training', detail: 'Your team is walked through the new structure and playbook so it runs without us in the room.', timeframe: 'Week 7' }
  ],
  pricing: {
    model: 'Custom-scoped engagement, priced after a discovery call',
    note: 'Financial Architecture is scoped around the number of entities, systems, and reporting outputs involved, then quoted in writing before any work begins. Ask during your consultation for a range based on comparable engagements.'
  },
  audience: {
    fitFor: [
      'Businesses preparing for a funding round, lender review, or audit',
      'Companies whose reporting structure no longer reflects how the business actually operates',
      'Businesses integrating multiple entities or systems whose consolidated numbers do not reliably tie out'
    ],
    notFor: [
      'Businesses wanting an ongoing fractional CFO relationship rather than a one-time structural build (see Virtual CFO Services instead)',
      'Businesses that only need monthly bookkeeping with no structural reporting issue'
    ]
  },
  faqs: [
    { q: 'How is Financial Architecture different from Virtual CFO Services?', a: 'Virtual CFO Services is an ongoing monthly relationship: ongoing reviews, forecasting, and board support. Financial Architecture is a one-time structural rebuild of your chart of accounts and reporting framework. Many clients complete the architecture build first, then move into ongoing Virtual CFO support.' },
    { q: 'Will this disrupt our current bookkeeping while it is in progress?', a: 'No. We work from your existing records and design the new structure alongside them; the switch to the new chart of accounts and reporting framework is scheduled at a clean period boundary, not mid-month.' },
    { q: 'Do you prepare the investor or lender package yourselves?', a: 'Yes, where that is part of the scoped engagement — we build the reporting package to the standard a lender or investor review expects, based on your rebuilt financials.' },
    { q: 'We run multiple entities — can you consolidate our reporting?', a: 'Yes, consolidation across entities and systems so the combined numbers tie out is a core part of this engagement when more than one entity is involved.' },
    { q: 'How much does this cost?', a: 'There is no published flat fee because scope depends on the number of entities, systems, and reporting outputs involved. Every engagement is scoped on a discovery call and quoted in writing before work starts.' }
  ],
  relatedSlugs: ['strategic-acceleration', 'operational-excellence', 'market-domination'],
  relatedServiceSlugs: ['virtual-cfo', 'financial-analysis', 'tax-planning'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  },
  disclaimer: 'This page describes financial reporting and systems consulting. It is not tax return preparation, and it is not investment or securities advice.'
};
