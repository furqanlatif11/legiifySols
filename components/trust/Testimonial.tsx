import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name?: string;
  title?: string;
  company?: string;
  quote?: string;
  photoUrl?: string;
  linkedinUrl?: string;
}

// Requires name, title, company, and a photo or link, per the design system — refuses to render an anonymous or partial testimonial.
const Testimonial: React.FC<TestimonialProps> = ({ name, title, company, quote, photoUrl, linkedinUrl }) => {
  if (!name || !title || !company || !quote || !(photoUrl || linkedinUrl)) return null;

  return (
    <figure className="bg-white border border-rule rounded-2xl p-8">
      <Quote className="w-8 h-8 text-emerald-200 mb-4" />
      <blockquote className="text-lg text-muted font-medium leading-relaxed mb-6">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="flex items-center gap-4">
        {photoUrl && <img src={photoUrl} alt="" className="w-12 h-12 rounded-full object-cover" width={48} height={48} loading="lazy" />}
        <div>
          {linkedinUrl ? (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-brand">{name}</a>
          ) : (
            <p className="font-semibold text-ink">{name}</p>
          )}
          <p className="text-sm text-muted font-medium">{[title, company].filter(Boolean).join(', ')}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
