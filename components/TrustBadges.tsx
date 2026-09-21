
import React from 'react';
import { Info } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-paper border-t border-rule">
      <div className="container mx-auto px-6 max-w-4xl ">
        <div className="mb-16">
          <h2 className="text-brand font-semibold text-xs mb-6">Security &amp; privacy</h2>
          <h3 className="text-h2 font-semibold text-ink mb-6">How we protect your data</h3>
          <p className="text-xl text-muted font-medium">
            We use practical security controls and clear data-handling practices to protect client information.
          </p>
        </div>

        <dl>
          {[
            { title: 'Data encryption', desc: 'Encryption for sensitive information.' },
            { title: 'Secure systems', desc: 'Documented security controls and review practices.' },
            { title: 'Confidentiality', desc: 'Privacy and confidentiality practices.' },
            { title: 'Professional standards', desc: 'Clear procedures for accurate, consistent work.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8 py-5 border-t border-rule">
              <dt className="font-semibold text-ink sm:w-56 shrink-0">{item.title}</dt>
              <dd className="text-muted font-medium">{item.desc}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex items-start gap-4 bg-flag/5 border border-flag/20 rounded-lg p-6">
          <Info className="w-6 h-6 text-flag shrink-0 mt-0.5" />
          <p className="text-muted font-medium text-sm leading-relaxed">
            <span className="font-semibold text-flag">Please note:</span> Ledgify Solutions prepares, organizes, and reviews your tax documentation. We do not e-file or submit returns to the IRS or state agencies on your behalf — the final filing remains your responsibility (or your designated filer's), and we'll guide you through that step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
