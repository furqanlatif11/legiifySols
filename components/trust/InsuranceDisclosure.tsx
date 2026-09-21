import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface InsuranceDisclosureProps {
  hasCoverage?: boolean;
  note?: string;
}

// Renders nothing unless coverage is explicitly confirmed — never imply insurance that isn't verified.
const InsuranceDisclosure: React.FC<InsuranceDisclosureProps> = ({ hasCoverage, note }) => {
  if (!hasCoverage) return null;

  return (
    <div className="flex items-center gap-3 text-muted font-medium">
      <ShieldCheck className="w-5 h-5 text-brand shrink-0" />
      <p>{note || 'Professional liability (E&O) coverage held.'}</p>
    </div>
  );
};

export default InsuranceDisclosure;
