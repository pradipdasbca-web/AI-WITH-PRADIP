import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, CheckCircle2, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { offerConfig } from '../data/offer';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface OfferProps {
  currentLang: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const Offer: React.FC<OfferProps> = ({ currentLang }) => {
  const t = translations[currentLang].offer;

  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(offerConfig.expiryDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (isNaN(target) || difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format double digits
  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="offer" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.subheading}
          </p>
        </div>

        {/* High-Conversion Main Offer Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1B3A] via-[#0E2246] to-[#08152E] text-white p-8 sm:p-12 border border-[#1E3A8A]/60 shadow-2xl overflow-hidden">
          {/* Subtle background curved glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#145BFF]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Offer Details Left/Main */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-900/60 border border-blue-700/50 px-3.5 py-1 rounded-full">
                <span>{offerConfig.highlightBadge[currentLang]}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {offerConfig.title[currentLang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {offerConfig.subtitle[currentLang]}
              </p>

              {/* Package Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                {offerConfig.packageItems[currentLang].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#145BFF] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/40 text-xs text-blue-200 leading-relaxed">
                {offerConfig.pricingNote[currentLang]}
              </div>
            </div>

            {/* Countdown Box & Conversion Action (Right) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-[#071328]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 text-center space-y-6">
                <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{timeLeft.isExpired ? t.expiredTitle : t.endsIn}</span>
                </div>

                {!timeLeft.isExpired ? (
                  /* Live Real Countdown Display */
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    <div className="bg-[#0B1B3A] rounded-xl p-3 border border-white/5 flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                        {formatNum(timeLeft.days)}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold mt-1">
                        {t.days}
                      </span>
                    </div>

                    <div className="bg-[#0B1B3A] rounded-xl p-3 border border-white/5 flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                        {formatNum(timeLeft.hours)}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold mt-1">
                        {t.hours}
                      </span>
                    </div>

                    <div className="bg-[#0B1B3A] rounded-xl p-3 border border-white/5 flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                        {formatNum(timeLeft.minutes)}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold mt-1">
                        {t.minutes}
                      </span>
                    </div>

                    <div className="bg-[#0B1B3A] rounded-xl p-3 border border-white/5 flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-blue-400 animate-pulse">
                        {formatNum(timeLeft.seconds)}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold mt-1">
                        {t.seconds}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Expired State UI */
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/40 text-center space-y-2">
                    <div className="flex items-center justify-center space-x-1.5 text-amber-400 text-sm font-bold">
                      <AlertCircle className="w-4 h-4" />
                      <span>{t.expiredTitle}</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      {t.expiredText}
                    </p>
                  </div>
                )}

                {/* Primary Offer CTA Button */}
                {!timeLeft.isExpired ? (
                  <a
                    href={`https://wa.me/917319195933?text=${encodeURIComponent(
                      `Hi Pradip, I want to claim the Limited-Time Creative Offer (Poster Design + Strategy) for my brand!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-xl bg-[#145BFF] hover:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.claimCta}</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0B1B3A] font-bold text-sm sm:text-base transition-all"
                  >
                    <span>{t.expiredCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <p className="text-[11px] text-slate-400 text-center">
                  Direct WhatsApp verification with Pradip Das • No obligations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
