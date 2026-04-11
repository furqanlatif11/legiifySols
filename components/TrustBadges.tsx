
import React from 'react';
import { Shield, Lock, FileCheck, Award } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section id="trust" className="py-12 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-6">🔒 Security & Privacy</h2>
          <h3 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tighter mb-6">Your Data, Your Trust</h3>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Enterprise-grade security and data confidentiality standards govern all client information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Lock className="w-8 h-8" />, title: 'Data Encryption', desc: 'AES-256 encryption for all sensitive information.' },
            { icon: <Shield className="w-8 h-8" />, title: 'Secure Systems', desc: 'Verified security controls and compliance.' },
            { icon: <FileCheck className="w-8 h-8" />, title: 'Confidentiality', desc: 'Strict non-disclosure and privacy protocols.' },
            { icon: <Award className="w-8 h-8" />, title: 'Professional Standards', desc: 'Adherence to industry best practices.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="font-black text-emerald-950 text-lg mb-3">{item.title}</h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="bg-emerald-950 text-white rounded-[3rem] p-12 md:p-16">
          <h4 className="text-2xl font-black mb-12 text-center tracking-tight">Trust & Compliance Standards</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <span className="text-3xl">🔐</span>
              </div>
              <p className="font-black uppercase tracking-widest text-xs text-emerald-400 mb-2">Secure Infrastructure</p>
              <p className="text-emerald-100/60 text-sm font-medium">Enterprise-grade data protection systems</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <span className="text-3xl">📋</span>
              </div>
              <p className="font-black uppercase tracking-widest text-xs text-emerald-400 mb-2\">Professional Standards</p>
              <p className="text-emerald-100/60 text-sm font-medium\">Compliance with industry guidelines</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <span className="text-3xl">🤝</span>
              </div>
              <p className="font-black uppercase tracking-widest text-xs text-emerald-400 mb-2\">Confidentiality</p>
              <p className="text-emerald-100/60 text-sm font-medium\">All information strictly protected</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                <span className="text-3xl">✓</span>
              </div>
              <p className="font-black uppercase tracking-widest text-xs text-emerald-400 mb-2\">Quality Assurance</p>
              <p className="text-emerald-100/60 text-sm font-medium\">Rigorous review and verification processes</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustBadges;
