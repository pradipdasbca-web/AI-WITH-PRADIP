import React from 'react';
import { ShieldCheck, MessageCircle, Sparkles, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { timelineData, impactData } from '../data/experience';
import { translations } from '../data/translations';

interface ExperienceProps {
  currentLang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ currentLang }) => {
  const t = translations[currentLang].experience;

  const getImpactIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'MessageCircle':
        return MessageCircle;
      case 'Sparkles':
        return Sparkles;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* SECTION 08: Experience Timeline */}
        <div>
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              {t.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {t.subheading}
            </p>
          </div>

          {/* Clean Vertical / Horizontal Responsive Timeline */}
          <div className="relative border-l-2 border-blue-100 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
            {timelineData.map((item, idx) => (
              <div key={item.id} className="relative group">
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    item.highlight
                      ? 'bg-[#145BFF] border-white ring-4 ring-blue-100'
                      : 'bg-white border-[#145BFF] group-hover:bg-[#145BFF] transition-colors'
                  }`}
                />

                {/* Content Box */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-200 ${
                    item.highlight
                      ? 'bg-gradient-to-r from-blue-50/70 to-white border-blue-200 shadow-sm'
                      : 'bg-slate-50/50 hover:bg-white border-slate-200/80 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        item.highlight
                          ? 'bg-[#0B1B3A] text-white'
                          : 'bg-blue-100 text-[#145BFF]'
                      }`}
                    >
                      {item.year}
                    </span>

                    {item.highlight && (
                      <span className="text-[11px] font-bold text-emerald-600 flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Active Agency Leadership</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1B3A] mb-1.5">
                    {item.title[currentLang]}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {item.description[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 09: Results / Impact (Business Purpose) */}
        <div className="pt-8 border-t border-slate-100">
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
              <span>{t.impactEyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
              {t.impactHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.map((impact) => {
              const Icon = getImpactIcon(impact.iconName);
              return (
                <div
                  key={impact.id}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#145BFF]/50 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#145BFF] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1B3A] mb-2 leading-snug">
                      {impact.title[currentLang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {impact.description[currentLang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
