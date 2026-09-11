import { ServicePageConfig } from '../../types';

// Content sourced from existing published site copy (constants.tsx PREMIUM_SERVICES
// "irs-dispute" / "Tax Dispute Support" entry, Footer firm details). That existing
// copy already avoids claiming representation authority ("Documentation
// Preparation", "Record Organization", "Communication Coordination", "Resolution
// Strategy Support") and this page follows the same scoping per spec Part 7:
// no one's Circular 230 credential is published on the site, so this content
// does not use "representation" or "we represent you" and is scoped to
// preparation and support. If Ledgify holds attorney/CPA/enrolled-agent
// authority, confirm it and this page's scope should be revisited.
export const taxResolutionConfig: ServicePageConfig = {
  slug: 'tax-resolution',
  h1: 'IRS Tax Resolution & Audit Support',
  metaTitle: 'IRS Tax Resolution & Audit Support | Ledgify Solutions',
  metaDescription: 'Document preparation and resolution strategy support for IRS notices and audits: notice triage, record organization, and a realistic path forward.',
  heroSubhead: 'For business owners who received an IRS or state notice and need their documentation organized and a resolution strategy mapped out.',
  credentialLine: 'TODO_VERIFY: who at Ledgify is authorised to represent clients before the IRS, and under what credential — until confirmed, this page is scoped to preparation and support only.',
  problems: [
    'You received a CP2000 or similar notice and are not sure what it means or how many days you actually have to respond.',
    'You are facing a field audit and need your records organized before your first meeting or call.',
    'You want a realistic resolution strategy, not a promise that your balance will be settled for a fraction of what you owe.'
  ],
  scope: [
    { deliverable: 'Notice review & triage (what it means, what the deadline is)', cadence: 'At engagement start', format: 'Written explanation' },
    { deliverable: 'Documentation preparation', cadence: 'Throughout the matter', format: 'Organized document package' },
    { deliverable: 'Record organization', cadence: 'Throughout the matter', format: 'Structured file set' },
    { deliverable: 'Communication coordination with the taxing authority', cadence: 'As needed', format: 'Drafted correspondence' },
    { deliverable: 'Resolution strategy support', cadence: 'Ongoing until resolved', format: 'Strategy memo + check-ins' }
  ],
  outOfScope: [
    'We do not represent clients before the IRS or state tax authorities unless a named credentialed professional is confirmed for your matter — see the credential note above.',
    'We do not guarantee any outcome, settlement amount, or timeline. Any claim of "settling your debt for a fraction" is not something we will make.',
    'This service supports resolution of an existing notice or audit; it is not ongoing tax planning (see Tax Planning & Strategy).'
  ],
  method: [
    { step: 'Notice or audit intake', detail: 'We review the notice or audit letter with you and identify the actual deadline and what is being asked.', timeframe: 'Within days of first contact' },
    { step: 'Documentation gathering', detail: 'We help assemble and organize the records the matter requires.', timeframe: 'Weeks 1-3, depending on complexity' },
    { step: 'Strategy & communication support', detail: 'We help draft the response and coordinate communication with the taxing authority.', timeframe: 'Varies by case' },
    { step: 'Resolution monitoring', detail: 'We track the matter until it is closed, with realistic expectations set along the way — resolution generally takes months, not days.', timeframe: 'Until resolved' }
  ],
  pricing: {
    model: 'Scoped per matter based on complexity, not a flat fee promised upfront',
    note: 'Because every notice and audit is different, pricing for tax resolution support is scoped after the initial review call. TODO_VERIFY: publish what the first call covers and what it costs.'
  },
  audience: {
    fitFor: [
      'Business owners who received a CP2000, CP504, or similar notice and need help understanding and responding to it',
      'Anyone facing a field audit who needs their documentation organized before the process begins',
      'People who want honest triage and support, not a guaranteed settlement promise'
    ],
    notFor: [
      'Anyone looking for a guaranteed reduction in what they owe — we will not make that promise',
      'Matters that require formal legal representation before the IRS, unless a credentialed professional is confirmed and engaged for that specific role'
    ]
  },
  faqs: [
    { q: 'Can you represent me in front of the IRS?', a: 'Representation before the IRS is limited to attorneys, CPAs, enrolled agents, and certain other authorized categories under Treasury Circular 230. TODO_VERIFY: confirm which credential, if any, applies here before this answer is finalized. Until then, our support is scoped to document preparation and resolution strategy.' },
    { q: 'What is a CP2000 notice?', a: 'A CP2000 is a notice the IRS sends when income reported to them by third parties (like employers or banks) does not match what was reported on your return. It is not an audit, but it does have a response deadline, and we help you understand and respond to it.' },
    { q: 'Can you guarantee you will reduce what I owe?', a: 'No. We do not make guaranteed-outcome claims. Resolution strategies are based on your specific facts, and realistic timelines and outcomes are set from the first conversation.' },
    { q: 'How long does resolution usually take?', a: 'Months, not days, in most cases. We set expectations upfront rather than promising a fast turnaround.' },
    { q: 'What happens on the first call?', a: 'We review your notice or audit letter, explain what it means and what deadline applies, and outline what documentation and next steps the matter requires. TODO_VERIFY: confirm whether the first call is free.' },
    { q: 'Is this the same as tax planning?', a: 'No. This service responds to an existing notice or audit. If you want ongoing planning to reduce the chance of future notices, see our Tax Planning & Strategy service.' }
  ],
  relatedSlugs: ['tax-planning', 'financial-analysis'],
  reviewedBy: {
    name: 'TODO_VERIFY',
    credential: 'TODO_VERIFY',
    date: 'TODO_VERIFY'
  },
  disclaimer: 'This page describes document preparation and resolution strategy support, not legal representation before the IRS or any state tax authority, and no outcome is guaranteed. Representation before the IRS is restricted under Treasury Circular 230 to attorneys, CPAs, enrolled agents, and certain other authorized categories.'
};

