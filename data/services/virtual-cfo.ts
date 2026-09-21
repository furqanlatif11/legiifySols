import { ServicePageConfig } from '../../types';

// Content sourced from existing published site copy (constants.tsx PREMIUM_SERVICES
// "fractional-cfo" entry, Footer firm details, PricingSection tiers). Unpublished
// Unpublished facts remain omitted rather than invented.
export const virtualCfoConfig: ServicePageConfig = {
  slug: 'virtual-cfo',
  h1: 'Virtual CFO Services',
  metaTitle: 'Fractional CFO Support for Businesses | Ledgify',
  metaDescription: 'Fractional finance support for businesses at every stage: monthly financial reviews, budget vs. actual, cash flow forecasting, and lender-ready materials.',
  heroSubhead: 'For founders who need CFO-level financial leadership without the cost of a full-time hire.',
  supportingHeading: 'Fractional CFO Leadership',
  supportingIntro: 'Fractional CFO support gives your team a recurring finance leadership cadence for capital allocation, board preparation, forecasting, and funding decisions without a full-time hire.',
  credentialLine: undefined,
  problems: [
    'You are making capital allocation decisions without a finance leader in the room to model the trade-offs.',
    'You are heading into a funding round and do not have a data room, investor reporting package, or diligence-ready financials.',
    'Your board wants a proper budget-vs-actual review each meeting and right now someone assembles it ad hoc.'
  ],
  scope: [
    { deliverable: 'Capital allocation strategy & planning', cadence: 'Quarterly', format: 'Working session + model' },
    { deliverable: 'Budget vs. actual modeling', cadence: 'Monthly', format: 'Model + variance memo' },
    { deliverable: 'Board meeting representation & materials', cadence: 'Per board meeting', format: 'Deck + live attendance' },
    { deliverable: 'Funding round support (data room, investor reporting)', cadence: 'As needed during a raise', format: 'Data room + reporting package' }
  ],
  outOfScope: [
    'This is fractional financial leadership, not day-to-day bookkeeping or transaction entry (see Compliance-Ready Bookkeeping).',
    'We do not provide investment or securities advice, or make the fundraising decision on your behalf.',
    'This is not a full-time hire — hours and availability are scoped and agreed upfront.'
  ],
  method: [
    { step: 'Onboarding & financial model review', detail: 'We review your current financial model, cap table, and reporting setup.', timeframe: 'Weeks 1-2' },
    { step: 'Cadence & hours agreed', detail: 'We set a recurring cadence for strategic sessions, board prep, and ad hoc support based on your stage.', timeframe: 'Week 2' },
    { step: 'First board cycle', detail: 'You get your first board-ready reporting package and, if needed, live representation at the meeting.', timeframe: 'First full board cycle' },
    { step: 'Ongoing strategic support', detail: 'Capital allocation, budget-vs-actual, and fundraising support continue on the agreed cadence.', timeframe: 'Ongoing' }
  ],
  pricing: {
    model: 'Fixed monthly retainer scoped to hours and cadence, not hourly billing',
    from: 'Included within our published monthly plans',
    note: 'Fractional CFO support is scoped within our tiered monthly plans, from $80/month up to $1,199/month depending on volume and complexity, with custom retainers available for heavier fundraising or board support. See the Pricing page for the full breakdown.'
  },
  audience: {
    fitFor: [
      'Founders preparing for a funding round who need investor-ready reporting and a data room',
      'Companies with a board that expects a formal budget-vs-actual review each meeting',
      'Businesses past early bookkeeping needs that need strategic financial leadership without a full-time CFO'
    ],
    notFor: [
      'Very early-stage businesses whose primary need is basic bookkeeping, not strategic finance leadership',
      'Companies looking for investment advice or portfolio management rather than internal financial strategy'
    ]
  },
  faqs: [
    { q: 'What is a virtual CFO versus a fractional CFO?', a: 'The terms are used near-interchangeably in this market. Both describe CFO-level financial leadership delivered part-time or remotely rather than through a full-time in-house hire — that is what this service provides.' },
    { q: 'How many hours does this include?', a: 'Hours and cadence are scoped to your stage and needs during onboarding and agreed upfront as part of the engagement.' },
    { q: 'Will someone actually attend our board meetings?', a: 'Yes, board meeting representation and materials preparation are part of the scope table above.' },
    { q: 'Can you help us prepare for a funding round?', a: 'Yes, funding round support including data room preparation and investor reporting is included when a raise is active.' },
    { q: 'How is this different from a controller or bookkeeper?', a: 'A bookkeeper records transactions and a controller manages the close process. A virtual CFO sits above both, focused on capital allocation, board strategy, and forward-looking financial decisions.' },
    { q: 'What does this cost?', a: 'Virtual CFO support is scoped within our published monthly plans starting at $80/month, with custom retainers available for heavier board or fundraising support — see the Pricing page for the full breakdown.' }
  ],
  relatedSlugs: ['financial-analysis', 'tax-planning'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  }
};

