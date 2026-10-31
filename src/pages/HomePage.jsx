import React from 'react';
import Hero from '../sections/Hero';
import OurStory from '../sections/OurStory';
import Gallery from '../sections/Gallery';
import OwnerProfile from '../sections/OwnerProfile';
import BusinessInfo from '../sections/BusinessInfo';
import Contact from '../sections/Contact';

export default function HomePage({ isPreloaded }) {
  return (
    <main>
      {/* Chapter 01: Hero Intro */}
      <Hero isPreloaded={isPreloaded} />

      {/* Chapter 02: The Business Story (Warm Ivory & Pinned Pillars) */}
      <OurStory />

      {/* Chapter 03: The Products Showcase (Deep Charcoal & Featured 2x2) */}
      <Gallery />

      {/* Chapter 04: Meet the Owner (Editorial Profile & Pinned Portrait) */}
      <OwnerProfile />

      {/* Chapter 05: Business Information (Clear Verified Credentials) */}
      <BusinessInfo />

      {/* Chapter 06: Contact & Connection (Facebook & Web3Forms) */}
      <Contact />
    </main>
  );
}
