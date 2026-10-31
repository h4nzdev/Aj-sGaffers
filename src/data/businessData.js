/**
 * =========================================================================
 * AJ'S GAFFERS & ACCESSORIES — BUSINESS DATA CONFIGURATION
 * =========================================================================
 * 
 * Edit this file to update business details, contact information, owner profile,
 * story milestones, and visual gallery items without touching layout code.
 * 
 * NOTE ON CONTACT DETAILS & PLACEHOLDERS:
 * As per guidelines, do not fabricate unofficial details. Replace placeholders
 * (marked with [EDIT]) with your official information once available.
 */

import gaffHeroImg from '../assets/gaff-hero.jfif';
import businessStoryBoxImg from '../assets/business-story-box.png';
import personImg from '../assets/person.png';

export const BUSINESS_DATA = {
  // Brand & Identity
  brand: {
    name: "AJ's Gaffers & Accessories",
    shortName: "AJ's",
    subName: "Gaffers & Accessories",
    tagline: "Crafted Through Experience.",
    estYear: 2013,
    originCity: "Cebu City",
    originCountry: "Philippines",
    displayLocation: "Cebu City, Philippines",
    badge: "ESTABLISHED 2013 • CEBU, PH",
    metaTitle: "AJ's Gaffers & Accessories — Established 2013 | Cebu",
    metaDescription: "AJ's Gaffers & Accessories — A Cebu-based business established in 2013. Built on experience, rooted in Cebu. Discover specialized craftsmanship and accessories.",
  },

  // Contact Channels
  contact: {
    // Official Facebook Page (Primary channel for inquiries)
    facebook: {
      url: "https://www.facebook.com/", // [EDIT: Replace with your exact Facebook Page URL, e.g. https://www.facebook.com/AJsGaffersCebu]
      displayName: "AJ's Gaffers & Accessories Official",
      handle: "@AJsGaffers",
      messengerUrl: "https://m.me/", // [EDIT: Replace with your Facebook Messenger link]
    },
    // Direct Contact Details
    phone: "+63 9XX XXX XXXX", // [EDIT: Update with official mobile / inquiry phone number]
    secondaryPhone: "+63 (32) XXX XXXX", // [EDIT: Optional landline or secondary number]
    email: "contact@ajsgaffers.com", // [EDIT: Update with official email address]
    
    // Physical / Postal Presence
    address: {
      line1: "Cebu City", // [EDIT: Update with exact building / street address]
      province: "Cebu 6000",
      country: "Philippines",
      full: "Cebu City, Cebu, Philippines",
      note: "Visits & Consultations strictly by appointment",
    },

    // Hours of Operation
    operatingHours: [
      { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM PHT" },
      { days: "Saturday", hours: "10:00 AM – 4:00 PM PHT" },
      { days: "Sunday", hours: "By Advance Appointment" },
    ],

    // Service Areas
    serviceCoverage: "Cebu & Nationwide Shipping Across the Philippines",
  },

  // Chapter 01: Hero Intro
  hero: {
    badge: "ESTABLISHED 2013 • CEBU",
    mainHeadline: "CRAFTED THROUGH EXPERIENCE.",
    supportingText: "AJ's Gaffers & Accessories — A Cebu-based business established in 2013.",
    scrollPrompt: "SCROLL TO EXPLORE THE LEGACY",
    heroImage: gaffHeroImg,
    imageAlt: "Master-crafted gaff blade on vintage leather with anvil sparks at AJ's Gaffers atelier",
  },

  // Chapter 02: Business Story
  story: {
    chapterNumber: "01 / STORY",
    chapterTitle: "THE BUSINESS STORY",
    headline: "BUILT ON EXPERIENCE. ROOTED IN CEBU.",
    lead: "Since 2013, AJ's Gaffers & Accessories has stood for honest workmanship, technical refinement, and enduring relationships within the Cebu community.",
    narrative: [
      "Founded more than a decade ago in Cebu, the business emerged from a distinct dedication to craftsmanship, precision fitting, and authentic sporting heritage. Over the years, AJ's has earned the confidence of seasoned patrons who demand dependability and uncompromised standards.",
      "Every piece and accessory provided by AJ's is treated with rigorous attention to detail—from meticulous inspection to specialized accoutrements built for balance, longevity, and performance.",
    ],
    highlightQuote: "“We believe true quality is not born overnight. It is honed through repetitive discipline, respect for tradition, and continuous refinement.”",
    pillars: [
      {
        number: "01",
        title: "Decade of Discipline",
        description: "Operating continuously since 2013 with over 11 years of hands-on experience and specialized mastery.",
      },
      {
        number: "02",
        title: "Cebuano Heritage",
        description: "Proudly situated in Cebu, drawing from the island's celebrated tradition of artisan metalwork and blade craftsmanship.",
      },
      {
        number: "03",
        title: "Personalized Consultation",
        description: "Direct dialogue through our official channels ensures every inquiry receives thoughtful and bespoke recommendations.",
      },
      {
        number: "04",
        title: "Uncompromising Integrity",
        description: "Every item is selected, finished, and inspected to meet stringent criteria of durability, balance, and fine finish.",
      },
    ],
    storyImage1: businessStoryBoxImg, // Official AJ's Gaffer Box & Precision Tooling Kit
    storyImage2: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80", // Raw material & craftsmanship
  },

  // Chapter 03: Visual Gallery
  gallery: {
    chapterNumber: "02 / VISUAL ARCHIVE",
    chapterTitle: "THE VISUAL GALLERY",
    headline: "THE CRAFT IN FOCUS.",
    description: "An organized visual catalog showcasing precision craftsmanship, bespoke leather cases, fine sharpening whetstones, and specialized accoutrements.",
    categories: ["All Works", "Gaffing Accoutrements", "Leather Cases", "Maintenance & Care", "Atelier Details"],
    items: [
      {
        id: "item-1",
        title: "Bespoke Precision Gaff Series",
        category: "Gaffing Accoutrements",
        year: "2024 Edition",
        description: "Hand-finished edge geometry engineered with exact balance and mirror-polished surface finish.",
        image: "https://images.unsplash.com/photo-1589792905461-389f2a9910d6?auto=format&fit=crop&w=1200&q=80",
        aspect: "aspect-[4/5]",
        featured: true,
      },
      {
        id: "item-2",
        title: "Full-Grain Leather Roll Case",
        category: "Leather Cases",
        year: "Heritage Collection",
        description: "Hand-stitched vegetable-tanned leather carrier with custom compartments and brass hardware.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
        aspect: "aspect-[4/3]",
        featured: false,
      },
      {
        id: "item-3",
        title: "High-Grit Natural Whetstone",
        category: "Maintenance & Care",
        year: "Atelier Tooling",
        description: "Dense fine-grit natural sharpening stone selected for refining razor edges with micro-bevel consistency.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
        aspect: "aspect-[3/4]",
        featured: false,
      },
      {
        id: "item-4",
        title: "Master Calibration & Measurement Gauge",
        category: "Atelier Details",
        year: "Precision Gear",
        description: "Micrometer gauge and verification tools used to maintain tight tolerances across all components.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
        aspect: "aspect-[4/5]",
        featured: true,
      },
      {
        id: "item-5",
        title: "Heavy-Duty Cord & Binding Materials",
        category: "Gaffing Accoutrements",
        year: "Field Essentials",
        description: "Tensile-tested waxed cords and ergonomic wraps formulated for secure and slip-free attachment.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        aspect: "aspect-[4/3]",
        featured: false,
      },
      {
        id: "item-6",
        title: "The Cebu Workbench",
        category: "Atelier Details",
        year: "Est. 2013",
        description: "The dedicated workspace where every instrument is inspected, calibrated, and prepared for clients.",
        image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
        aspect: "aspect-[3/4]",
        featured: false,
      },
    ],
  },

  // Chapter 04: Meet the Owner
  owner: {
    chapterNumber: "03 / LEADERSHIP",
    chapterTitle: "MEET THE OWNER",
    headline: "BEHIND EVERY BUSINESS IS A STORY.",
    name: "Jho Magbal",
    role: "Founder & Master Craftsman",
    estYear: 2013,
    experienceLabel: "Over 11 Years of Dedicated Experience",
    bio: [
      "AJ's Gaffers & Accessories was established in 2013 in Cebu City with a straightforward philosophy: provide authentic, dependable products with uncompromising craftsmanship and genuine respect for the sporting fraternity.",
      "With over a decade of continuous presence in Cebu, Jho Magbal has personally honed every technique, hand-inspected each piece, and cultivated direct bonds of trust with clients across the Visayas and beyond.",
      "Rather than pursuing mass-produced commercial shortcuts, AJ's remains anchored in timeless craftsmanship—where personal reputation and the highest quality standards stand behind every product delivered.",
    ],
    philosophyQuote: "“In this discipline, there are no shortcuts. A fraction of a millimeter and a few degrees of balance make all the difference. We craft with honor because our name is attached to every single piece.”",
    portraitImage: personImg,
    signature: "Jho Magbal — Founder & Artisan",
    locationStamp: "CEBU CITY • EST. 2013",
  },

  // Chapter 05: Business Information
  businessInfo: {
    chapterNumber: "04 / DIRECTORY",
    chapterTitle: "BUSINESS INFORMATION",
    headline: "A CLEAR & VERIFIED IDENTITY.",
    description: "Organized operational facts and official credentials for clients, partners, and community members.",
    cards: [
      {
        id: "reg",
        label: "ESTABLISHMENT",
        primary: "2013",
        secondary: "Continuously operating in Cebu for over a decade",
        detail: "Registered & Verified Business Presence",
      },
      {
        id: "loc",
        label: "HEADQUARTERS",
        primary: "Cebu City, PH",
        secondary: "Visayan metropolitan hub with nationwide distribution",
        detail: "Visits by advance appointment",
      },
      {
        id: "focus",
        label: "PRIMARY SPECIALIZATION",
        primary: "Gaffing & Accessories",
        secondary: "Precision tools, sheaths, stone sharpening & supplies",
        detail: "Artisanal & custom specifications",
      },
      {
        id: "contact",
        label: "PRIMARY INQUIRY CHANNEL",
        primary: "Facebook Official",
        secondary: "Direct messaging for availability & pricing",
        detail: "Fastest response via Messenger",
      },
    ],
  },

  // Chapter 06: Contact & Connection
  contactSection: {
    chapterNumber: "05 / INQUIRY",
    chapterTitle: "CONTACT & CONNECTION",
    headline: "LET'S START A CONVERSATION.",
    subtext: "For business information and inquiries, connect with AJ's Gaffers & Accessories through our official communication channels.",
    facebookButtonLabel: "Visit Official Facebook Page",
    messengerButtonLabel: "Chat on Facebook Messenger",
    formTitle: "Direct Email Inquiry",
    formDescription: "Have a specific question, bulk order inquiry, or business proposal? Send us a direct message.",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#story" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#owner" },
    { label: "Business Info", href: "#business-info" },
    { label: "Contact", href: "#contact" },
  ],
};
