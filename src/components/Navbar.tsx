import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.services, href: '#services' },
    { label: t.portfolio, href: '#portfolio' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rgb-border-bottom ${
        isScrolled
          ? 'bg-[#040814]/95 backdrop-blur-xl shadow-2xl py-3.5'
          : 'bg-[#060D1E]/90 backdrop-blur-md shadow-lg py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a
            href="#home"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="AI With Pradip Home"
          >
            {siteConfig.logoUrl ? (
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.brandName}
                referrerPolicy="no-referrer"
                className="h-11 sm:h-12 w-auto max-h-12 object-contain rounded-lg shadow-xs transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 font-bold text-base shadow-md group-hover:bg-blue-600/40 transition-colors">
                <span className="tracking-tight">AP</span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-none drop-shadow-xs">
                AI With Pradip
              </span>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 tracking-wider uppercase mt-1">
                by Pradip Das
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Let's Talk CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Bilingual Toggle: EN / বাংলা */}
            <button
              onClick={onToggleLang}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/20 hover:border-cyan-400/50 bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all shadow-xs backdrop-blur-sm"
              title={currentLang === 'en' ? 'বাংলায় দেখুন' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-[#145BFF] to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold shadow-md shadow-blue-500/30 transition-all active:scale-95"
            >
              <span>{t.letsTalk}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger & Lang Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="p-2 rounded-lg border border-white/20 bg-white/10 text-xs font-bold text-slate-200"
              aria-label="Toggle language"
            >
              {currentLang === 'en' ? 'বাংলা' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/15 bg-[#060D1E]/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/15 flex flex-col space-y-2.5">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({siteConfig.contact.whatsappFormatted})</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#145BFF] hover:bg-[#0A47DC] text-white font-medium text-sm shadow-xs"
              >
                <span>{t.letsTalk}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
