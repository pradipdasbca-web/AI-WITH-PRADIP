import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { PradipPortrait } from './PradipPortrait';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-[#F5F8FC] via-white to-[#F8FAFC] overflow-hidden"
    >
      {/* Subtle architectural background grid & radial light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Subtle royal blue glow top right */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Large Professional Portrait of Pradip Das */}
          <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center">
            <div className="w-full max-w-md lg:max-w-none">
              <PradipPortrait
                size="hero"
                badgeText={t.badge}
              />
            </div>
          </div>

          {/* RIGHT SIDE: Authoritative Positioning, Editorial Headline, CTAs */}
          <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col items-start space-y-6 lg:pl-6">
            {/* Small Eyebrow & Credibility Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0B1B3A] text-white text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#145BFF]" />
                <span>{t.eyebrow}</span>
              </span>

              <span className="inline-flex items-center space-x-1 text-xs font-semibold text-[#145BFF] bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                <span>{t.badge}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1B3A] leading-[1.15]">
                {t.headlineLead}{' '}
                <span className="text-[#145BFF] block sm:inline">
                  {t.headlineHighlight}
                </span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug pt-1">
                {t.subheadline}
              </p>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {t.intro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl bg-[#145BFF] hover:bg-[#0A47DC] text-white text-base font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all active:scale-[0.98]"
              >
                <span>{t.btnViewWork}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1B3A] border border-slate-300 text-base font-semibold shadow-xs hover:shadow-sm transition-all active:scale-[0.98]"
              >
                <span>{t.btnWorkTogether}</span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-50 border border-emerald-300/80 hover:bg-emerald-100/70 text-emerald-800 text-sm font-semibold transition-all"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp ({siteConfig.contact.whatsappFormatted})</span>
              </a>
            </div>

            {/* Secondary Small Text / Key Focus Pillars */}
            <div className="pt-4 border-t border-slate-200/90 w-full">
              <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Core Specializations:
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-6">
                {t.keyPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#0B1B3A]">
                    <CheckCircle2 className="w-4 h-4 text-[#145BFF] shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#stats"
            className="flex flex-col items-center text-xs font-medium text-slate-400 hover:text-[#145BFF] transition-colors group"
            aria-label="Scroll to stats"
          >
            <span className="mb-1">{t.scrollHint}</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1 group-hover:border-[#145BFF] transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-[#145BFF] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
