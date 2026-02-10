
import React from 'react';
import { METRICS } from '../constants';

const ProvenResults: React.FC = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="relative group p-8 rounded-3xl hover:bg-emerald-50 transition-colors duration-500">
              <div className="text-6xl font-black text-emerald-950 mb-6 group-hover:text-emerald-600 transition-colors tracking-tighter">
                {metric.value}
              </div>
              <h4 className="text-lg font-black text-emerald-900 mb-3 uppercase tracking-widest">{metric.label}</h4>
              <p className="text-slate-500 text-sm font-medium">{metric.description}</p>
              <div className="absolute top-0 right-0 w-2 h-0 group-hover:h-full bg-emerald-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
