import React from 'react';
import { motion } from 'motion/react';
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
    <section
      id="stats"
      className="relative py-12 sm:py-14 bg-[#081226] text-white overflow-hidden rgb-border-lighting shadow-[inset_0_1px_30px_rgba(0,0,0,0.6)]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-600/30 blur-3xl animate-pulse" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-600/30 blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-6 md:pt-0' : ''
              } px-3 transition-transform duration-300 cursor-default group`}
            >
              {/* Animated Stat Value with RGB shimmer & subtle floating pulse */}
              <motion.span
                animate={{
                  y: [0, -3, 0],
                  filter: [
                    'drop-shadow(0 0 6px rgba(0, 212, 255, 0.4))',
                    'drop-shadow(0 0 14px rgba(255, 0, 128, 0.5))',
                    'drop-shadow(0 0 6px rgba(0, 212, 255, 0.4))',
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans animate-rgb-text group-hover:scale-110 transition-transform duration-300 inline-block"
              >
                {item.value}
              </motion.span>

              {/* Animated Label */}
              <motion.span
                animate={{
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  delay: index * 0.2,
                }}
                className="text-sm font-bold text-cyan-300 mt-2.5 uppercase tracking-wider group-hover:text-white transition-colors duration-200"
              >
                {item.label}
              </motion.span>

              {/* Sublabel */}
              <span className="text-xs text-slate-400 mt-1 font-medium group-hover:text-slate-200 transition-colors">
                {item.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
