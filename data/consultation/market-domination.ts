import { ConsultationPageConfig } from '../../types';

// Firm-wide metrics reused from constants.tsx METRICS (already published on the homepage).
// No new per-service statistics are invented here.
export const marketDominationConfig: ConsultationPageConfig = {
  slug: 'market-domination',
  h1: 'Market Domination',
  metaTitle: 'Market Domination Consulting for Competitive Growth | Ledgify',
  metaDescription: 'Market Domination consulting: competitive intelligence, pricing strategy, and positioning review for businesses losing ground to named competitors.',
  heroSubhead: 'For businesses watching a named competitor take share, with no structured process for reading the market or pricing against it.',
  supportingHeading: 'Our Competitive Strategy Approach',
  supportingIntro: 'Market Domination starts with a clear-eyed read of your competitive position — pricing, messaging, and share of voice — then builds a sequenced plan to close the specific gaps that are costing you ground.',
  credentialLine: undefined,
  authorityStats: [
    { value: '22%', label: 'Average annual client growth across firm engagements' },
    { value: '$3.8B+', label: 'Assets managed across client engagements' }
  ],
  images: {
    hero: 'Wide (16:9) shot evoking competitive strategy — a team reviewing a market map, competitive landscape chart, or pricing comparison on a screen/whiteboard. Avoid chess-piece or battle-themed clichés.',
    heroSrc: "/assets/images/Market_Domination_hero.webp",
    context: 'A bar chart or quadrant-style graphic comparing market position or pricing against anonymized/illustrative competitors — should visually read as competitive intelligence, not generic business clipart.',
    contextSrc: "/assets/images/Market_Domination_context.webp",
    method: 'A simple four-stage strategy funnel or roadmap graphic matching the method steps below (audit → strategy → sequencing → review). Schematic and original, not decorative stock art.',
    methodSrc: "/assets/images/Market_Domination_method.webp"
  },
  problems: [
    'A specific competitor keeps winning deals you used to win, and nobody has mapped out exactly why.',
    'Your pricing has not been reviewed in two or more years while the market around you has moved.',
    'You are entering a new market or region and have no structured read on who is already there and how they compete.'
  ],
  scope: [
    { deliverable: 'Competitive intelligence audit', cadence: 'Once, at engagement start', format: 'Written report' },
    { deliverable: 'Pricing strategy review', cadence: 'Once', format: 'Working session + memo' },
    { deliverable: 'Market positioning & messaging framework', cadence: 'Once', format: 'Framework document' },
    { deliverable: 'Expansion opportunity analysis (new market or region)', cadence: 'Once, where applicable', format: 'Written report' },
    { deliverable: 'Quarterly competitive review', cadence: 'Quarterly', format: 'Call + action list' }
  ],
  outOfScope: [
    'This is strategic and pricing consulting, not guaranteed market share — competitive outcomes depend on execution, and no share or revenue figure is promised.',
    'We do not provide trademark, IP, or legal competitive-practice advice.',
    'Ongoing bookkeeping, payroll, and tax filing are separate services (see our monthly accounting plans).'
  ],
  method: [
    { step: 'Competitive & market audit', detail: 'We map your named competitors\u2019 pricing, positioning, and share of voice against your own.', timeframe: 'Weeks 1-2' },
    { step: 'Positioning & pricing strategy', detail: 'A revised pricing and positioning strategy is built around the specific gaps the audit surfaces.', timeframe: 'Weeks 3-4' },
    { step: 'Go-to-market sequencing', detail: 'The strategy is sequenced into a plan your team can execute, prioritized by impact and effort.', timeframe: 'Week 5' },
    { step: 'Quarterly competitive review', detail: 'We revisit the competitive landscape each quarter and adjust the plan as the market moves.', timeframe: 'Ongoing' }
  ],
  pricing: {
    model: 'Custom-scoped engagement, priced after a discovery call',
    note: 'Market Domination is scoped around the number of markets and competitors in play, then quoted in writing before any work begins. Ask during your consultation for a range based on comparable engagements.'
  },
  audience: {
    fitFor: [
      'Businesses losing deals or share to a specific, named competitor',
      'Businesses whose pricing has not been reviewed in two or more years',
      'Businesses entering a new market or region without a structured competitive read'
    ],
    notFor: [
      'Businesses without a defined target market or customer segment yet',
      'Businesses seeking legal advice on trademark or IP disputes'
    ]
  },
  faqs: [
    { q: 'How is Market Domination different from Strategic Acceleration?', a: 'Strategic Acceleration builds a growth roadmap around your own revenue model. Market Domination is specifically about your position relative to named competitors — pricing, messaging, and share of voice. Businesses facing both a growth plateau and a competitive threat often run them together.' },
    { q: 'Do you guarantee a market share outcome?', a: 'No. We build a sequenced, numbers-based strategy against the competitive gaps we find, but market share depends on execution and competitor response — we will not promise a figure we cannot control.' },
    { q: 'What do we actually walk away with?', a: 'A written competitive intelligence report, a revised pricing strategy memo, and a positioning and messaging framework your team can put into market.' },
    { q: 'Can you review our pricing without a full competitive audit?', a: 'Yes, a standalone pricing strategy review is a common starting point, and we will tell you plainly whether a deeper competitive audit is worth the additional scope.' },
    { q: 'How much does this cost?', a: 'There is no published flat fee because scope depends on how many markets and competitors are in play. Every engagement is scoped on a discovery call and quoted in writing before work starts.' }
  ],
  relatedSlugs: ['strategic-acceleration', 'operational-excellence', 'financial-architecture'],
  relatedServiceSlugs: ['financial-analysis', 'tax-planning'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  },
  disclaimer: 'This page describes competitive and pricing strategy consulting. It is not legal, IP, or trademark advice, and market share outcomes are not guaranteed.'
};
