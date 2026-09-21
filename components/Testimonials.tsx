
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // no real client testimonials with consent + full attribution exist yet — refuse to render rather than show nothing meaningful
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-24 bg-paper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-semibold text-sm mb-4">Success stories</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-ink">What our clients say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-rule flex flex-col"
            >
              <div className="text-brand/20 mb-6">
                <Quote className="w-12 h-12 fill-current" />
              </div>
              <p className="text-muted italic text-lg leading-relaxed mb-8 flex-1">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-paper pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-ink">{t.name}</h4>
                  <p className="text-muted text-xs font-medium">
                    {t.role} | {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
