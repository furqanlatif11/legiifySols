import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Home } from 'lucide-react';
import { setMeta } from '../utils/seo';

const NotFoundPage: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: 'Page Not Found | Ledgify Solutions',
      description: 'The page you are looking for does not exist or has moved.',
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });

    // error pages should never be indexed
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, nofollow');

    return () => meta?.remove();
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-48 pb-24 bg-paper min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="w-20 h-20 rounded-2xl bg-ink text-white flex items-center justify-center mx-auto mb-10">
          <Compass className="w-10 h-10" />
        </div>
        <p className="text-sm font-semibold text-brand mb-6">Error 404</p>
        <h1 className="text-6xl md:text-8xl font-semibold text-ink tracking-tighter leading-none mb-8">Lost in the ledger.</h1>
        <p className="text-xl text-muted font-medium leading-relaxed mb-12">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <Link
            to="/"
            className="bg-ink text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-brandDeep transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Home className="w-5 h-5" /> Back to Home
          </Link>
          <Link
            to="/services"
            className="bg-white border border-rule text-ink px-10 py-5 rounded-2xl font-semibold text-lg hover:border-brand transition-all flex items-center justify-center gap-3"
          >
            View Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <button
          onClick={() => handleInquire()}
          className="text-sm font-semibold text-brand hover:text-brandDeep transition-colors"
        >
          Or talk to us directly
        </button>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
