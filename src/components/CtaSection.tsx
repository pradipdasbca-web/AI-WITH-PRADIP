import React from 'react';
import { MessageSquare, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface CtaSectionProps {
  currentLang: Language;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].cta;

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B1B3A] via-[#0E2246] to-[#071328] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#145BFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#145BFF]" />
          <span>{t.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          {t.heading}
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.text}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.btnWhatsapp}</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
              'Creative Project Inquiry - AI With Pradip'
            )}`}
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0B1B3A] font-bold text-base shadow-lg transition-all active:scale-[0.98]"
          >
            <Mail className="w-5 h-5 text-[#145BFF]" />
            <span>{t.btnEmail}</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Direct communication with Pradip Das • Rapid project turnaround
        </p>
      </div>
    </section>
  );
};
