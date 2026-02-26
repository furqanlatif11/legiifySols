
import React from 'react';
import { Shield, Lock, FileCheck, Award } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Security & Trust</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Data Protected by USA Industry Standards</h3>
            <p className="text-lg text-slate-600 mb-8">
              At Ledgify Solutions, we treat your financial data with the same security as a major financial institution. Our infrastructure is built to exceed AICPA guidelines and ensure 100% privacy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Lock className="w-6 h-6" />, title: 'End-to-End Encryption', desc: 'AES-256 bank-level security.' },
                { icon: <Shield className="w-6 h-6" />, title: 'SOC2 Compliant', desc: 'Verified data handling controls.' },
                { icon: <FileCheck className="w-6 h-6" />, title: 'IRS e-file Provider', desc: 'Authorized for secure federal filing.' },
                { icon: <Award className="w-6 h-6" />, title: 'AICPA Standards', desc: 'Following professional best practices.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <h4 className="text-xl font-bold text-slate-900 mb-8 text-center uppercase tracking-widest">Our Certifications</h4>
            <div className="grid grid-cols-2 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder logo wrappers representing certifications */}
              <div className="h-16 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl bg-white">
                <span className="font-black text-slate-400">AICPA</span>
              </div>
              <div className="h-16 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl bg-white">
                <span className="font-black text-slate-400">IRS AUTHORIZED</span>
              </div>
              <div className="h-16 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl bg-white">
                <span className="font-black text-slate-400">SOC2 COMPLIANT</span>
              </div>
              <div className="h-16 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl bg-white">
                <span className="font-black text-slate-400">QUICKBOOKS ELITE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
