import React from 'react';
import { ArrowRight, MapPin, Briefcase, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { siteConfig } from '../data/siteConfig';
import { translations } from '../data/translations';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang].about;
  const { founder, stats } = siteConfig;

  const infoPills = [
    {
      icon: Award,
      label: t.experienceLabel,
      value: `${stats.experienceYears} (${currentLang === 'en' ? 'Continuous Practice' : 'ধারাবাহিক কাজ'})`
    },
    {
      icon: Briefcase,
      label: t.brandsLabel,
      value: `${stats.brandsWorkedWith} (${currentLang === 'en' ? 'Collaborations' : 'সফল ব্র্যান্ড'})`
    },
    {
      icon: CheckCircle2,
      label: t.specializationLabel,
      value: founder.specialization[currentLang]
    },
    {
      icon: MapPin,
      label: t.locationLabel,
      value: founder.location[currentLang]
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation of Pradip */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative accent card frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#145BFF]/20 to-[#0B1B3A]/10 -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#0B1B3A] border border-slate-200 shadow-xl">
                <img
                  src={founder.image}
                  alt={`${founder.name[currentLang]} - ${founder.role[currentLang]}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Info Badge */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0B1B3A] via-[#0B1B3A]/80 to-transparent text-white">
                  <h4 className="text-xl font-bold">{founder.name[currentLang]}</h4>
                  <p className="text-xs text-blue-300 font-medium tracking-wide mt-0.5">
                    {founder.role[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Human-Sounding Copy & Editable Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
              <span>{t.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3A] leading-tight">
              {t.heading}
            </h2>

            {/* Personal Introduction */}
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-800">
                {founder.bioFull[currentLang]}
              </p>
            </div>

            {/* Editable Professional Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {infoPills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <IconComponent className="w-4 h-4 text-[#145BFF]" />
                      <span>{pill.label}</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#0B1B3A] mt-1.5 leading-snug">
                      {pill.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0B1B3A] hover:bg-[#145BFF] text-white font-semibold text-sm transition-all"
              >
                <span>{t.btnMore}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#145BFF]" />
                <span>{t.btnChat}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
