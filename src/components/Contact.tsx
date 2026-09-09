import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, Send, Check, Copy, Sparkles, User, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { siteConfig } from '../data/siteConfig';
import { translations } from '../data/translations';
import { servicesData } from '../data/services';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = translations[currentLang].contact;
  const { founder, contact } = siteConfig;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = currentLang === 'en' ? 'Please enter your name' : 'অনুগ্রহ করে আপনার নাম লিখুন';
    }
    if (!formData.email.trim()) {
      errs.email = currentLang === 'en' ? 'Please enter your email' : 'অনুগ্রহ করে আপনার ইমেইল লিখুন';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = currentLang === 'en' ? 'Valid email required' : 'সঠিক ইমেইল ফরম্যাট আবশ্যক';
    }
    if (!formData.phone.trim()) {
      errs.phone = currentLang === 'en' ? 'Phone or WhatsApp number required' : 'ফোন বা হোয়াটসঅ্যাপ নম্বর আবশ্যক';
    }
    if (!formData.serviceNeeded) {
      errs.serviceNeeded = currentLang === 'en' ? 'Please select a service' : 'অনুগ্রহ করে একটি সেবা নির্বাচন করুন';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = currentLang === 'en' ? 'Message must be at least 10 characters' : 'বার্তাটিতে অন্তত ১০টি অক্ষর লিখুন';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);

    // Format WhatsApp message with user's brief
    const waText = `*New Project Inquiry via AI With Pradip*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.serviceNeeded)}%0A*Brief:* ${encodeURIComponent(formData.message)}`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/917319195933?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#145BFF] bg-blue-50 px-3 py-1 rounded-md">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Founder Credentials & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0B1B3A] text-white shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#145BFF]/30 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  {siteConfig.brandName}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {founder.name[currentLang]}
                </h3>
                <p className="text-sm text-slate-300 mt-0.5 font-medium">
                  {founder.role[currentLang]}
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* WhatsApp */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        {t.whatsappLabel}
                      </p>
                      <a
                        href={contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {contact.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("7319195933", "wa")}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                    title="Copy WhatsApp"
                  >
                    {copiedField === 'wa' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        {t.emailLabel}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.email, "email")}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-slate-500/20 text-slate-300 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      Location
                    </p>
                    <p className="text-xs text-slate-200">
                      {founder.location[currentLang]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Professional Project Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
            <h3 className="text-2xl font-bold text-[#0B1B3A] mb-2">
              {t.formTitle}
            </h3>
            <p className="text-sm text-slate-500 mb-8">
              {currentLang === 'en'
                ? 'Fill in your project specs below. Your submission instantly pre-fills your WhatsApp chat or email draft.'
                : 'আপনার প্রজেক্টের প্রাথমিক তথ্য প্রদান করুন। সরাসরি হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ সম্পন্ন হবে।'}
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#145BFF] transition-all ${
                      errors.name ? 'border-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.emailInputLabel} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#145BFF] transition-all ${
                      errors.email ? 'border-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#145BFF] transition-all ${
                      errors.phone ? 'border-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Service Needed Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.serviceLabel} *
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#145BFF] transition-all ${
                      errors.serviceNeeded ? 'border-red-400' : 'border-slate-300'
                    }`}
                  >
                    <option value="">{t.serviceSelectPlaceholder}</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title.en}>
                        {s.title[currentLang]}
                      </option>
                    ))}
                    <option value="Custom Creative Consultation">
                      {currentLang === 'en' ? 'Custom Creative Consultation' : 'কাস্টম ক্রিয়েটিভ কনসালটেশন'}
                    </option>
                  </select>
                  {errors.serviceNeeded && (
                    <p className="text-xs text-red-500 mt-1">{errors.serviceNeeded}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t.messageLabel} *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    currentLang === 'en'
                      ? 'Tell me about your product, timeline, and goals...'
                      : 'আপনার ব্র্যান্ড, লক্ষ্য এবং সময়সীমা সম্পর্কে সংক্ষেপে জানান...'
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#145BFF] transition-all resize-none ${
                    errors.message ? 'border-red-400' : 'border-slate-300'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#145BFF] hover:bg-[#0A47DC] text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{t.btnSubmit}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
