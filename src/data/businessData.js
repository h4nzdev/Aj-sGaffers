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

// Authentic Product Showcase Images
import bladePt1Img from '../assets/products/blade/pt1.jpg';
import bladePt2Img from '../assets/products/blade/pt2.jpg';
import bladePt3Img from '../assets/products/blade/pt3.jpg';
import boots1Img from '../assets/products/boots/boots.jpg';
import boots2Img from '../assets/products/boots/boots2.jpg';
import boots3Img from '../assets/products/boots/boots3.jpg';
import lickitImg from '../assets/products/lickit.jpg';
import waxImg from '../assets/products/wax.jpg';

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
      url: "https://www.facebook.com/jho.magbal",
      displayName: "Jho Magbal (AJ's Gaffers & Accessories)",
      handle: "@jho.magbal",
      messengerUrl: "https://m.me/jho.magbal",
    },
    // Direct Contact Details (From Official Product Labels)
    phone: "+63 906 791 6274",
    secondaryPhone: "+63 945 689 6954",
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

  // Chapter 03: Visual Gallery & Product Showcase
  gallery: {
    chapterNumber: "02 / PRODUCT SHOWCASE",
    chapterTitle: "THE PRODUCTS SHOWCASE",
    headline: "AUTHENTIC CRAFT IN FOCUS.",
    description: "An organized visual catalog showcasing our authentic master-ground competition gaff blades, custom brocade spats (sapin), friction likit rolls, and specialized binding wax.",
    categories: ["All Products", "Master Blades", "Gaffer Boots & Spats", "Grip & Accessories"],
    items: [
      {
        id: "prod-blade-1",
        title: "Competition Gaff Blade (Single)",
        category: "Master Blades",
        year: "Hand-Finished",
        description: "Tempered heat-blued socket base with precision-hollowed grind, razor-honed cutting bevel, and needle-sharp penetration tip.",
        image: bladePt1Img,
        aspect: "aspect-[3/4]",
        tag: "Tari Blade",
        featured: true,
      },
      {
        id: "prod-blade-2",
        title: "Curved Parabolic Tari Profile",
        category: "Master Blades",
        year: "Precision Curve",
        description: "Side-profile exhibiting calibrated arc curvature engineered for optimal angle of entry, high structural stiffness, and balance.",
        image: bladePt2Img,
        aspect: "aspect-[3/4]",
        tag: "Precision Curve",
        featured: false,
      },
      {
        id: "prod-blade-3",
        title: "Master Competition Blade Wing Set",
        category: "Master Blades",
        year: "Calibrated Set",
        description: "Fanned suite of hand-forged blades displaying consistent spine thickness, iridescent blue heat tempering, and uniform grind.",
        image: bladePt3Img,
        aspect: "aspect-[3/4]",
        tag: "Suite of Blades",
        featured: true,
      },
      {
        id: "prod-boots-1",
        title: "Gold Brocade Heritage Spats (Sapin)",
        category: "Gaffer Boots & Spats",
        year: "Handcrafted",
        description: "Artisan-tailored protective gaffer boots featuring gold leaf brocade floral patterns, reinforced cutout socket, and padded shank backing.",
        image: boots1Img,
        aspect: "aspect-[3/4]",
        tag: "Traditional Sapin",
        featured: false,
      },
      {
        id: "prod-boots-2",
        title: "Crimson & Gold Checkered Boots",
        category: "Gaffer Boots & Spats",
        year: "Reinforced Fit",
        description: "High-density checkered woven gaffer boots designed for firm shank placement, non-slip friction, and durable field performance.",
        image: boots2Img,
        aspect: "aspect-[3/4]",
        tag: "Checkered Weave",
        featured: false,
      },
      {
        id: "prod-boots-3",
        title: "Bespoke Boots & Spats Collection",
        category: "Gaffer Boots & Spats",
        year: "Full Assortment",
        description: "Complete inventory of protective boots available in textured leather, carbon fiber weaves, vivid geometric patterns, and individual protective sleeves.",
        image: boots3Img,
        aspect: "aspect-[3/4]",
        tag: "Multi-Pattern Pack",
        featured: true,
      },
      {
        id: "prod-lickit",
        title: "AJ's Original Likit Friction Rolls",
        category: "Grip & Accessories",
        year: "Official Supply",
        description: "Authentic AJ's Gaffers & Accessories branded friction likit rolls. Specially formulated for non-slip grip, cord locking, and firm blade anchoring.",
        image: lickitImg,
        aspect: "aspect-[3/4]",
        tag: "Branded Pack",
        featured: true,
      },
      {
        id: "prod-wax",
        title: "AJ's Specialized Binding Wax Cakes",
        category: "Grip & Accessories",
        year: "Official Supply",
        description: "Natural binding wax pucks bearing official AJ's / Jho Magbal labeling. Formulated for cord conditioning, moisture resistance, and solid friction lock.",
        image: waxImg,
        aspect: "aspect-[3/4]",
        tag: "Branded Pack",
        featured: true,
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
    { label: "Products", href: "#gallery" },
    { label: "About", href: "#owner" },
    { label: "Business Info", href: "#business-info" },
    { label: "Contact", href: "#contact" },
  ],
};
