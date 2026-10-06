import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, X } from 'lucide-react';
import { ConsultationPageConfig } from '../../types';
import { consultationPageConfigs } from '../../data/consultation';
import { servicePageConfigs } from '../../data/services';
import { setJsonLd, getSiteUrl } from '../../utils/seo';
import { isPlaceholder } from '../../utils/verify';
import ImagePlaceholder from './ImagePlaceholder';
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

// title lookups by slug, derived from each config's own h1 so cross-links never drift out of sync
const titleForConsultationSlug = (slug: string): string => consultationPageConfigs[slug]?.h1 || slug;
const titleForServiceSlug = (slug: string): string => servicePageConfigs[slug]?.h1 || slug;

const stepIndex = (i: number) => String(i + 1).padStart(2, '0');

const ConsultationPageLayout: React.FC<{
  config: ConsultationPageConfig;
  onInquire: (service: string) => void;
}> = ({ config, onInquire }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setOpenFaq(null);
  }, [config]);

  useEffect(() => {
    const site = getSiteUrl();
    const pageUrl = `${site}/consultation/${config.slug}`;

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
        { '@type': 'ListItem', position: 2, name: 'Business Consultation', item: `${site}/consultation` },
        { '@type': 'ListItem', position: 3, name: config.h1, item: pageUrl }
      ]
    };

    const faqSchema = config.faqs.length > 0 ? {
      '@type': 'FAQPage',
      mainEntity: config.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    } : null;

    setJsonLd(`consultation-${config.slug}`, {
      '@context': 'https://schema.org',
      '@graph': [serviceSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]
    });

    return () => setJsonLd(`consultation-${config.slug}`, null);
  }, [config]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-paper pb-24">
      {/* Hero — full-bleed dark band, the visual signature that separates consultation from the accounting service pages */}
      <header className="bg-ink pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-14">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#9DB2A7]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/consultation" className="hover:text-white transition-colors">Business Consultation</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{config.h1}</li>
            </ol>
          </nav>

          <p className="text-sm font-semibold text-[#58E0AE] mb-5">Business Consultation</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-none mb-8">{config.h1}</h1>
              <p className="text-2xl text-[#9DB2A7] font-medium leading-relaxed mb-6">{config.heroSubhead}</p>
              {!isPlaceholder(config.credentialLine) && (
                <p className="text-sm font-semibold text-[#58E0AE] mb-10">{config.credentialLine}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={() => onInquire(config.h1)}
                  className="bg-white text-ink px-10 py-5 rounded-control font-semibold text-lg hover:bg-[#58E0AE] transition-all flex items-center justify-center gap-3"
                >
                  Book a discovery call <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/consultation"
                  className="border border-white/25 text-white px-10 py-5 rounded-control font-semibold text-lg hover:border-[#58E0AE] hover:text-[#58E0AE] transition-all flex items-center justify-center gap-3"
                >
                  See all modules
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:col-span-5 lg:mt-0">
              {config.images.heroSrc ? (
                <figure className="overflow-hidden rounded-card border border-white/15 aspect-square">
                  <img
                    src={config.images.heroSrc}
                    alt={config.h1}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ) : (
                <ImagePlaceholder tone="ink" aspect="square" caption={config.images.hero} />
              )}
            </div>
          </div>

          <div className="mt-16">
            {config.authorityStats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/12 pt-10">
                {config.authorityStats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-5xl font-semibold text-white tracking-tighter mb-2 tabular-nums">{stat.value}</div>
                    <p className="text-[#9DB2A7] font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs text-[#9DB2A7]/70 font-medium mt-4">Firm-wide results across all Ledgify Solutions engagements, not specific to this module.</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 pt-20">
        {config.supportingHeading && config.supportingIntro && (
          <section aria-labelledby="supporting-heading" className="mb-20 max-w-3xl">
            <h2 id="supporting-heading" className="text-3xl font-semibold text-ink tracking-tight mb-5">{config.supportingHeading}</h2>
            <p className="text-xl text-muted font-medium leading-relaxed">{config.supportingIntro}</p>
          </section>
        )}

        {/* Problem framing — numbered editorial rows, not boxed cards */}
        <section aria-labelledby="problems-heading" className="mb-20">
          <h2 id="problems-heading" className="text-3xl font-semibold text-ink tracking-tight mb-10">Is this you?</h2>
          <div className="border-t-2 border-ink">
            {config.problems.map((p, i) => (
              <div key={i} className="flex gap-8 border-b border-rule py-8">
                <span className="text-sm font-semibold text-muted tabular-nums shrink-0 pt-1">{stepIndex(i)}</span>
                <p className="text-lg text-ink font-medium leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Context visual — breaks up the long read between the problem framing and the scope list */}
        <section className="mb-20">
          {config.images.contextSrc ? (
            <figure className="overflow-hidden rounded-card border border-rule aspect-video">
              <img
                src={config.images.contextSrc}
                alt={config.supportingHeading || config.h1}
                className="h-full w-full object-cover"
              />
            </figure>
          ) : (
            <ImagePlaceholder aspect="video" caption={config.images.context} />
          )}
        </section>

        {/* Scope — ruled list rather than a bordered table */}
        <section aria-labelledby="scope-heading" className="mb-20">
          <h2 id="scope-heading" className="text-3xl font-semibold text-ink tracking-tight mb-10">What&apos;s included</h2>
          <div className="border-t-2 border-ink">
            {config.scope.map((row, i) => (
              <div key={i} className="flex flex-col gap-2 border-b border-rule py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                <p className="font-semibold text-ink text-lg">{row.deliverable}</p>
                <p className="text-sm text-muted font-medium shrink-0 sm:text-right">{row.cadence} &middot; {row.format}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Out of scope */}
        <section aria-labelledby="out-of-scope-heading" className="mb-20">
          <h2 id="out-of-scope-heading" className="text-3xl font-semibold text-ink tracking-tight mb-8">What&apos;s not included</h2>
          <ul className="space-y-4">
            {config.outOfScope.map((line, i) => (
              <li key={i} className="flex gap-3 text-muted font-medium">
                <span className="mt-2.5 h-1 w-1 rounded-full bg-muted shrink-0"></span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        {/* Method — a sequenced roadmap, not a small-circle checklist */}
        <section aria-labelledby="method-heading" className="mb-20">
          <h2 id="method-heading" className="text-3xl font-semibold text-ink tracking-tight mb-10">How it works</h2>
          {config.images.methodSrc ? (
            <figure className="mb-12 overflow-hidden rounded-card border border-rule aspect-video">
              <img
                src={config.images.methodSrc}
                alt={`${config.h1} method`}
                className="h-full w-full object-cover"
              />
            </figure>
          ) : (
            <ImagePlaceholder aspect="video" caption={config.images.method} className="mb-12" />
          )}
          <ol className="space-y-12">
            {config.method.map((m, i) => (
              <li key={i} className="grid grid-cols-[3rem_1fr] gap-6 sm:grid-cols-[4rem_1fr]">
                <span className="text-4xl sm:text-5xl font-semibold text-ink/10 tabular-nums leading-none">{stepIndex(i)}</span>
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-2">{m.step}</h3>
                  <p className="text-muted font-medium leading-relaxed">{m.detail}</p>
                  <p className="text-sm font-semibold text-brand mt-2">{m.timeframe}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Credentials & trust block */}
        <section aria-labelledby="trust-heading" className="mb-20 space-y-8">
          <h2 id="trust-heading" className="text-3xl font-semibold text-ink tracking-tight">Credentials & Trust</h2>
          <CredentialBadge {...primaryCredential} />
          <ReviewedBy {...config.reviewedBy} />
          <FirmIdentity {...firmIdentity} />
          <SecurityPosture {...securityPosture} />
          <Memberships items={memberships} />
          <InsuranceDisclosure {...insurance} />
          <TechStack tools={techStack} />
          <ResponseCommitment {...responseCommitment} />
        </section>

        {/* Pricing — dark engagement-model callout, echoes the hero band */}
        <section aria-labelledby="pricing-heading" className="mb-20">
          <div className="bg-ink rounded-card p-10 lg:p-14">
            <h2 id="pricing-heading" className="text-2xl font-semibold text-white tracking-tight mb-5">Engagement model</h2>
            <p className="text-xl text-white font-semibold">{config.pricing.model}</p>
            <p className="text-[#9DB2A7] font-medium mt-3 max-w-2xl leading-relaxed">{config.pricing.note}</p>
          </div>
        </section>

        {/* Who this is for / not for — check/cross rather than plain bullets */}
        <section aria-labelledby="audience-heading" className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 id="audience-heading" className="text-2xl font-semibold text-ink tracking-tight mb-6">Who this is for</h2>
            <ul className="space-y-4">
              {config.audience.fitFor.map((f, i) => (
                <li key={i} className="flex gap-3 text-muted font-medium">
                  <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ink tracking-tight mb-6">Who this isn&apos;t for</h2>
            <ul className="space-y-4">
              {config.audience.notFor.map((f, i) => (
                <li key={i} className="flex gap-3 text-muted font-medium">
                  <X className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ — accordion, matching components/faq.tsx's plus/minus marker language */}
        <section aria-labelledby="faq-heading" className="mb-20">
          <h2 id="faq-heading" className="text-3xl font-semibold text-ink tracking-tight mb-10">Frequently Asked Questions</h2>
          <div className="border-t-2 border-ink">
            {config.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-rule">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <span className="text-lg font-semibold text-ink leading-snug">{f.q}</span>
                    <span aria-hidden="true" className="relative mt-1.5 block h-4 w-4 shrink-0 text-brand">
                      <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rounded-full bg-current" />
                      <span className={`absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-2xl pb-7 text-base leading-relaxed text-muted">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related consulting modules */}
        {config.relatedSlugs.length > 0 && (
          <section aria-labelledby="related-heading" className="mb-12">
            <h2 id="related-heading" className="text-2xl font-semibold text-ink tracking-tight mb-6">Related consulting modules</h2>
            <div className="border-t border-rule">
              {config.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  to={`/consultation/${slug}`}
                  className="flex items-center justify-between gap-6 border-b border-rule py-5 font-semibold text-ink hover:text-brand transition-colors"
                >
                  {titleForConsultationSlug(slug)}
                  <ArrowUpRight className="w-5 h-5 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related accounting services */}
        {config.relatedServiceSlugs && config.relatedServiceSlugs.length > 0 && (
          <section aria-labelledby="related-services-heading" className="mb-20">
            <h2 id="related-services-heading" className="text-2xl font-semibold text-ink tracking-tight mb-6">Pairs well with</h2>
            <div className="border-t border-rule">
              {config.relatedServiceSlugs.map((slug) => (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="flex items-center justify-between gap-6 border-b border-rule py-5 font-semibold text-ink hover:text-brand transition-colors"
                >
                  {titleForServiceSlug(slug)}
                  <ArrowUpRight className="w-5 h-5 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Closing CTA — ink band bookends the hero */}
      <section aria-labelledby="cta-heading" className="bg-ink py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-3xl font-semibold text-white tracking-tight mb-6">Ready to talk?</h2>
          <button
            onClick={() => onInquire(config.h1)}
            className="bg-white text-ink px-10 py-5 rounded-control font-semibold text-lg hover:bg-[#58E0AE] transition-all"
          >
            Book a 30-Minute Discovery Call
          </button>
        </div>
      </section>

      {/* Legal footer */}
      {config.disclaimer && (
        <div className="container mx-auto px-6">
          <p className="text-xs text-muted font-medium leading-relaxed border-t border-rule pt-8 mt-16">{config.disclaimer}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ConsultationPageLayout;
