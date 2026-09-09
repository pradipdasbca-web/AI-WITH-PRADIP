import React from 'react';
import { Shield, Building2 } from 'lucide-react';
import { Language } from '../types';
import { brandsData } from '../data/brands';
import { translations } from '../data/translations';

interface BrandsProps {
  currentLang: Language;
}

export const Brands: React.FC<BrandsProps> = ({ currentLang }) => {
  const t = translations[currentLang].brands;

  return (
    <section id="brands" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
            {t.heading}
          </h2>
          <p className="text-sm text-slate-500">
            {t.subheading}
          </p>
        </div>

        {/* Brands Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="group relative h-28 rounded-xl bg-white border border-slate-200/70 p-4 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md hover:border-[#145BFF]/50 transition-all duration-300"
            >
              {/* Subtle Monochrome Typography Logo Mark */}
              <span className="font-extrabold tracking-widest text-slate-400 group-hover:text-[#145BFF] text-sm sm:text-base font-sans transition-colors duration-300">
                {brand.logoText}
              </span>

              {/* Industry Subtitle */}
              <span className="text-[10px] uppercase font-medium text-slate-400 group-hover:text-slate-600 transition-colors mt-1 line-clamp-1">
                {brand.industry}
              </span>

              {/* Subtle blue line on hover */}
              <div className="absolute bottom-0 inset-x-4 h-0.5 bg-[#145BFF] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            {currentLang === 'en'
              ? 'Confidential NDA commercial projects & client white-label arrangements respectfully preserved.'
              : 'গোপনীয়তা চুক্তি (NDA) এবং ক্লায়েন্ট সম্মানার্থে নির্দিষ্ট প্রকল্পের বিস্তারিত পৃথকভাবে উপস্থাপনযোগ্য।'}
          </p>
        </div>
      </div>
    </section>
  );
};
