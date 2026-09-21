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
    <div className="flex items-center gap-3 text-muted font-medium">
      <Clock className="w-5 h-5 text-brand shrink-0" />
      <p>{text}</p>
    </div>
  );
};

export default ResponseCommitment;
