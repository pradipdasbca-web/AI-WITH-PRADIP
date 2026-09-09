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
    { label: t.videos, href: '#videos' },
    { label: t.brands, href: '#brands' },
    { label: t.experience, href: '#experience' },
    { label: t.insights, href: '#insights' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5 border-b border-transparent'
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
                className="h-10 w-auto max-h-10 object-contain rounded-lg shadow-xs transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="w-9 h-9 rounded-xl bg-[#0B1B3A] flex items-center justify-center text-white font-bold text-base shadow-md group-hover:bg-[#145BFF] transition-colors">
                <span className="tracking-tight">AP</span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#0B1B3A] group-hover:text-[#145BFF] transition-colors leading-none">
                AI With Pradip
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1">
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
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-[#145BFF] hover:bg-blue-50/60 transition-colors"
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
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:text-[#145BFF] transition-all shadow-xs"
              title={currentLang === 'en' ? 'বাংলায় দেখুন' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#145BFF] hover:bg-[#0A47DC] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>{t.letsTalk}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger & Lang Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="p-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700"
              aria-label="Toggle language"
            >
              {currentLang === 'en' ? 'বাংলা' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-[#145BFF]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2.5">
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
