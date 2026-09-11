import React from 'react';
import { Clock } from 'lucide-react';
import { isPlaceholder } from '../../utils/verify';

interface ResponseCommitmentProps {
  text?: string;
}

// Renders nothing without a real stated commitment — do not imply a response time that isn't confirmed.
const ResponseCommitment: React.FC<ResponseCommitmentProps> = ({ text }) => {
  if (isPlaceholder(text)) return null;

  return (
    <div className="flex items-center gap-3 text-slate-600 font-medium">
      <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
      <p>{text}</p>
    </div>
  );
};

export default ResponseCommitment;
