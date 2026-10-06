
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'premium';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export interface ServicePageConfig {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  supportingHeading?: string;
  supportingIntro?: string;
  credentialLine?: string;
  problems: string[];
  scope: { deliverable: string; cadence: string; format: string }[];
  outOfScope: string[];
  method: { step: string; detail: string; timeframe: string }[];
  pricing: { model: string; from?: string; range?: string; note: string };
  audience: { fitFor: string[]; notFor: string[] };
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  /** Cross-links into data/consultation/*, rendered as a distinct section for internal linking. */
  relatedConsultationSlugs?: string[];
  reviewedBy: { name?: string; credential?: string; date?: string };
  disclaimer?: string;
}

export interface ConsultationPageConfig {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  supportingHeading?: string;
  supportingIntro?: string;
  credentialLine?: string;
  /** Firm-wide published metrics reused for authority — never fabricated per-service numbers. */
  authorityStats: { value: string; label: string }[];
  /** Sourcing instructions for the placeholder visuals rendered on the page — not real image URLs, unless a *Src override is supplied below. */
  images: {
    hero: string;
    context: string;
    method: string;
    /** Real image paths (e.g. /assets/images/...) — when set, replace the matching placeholder with the actual asset. */
    heroSrc?: string;
    contextSrc?: string;
    methodSrc?: string;
  };
  problems: string[];
  scope: { deliverable: string; cadence: string; format: string }[];
  outOfScope: string[];
  method: { step: string; detail: string; timeframe: string }[];
  pricing: { model: string; note: string };
  audience: { fitFor: string[]; notFor: string[] };
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  /** Cross-links into data/services/*, rendered as a distinct section for internal linking. */
  relatedServiceSlugs?: string[];
  reviewedBy: { name?: string; credential?: string; date?: string };
  disclaimer?: string;
}

