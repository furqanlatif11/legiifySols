import { ServicePageConfig } from '../../types';

// No existing page on the site covers business succession/exit planning
// directly, so this content is scoped conservatively per spec Part 1 and
// Part 7: strictly tax and structural work (entity restructuring, exit tax
// modeling, owner compensation, buy-sell funding structure), explicitly
// excluding securities selection, portfolio management, and insurance
// product sales, since Ledgify's registration status as an investment
// adviser is not confirmed anywhere on the site. Firm identity facts reused
// from the existing Footer/Contact page content.
export const successionPlanningConfig: ServicePageConfig = {
  slug: 'succession-planning',
  h1: 'Business Succession & Exit Planning',
  metaTitle: 'Business Succession & Exit Planning | Ledgify Solutions',
  metaDescription: 'Tax-efficient exit planning for business owners: entity restructuring, exit tax modeling, owner compensation, and coordination with your attorney and adviser.',
  heroSubhead: 'For business owners planning a sale, succession, or ownership transition who need the tax and structural work done before the deal, not during it.',
  credentialLine: 'TODO_VERIFY: named practitioner, credential, and jurisdiction to be published here.',
  problems: [
    'You are considering selling the business in the next few years and have not modeled what the exit will actually cost you in taxes.',
    'You are transitioning ownership to a partner, family member, or key employee and need a buy-sell structure that actually works.',
    'Your attorney and financial adviser are each handling their piece of the transition, but nobody is coordinating the tax and structural side.'
  ],
  scope: [
    { deliverable: 'Exit tax modeling (estimate of tax cost under different sale structures)', cadence: 'Once, updated as the deal develops', format: 'Written model' },
    { deliverable: 'Entity restructuring ahead of a sale or transition', cadence: 'As needed pre-transaction', format: 'Working session + memo' },
    { deliverable: 'Owner compensation strategy review', cadence: 'Annually or at a trigger event', format: 'Working session + memo' },
    { deliverable: 'Buy-sell agreement funding structure (tax and structural review)', cadence: 'Once, at agreement drafting', format: 'Written recommendation' },
    { deliverable: 'Coordination with your attorney and financial adviser', cadence: 'Throughout the engagement', format: 'Joint working sessions' }
  ],
  outOfScope: [
    'We do not provide securities selection, portfolio management, or insurance product sales.',
    'We do not act as your investment adviser — this engagement is scoped to tax and structural work only.',
    'Drafting the buy-sell agreement itself is your attorney\u2019s role; we review the tax and structural implications of what they draft.'
  ],
  method: [
    { step: 'Current structure & goals review', detail: 'We review your current entity structure, ownership, and what "successful exit" looks like for you.', timeframe: 'Weeks 1-2' },
    { step: 'Exit tax modeling', detail: 'We model the tax cost of the transition under a few realistic structures so you can compare before committing.', timeframe: 'Weeks 3-4' },
    { step: 'Restructuring & coordination', detail: 'We work alongside your attorney and financial adviser on the tax and structural side of the plan.', timeframe: 'Ongoing through the transaction' },
    { step: 'Pre-close review', detail: 'We review the final structure against the original modeling before the transaction closes.', timeframe: 'Ahead of closing' }
  ],
  pricing: {
    model: 'Scoped per engagement based on complexity of the transaction',
    note: 'TODO_VERIFY: publish a starting price or pricing model for succession and exit planning engagements.'
  },
  audience: {
    fitFor: [
      'Business owners planning a sale, merger, or ownership transition within the next few years',
      'Owners transitioning to a partner, family member, or key employee who need a workable buy-sell structure',
      'Anyone whose attorney and financial adviser need a coordinated tax and structural partner'
    ],
    notFor: [
      'Anyone seeking investment advice, portfolio management, or insurance product recommendations — that is outside this engagement\u2019s scope',
      'Owners with no near-term transition plans whose primary need is ongoing tax planning (see Tax Planning & Strategy)'
    ]
  },
  faqs: [
    { q: 'Do you manage my investments as part of this?', a: 'No. This engagement is scoped strictly to tax and structural work — entity restructuring, exit tax modeling, and compensation strategy. We do not provide securities selection, portfolio management, or insurance product sales.' },
    { q: 'Will you draft our buy-sell agreement?', a: 'No, drafting the agreement is your attorney\u2019s role. We review the tax and structural implications of the funding structure they propose.' },
    { q: 'How far in advance should we start this?', a: 'Ideally a few years before a planned sale or transition — entity restructuring and tax modeling both take time to implement properly before a deal is in motion.' },
    { q: 'Can you work alongside our existing attorney and financial adviser?', a: 'Yes, coordination with your attorney and financial adviser is part of the scope table above; we handle the tax and structural piece, not theirs.' },
    { q: 'What does "exit tax modeling" actually produce?', a: 'A written comparison of the estimated tax cost of your transition under a few realistic structures, so you can make a decision with the numbers in front of you rather than after the fact.' },
    { q: 'What does this cost?', a: 'Pricing is scoped per engagement based on the complexity of the transaction. TODO_VERIFY: publish a starting price or pricing model here.' }
  ],
  relatedSlugs: ['tax-planning', 'virtual-cfo'],
  reviewedBy: {
    name: 'TODO_VERIFY',
    credential: 'TODO_VERIFY',
    date: 'TODO_VERIFY'
  },
  disclaimer: 'This page describes tax and structural work related to business succession and exit planning. It is not investment advice, securities selection, portfolio management, or insurance product sales, and Ledgify does not act as an investment adviser under this engagement.'
};

