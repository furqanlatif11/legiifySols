
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

export const INDUSTRIES: Industry[] = [
  {
    id: 'tech-saas',
    title: 'Technology & SaaS',
    shortDesc: 'Venture-backed firms requiring ASC 606 revenue recognition and R&D tax credit optimization.',
    fullDesc: 'The tech sector moves at the speed of light, and legacy accounting often lags behind. We specialize in subscription-based revenue recognition, global payroll nexus for remote teams, and aggressive R&D tax credit captures that inject capital back into your product roadmap.',
    icon: 'Rocket',
    challenges: ['ASC 606 Revenue Recognition', 'Multi-state Nexus Compliance', 'Equity & Stock Option Accounting'],
    mandates: ['R&D Tax Credit Study', 'Series A-D Audit Readiness', 'Burn-Rate Strategy']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Dev',
    shortDesc: 'Complex cost segregation, 1031 exchanges, and multi-entity investment shielding.',
    fullDesc: 'For developers and real estate investment trusts (REITs), we provide institutional cost segregation studies to accelerate depreciation and 1031 exchange facilitation to defer tax liabilities. Our multi-entity structures ensure individual project liabilities never compromise the parent portfolio.',
    icon: 'Building2',
    challenges: ['Passive Activity Loss Rules', 'Complex Depreciation Schedules', 'Joint Venture Accounting'],
    mandates: ['Cost Segregation Study', '1031 Exchange Facilitation', 'Portfolio Shielding']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical',
    shortDesc: 'Compliance-heavy accounting for private practices, surgery centers, and med-tech startups.',
    fullDesc: 'Medical professionals face unique challenges with insurance reconciliation and high-overhead management. We handle the financial "vitals" of your practice, ensuring HIPAA-compliant data handling and optimizing physician distribution models to maximize take-home wealth.',
    icon: 'Stethoscope',
    challenges: ['HIPAA Financial Privacy', 'Insurance Billing Reconciliation', 'Equipment Lease Optimization'],
    mandates: ['Practice Valuation', 'Distribution Strategy', 'Compliance Audit']
  },
  {
    id: 'manufacturing',
    title: 'Mfg & Logistics',
    shortDesc: 'Inventory valuation, supply chain cost auditing, and international trade tax strategies.',
    fullDesc: 'Global supply chains demand precise inventory accounting (LIFO/FIFO) and Section 263A capitalization compliance. We help manufacturers identify leakage in their supply chain costs and navigate the complexities of international customs and trade taxes.',
    icon: 'Truck',
    challenges: ['Inventory Cost Capitalization', 'Duty Drawback Optimization', 'Supply Chain Cost Auditing'],
    mandates: ['Inventory Valuation', 'Logistics Tax Shielding', 'Operational Audit']
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    shortDesc: 'High-revenue law firms, architectural groups, and creative agencies.',
    fullDesc: 'Service-based firms thrive on billable efficiency and partner distribution equity. We provide the financial structure to manage overhead, optimize partner k-1s, and ensure the firm is structured for a future buy-out or generational succession.',
    icon: 'Briefcase',
    challenges: ['Partner Equity Tracking', 'Overhead Allocation', 'Succession Planning'],
    mandates: ['Partner Distribution Model', 'Succession Architecture', 'Profitability Audit']
  },
  {
    id: 'hnw-individuals',
    title: 'HNW Individuals',
    shortDesc: 'Ultra-high-net-worth estate protection and global personal tax residency strategy.',
    fullDesc: 'Legify protects the legacies of America’s most successful families. From setting up sophisticated trusts to managing international tax residency requirements, we act as your personal financial fortress, ensuring your wealth is preserved across generations.',
    icon: 'UserCheck',
    challenges: ['Estate & Gift Tax Exposure', 'Global Asset Reporting', 'Trust & Estate Accounting'],
    mandates: ['Wealth Transfer Strategy', 'FBAR/FATCA Compliance', 'Estate Architecture']
  }
];

export const CORE_SERVICES: (Service & { blueprint: string[] })[] = [
  {
    id: 'tax-strategy',
    title: 'Advanced Tax Strategy',
    description: 'Beyond simple filing. We architect legal structures to shield assets and minimize federal/state liabilities.',
    icon: 'FileText',
    category: 'core',
    blueprint: ['Nexus Study & Analysis', 'Strategic Entity Selection', 'Quarterly Liability Projections', 'State & Local Tax (SALT) Optimization']
  },
  {
    id: 'bookkeeping',
    title: 'Audit-Ready Bookkeeping',
    description: 'Meticulous financial records maintained with double-entry precision for absolute stakeholder confidence.',
    icon: 'Calculator',
    category: 'core',
    blueprint: ['Accrual-Basis Ledger Mgmt', 'Monthly Bank Reconciliation', 'Institutional Financial Package', 'Internal Control Audit']
  },
  {
    id: 'payroll-compliance',
    title: 'Multi-State Payroll',
    description: 'Complex nexus and withholding management across all 50 states, ensuring labor law compliance.',
    icon: 'DollarSign',
    category: 'core',
    blueprint: ['Nexus Determination', 'Local Tax Withholding', 'Workers Comp Audit Support', 'Quarterly Compliance Filings']
  },
  {
    id: 'reporting',
    title: 'Institutional Reporting',
    description: 'SEC-standard financial disclosures and stakeholder reports for board-level transparency.',
    icon: 'BarChart3',
    category: 'core',
    blueprint: ['GAAP Compliance Review', 'KPI Dashboard Implementation', 'Consolidated Reporting', 'Stakeholder Deck Prep']
  }
];

export const PREMIUM_SERVICES: (Service & { blueprint: string[] })[] = [
  {
    id: 'fractional-cfo',
    title: 'Fractional CFO Leadership',
    description: 'Executive-level capital allocation, M&A advisory, and long-range forecasting to scale your organization.',
    icon: 'TrendingUp',
    category: 'premium',
    blueprint: ['Capital Allocation Strategy', 'Budget vs Actual Modeling', 'Board Meeting Representation', 'Funding Round Support']
  },
  {
    id: 'irs-defense',
    title: 'IRS Defense & Resolution',
    description: 'Aggressive representation and negotiation for complex audits and intricate tax disputes.',
    icon: 'Gavel',
    category: 'premium',
    blueprint: ['Power of Attorney Representation', 'Audit File Reconstruction', 'Settlement Negotiation', 'Tax Court Coordination']
  },
  {
    id: 'ma-advisory',
    title: 'M&A Due Diligence',
    description: 'Strategic evaluation of targets, quality of earnings reports, and post-merger integration planning.',
    icon: 'Handshake',
    category: 'premium',
    blueprint: ['Quality of Earnings (QofE)', 'Asset Purchase Allocation', 'Synergy Analysis', 'Integration Roadmap']
  },
  {
    id: 'forensic-accounting',
    title: 'Forensic Investigation',
    description: 'Detective work to identify discrepancies, embezzlement risks, and litigation support.',
    icon: 'SearchCode',
    category: 'premium',
    blueprint: ['Anomaly Detection Modeling', 'Asset Recovery Support', 'Expert Witness Testimony', 'Internal Fraud Auditing']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Harrison Sterling',
    role: 'Managing Partner',
    company: 'Sterling Capital',
    content: 'Legify doesn’t just count our money; they help us multiply it. Their tax restructuring saved us $420k in a single fiscal year.',
    avatar: 'https://i.pravatar.cc/150?u=harrison'
  },
  {
    id: '2',
    name: 'Elena Vance',
    role: 'CEO',
    company: 'Vance Bio-Tech',
    content: 'The Fractional CFO service provided the strategic roadmap we needed for our Series C. Impeccable professional standards.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'Global Logistics Group',
    content: 'Their handling of our multi-state nexus issues was flawless. They are the benchmark for US-based accounting.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];

export const METRICS: Metric[] = [
  { label: 'Asset Under Advisory', value: '$3.8B+', description: 'Trusted with massive financial legacies.' },
  { label: 'Audit Win Rate', value: '100%', description: 'Defending every dollar with precision.' },
  { label: 'Client Net Growth', value: '22%', description: 'Average annual wealth increase for clients.' },
  { label: 'Expert CPAs', value: '60+', description: 'Elite financial minds at your service.' }
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
