import { ServicePageConfig } from '../../types';

// Content sourced from existing published site copy (constants.tsx CORE_SERVICES
// "tax-strategy" entry, Footer firm details, PricingSection tiers). Facts not
// published anywhere on the site (named practitioner, licence, exact per-service
// Unpublished facts remain omitted rather than invented.
export const taxPlanningConfig: ServicePageConfig = {
  slug: 'tax-planning',
  h1: 'Tax Planning & Strategy',
  metaTitle: 'Tax Planning & Strategy for Businesses | Ledgify',
  metaDescription: 'Tax planning for founders and businesses at every stage: entity choices, estimated payments, state obligations, and a clear quarterly planning calendar.',
  heroSubhead: 'For founders and business owners who want a plan for next year\u2019s tax bill, not just a form filed after the fact.',
  supportingHeading: 'Our Tax Architecture Approach',
  supportingIntro: 'Tax architecture is the structure behind the plan: entity selection, compensation, state obligations, and estimated payments working together before the next filing deadline.',
  credentialLine: undefined,
  problems: [
    'Your CPA files your return every spring, but nobody has looked at your entity structure or estimated payments since you formed the company.',
    'You are growing into new states and are not sure whether you have created a payroll or sales tax nexus you have not accounted for.',
    'You want to know your estimated tax liability before quarter-end, not after, so cash flow decisions are not made blind.'
  ],
  scope: [
    { deliverable: 'Nexus study & analysis', cadence: 'Once, at engagement start', format: 'Written report' },
    { deliverable: 'Entity structure review (LLC / S-corp / C-corp, reasonable compensation)', cadence: 'Annually or at a trigger event', format: 'Working session + memo' },
    { deliverable: 'Quarterly estimated liability projection', cadence: 'Quarterly', format: 'PDF summary' },
    { deliverable: 'State & Local Tax (SALT) optimization review', cadence: 'Annually', format: 'Working session + memo' },
    { deliverable: 'Year-end planning check-in', cadence: 'Q4 each year', format: 'Call + action list' }
  ],
  outOfScope: [
    'This is forward-looking planning, not return preparation — filing your federal/state return is a separate, clearly quoted engagement.',
    'We do not provide investment or securities advice.',
    'Bookkeeping and payroll processing are separate services (see Compliance-Ready Bookkeeping and Multi-State Payroll).'
  ],
  method: [
    { step: 'Discovery & nexus review', detail: 'We map your current entity structure, states of operation, and existing filing positions.', timeframe: 'Week 1' },
    { step: 'Entity & structure analysis', detail: 'We evaluate whether your current entity type and compensation structure are still the most efficient for your situation.', timeframe: 'Weeks 2-3' },
    { step: 'Quarterly planning calendar established', detail: 'We set the cadence for estimated payment reviews so planning becomes routine, not reactive.', timeframe: 'Week 4' },
    { step: 'Ongoing quarterly check-ins', detail: 'Liability projections are revisited each quarter as your numbers change.', timeframe: 'Ongoing' }
  ],
  pricing: {
    model: 'Fixed monthly tiers based on transaction volume and complexity, not hourly billing',
    from: 'Included within our published monthly plans',
    note: 'Tax planning is bundled into our tiered monthly plans, from $80/month for individuals up to $1,199/month for enterprise-scale volume. See the full breakdown on the Pricing page.'
  },
  audience: {
    fitFor: [
      'Founders and owners of growing businesses with more than one state of operation',
      'S-corp or LLC owners who have not reviewed reasonable compensation or entity election in over a year',
      'Businesses approaching a funding round, acquisition, or major revenue inflection point'
    ],
    notFor: [
      'Individuals who only need a single-year tax return prepared with no ongoing planning need',
      'Anyone seeking investment or securities advice rather than tax and entity structuring'
    ]
  },
  faqs: [
    { q: 'What is the difference between tax planning and tax preparation?', a: 'Preparation is backward-looking — filing a return for a year that already happened. Planning is forward-looking — structuring your entity, compensation, and estimated payments before the year closes so the return you eventually file reflects a plan, not a surprise.' },
    { q: 'Do you file my tax return as part of this service?', a: 'No. This engagement covers planning and strategy. Return preparation and filing is a separate, clearly scoped and quoted service, and the actual filing remains your responsibility or your designated filer\u2019s.' },
    { q: 'We operate in multiple states — can you tell us if we have nexus exposure?', a: 'Yes, a nexus study is part of this engagement. We review where you have employees, contractors, inventory, or sales activity and flag where a filing obligation may already exist.' },
    { q: 'How often will we talk about our tax position?', a: 'At minimum quarterly, tied to estimated payment deadlines, plus a dedicated year-end planning session in Q4.' },
    { q: 'Can you tell us whether we should be an S-corp?', a: 'We review your entity election and reasonable compensation position as part of the structure analysis and will tell you plainly if a change is worth modeling, including the trade-offs.' },
    { q: 'What does this cost?', a: 'Tax planning is included in our published monthly plans starting at $80/month, scaled by transaction volume and complexity — see the Pricing page for the full breakdown.' }
  ],
  relatedSlugs: ['financial-analysis', 'virtual-cfo'],
  relatedConsultationSlugs: ['financial-architecture', 'operational-excellence'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  },
  disclaimer: 'This page describes tax planning services. It is not tax return preparation, and it is not investment or securities advice. Return preparation is quoted and delivered as a separate engagement.'
};

