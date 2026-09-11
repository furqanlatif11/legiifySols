import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { isPlaceholder } from '../../utils/verify';

interface CredentialBadgeProps {
  name?: string;
  credential?: string;
  licenseNumber?: string;
  jurisdiction?: string;
  status?: string;
  verifyUrl?: string;
}

// Renders nothing if the core credential facts are missing or still TODO_VERIFY placeholders — never show an empty or fake badge.
const CredentialBadge: React.FC<CredentialBadgeProps> = ({ name, credential, licenseNumber, jurisdiction, status, verifyUrl }) => {
  if (isPlaceholder(name) || isPlaceholder(credential) || isPlaceholder(licenseNumber)) return null;

  const content = (
    <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-6">
      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <div>
        <p className="font-black text-emerald-950">{name} — {credential}</p>
        <p className="text-sm text-slate-500 font-medium">
          {licenseNumber}{jurisdiction ? `, ${jurisdiction}` : ''}{status ? ` (${status})` : ''}
        </p>
      </div>
      {verifyUrl && <ExternalLink className="w-4 h-4 text-slate-400 ml-auto shrink-0" />}
    </div>
  );

  if (verifyUrl) {
    return (
      <a href={verifyUrl} target="_blank" rel="noopener noreferrer" className="block hover:border-emerald-500 transition-all rounded-2xl">
        {content}
      </a>
    );
  }

  return content;
};

export default CredentialBadge;
