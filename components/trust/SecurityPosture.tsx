import React from 'react';
import { Lock } from 'lucide-react';
import { isPlaceholder } from '../../utils/verify';

interface SecurityPostureProps {
  encryption?: string;
  retentionPolicy?: string;
  accessControl?: string;
  ndaAvailable?: boolean;
  soc2Status?: string;
}

// Renders nothing if none of the security facts are verified.
const SecurityPosture: React.FC<SecurityPostureProps> = ({ encryption, retentionPolicy, accessControl, ndaAvailable, soc2Status }) => {
  const facts = [
    !isPlaceholder(encryption) && { label: 'Encryption', value: encryption! },
    !isPlaceholder(retentionPolicy) && { label: 'Data retention', value: retentionPolicy! },
    !isPlaceholder(accessControl) && { label: 'Access control', value: accessControl! },
    !isPlaceholder(soc2Status) && { label: 'SOC 2', value: soc2Status! },
    ndaAvailable && { label: 'NDA', value: 'Available on request' }
  ].filter(Boolean) as { label: string; value: string }[];

  if (facts.length === 0) return null;

  return (
    <div className="bg-ink text-white rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-6 h-6 text-brand" />
        <h3 className="font-semibold text-lg">How we protect your data</h3>
      </div>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {facts.map((f, i) => (
          <div key={i}>
            <dt className="text-xs font-semibold text-brand mb-1">{f.label}</dt>
            <dd className="text-emerald-100/70 font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default SecurityPosture;
