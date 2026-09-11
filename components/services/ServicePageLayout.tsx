import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServicePageConfig } from '../../types';
import { servicePageConfigs } from '../../data/services';
import { setJsonLd, getSiteUrl } from '../../utils/seo';
import { isPlaceholder } from '../../utils/verify';
import CredentialBadge from '../trust/CredentialBadge';
import ReviewedBy from '../trust/ReviewedBy';
import FirmIdentity from '../trust/FirmIdentity';
import SecurityPosture from '../trust/SecurityPosture';
import Memberships from '../trust/Memberships';
import InsuranceDisclosure from '../trust/InsuranceDisclosure';
import TechStack from '../trust/TechStack';
import ResponseCommitment from '../trust/ResponseCommitment';
import {
  firmIdentity,
  primaryCredential,
  securityPosture,
  memberships,
  insurance,
  techStack,
  responseCommitment
} from '../../data/firm';

// title lookup by slug, derived from each service's own h1 so labels never drift out of sync
const titleForSlug = (slug: string): string => servicePageConfigs[slug]?.h1 || slug;

const ServicePageLayout: React.FC<{
  config: ServicePageConfig;
  onInquire: (service: string) => void;
}> = ({ config, onInquire }) => {
  useEffect(() => {
    const site = getSiteUrl();
    const pageUrl = `${site}/services/${config.slug}`;

    const serviceSchema = {
      '@type': 'Service',
      serviceType: config.h1,
      name: config.h1,
      description: config.metaDescription,
      url: pageUrl,
      provider: { '@id': `${site}/#organization` },
      areaServed: 'US'
    };

    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site}/services` },
        { '@type': 'ListItem', position: 3, name: config.h1, item: pageUrl }
      ]
    };

    // faq answers still containing TODO_VERIFY placeholders are intentionally included as-is,
    // since the same unresolved text is already visible on the rendered page
    const faqSchema = config.faqs.length > 0 ? {
      '@type': 'FAQPage',
      mainEntity: config.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    } : null;

    setJsonLd(`service-${config.slug}`, {
      '@context': 'https://schema.org',
      '@graph': [serviceSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]
    });

    return () => setJsonLd(`service-${config.slug}`, null);
  }, [config]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-16">
          <ol className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
            <li><Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/services" className="hover:text-emerald-600 transition-colors">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-emerald-600" aria-current="page">{config.h1}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-emerald-950 tracking-tighter leading-none mb-8">{config.h1}</h1>
          <p className="text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-6">{config.heroSubhead}</p>
          {!isPlaceholder(config.credentialLine) && (
            <p className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-10">{config.credentialLine}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => onInquire(config.h1)}
              className="bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              Book a Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/pricing"
              className="bg-white border border-slate-200 text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg hover:border-emerald-500 transition-all flex items-center justify-center gap-3"
            >
              See Pricing
            </Link>
          </div>
        </header>

        {config.supportingHeading && config.supportingIntro && (
          <section aria-labelledby="supporting-heading" className="mb-24 max-w-3xl">
            <h2 id="supporting-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-5">{config.supportingHeading}</h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">{config.supportingIntro}</p>
          </section>
        )}

        {/* Problem framing */}
        <section aria-labelledby="problems-heading" className="mb-24">
          <h2 id="problems-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-10">Is This You?</h2>
          <ul className="space-y-5">
            {config.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-slate-700 font-medium bg-white p-6 rounded-2xl border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 shrink-0"></div>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* Scope table */}
        <section aria-labelledby="scope-heading" className="mb-24">
          <h2 id="scope-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-10">What&apos;s Included</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-black uppercase tracking-widest text-slate-500">
                  <th className="p-6">Deliverable</th>
                  <th className="p-6">Cadence</th>
                  <th className="p-6">Format</th>
                </tr>
              </thead>
              <tbody>
                {config.scope.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="p-6 font-bold text-emerald-950">{row.deliverable}</td>
                    <td className="p-6 text-slate-600 font-medium">{row.cadence}</td>
                    <td className="p-6 text-slate-600 font-medium">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Out of scope */}
        <section aria-labelledby="out-of-scope-heading" className="mb-24">
          <h2 id="out-of-scope-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-8">What&apos;s Not Included</h2>
          <ul className="space-y-3">
            {config.outOfScope.map((line, i) => (
              <li key={i} className="text-slate-600 font-medium">{line}</li>
            ))}
          </ul>
        </section>

        {/* Method */}
        <section aria-labelledby="method-heading" className="mb-24">
          <h2 id="method-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-10">How It Works</h2>
          <ol className="space-y-8">
            {config.method.map((m, i) => (
              <li key={i} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-950 text-white font-black flex items-center justify-center">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-black text-emerald-950 mb-1">{m.step}</h3>
                  <p className="text-slate-600 font-medium">{m.detail} — <span className="text-emerald-600 font-bold">{m.timeframe}</span></p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Credentials & trust block */}
        <section aria-labelledby="trust-heading" className="mb-24 space-y-8">
          <h2 id="trust-heading" className="text-3xl font-black text-emerald-950 tracking-tight">Credentials & Trust</h2>
          <CredentialBadge {...primaryCredential} />
          <ReviewedBy {...config.reviewedBy} />
          <FirmIdentity {...firmIdentity} />
          <SecurityPosture {...securityPosture} />
          <Memberships items={memberships} />
          <InsuranceDisclosure {...insurance} />
          <TechStack tools={techStack} />
          <ResponseCommitment {...responseCommitment} />
        </section>

        {/* Pricing */}
        <section aria-labelledby="pricing-heading" className="mb-24">
          <h2 id="pricing-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-6">Pricing</h2>
          <p className="text-xl text-slate-700 font-bold">{config.pricing.from || config.pricing.range || config.pricing.model}</p>
          <p className="text-slate-600 font-medium mt-2">{config.pricing.note}</p>
        </section>

        {/* Who this is for / not for */}
        <section aria-labelledby="audience-heading" className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 id="audience-heading" className="text-2xl font-black text-emerald-950 tracking-tight mb-6">Who This Is For</h2>
            <ul className="space-y-3">
              {config.audience.fitFor.map((f, i) => <li key={i} className="text-slate-600 font-medium">{f}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black text-emerald-950 tracking-tight mb-6">Who This Isn&apos;t For</h2>
            <ul className="space-y-3">
              {config.audience.notFor.map((f, i) => <li key={i} className="text-slate-600 font-medium">{f}</li>)}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-24">
          <h2 id="faq-heading" className="text-3xl font-black text-emerald-950 tracking-tight mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {config.faqs.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="text-lg font-black text-emerald-950 mb-3">{f.q}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related services */}
        {config.relatedSlugs.length > 0 && (
          <section aria-labelledby="related-heading" className="mb-24">
            <h2 id="related-heading" className="text-2xl font-black text-emerald-950 tracking-tight mb-6">Related Services</h2>
            <ul className="flex flex-wrap gap-4">
              {config.relatedSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className="bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-emerald-950 hover:border-emerald-500 transition-all"
                  >
                    {titleForSlug(slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Closing CTA */}
        <section aria-labelledby="cta-heading" className="mb-16 bg-emerald-600 text-white p-12 rounded-[3rem] text-center">
          <h2 id="cta-heading" className="text-3xl font-black tracking-tight mb-6">Ready to Talk?</h2>
          <button
            onClick={() => onInquire(config.h1)}
            className="bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
          >
            Book a 30-Minute Scoping Call
          </button>
        </section>

        {/* Legal footer */}
        {config.disclaimer && (
          <p className="text-xs text-slate-400 font-medium leading-relaxed border-t border-slate-200 pt-8">{config.disclaimer}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ServicePageLayout;
