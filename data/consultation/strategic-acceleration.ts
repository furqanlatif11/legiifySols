import { ConsultationPageConfig } from '../../types';

// Firm-wide metrics reused from constants.tsx METRICS (already published on the homepage).
// No new per-service statistics are invented here.
export const strategicAccelerationConfig: ConsultationPageConfig = {
  slug: 'strategic-acceleration',
  h1: 'Strategic Acceleration',
  metaTitle: 'Strategic Acceleration Consulting for Growing Businesses | Ledgify',
  metaDescription: 'Strategic Acceleration consulting: a scoped growth roadmap covering revenue model, market positioning, and capital readiness for businesses ready to scale.',
  heroSubhead: 'For owners whose growth has plateaued and need a sequenced plan to scale revenue, not another slide deck that never leaves the drawer.',
  supportingHeading: 'Our Growth Roadmap Approach',
  supportingIntro: 'Strategic Acceleration is a diagnostic-first engagement: we map where revenue is actually coming from, where it is leaking, and build a 90-day roadmap sequenced around the two or three moves that matter most right now.',
  credentialLine: undefined,
  authorityStats: [
    { value: '22%', label: 'Average annual client growth across firm engagements' },
    { value: '60+', label: 'Financial professionals supporting delivery' }
  ],
  images: {
    hero: 'Wide (16:9) candid shot of a founder or small leadership team at a whiteboard mapping a growth curve or roadmap. Natural light, real working session rather than a posed stock photo — avoid handshakes or generic “team cheering” imagery.',
    heroSrc: '/assets/images/Strategicacceleration_header.webp',
    context: 'A real (anonymized/blurred figures) revenue dashboard screenshot or a clean upward-trending growth chart graphic — should visually reinforce “revenue diagnostic,” not generic business clipart.',
    contextSrc: '/assets/images/RevenueIQ_Analytics_Dashboard_Mockup.png',
    method: 'A simple four-stage roadmap or timeline graphic matching the method steps below (diagnostic → ranking → sequencing → check-ins). Schematic and original, not a decorative stock illustration.',
    methodSrc: '/assets/images/Strategicacceleration_method.webp'
  },
  problems: [
    'Revenue has held flat for two or more quarters and nobody on your team can point to exactly why.',
    'You are sitting on three different growth ideas and no way to rank which one is worth the budget.',
    'You are heading into a funding conversation or expansion decision and want an outside, numbers-first read before you commit.'
  ],
  scope: [
    { deliverable: 'Growth diagnostic & revenue model review', cadence: 'Once, at engagement start', format: 'Written report' },
    { deliverable: 'Market positioning & competitive gap analysis', cadence: 'Once', format: 'Working session + memo' },
    { deliverable: '90-day growth roadmap with ranked milestones', cadence: 'Once, revisited quarterly', format: 'Roadmap document' },
    { deliverable: 'Capital/fundraising readiness review (where applicable)', cadence: 'As needed', format: 'Working session + memo' },
    { deliverable: 'Monthly progress check-in', cadence: 'Monthly during active engagement', format: 'Call + action list' }
  ],
  outOfScope: [
    'This is strategic planning, not guaranteed outcomes — growth depends on execution and market conditions, and no return or revenue figure is promised.',
    'We do not provide investment, securities, or fundraising placement services.',
    'Ongoing bookkeeping, payroll, and tax filing are separate services (see our monthly accounting plans).'
  ],
  method: [
    { step: 'Discovery & revenue diagnostic', detail: 'We map current revenue sources, margins, and growth bottlenecks against your stated targets.', timeframe: 'Weeks 1-2' },
    { step: 'Positioning & opportunity ranking', detail: 'We score the growth options you are weighing against effort, cost, and realistic upside.', timeframe: 'Weeks 3-4' },
    { step: 'Roadmap sequencing', detail: 'A 90-day roadmap is built around the highest-ranked moves, with milestones you can track without us in the room.', timeframe: 'Week 5' },
    { step: 'Ongoing monthly check-ins', detail: 'Progress against the roadmap is reviewed monthly and adjusted as real numbers come in.', timeframe: 'Ongoing' }
  ],
  pricing: {
    model: 'Custom-scoped engagement, priced after a discovery call',
    note: 'Strategic Acceleration is scoped around your current revenue stage and the length of roadmap you need, then quoted in writing before any work begins. Ask during your consultation for a range based on comparable engagements.'
  },
  audience: {
    fitFor: [
      'Businesses with proven product-market fit whose growth has plateaued over two or more quarters',
      'Owners preparing for a funding round, acquisition conversation, or market expansion',
      'Teams that want a ranked, numbers-first roadmap instead of competing internal opinions'
    ],
    notFor: [
      'Early-stage businesses that have not yet found product-market fit',
      'Businesses only needing ongoing bookkeeping or monthly compliance work (see our accounting plans instead)'
    ]
  },
  faqs: [
    { q: 'How is Strategic Acceleration different from Virtual CFO support?', a: 'Virtual CFO support is an ongoing monthly relationship covering financial leadership, forecasting, and board reporting. Strategic Acceleration is a scoped, time-boxed engagement focused specifically on building and sequencing a growth roadmap. Many clients run both at once.' },
    { q: 'Do you guarantee a specific growth number?', a: 'No. We build a disciplined, ranked roadmap based on your actual numbers, but execution and market conditions determine the outcome — we will not promise a revenue figure we cannot control.' },
    { q: 'What do we actually walk away with?', a: 'A written growth diagnostic, a competitive positioning memo, and a 90-day roadmap with ranked, dated milestones you can act on with or without continuing the engagement.' },
    { q: 'We already have a growth plan — can you just review it?', a: 'Yes. A standalone diagnostic and roadmap review is a common entry point, and we will tell you plainly where it holds up and where it does not before recommending next steps.' },
    { q: 'How much does this cost?', a: 'There is no published flat fee because scope varies by revenue stage and roadmap length. Every engagement is scoped on a discovery call and quoted in writing before work starts.' }
  ],
  relatedSlugs: ['operational-excellence', 'financial-architecture', 'market-domination'],
  relatedServiceSlugs: ['virtual-cfo', 'financial-analysis'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  },
  disclaimer: 'This page describes strategic business consulting. It is not investment, securities, or legal advice, and growth outcomes are not guaranteed — results vary by business and market conditions.'
};
