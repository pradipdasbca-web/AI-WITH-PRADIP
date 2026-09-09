import { OfferConfig } from '../types';

/**
 * Configure your limited-time promotional offer here.
 * Set `expiryDate` in ISO format (YYYY-MM-DDTHH:MM:SS).
 * The timer calculates the exact remaining time from the client's clock.
 * If the date is past, the UI automatically displays "Offer Expired"
 * and updates the CTA to "Contact Me for Current Offers".
 */
export const offerConfig: OfferConfig = {
  active: true,
  // 14 days from now (editable)
  expiryDate: "2026-09-24T23:59:59",
  highlightBadge: {
    en: "Exclusive Founder's Growth Package",
    bn: "এক্সক্লুসিভ ফাউন্ডারস গ্রোথ প্যাকেজ"
  },
  title: {
    en: "Professional Poster Design + Social Media Creative Strategy",
    bn: "প্রফেশনাল পোস্টার ডিজাইন + সোশ্যাল মিডিয়া ক্রিয়েটিভ স্ট্র্যাটেজি"
  },
  subtitle: {
    en: "A complete visual kickstart designed to elevate your brand's digital presence, stop the scroll, and turn casual viewers into loyal clients.",
    bn: "আপনার ব্র্যান্ডের সোশ্যাল মিডিয়া রূপান্তর, নজরকাড়া ভিজ্যুয়াল উপস্থিতি এবং ক্লায়েন্ট আকৃষ্ট করার জন্য একটি সমন্বিত প্রিমিয়াম প্যাকেজ।"
  },
  packageItems: {
    en: [
      "3 High-Conversion Promotional Ad Posters (Print & Digital Ready)",
      "30-Day Content Roadmap & Hook Angle Framework",
      "Custom Brand Typography & Color Palette Polish",
      "1-on-1 Strategy Kickoff & Campaign Audit Call (45 Mins)",
      "Full Source Files (PSD/Figma) & Commercial Usage License"
    ],
    bn: [
      "৩টি হাই-কনভার্টিং বিজ্ঞাপন পোস্টার (ডিজিটাল ও প্রিন্ট রেডি)",
      "৩০ দিনের সোশ্যাল মিডিয়া কন্টেন্ট রোডম্যাপ ও হুক স্ট্র্যাটেজি",
      "ব্র্যান্ড টাইপোগ্রাফি ও কালার প্যালেট রিফাইনমেন্ট",
      "৪৫ মিনিটের ওয়ান-অন-ওয়ান গ্রোথ স্ট্র্যাটেজি কনসালটেশন",
      "সম্পূর্ণ সোর্স ফাইল এবং কমার্শিয়াল ব্যবহারের লাইসেন্স"
    ]
  },
  pricingNote: {
    en: "Special launch pricing for the first 5 clients this month. Direct access to Pradip Das.",
    bn: "চলতি মাসে প্রথম ৫ জন ক্লায়েন্টের জন্য বিশেষ লঞ্চ অফার। সরাসরি প্রদীপ দাসের সাথে কাজ করার সুযোগ।"
  },
  ctaText: {
    en: "Claim This Offer on WhatsApp",
    bn: "হোয়াটসঅ্যাপে অফারটি গ্রহণ করুন"
  }
};
