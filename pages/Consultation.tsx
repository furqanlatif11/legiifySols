import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { setMeta, setJsonLd, getSiteUrl } from '../utils/seo';
import { consultationPageConfigs } from '../data/consultation';
import FAQ from '../components/faq';

type ConsultationProps = {
  handleInquire: (s?: string) => void;
};

const ConsultationPage: React.FC<ConsultationProps> = ({ handleInquire }) => {
  const modules = Object.values(consultationPageConfigs);

  useEffect(() => {
    setMeta({
      title: 'Business Consultation Services | Ledgify Solutions',
      description: 'Strategic Acceleration, Operational Excellence, Financial Architecture, and Market Domination — scoped consulting modules for businesses ready to grow.',
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  useEffect(() => {
    const site = getSiteUrl();
    setJsonLd('consultation-hub', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: modules.map((config, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'Service', name: config.h1, url: `${site}/consultation/${config.slug}` }
      }))
    });
    return () => setJsonLd('consultation-hub', null);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-paper"
    >
      {/* Hero — full-bleed dark band, matching each module's own detail page */}
      <header className="bg-ink pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-14">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#9DB2A7]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Business Consultation</li>
            </ol>
          </nav>

          <p className="text-sm font-semibold text-[#58E0AE] mb-5">Four scoped modules</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.5rem] lg:text-[4.25rem]">
                Strategic consulting, scoped around a result.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#9DB2A7]">
                Each module is built around a specific outcome — a stalled growth
                curve, rising operational overhead, a reporting structure that no
                longer tells the truth, or a competitor gaining ground. Scoped
                and quoted before any work starts.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => handleInquire('Business Consultation overview')}
                  className="bg-white text-ink px-8 py-4 rounded-control text-center font-semibold hover:bg-[#58E0AE] transition-all"
                >
                  Book a discovery call
                </button>
                <Link
                  to="/services"
                  className="border border-white/25 text-white px-8 py-4 rounded-control text-center font-medium hover:border-[#58E0AE] hover:text-[#58E0AE] transition-all"
                >
                  See our accounting services
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:col-span-5 lg:mt-0">
              <figure className="overflow-hidden rounded-card border border-white/15 aspect-square">
                <video
                  src="/assets/images/Business_consultation_hero_video.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              </figure>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 pt-20">
        {/* Modules — ruled rows with a step index, not boxed cards */}
        <section aria-labelledby="modules-heading">
          <h2 id="modules-heading" className="sr-only">Consulting modules</h2>
          <div className="border-t-2 border-ink">
            {modules.map((config, i) => (
              <div key={config.slug} className="grid grid-cols-1 gap-y-5 border-b border-rule py-10 lg:grid-cols-12 lg:gap-x-12">
                <div className="lg:col-span-1">
                  <span className="text-sm font-semibold text-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">{config.h1}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{config.heroSubhead}</p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-end">
                  <Link
                    to={`/consultation/${config.slug}`}
                    className="inline-flex items-center gap-2 border-b-2 border-brand/30 pb-0.5 text-base font-semibold text-brand hover:border-brand transition-colors"
                  >
                    Read the guide <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleInquire(config.h1)}
                    className="border-b-2 border-transparent pb-0.5 text-base font-medium text-muted hover:border-muted hover:text-ink transition-colors"
                  >
                    Get a quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-card border border-rule bg-white p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Not sure which module fits?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Every module is scoped around your business before a price is
            quoted — no engagement starts without a written scope you have
            agreed to in advance. A discovery call is the fastest way to find
            the right starting point.
          </p>
          <button
            type="button"
            onClick={() => handleInquire('Business Consultation overview')}
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-brand hover:text-brandDeep transition-colors"
          >
            Book a discovery call <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <FAQ pageId="consultation" tone="paper" />
    </motion.div>
  );
};

export default ConsultationPage;
