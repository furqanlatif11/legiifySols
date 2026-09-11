import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { setMeta, setJsonLd, getSiteUrl } from '../utils/seo';
import { servicePageConfigs } from '../data/services';
import { PREMIUM_SERVICES, CORE_SERVICES, ICON_MAP } from '../constants';
import { ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react';

// legacy constants.tsx ids that now have a dedicated in-depth page (ids predate the new slugs,
// so this maps old-id -> new-slug rather than assuming they match) — excluded below so each service
// appears exactly once instead of twice
const IDS_WITH_DEDICATED_PAGE = new Set(['tax-strategy', 'fractional-cfo', 'irs-dispute', 'financial-analysis']);
const otherPremiumServices = PREMIUM_SERVICES.filter((s) => !IDS_WITH_DEDICATED_PAGE.has(s.id));
const otherCoreServices = CORE_SERVICES.filter((s) => !IDS_WITH_DEDICATED_PAGE.has(s.id));

type ServicesProps = {
  handleInquire: (s?: string) => void;
  handleShowDetails: (item: any) => void;
};

const ServicesPage: React.FC<ServicesProps> = ({ handleInquire, handleShowDetails }) => {
  const location = useLocation();

  useEffect(() => {
    setMeta({
      title: 'Services — Ledgify Solutions | Tax, CFO & Financial Planning',
      description: 'Five in-depth guides for founders covering tax planning, financial analysis, virtual CFO leadership, IRS resolution support, and succession planning.',
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  // ItemList schema pointing at the five dedicated service pages, mirroring the cards rendered below
  useEffect(() => {
    const site = getSiteUrl();
    setJsonLd('services-hub', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: Object.values(servicePageConfigs).map((config, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: config.h1,
          url: `${site}/services/${config.slug}`
        }
      }))
    });
    return () => setJsonLd('services-hub', null);
  }, []);

  // Deep-link support: scroll to and briefly highlight the service referenced by the URL hash
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const timer = setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-emerald-500', 'ring-offset-4');
      setTimeout(() => el.classList.remove('ring-4', 'ring-emerald-500', 'ring-offset-4'), 2000);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Capabilities</h2>
        <h1 className="text-6xl md:text-8xl font-black text-emerald-950 tracking-tighter leading-none mb-8">Full Service Spectrum.</h1>
        <p className="text-xl text-slate-600 font-medium leading-relaxed">
          Start with a planning-stage need (tax strategy, succession) or an operating-stage need (financial analysis, CFO leadership, an active IRS notice). Each guide below covers scope, pricing, and process in full — pick the one that matches where you are right now.
        </p>
      </div>

      {/* In-depth service guides — the 5 dedicated pages */}
      <section aria-labelledby="guides-heading" className="mb-32">
        <div className="mb-10 border-b-4 border-emerald-900/10 pb-8">
          <h2 id="guides-heading" className="text-4xl font-black text-emerald-900 tracking-tight">In-Depth Service Guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(servicePageConfigs).map((config) => (
            <Link
              key={config.slug}
              to={`/services/${config.slug}`}
              className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-500 transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black tracking-tight text-emerald-950 group-hover:text-emerald-600 transition-colors">{config.h1}</h3>
                <ArrowUpRight className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
              </div>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium flex-1">{config.heroSubhead}</p>
              {config.pricing.from && (
                <p className="text-sm font-black uppercase tracking-widest text-emerald-600">{config.pricing.from}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {otherPremiumServices.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
          <div className="col-span-full mb-10 border-b-4 border-emerald-900/10 pb-8">
            <h2 className="text-4xl font-black text-emerald-900 tracking-tight">Institutional Growth (Premium)</h2>
          </div>
          {otherPremiumServices.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer scroll-mt-32"
              onClick={() => handleShowDetails(s)}
            >
              <div className="flex justify-between items-start mb-10">
                <div className="text-emerald-600 p-5 bg-emerald-50 rounded-2xl group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                  {ICON_MAP[s.icon]}
                </div>
                <TrendingUp className="text-emerald-100 w-16 h-16" />
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">{s.title}</h3>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium">{s.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleInquire(s.title);
                }}
                className="bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all flex items-center gap-3 shadow-xl"
              >
                Book Deep Dive <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {otherCoreServices.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="col-span-full mb-10 border-b-4 border-emerald-900/10 pb-8">
            <h2 className="text-4xl font-black text-emerald-900 tracking-tight">Essential Compliance (Core)</h2>
          </div>
          {otherCoreServices.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-emerald-500 transition-all shadow-sm cursor-pointer scroll-mt-32"
              onClick={() => handleShowDetails(s)}
            >
              <div className="text-emerald-500 mb-8">{ICON_MAP[s.icon]}</div>
              <h4 className="text-2xl font-black mb-4 leading-tight">{s.title}</h4>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">{s.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleInquire(s.title);
                }}
                className="text-emerald-600 font-black uppercase text-xs tracking-[0.2em] border-b-2 border-emerald-600 pb-1"
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);
}
export default ServicesPage;
