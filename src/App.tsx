import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { Language } from './types';
import { siteConfig } from './data/siteConfig';

// Subcomponents
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { VideoShowcase } from './components/VideoShowcase';
import { Brands } from './components/Brands';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { Insights } from './components/Insights';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved === 'bn' ? 'bn' : 'en') as Language;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('app_lang', currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen bg-white text-slate-900 selection:bg-[#145BFF] selection:text-white ${
        currentLang === 'bn' ? 'font-bengali' : 'font-sans'
      }`}
    >
      {/* Sticky Navigation Bar */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Page Sections */}
      <main>
        {/* Section 01: Hero with Pradip's Stage Visual & Asymmetric Layout */}
        <Hero currentLang={currentLang} />

        {/* Section 02: Quick Stats / Credibility */}
        <Stats currentLang={currentLang} />

        {/* Section 03: About Pradip (Human-Crafted Story & Credentials) */}
        <About currentLang={currentLang} />

        {/* Section 04: Services (AI Videos, Poster Design, Digital Marketing, etc.) */}
        <Services currentLang={currentLang} />

        {/* Section 05: Featured Work / Portfolio with Filtering */}
        <Portfolio currentLang={currentLang} />

        {/* Section 06: Commercial Video Showcase */}
        <VideoShowcase currentLang={currentLang} />

        {/* Section 07: Client Brands & Partner Logo Wall */}
        <Brands currentLang={currentLang} />

        {/* Section 08 & 09: Experience Timeline & Business Impact */}
        <Experience currentLang={currentLang} />

        {/* Section 10: Client Testimonials */}
        <Testimonials currentLang={currentLang} />

        {/* Section 11: High-Conversion Special Offer with Real-Time Countdown */}
        <Offer currentLang={currentLang} />

        {/* Section 12: Digital Marketing Insights Blog */}
        <Insights currentLang={currentLang} />

        {/* Section 13: High-Impact Direct CTA */}
        <CtaSection currentLang={currentLang} />

        {/* Section 14: Contact with Validated Inquiry Form */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Section 15: Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-slate-700 hover:text-[#145BFF] border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Quick Connect Pill */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
          title="Direct WhatsApp: 7319195933"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide hidden sm:inline-block">
            {currentLang === 'en' ? 'Chat on WhatsApp' : 'হোয়াটসঅ্যাপে কথা বলুন'}
          </span>
        </a>
      </div>
    </div>
  );
}
