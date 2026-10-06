import { ServicePageConfig } from '../../types';

// Content sourced from existing published site copy (constants.tsx PREMIUM_SERVICES
// "financial-analysis" and CORE_SERVICES "reporting" entries, Footer firm details,
// PricingSection tiers). Unpublished facts remain omitted rather than invented.
export const financialAnalysisConfig: ServicePageConfig = {
  slug: 'financial-analysis',
  h1: 'Financial Analysis & Reporting',
  metaTitle: 'Financial Reporting & Analysis | Ledgify Solutions',
  metaDescription: 'Monthly and annual financial reporting, KPI review, and practical analysis for founders, agencies, ecommerce brands, and businesses at every stage.',
  heroSubhead: 'For founders and boards who need to see what their numbers actually mean, not just a spreadsheet of transactions.',
  credentialLine: undefined,
  problems: [
    'Your books close every month, but nobody produces a summary your board or investors can actually read.',
    'You suspect there are discrepancies or unusual patterns in your financials but do not have the bandwidth to dig through every line.',
    'You need consolidated, GAAP-aligned reporting for a funding round, audit, or board meeting and do not have it ready.'
  ],
  scope: [
    { deliverable: 'GAAP compliance review of existing financials', cadence: 'Monthly', format: 'Review memo' },
    { deliverable: 'KPI dashboard implementation (gross margin, CAC payback, runway, etc.)', cadence: 'Set up once, updated monthly', format: 'Dashboard + PDF export' },
    { deliverable: 'Consolidated reporting across entities/subsidiaries', cadence: 'Monthly or quarterly', format: 'Consolidated statement package' },
    { deliverable: 'Pattern recognition & discrepancy review', cadence: 'Monthly', format: 'Findings summary' },
    { deliverable: 'Stakeholder / board deck preparation', cadence: 'Per board meeting', format: 'Slide deck' }
  ],
  outOfScope: [
    'This is analysis and reporting on financials you already have — day-to-day bookkeeping and transaction entry are a separate service (see Compliance-Ready Bookkeeping).',
    'We do not provide investment advice or make buy/sell recommendations on securities.',
    'This is not an independent audit or attestation engagement.'
  ],
  method: [
    { step: 'Data connection & baseline review', detail: 'We connect to your existing accounting system and review the current state of your financial data.', timeframe: 'Week 1' },
    { step: 'Dashboard & KPI build', detail: 'We implement the specific metrics that matter for your business model and reporting cadence.', timeframe: 'Weeks 2-3' },
    { step: 'First reporting cycle', detail: 'You receive your first full reporting package, including any discrepancies flagged during review.', timeframe: 'End of first month' },
    { step: 'Ongoing monthly/quarterly cadence', detail: 'Reporting continues on the agreed schedule, with a documentation review each cycle.', timeframe: 'Ongoing' }
  ],
  pricing: {
    model: 'Fixed monthly tiers based on transaction volume and reporting complexity, not hourly billing',
    from: 'Included within our published monthly plans',
    note: 'Financial analysis and reporting is bundled into our tiered monthly plans, from $80/month for individuals up to $1,199/month for enterprise-scale volume. See the full breakdown on the Pricing page.'
  },
  audience: {
    fitFor: [
      'Founders and boards who need consolidated, board-ready reporting on a recurring cadence',
      'Businesses with multiple entities or revenue streams that need a single consolidated view',
      'Teams preparing for a funding round, acquisition, or audit who need clean, reviewed financials'
    ],
    notFor: [
      'Businesses that only need basic monthly bookkeeping with no analysis layer on top',
      'Anyone seeking a formal independent audit or attestation opinion'
    ]
  },
  faqs: [
    { q: 'How is this different from bookkeeping?', a: 'Bookkeeping records the transactions. This service reviews and interprets what those transactions mean — margin trends, discrepancies, board-ready summaries — after your books are already maintained.' },
    { q: 'Can you build a KPI dashboard specific to our business model?', a: 'Yes. We build dashboards around the metrics that actually drive your business — gross margin by channel, CAC payback, net revenue retention, contribution margin, or runway, depending on what you run.' },
    { q: 'Do you flag errors or unusual activity in our financials?', a: 'Yes, pattern recognition and discrepancy review is part of the monthly deliverable, with a documented findings summary rather than a verbal note.' },
    { q: 'Can you consolidate reporting across multiple entities?', a: 'Yes, consolidated reporting across subsidiaries or related entities is included in the scope table above.' },
    { q: 'Is this an audit?', a: 'No. This is management reporting and analysis, not an independent audit or attestation engagement. If you need a formal audit opinion, we can help you scope that separately.' },
    { q: 'What does this cost?', a: 'Financial analysis and reporting is included in our published monthly plans starting at $80/month, scaled by volume and complexity — see the Pricing page for the full breakdown.' }
  ],
  relatedSlugs: ['tax-planning', 'virtual-cfo'],
  relatedConsultationSlugs: ['financial-architecture', 'market-domination'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  },
  disclaimer: 'This page describes financial analysis and reporting services. It is not an independent audit or attestation engagement, and it is not investment or securities advice.'
};

