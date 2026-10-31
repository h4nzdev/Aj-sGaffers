import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import OurStory from './sections/OurStory';
import Gallery from './sections/Gallery';
import OwnerProfile from './sections/OwnerProfile';
import BusinessInfo from './sections/BusinessInfo';
import Contact from './sections/Contact';

export default function App() {
  // Initialize Lenis smooth scroll and GSAP ScrollTrigger sync
  useLenis();

  const [isPreloaded, setIsPreloaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#171918] text-[#F3F0E9] selection:bg-[#A68A64] selection:text-[#171918]">
      {/* Luxury Cinematic Preloader */}
      {!isPreloaded && (
        <Preloader onComplete={() => setIsPreloaded(true)} />
      )}

      {/* Persistent Editorial Navbar */}
      <Navbar />

      {/* Main Chapters */}
      <main>
        {/* Chapter 01: Hero Intro */}
        <Hero isPreloaded={isPreloaded} />

        {/* Chapter 02: The Business Story (Warm Ivory & Pinned Pillars) */}
        <OurStory />

        {/* Chapter 03: The Visual Gallery (Deep Charcoal & Lightbox) */}
        <Gallery />

        {/* Chapter 04: Meet the Owner (Editorial Profile & Pinned Portrait) */}
        <OwnerProfile />

        {/* Chapter 05: Business Information (Clear Verified Credentials) */}
        <BusinessInfo />

        {/* Chapter 06: Contact & Connection (Facebook & Web3Forms) */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
