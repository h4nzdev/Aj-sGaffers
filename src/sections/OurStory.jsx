import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);
  const pinnedStoryRef = useRef(null);
  const horizontalStripRef = useRef(null);
  const markerRef = useRef(null);
  const splitImgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinnedContainer = pinnedStoryRef.current;
    if (!section || !pinnedContainer) return;

    const ctx = gsap.context(() => {
      // 1. Established 2013 Marker Scale & Parallax
      if (markerRef.current) {
        gsap.fromTo(
          markerRef.current,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: markerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // 2. Split Image subtle parallax
      if (splitImgRef.current) {
        gsap.to(splitImgRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: splitImgRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // 3. IMMERSIVE PINNED STORYTELLING MOMENT (Desktop & Tablet)
      // When scrolling through the pinned section, the left side stays pinned
      // while the 4 craft pillars scroll through, highlighting each pillar sequentially.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const pillarCards = pinnedContainer.querySelectorAll('.story-pillar-item');
        
        ScrollTrigger.create({
          trigger: pinnedContainer,
          start: 'top top',
          end: '+=200%',
          pin: '.pinned-story-sidebar',
          pinSpacing: false,
          scrub: 1,
        });

        // Highlight active pillar as it scrolls past
        pillarCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0.35, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: 'top 60%',
                end: 'bottom 40%',
                toggleActions: 'play reverse play reverse',
              },
            }
          );
        });
      });

      // 4. Horizontal strip movement across the transition
      if (horizontalStripRef.current) {
        gsap.to(horizontalStripRef.current, {
          xPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative bg-[#F3F0E9] text-[#171918] transition-colors duration-700 overflow-hidden"
    >
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 bg-grain-light opacity-60 pointer-events-none" />

      {/* Editorial Chapter Header & Horizontal Movement Banner */}
      <div className="border-b border-[#171918]/10 pt-16 pb-6 overflow-hidden">
        <div
          ref={horizontalStripRef}
          className="whitespace-nowrap flex items-center gap-12 font-display text-4xl md:text-6xl text-[#171918]/15 font-light tracking-wider will-change-transform select-none"
        >
          <span>BUILT ON EXPERIENCE</span>
          <span className="text-[#A68A64]">•</span>
          <span>ROOTED IN CEBU</span>
          <span className="text-[#A68A64]">•</span>
          <span>ESTABLISHED 2013</span>
          <span className="text-[#A68A64]">•</span>
          <span>HERITAGE CRAFTSMANSHIP</span>
          <span className="text-[#A68A64]">•</span>
          <span>HONED IN VISAYAS</span>
          <span className="text-[#A68A64]">•</span>
        </div>
      </div>

      {/* Main Split Editorial Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Serif Headline & Context */}
          <div className="lg:col-span-7">
            <SectionLabel
              number="02"
              title="THE BUSINESS STORY"
              dark={true}
              className="mb-8"
            />

            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#171918] leading-[1.05] mb-8"
            >
              {BUSINESS_DATA.story.headline}
            </TextReveal>

            <p className="font-serif text-2xl md:text-3xl text-[#171918]/90 italic leading-relaxed mb-8">
              "{BUSINESS_DATA.story.lead}"
            </p>

            <div className="space-y-6 text-base text-[#171918]/80 font-light leading-relaxed max-w-2xl">
              {BUSINESS_DATA.story.narrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Established 2013 Visual Marker Stamp */}
            <div
              ref={markerRef}
              className="mt-12 inline-flex items-center gap-6 p-6 border border-[#171918]/15 bg-[#FAF8F4] shadow-sm"
            >
              <div className="w-14 h-14 border border-[#A68A64] flex flex-col items-center justify-center font-mono text-center">
                <span className="text-[10px] text-[#A68A64] uppercase leading-none">EST.</span>
                <span className="text-sm font-bold text-[#171918] leading-none mt-1">2013</span>
              </div>
              <div>
                <h4 className="font-display text-xl text-[#171918] font-medium leading-snug">
                  11+ Continuous Years in Cebu
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#171918]/60 font-mono mt-1">
                  CEBU CITY • VISAYAS, PHILIPPINES
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Business Photography & Editorial Composition */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Primary Image with Clipping Mask styling */}
              <div className="relative overflow-hidden aspect-[4/3] shadow-2xl bg-[#171918] border border-[#171918]/20">
                <img
                  ref={splitImgRef}
                  src={BUSINESS_DATA.story.storyImage1}
                  alt="Official master gaffer trunk case with custom fitted gaffs and accessories at AJ's Gaffers"
                  className="w-full h-full object-cover object-center will-change-transform scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171918]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-[11px] font-mono tracking-widest uppercase">
                  <span className="text-[#A68A64] mr-2">FIG 01.</span>
                  COMPLETE GAFFER ATELIER TRUNK & CUSTOM FITTED BLADES
                </div>
              </div>

              {/* Secondary Overlapping Inset Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-6 md:-bottom-10 md:-left-8 max-w-[280px] bg-[#171918] text-[#FAF9F6] p-6 shadow-2xl border border-[#A68A64]/40 z-10">
                <div className="text-[10px] font-mono tracking-widest text-[#A68A64] uppercase mb-2">
                  THE ARTISAN CODE
                </div>
                <p className="font-serif italic text-xs md:text-sm text-[#D6CDBE] leading-relaxed">
                  {BUSINESS_DATA.story.highlightQuote}
                </p>
                <div className="mt-4 pt-3 border-t border-[#A68A64]/20 text-[10px] font-mono tracking-widest text-[#D6CDBE]/60 uppercase">
                  AJ'S ATELIER ARCHIVE • CEBU
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMMERSIVE PINNED SECTION: The 4 Pillars of AJ's */}
      <div
        ref={pinnedStoryRef}
        className="relative border-t border-[#171918]/15 bg-[#E7E2D5]/40 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Pinned Left Sidebar */}
            <div className="md:col-span-5 pinned-story-sidebar">
              <div className="sticky top-32">
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A68A64] block mb-3 font-semibold">
                  CORE PRINCIPLES
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#171918] leading-tight mb-6">
                  THE FOUNDATIONS OF OUR REPUTATION.
                </h3>
                <p className="text-sm text-[#171918]/70 font-light leading-relaxed mb-8 max-w-md">
                  In a specialized craft where balance, curvature, and edge resilience are non-negotiable, every piece must pass rigorous scrutiny. Here are the principles that have anchored AJ's Gaffers & Accessories since 2013.
                </p>

                <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#171918]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A68A64]" />
                  <span>CHAPTER 02 CONTINUATION</span>
                </div>
              </div>
            </div>

            {/* Right Pillars List */}
            <div className="md:col-span-7 space-y-12">
              {BUSINESS_DATA.story.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="story-pillar-item p-8 md:p-10 bg-[#FAF8F4] border border-[#171918]/10 hover:border-[#A68A64] transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4 border-b border-[#171918]/10 pb-4">
                    <span className="font-mono text-2xl font-light text-[#A68A64]">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#171918]/50">
                      CRAFT STANDARD
                    </span>
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-medium text-[#171918] mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#171918]/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
