import React from 'react';
import { ImageIcon } from 'lucide-react';

type Aspect = 'video' | 'square' | 'portrait';
type Tone = 'paper' | 'ink';

const ASPECT_CLASS: Record<Aspect, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]'
};

// Styled stand-in for a real photo/graphic — never a broken <img src>, so nothing 404s
// in production. The caption is the brief for whoever sources the final asset.
const ImagePlaceholder: React.FC<{
  caption: string;
  aspect?: Aspect;
  tone?: Tone;
  className?: string;
}> = ({ caption, aspect = 'video', tone = 'paper', className = '' }) => {
  const toneClasses = tone === 'ink'
    ? 'border-white/15 bg-white/5 text-[#9DB2A7]'
    : 'border-rule bg-white text-muted';

  return (
    <figure className={`overflow-hidden rounded-card border ${toneClasses} ${ASPECT_CLASS[aspect]} ${className}`}>
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
        <ImageIcon className="h-8 w-8 opacity-50" aria-hidden="true" />
        <figcaption className="text-xs font-semibold opacity-70">Placeholder image — replace before launch</figcaption>
        <p className="max-w-xs text-sm font-medium leading-relaxed">{caption}</p>
      </div>
    </figure>
  );
};

export default ImagePlaceholder;
