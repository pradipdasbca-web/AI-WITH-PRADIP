import React, { useState } from 'react';
import { Play, X, Film, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { Language, VideoShowcaseItem } from '../types';
import { videoShowcaseData } from '../data/projects';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface VideoShowcaseProps {
  currentLang: Language;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ currentLang }) => {
  const t = translations[currentLang].videos;
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);

  return (
    <section id="videos" className="py-24 bg-[#0B1B3A] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#145BFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-md">
            <Film className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {t.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoShowcaseData.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0E2246] rounded-2xl overflow-hidden border border-white/10 hover:border-[#145BFF]/70 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container with Play Button */}
              <div
                onClick={() => setActiveVideo(item)}
                className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-[11px] font-mono text-white">
                  <Clock className="w-3 h-3 text-blue-400" />
                  <span>{item.duration}</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#145BFF] text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-blue-300 border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-blue-400 font-semibold tracking-wide block mb-1">
                    {item.subtitle[currentLang]}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1 mb-2">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {item.description[currentLang]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveVideo(item)}
                    className="text-xs font-bold text-blue-300 hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{t.watchVideo}</span>
                  </button>

                  <a
                    href={`https://wa.me/917319195933?text=${encodeURIComponent(
                      `Hi Pradip, I'd like to discuss a commercial video production for my brand.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0B1B3A] rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {activeVideo.category} • {activeVideo.duration}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeVideo.title[currentLang]}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Video Player with Cinematic Poster Preview */}
            <div className="aspect-[16/9] bg-black relative flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title[currentLang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

              <div className="relative z-10 text-center px-6 max-w-lg space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#145BFF]/90 text-white mx-auto flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  High-Definition Video Reel
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Full production reel and 4K commercial cutdowns are available on request or direct client presentation.
                </p>
                <a
                  href={`https://wa.me/917319195933?text=${encodeURIComponent(
                    `Hi Pradip, please share the full commercial video portfolio and sample reels.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#145BFF] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Full Reel on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Description footer */}
            <div className="p-5 bg-[#071328] text-xs sm:text-sm text-slate-300">
              {activeVideo.description[currentLang]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
