import React from 'react';
import { ArrowUp, Mail, MessageSquare, Globe, Heart } from 'lucide-react';
import { Language } from '../types';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang].footer;
  const { founder, contact } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071328] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center space-x-3">
              {siteConfig.logoUrl ? (
                <img
                  src={siteConfig.logoUrl}
                  alt={siteConfig.brandName}
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto max-h-10 object-contain rounded-lg shadow-sm"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-[#145BFF] flex items-center justify-center text-white font-bold text-base shadow-md">
                  <span>AP</span>
                </div>
              )}
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  {siteConfig.brandName}
                </span>
                <span className="text-[11px] font-medium text-slate-400 block tracking-wider uppercase">
                  by {founder.name[currentLang]}
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {t.tagline}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for Client Inquiries</span>
              </span>
              <span>•</span>
              <span>Kolkata / Global Remote</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400">
              {t.servicesHeading}
            </h4>
            <ul className="space-y-2">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {service.title[currentLang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400">
              {t.quickLinksHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Pradip</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Featured Work</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">Video Showcase</a></li>
              <li><a href="#brands" className="hover:text-white transition-colors">Client Brands</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Marketing Insights</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Work With Me</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400">
              {t.contactHeading}
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-semibold text-white">Pradip Das</p>
              <p>
                WhatsApp:{' '}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  {contact.whatsappFormatted}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-300 hover:underline break-all"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-slate-400 pt-1">
                Response time: Within 2-4 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            {t.copyright}
          </p>

          <div className="flex items-center space-x-4">
            <a href="#home" className="hover:text-white transition-colors">
              Terms & Privacy
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
