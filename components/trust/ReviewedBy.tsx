import React from 'react';
import { isPlaceholder } from '../../utils/verify';

interface ReviewedByProps {
  name?: string;
  credential?: string;
  date?: string;
  headshotUrl?: string;
}

// Renders nothing without a real name, credential, and date — an unattributed or placeholder byline is worse than none.
const ReviewedBy: React.FC<ReviewedByProps> = ({ name, credential, date, headshotUrl }) => {
  if (isPlaceholder(name) || isPlaceholder(credential) || isPlaceholder(date)) return null;

  return (
    <div className="flex items-center gap-4 text-sm text-muted font-medium">
      {headshotUrl && (
        <img src={headshotUrl} alt="" className="w-10 h-10 rounded-full object-cover" width={40} height={40} loading="lazy" />
      )}
      <p>Reviewed by <span className="font-semibold text-ink">{name}</span>, {credential} — last reviewed {date}</p>
    </div>
  );
};

export default ReviewedBy;
