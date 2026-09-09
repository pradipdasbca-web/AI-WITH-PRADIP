import React, { useState } from 'react';
import {
  Video,
  Palette,
  TrendingUp,
  Sparkles,
  Share2,
  Cpu,
  Target,
  ArrowRight,
  CheckCircle2,
  X,
  MessageSquare
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { servicesData } from '../data/services';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface ServicesProps {
  currentLang: Language;
}

export const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const t = translations[currentLang].services;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon names to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return Video;
      case 'Palette':
        return Palette;
      case 'TrendingUp':
        return TrendingUp;
      case 'Sparkles':
        return Sparkles;
      case 'Share2':
        return Share2;
      case 'Cpu':
        return Cpu;
      case 'Target':
        return Target;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#145BFF]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-blue-200 bg-gradient-to-b from-blue-50/30 to-white' : ''
                }`}
              >
                <div>
                  {/* Card Top: Icon & Optional Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1B3A] text-white flex items-center justify-center group-hover:bg-[#145BFF] group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100/70 text-[#145BFF]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#145BFF] transition-colors mb-2.5">
                    {service.title[currentLang]}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {service.shortDescription[currentLang]}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0B1B3A] group-hover:text-[#145BFF] transition-colors cursor-pointer"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#145BFF]">
                {selectedService.badge || 'Service Details'}
              </span>

              <h3 className="text-2xl font-extrabold text-[#0B1B3A]">
                {selectedService.title[currentLang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedService.fullDescription[currentLang]}
              </p>

              {/* Deliverables List */}
              <div className="pt-3">
                <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Key Deliverables:
                </p>
                <div className="space-y-2">
                  {selectedService.deliverables[currentLang].map((del, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/917319195933?text=${encodeURIComponent(
                    `Hi Pradip, I want to inquire about ${selectedService.title.en} for my brand.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#145BFF] hover:bg-[#0A47DC] text-white text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.getQuote}</span>
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
