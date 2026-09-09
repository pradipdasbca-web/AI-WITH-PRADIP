export type Language = 'en' | 'bn';

export interface SiteConfig {
  brandName: string;
  logoUrl?: string;
  brandTagline: {
    en: string;
    bn: string;
  };
  founder: {
    name: {
      en: string;
      bn: string;
    };
    role: {
      en: string;
      bn: string;
    };
    bioShort: {
      en: string;
      bn: string;
    };
    bioFull: {
      en: string;
      bn: string;
    };
    location: {
      en: string;
      bn: string;
    };
    specialization: {
      en: string;
      bn: string;
    };
    image: string;
    secondaryImage?: string;
  };
  contact: {
    whatsapp: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    email: string;
    phone: string;
  };
  stats: {
    experienceYears: string;
    projectsCompleted: string;
    brandsWorkedWith: string;
    creativeCampaigns: string;
    satisfactionRate: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    en: string;
    bn: string;
  };
  shortDescription: {
    en: string;
    bn: string;
  };
  fullDescription: {
    en: string;
    bn: string;
  };
  deliverables: {
    en: string[];
    bn: string[];
  };
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  category: 'Commercial Videos' | 'Poster Design' | 'Branding' | 'Social Media' | 'Marketing';
  categoryLabel: {
    en: string;
    bn: string;
  };
  image: string;
  videoUrl?: string;
  description: {
    en: string;
    bn: string;
  };
  deliverables?: string[];
  clientOrBrand?: string;
  featured?: boolean;
}

export interface VideoShowcaseItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  thumbnail: string;
  videoUrl?: string; // YouTube/Vimeo embed or MP4
  duration: string;
  category: string;
  description: {
    en: string;
    bn: string;
  };
}

export interface BrandClientItem {
  id: string;
  name: string;
  industry: string;
  logoText: string;
  accentColor?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  highlight?: boolean;
}

export interface ImpactItem {
  id: string;
  iconName: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  companyOrBrand: string;
  role: string;
  feedback: {
    en: string;
    bn: string;
  };
  rating: number;
}

export interface OfferConfig {
  active: boolean;
  expiryDate: string; // ISO format e.g. "2026-10-31T23:59:59"
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  packageItems: {
    en: string[];
    bn: string[];
  };
  highlightBadge: {
    en: string;
    bn: string;
  };
  pricingNote: {
    en: string;
    bn: string;
  };
  ctaText: {
    en: string;
    bn: string;
  };
}

export interface InsightPost {
  id: string;
  category: string;
  title: {
    en: string;
    bn: string;
  };
  excerpt: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  readTime: string;
}
