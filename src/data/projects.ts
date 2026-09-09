import { ProjectItem, VideoShowcaseItem } from '../types';

export const portfolioCategories = [
  'All',
  'Commercial Videos',
  'Poster Design',
  'Branding',
  'Social Media',
  'Marketing'
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: {
      en: "Luxury Architectural Living Campaign",
      bn: "লাক্সারি আর্কিটেকচারাল লিভিং ক্যাম্পেইন"
    },
    category: "Commercial Videos",
    categoryLabel: {
      en: "Commercial Video",
      bn: "কমার্শিয়াল ভিডিও"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: {
      en: "Cinematic commercial video highlighting modern interior aesthetics, fluid camera moves, and tailored soundscapes for a boutique real estate development.",
      bn: "আধুনিক আর্কিটেকচার এবং ইন্টেরিয়র ডিজাইনের ওপর নির্মিত একটি সিনেমাটিক কমার্শিয়াল প্রজেক্ট।"
    },
    deliverables: ["4K Commercial Master", "Instagram Reels Cutdowns", "Original Audio Scoring"],
    clientOrBrand: "Urban Living Spaces",
    featured: true
  },
  {
    id: "proj-2",
    title: {
      en: "Tech Summit & AI Keynote Poster Series",
      bn: "টেক সামিট এবং এআই কীনোট পোস্টার সিরিজ"
    },
    category: "Poster Design",
    categoryLabel: {
      en: "Poster Design",
      bn: "পোস্টার ডিজাইন"
    },
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1200&auto=format&fit=crop",
    description: {
      en: "High-impact typographic event posters designed for a national technology symposium, balancing futuristic visual accents with corporate readability.",
      bn: "জাতীয় প্রযুক্তি সম্মেলনের জন্য তৈরি নজরকাড়া টাইপোগ্রাফিক পোস্টার এবং প্রিন্ট ক্রিয়েটিভ সিরিজ।"
    },
    deliverables: ["Exhibition Standee", "A1 Poster Suite", "Social Media Announcements"],
    clientOrBrand: "Global Tech Forum",
    featured: true
  },
  {
    id: "proj-3",
    title: {
      en: "Aura Skincare Visual Identity & Packaging",
      bn: "অরা স্কিনকেয়ার ব্র্যান্ড আইডেন্টিটি এবং প্যাকেজিং"
    },
    category: "Branding",
    categoryLabel: {
      en: "Branding",
      bn: "ব্র্যান্ডিং"
    },
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    description: {
      en: "Complete brand architecture, custom wordmark, eco-minimalist color scheme, and container mockups for an organic dermal wellness line.",
      bn: "অর্গানিক স্কিনকেয়ার ব্র্যান্ডের জন্য লোগো, কালার সিস্টেম এবং প্রিমিয়াম প্যাকেজিং ডিজাইন।"
    },
    deliverables: ["Brand Style Manual", "Custom Typography", "Eco-friendly Box Packaging"],
    clientOrBrand: "Aura Botanical Wellness",
    featured: true
  },
  {
    id: "proj-4",
    title: {
      en: "Fintech App Social Launch & Carousels",
      bn: "ফিনটেক অ্যাপ সোশ্যাল লঞ্চ ও ক্যারোজেল ক্যাম্পেইন"
    },
    category: "Social Media",
    categoryLabel: {
      en: "Social Media",
      bn: "সোশ্যাল মিডিয়া"
    },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    description: {
      en: "Multi-slide educational carousels and animated reels explaining micro-investing, achieving 3.4x average engagement versus industry benchmarks.",
      bn: "মাইক্রো-ইনভেস্টিং সহজবোধ্য করার জন্য তৈরি শিক্ষামূলক সোশ্যাল ক্যারোজেল এবং গ্রোথ ক্যাম্পেইন।"
    },
    deliverables: ["12-Slide Explainer Carousels", "Short-Form Motion Teasers", "Ad Banner Kit"],
    clientOrBrand: "VestWise Digital",
    featured: false
  },
  {
    id: "proj-5",
    title: {
      en: "Performance Ad Campaign for E-commerce Apparel",
      bn: "ই-কমার্স ফ্যাশন ব্র্যান্ডের পারফরম্যান্স অ্যাড ক্যাম্পেইন"
    },
    category: "Marketing",
    categoryLabel: {
      en: "Marketing",
      bn: "মার্কেটিং"
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    description: {
      en: "Audience-targeted Meta ad creative matrix testing dynamic hook angles, product showcase cutdowns, and seasonal promotional landing visuals.",
      bn: "টার্গেটেড মেটা অ্যাড ক্রিয়েটিভ ও ফানেল ডিজাইন যা বিক্রয় বৃদ্ধি এবং কাস্টমার অ্যাকুইজিশনে ভূমিকা রেখেছে।"
    },
    deliverables: ["A/B Testing Creative Suite", "Dynamic Feed Ads", "Weekly Performance Audit"],
    clientOrBrand: "Threadline Co.",
    featured: false
  },
  {
    id: "proj-6",
    title: {
      en: "SaaS Product Demo & Commercial Teaser",
      bn: "এসএএএস প্ল্যাটফর্ম প্রোডাক্ট ডেমো ও কমার্শিয়াল টিজার"
    },
    category: "Commercial Videos",
    categoryLabel: {
      en: "Commercial Video",
      bn: "কমার্শিয়াল ভিডিও"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: {
      en: "High-energy commercial video explaining cloud collaboration workflows with smooth UI animations and synchronized electronic beats.",
      bn: "ক্লাউড টিম কোলাবোরেশন সফটওয়্যারের কার্যকারিতা তুলে ধরার জন্য তৈরি দ্রুতগতির ডায়নামিক ভিডিও।"
    },
    deliverables: ["60s Master Commercial", "30s YouTube Pre-Roll", "Vertical TikTok/Reel Ad"],
    clientOrBrand: "SyncFlow Cloud",
    featured: true
  }
];

export const videoShowcaseData: VideoShowcaseItem[] = [
  {
    id: "vid-1",
    title: {
      en: "Cinematic Product Narrative: Quantum Acoustics",
      bn: "সিনেমাটিক প্রোডাক্ট ন্যারেটিভ: কোয়ান্টাম অ্যাকোস্টিকস"
    },
    subtitle: {
      en: "Commercial Brand Video",
      bn: "কমার্শিয়াল ব্র্যান্ড ভিডিও"
    },
    thumbnail: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    duration: "01:24",
    category: "Commercial Video",
    description: {
      en: "An artistic study combining 3D audio-visual synchrony, atmospheric lighting, and high-energy pacing designed to sell premium wireless headphones.",
      bn: "উচ্চমানের ওয়্যারলেস হেডফোনের অনন্য সাউন্ড কোয়ালিটি ও প্রিমিয়াম ডিজাইন তুলে ধরার বাণিজ্যিক প্রযোজনা।"
    }
  },
  {
    id: "vid-2",
    title: {
      en: "Corporate Vision: Transforming Next-Gen Workspaces",
      bn: "কর্পোরেট ভিশন: আধুনিক কর্মক্ষেত্রের রূপান্তর"
    },
    subtitle: {
      en: "Brand Story & Manifesto",
      bn: "ব্র্যান্ড স্টোরি এবং ম্যানিফেস্টো"
    },
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    duration: "02:10",
    category: "Brand Story",
    description: {
      en: "A compelling corporate documentary showcasing how forward-thinking architectural teams create sustainable, human-centric working environments.",
      bn: "ভবিষ্যতমুখী কর্পোরেট আর্কিটেকচার এবং টেকসই অফিস স্পেসের ভাবনা নিয়ে তৈরি ভিজ্যুয়াল ডকু-ভিডিও।"
    }
  },
  {
    id: "vid-3",
    title: {
      en: "Fast-Paced Social Motion: Smart Beverage Launch",
      bn: "ফাস্ট-পেসড সোশ্যাল মোশন: স্মার্ট বেভারেজ লঞ্চ"
    },
    subtitle: {
      en: "Performance Social Reel",
      bn: "পারফরম্যান্স সোশ্যাল রিল"
    },
    thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    duration: "00:45",
    category: "Social Campaign",
    description: {
      en: "Punchy color transitions, bold typography animations, and viral audio cues crafted for an energy drink brand's TikTok & Instagram blitz.",
      bn: "তরুণ প্রজন্মের মাঝে সাড়া ফেলতে আকর্ষণীয় কালার, দ্রুত কাট এবং ট্রেন্ডি মিউজিকের সমন্বয়ে সোশ্যাল ক্যাম্পেইন।"
    }
  }
];
