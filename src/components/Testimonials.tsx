import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Language } from '../types';
import { testimonialsData } from '../data/testimonials';
import { translations } from '../data/translations';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang].testimonials;

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-100" />
                </div>

                {/* Feedback */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{item.feedback[currentLang]}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1B3A] text-white flex items-center justify-center font-bold text-sm">
                  {item.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1B3A]">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role}, <span className="font-semibold text-slate-700">{item.companyOrBrand}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
