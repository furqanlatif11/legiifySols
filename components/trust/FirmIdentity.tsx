import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FirmIdentityProps {
  legalName?: string;
  address?: string;
  phone?: string;
  email?: string;
  ein?: string;
}

// Renders nothing without at least a legal name and address — NAP consistency depends on both being real.
const FirmIdentity: React.FC<FirmIdentityProps> = ({ legalName, address, phone, email, ein }) => {
  if (!legalName || !address) return null;

  return (
    <address className="not-italic bg-white border border-slate-200 rounded-2xl p-8 space-y-4">
      <p className="font-black text-emerald-950 text-lg">{legalName}</p>
      <p className="flex items-center gap-3 text-slate-600 font-medium"><MapPin className="w-5 h-5 text-emerald-600 shrink-0" />{address}</p>
      {phone && <p className="flex items-center gap-3 text-slate-600 font-medium"><Phone className="w-5 h-5 text-emerald-600 shrink-0" />{phone}</p>}
      {email && <p className="flex items-center gap-3 text-slate-600 font-medium"><Mail className="w-5 h-5 text-emerald-600 shrink-0" />{email}</p>}
      {ein && <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">EIN {ein}</p>}
    </address>
  );
};

export default FirmIdentity;
