import React from 'react';

interface MembershipItem {
  name: string;
  logoUrl?: string;
  status?: string;
}

interface MembershipsProps {
  items?: MembershipItem[];
}

// Renders nothing if there are no real, current memberships to show.
const Memberships: React.FC<MembershipsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-8">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          {item.logoUrl && <img src={item.logoUrl} alt="" className="h-8 object-contain" loading="lazy" />}
          <span className="font-bold text-slate-700 text-sm">
            {item.name}{item.status ? ` — ${item.status}` : ''}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Memberships;
