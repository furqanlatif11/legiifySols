import { ConsultationPageConfig } from '../../types';

// Firm-wide metrics reused from constants.tsx METRICS (already published on the homepage).
// No new per-service statistics are invented here.
export const operationalExcellenceConfig: ConsultationPageConfig = {
  slug: 'operational-excellence',
  h1: 'Operational Excellence',
  metaTitle: 'Operational Excellence Consulting for Businesses | Ledgify',
  metaDescription: 'Operational Excellence consulting: process audits, workflow automation review, and cost-leak identification that turn manual overhead into measurable margin.',
  heroSubhead: 'For businesses that have scaled headcount faster than process, and are paying for the gap every month in overhead.',
  supportingHeading: 'Our Process Audit Approach',
  supportingIntro: 'We map how work actually moves through your business — not the org chart version — then flag the handoffs, duplications, and manual steps that are quietly costing you margin.',
  credentialLine: undefined,
  authorityStats: [
    { value: '100%', label: 'Successful case outcomes across firm engagements' },
    { value: '60+', label: 'Financial professionals supporting delivery' }
  ],
  images: {
    hero: 'Wide (16:9) overhead or candid shot of a team reviewing a process map, Kanban board, or workflow diagram on a whiteboard/screen — should read as “mapping how work moves,” not a generic office stock photo.',
    heroSrc: "/assets/images/Operational_Excellence_header.webp",
    context: 'A clean screenshot of a process-mapping or workflow tool (e.g. a flowchart, swimlane diagram) — anonymized company names — or an original flowchart graphic showing handoffs between teams.',
    contextSrc: "/assets/images/Operational_Excellence_MID.webp",
    method: 'A simple before/after or input → review → automate → output process-flow graphic matching the four method steps below. Schematic and original, not decorative stock art.',
    methodSrc: "/assets/images/Operational_Excellence_method.webp"


  },
  problems: [
    'Your team has grown, but the same tasks still take the same number of people they did a year ago.',
    'Work routinely gets redone because nobody is sure who owns a step or where it is supposed to hand off.',
    'Overhead keeps rising faster than output, and nobody has been able to point to exactly where it is leaking.'
  ],
  scope: [
    { deliverable: 'Operations audit & process mapping', cadence: 'Once, at engagement start', format: 'Process map + report' },
    { deliverable: 'Workflow & automation opportunity review', cadence: 'Once', format: 'Working session + memo' },
    { deliverable: 'Standard operating procedure (SOP) documentation', cadence: 'Once, per priority process', format: 'SOP documents' },
    { deliverable: 'Cost-leak identification report', cadence: 'Once', format: 'Written report' },
    { deliverable: 'Quarterly efficiency review', cadence: 'Quarterly', format: 'Call + action list' }
  ],
  outOfScope: [
    'This is process and workflow consulting, not software implementation — we recommend tools and sequencing, implementation itself is scoped separately if needed.',
    'We do not provide HR, hiring, or employment-law advice.',
    'Ongoing bookkeeping, payroll, and tax filing are separate services (see our monthly accounting plans).'
  ],
  method: [
    { step: 'Process mapping', detail: 'We document how work actually flows today across the teams and systems involved, not how it is assumed to flow.', timeframe: 'Weeks 1-2' },
    { step: 'Gap & automation analysis', detail: 'Every handoff is checked for duplication, delay, or manual steps that a system or a clearer owner could remove.', timeframe: 'Week 3' },
    { step: 'Implementation plan handoff', detail: 'You receive a prioritized, sequenced plan your team can execute, with SOPs for the processes that need one.', timeframe: 'Week 4' },
    { step: 'Quarterly efficiency review', detail: 'We check progress against the plan and flag new leaks as the business changes.', timeframe: 'Ongoing' }
  ],
  pricing: {
    model: 'Custom-scoped engagement, priced after a discovery call',
    note: 'Operational Excellence is scoped around the number of processes and teams involved, then quoted in writing before any work begins. Ask during your consultation for a range based on comparable engagements.'
  },
  audience: {
    fitFor: [
      'Businesses with manual or duplicated processes spanning more than one team',
      'Owners who have scaled headcount faster than their process and documentation',
      'Businesses with rising overhead that has not been matched by rising output'
    ],
    notFor: [
      'Single-person businesses with no team or handoffs to optimize',
      'Businesses looking for software implementation only, with no process review'
    ]
  },
  faqs: [
    { q: 'How is Operational Excellence different from Financial Architecture?', a: 'Financial Architecture rebuilds how your finance function reports and is structured. Operational Excellence looks at the broader operational workflow — how work moves across every team, not just finance. Many businesses need both, usually in sequence.' },
    { q: 'Do you implement the automation tools you recommend?', a: 'We scope and sequence the recommendations; hands-on implementation of a specific tool is quoted as its own piece of work once you decide which recommendations to act on first.' },
    { q: 'What do we actually walk away with?', a: 'A documented process map, a written cost-leak report, SOPs for your priority processes, and a sequenced implementation plan your team can run without us.' },
    { q: 'Will this disrupt our team while the audit happens?', a: 'The mapping phase runs mostly through short working sessions and document review — it is designed to take minimal time from your team while still surfacing the real picture.' },
    { q: 'How much does this cost?', a: 'There is no published flat fee because scope depends on how many processes and teams are involved. Every engagement is scoped on a discovery call and quoted in writing before work starts.' }
  ],
  relatedSlugs: ['strategic-acceleration', 'financial-architecture', 'market-domination'],
  relatedServiceSlugs: ['virtual-cfo', 'tax-planning'],
  reviewedBy: {
    name: undefined,
    credential: undefined,
    date: undefined
  },
  disclaimer: 'This page describes operational and process consulting. It is not legal, employment-law, or software-implementation advice, and efficiency outcomes vary by business.'
};
