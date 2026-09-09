import React from 'react';
import { Language } from '../types';
import { siteConfig } from '../data/siteConfig';
import { translations } from '../data/translations';

interface StatsProps {
  currentLang: Language;
}

export const Stats: React.FC<StatsProps> = ({ currentLang }) => {
  const t = translations[currentLang].stats;
  const { stats } = siteConfig;

  const statItems = [
    {
      value: stats.experienceYears,
      label: t.yearsExperience,
      sublabel: currentLang === 'en' ? 'In Industry' : 'ইন্ডাস্ট্রি দক্ষতা'
    },
    {
      value: stats.projectsCompleted,
      label: t.projectsCompleted,
      sublabel: currentLang === 'en' ? 'Delivered Worldwide' : 'সফলভাবে সম্পন্ন'
    },
    {
      value: stats.brandsWorkedWith,
      label: t.brandsWorkedWith,
      sublabel: currentLang === 'en' ? 'Startups & SMEs' : 'পার্টনার প্রতিষ্ঠান'
    },
    {
      value: stats.creativeCampaigns,
      label: t.creativeCampaigns,
      sublabel: currentLang === 'en' ? 'High Conversion' : 'বিজ্ঞাপনী উদ্যোগ'
    },
    {
      value: stats.satisfactionRate,
      label: t.clientSatisfaction,
      sublabel: currentLang === 'en' ? 'Verified Feedback' : 'ক্লায়েন্ট সন্তুষ্টি'
    }
  ];

  return (
    <section id="stats" className="py-12 bg-[#0B1B3A] text-white border-y border-[#1E3A8A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-6 md:pt-0' : ''
              } px-3`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans">
                {item.value}
              </span>
              <span className="text-sm font-bold text-blue-300 mt-2 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
