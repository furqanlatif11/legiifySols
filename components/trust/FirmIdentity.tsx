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
    <address className="not-italic bg-white border border-rule rounded-2xl p-8 space-y-4">
      <p className="font-semibold text-ink text-lg">{legalName}</p>
      <p className="flex items-center gap-3 text-muted font-medium"><MapPin className="w-5 h-5 text-brand shrink-0" />{address}</p>
      {phone && <p className="flex items-center gap-3 text-muted font-medium"><Phone className="w-5 h-5 text-brand shrink-0" />{phone}</p>}
      {email && <p className="flex items-center gap-3 text-muted font-medium"><Mail className="w-5 h-5 text-brand shrink-0" />{email}</p>}
      {ein && <p className="text-xs text-muted font-semibold">EIN {ein}</p>}
    </address>
  );
};

export default FirmIdentity;
