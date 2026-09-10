import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PradipPortrait } from './PradipPortrait';
import AnoAI from './ui/animated-shader-background';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#050B18] overflow-hidden text-white"
    >
      {/* Animated Three.js Aurora Shader Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-90 overflow-hidden">
        <AnoAI className="w-full h-full absolute inset-0" />
      </div>

      {/* Subtle overlay gradient to ensure high readability and contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B18]/60 via-[#070F22]/40 to-[#050B18]/85 pointer-events-none z-[1]" />

      {/* Subtle radial lights for depth */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
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

          {/* RIGHT SIDE: Authoritative Positioning, Editorial Headline */}
          <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col items-start space-y-6 lg:pl-6">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md">
                {t.headlineLead}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 block sm:inline">
                  {t.headlineHighlight}
                </span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg sm:text-xl font-semibold text-slate-200 leading-snug pt-1 drop-shadow-xs">
                {t.subheadline}
              </p>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.intro}
            </p>

            {/* Secondary Small Text / Key Focus Pillars */}
            <div className="pt-4 border-t border-white/15 w-full">
              <p className="text-xs uppercase font-bold tracking-wider text-cyan-300/80 mb-2">
                Core Specializations:
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-6">
                {t.keyPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
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
            className="flex flex-col items-center text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors group"
            aria-label="Scroll to stats"
          >
            <span className="mb-1">{t.scrollHint}</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-500/60 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

