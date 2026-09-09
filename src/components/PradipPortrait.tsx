import React, { useState } from 'react';

import { siteConfig } from '../data/siteConfig';

interface PradipPortraitProps {
  className?: string;
  size?: 'hero' | 'about' | 'compact';
  badgeText?: string;
  imageUrl?: string;
}

export const PradipPortrait: React.FC<PradipPortraitProps> = ({
  className = '',
  size = 'hero',
  badgeText,
  imageUrl = siteConfig.founder.image
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative select-none ${className}`}>
      {/* Background Graphic Accents: Concentric Electric Blue Rings & Dot Grid from the reference */}
      <div className="absolute -top-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-[#145BFF]/30 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute -top-12 -right-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#2563EB]/20 pointer-events-none -z-10" />

      {/* Dot matrix pattern matching reference */}
      <div 
        className="absolute top-2 right-2 w-32 h-32 opacity-25 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#145BFF 1.5px, transparent 1.5px)',
          backgroundSize: '10px 10px'
        }}
      />

      {/* Main Portrait Card / Frame */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0B1B3A] via-[#07132B] to-[#040A18] border border-[#1E3A8A]/40 shadow-2xl shadow-[#0B1B3A]/30">
        {!imageError ? (
          <div className="relative overflow-hidden">
            <img
              src={imageUrl}
              alt="Pradip Das - Creative Director & Founder of AI With Pradip"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover object-top aspect-[4/5] max-h-[620px] transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        ) : (
          /* High-Fidelity SVG Portrait & Stage Graphic matching the reference photo */
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] flex flex-col items-center justify-end overflow-hidden bg-gradient-to-br from-[#0B1B3A] via-[#0A1628] to-[#050B14]">
            {/* Stage Lighting & Blue Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#145BFF_0%,transparent_60%)] opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0284C7_0%,transparent_50%)] opacity-20" />

            {/* Concentric curved rings in upper right just like uploaded reference */}
            <svg className="absolute -top-10 -right-10 w-72 h-72 pointer-events-none opacity-60" viewBox="0 0 200 200">
              <circle cx="160" cy="40" r="100" fill="none" stroke="#145BFF" strokeWidth="2.5" />
              <circle cx="160" cy="40" r="80" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="160" cy="40" r="60" fill="none" stroke="#38BDF8" strokeWidth="1" />
              {/* Dot grid */}
              <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#60A5FA" opacity="0.6" />
              </pattern>
              <rect x="70" y="0" width="90" height="90" fill="url(#dot-grid)" />
            </svg>

            {/* Stylized Executive Portrait Illustration corresponding strictly to the photo */}
            <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
              <svg viewBox="0 0 400 480" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="50%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#BAE6FD" />
                    <stop offset="100%" stopColor="#7DD3FC" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D98A5B" />
                    <stop offset="100%" stopColor="#B4663B" />
                  </linearGradient>
                </defs>

                {/* Suit Shoulders & Jacket */}
                <path d="M 60 480 C 80 340 140 310 200 310 C 260 310 320 340 340 480 Z" fill="url(#suitGrad)" />
                {/* Lapel details */}
                <path d="M 140 310 L 175 420 L 195 480 L 140 480 Z" fill="#0B1320" />
                <path d="M 260 310 L 225 420 L 205 480 L 260 480 Z" fill="#0B1320" />
                
                {/* Light Blue Collared Shirt */}
                <path d="M 170 280 L 200 350 L 230 280 L 200 270 Z" fill="url(#shirtGrad)" />
                <path d="M 160 270 L 190 295 L 180 320 Z" fill="#E0F2FE" />
                <path d="M 240 270 L 210 295 L 220 320 Z" fill="#E0F2FE" />

                {/* Neck */}
                <rect x="180" y="235" width="40" height="50" rx="6" fill="url(#skinGrad)" />

                {/* Face & Head */}
                <ellipse cx="200" cy="185" rx="55" ry="68" fill="url(#skinGrad)" />

                {/* Groomed Hair */}
                <path d="M 145 180 C 145 110 180 100 215 105 C 245 110 258 135 258 180 C 250 150 225 140 195 140 C 165 140 150 155 145 180 Z" fill="#0F172A" />

                {/* Full Groomed Beard & Mustache matching photo */}
                <path d="M 152 180 C 150 240 170 265 200 265 C 230 265 250 240 248 180 C 242 195 230 205 200 205 C 170 205 158 195 152 180 Z" fill="#0F172A" />
                <path d="M 180 205 Q 200 215 220 205 Q 200 220 180 205 Z" fill="#020617" />

                {/* Black Framed Glasses matching photo */}
                <rect x="160" y="165" width="34" height="24" rx="5" fill="none" stroke="#0F172A" strokeWidth="4" />
                <rect x="206" y="165" width="34" height="24" rx="5" fill="none" stroke="#0F172A" strokeWidth="4" />
                <line x1="194" y1="175" x2="206" y2="175" stroke="#0F172A" strokeWidth="4" />
                <line x1="150" y1="172" x2="160" y2="175" stroke="#0F172A" strokeWidth="3" />
                <line x1="240" y1="175" x2="250" y2="172" stroke="#0F172A" strokeWidth="3" />

                {/* Eyes behind glasses */}
                <circle cx="177" cy="177" r="3.5" fill="#1E293B" />
                <circle cx="223" cy="177" r="3.5" fill="#1E293B" />
                {/* Catchlight */}
                <circle cx="178" cy="176" r="1.2" fill="#FFFFFF" />
                <circle cx="224" cy="176" r="1.2" fill="#FFFFFF" />

                {/* Handheld Stage Microphone held in front as in photo */}
                <g transform="translate(200, 360)">
                  {/* Mic Grille */}
                  <rect x="-14" y="-70" width="28" height="38" rx="14" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="-12" y1="-51" x2="12" y2="-51" stroke="#94A3B8" strokeWidth="1" />
                  {/* Mic Handle */}
                  <rect x="-9" y="-32" width="18" height="60" rx="3" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
                  <rect x="-7" y="-20" width="14" height="8" fill="#1E293B" />
                  {/* Hand holding mic */}
                  <ellipse cx="-4" cy="0" rx="18" ry="14" fill="url(#skinGrad)" />
                  <circle cx="-16" cy="-6" r="6" fill="#D98A5B" />
                </g>

                {/* Gesturing Hand on Right side as in photo */}
                <g transform="translate(295, 330) rotate(-15)">
                  <ellipse cx="0" cy="0" rx="14" ry="20" fill="url(#skinGrad)" />
                  <path d="M -8 -15 Q 0 -35 8 -30 Q 14 -15 6 0 Z" fill="#D98A5B" />
                  <path d="M 0 -15 Q 12 -38 20 -28 Q 18 -10 10 5 Z" fill="#D98A5B" />
                  <path d="M 8 -10 Q 24 -28 28 -20 Q 22 2 12 12 Z" fill="#D98A5B" />
                </g>
              </svg>

              {/* Stage identification strip */}
              <div className="w-full text-center pb-4 pt-1 px-4 bg-gradient-to-t from-[#020617] to-transparent">
                <p className="text-white text-sm font-semibold tracking-wide">Pradip Das</p>
                <p className="text-blue-400 text-xs tracking-wider uppercase">Founder, AI With Pradip</p>
              </div>
            </div>
          </div>
        )}

        {/* Ambient Bottom Gradient to blend seamlessly */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1B3A] via-[#0B1B3A]/60 to-transparent pointer-events-none" />

        {/* Floating Credibility Pill */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-[#0B1B3A]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white shadow-lg">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium tracking-wide">
              {badgeText || "Available for Commercial Projects"}
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-blue-300 text-[11px] uppercase tracking-wider">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
};
