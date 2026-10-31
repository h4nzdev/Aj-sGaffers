import React, { useEffect, useRef } from 'react';
import { Quote, Award, Calendar, Compass, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function OwnerProfile() {
  const sectionRef = useRef(null);
  const portraitPinRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const portraitContainer = portraitPinRef.current;
    if (!section || !portraitContainer) return;

    const ctx = gsap.context(() => {
      // Pinned storytelling interaction on desktop
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: portraitContainer,
          start: 'top 15%',
          end: 'bottom bottom',
          pin: '.pinned-portrait-box',
          pinSpacing: false,
          scrub: 1,
        });
      });

      // Subtle parallax on the portrait image
      gsap.to('.owner-portrait-img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Fade & elevate quote
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="owner"
      ref={sectionRef}
      className="relative bg-[#D6CDBE]/30 text-[#171918] py-24 md:py-36 px-6 md:px-12 border-t border-[#171918]/10 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Label */}
        <div className="mb-12">
          <SectionLabel
            number="04"
            title="LEADERSHIP & CRAFT"
            dark={true}
            className="mb-4"
          />
          <TextReveal
            as="h2"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#171918] leading-[1.05]"
          >
            {BUSINESS_DATA.owner.headline}
          </TextReveal>
        </div>

        {/* Asymmetrical Pinned Storytelling Layout */}
        <div
          ref={portraitPinRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative min-h-[800px]"
        >
          {/* Pinned Left Column: Portrait & Visual Artifact */}
          <div className="lg:col-span-5 pinned-portrait-box">
            <div className="relative">
              {/* Large Portrait Photography */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#171918] shadow-2xl border border-[#171918]/15">
                <img
                  src={BUSINESS_DATA.owner.portraitImage}
                  alt={BUSINESS_DATA.owner.name}
                  className="owner-portrait-img w-full h-full object-cover object-[center_22%] filter contrast-105 brightness-95 will-change-transform scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171918]/90 via-[#171918]/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A68A64] mb-1">
                    FOUNDER & ARTISAN
                  </div>
                  <h3 className="font-display text-2xl text-[#FAF9F6]">
                    {BUSINESS_DATA.owner.name}
                  </h3>
                  <div className="text-xs font-mono text-[#D6CDBE]/70 mt-1">
                    {BUSINESS_DATA.owner.locationStamp}
                  </div>
                </div>
              </div>

              {/* Inset Decorative Stamp */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#171918]/60 uppercase tracking-widest px-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#A68A64]" />
                  EST. {BUSINESS_DATA.owner.estYear}
                </span>
                <span>{BUSINESS_DATA.owner.experienceLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-10 lg:pl-6">
            <div className="border-b border-[#171918]/15 pb-8">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A68A64] block mb-2">
                PROFILE & VOCATION
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[#171918] font-normal leading-tight">
                Devotion to the discipline, refined in Cebu since 2013.
              </h3>
            </div>

            {/* Editable Narrative Paragraphs */}
            <div className="space-y-6 text-base md:text-lg text-[#171918]/80 font-light leading-relaxed">
              {BUSINESS_DATA.owner.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Business Philosophy Quote Card */}
            <div
              ref={quoteRef}
              className="p-8 md:p-10 bg-[#FAF8F4] border-l-4 border-[#A68A64] shadow-md relative mt-8"
            >
              <Quote className="w-8 h-8 text-[#A68A64]/30 absolute top-6 right-6" />
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A68A64] mb-3">
                FOUNDER'S PHILOSOPHY
              </div>
              <p className="font-serif italic text-xl md:text-2xl text-[#171918] leading-relaxed mb-6">
                {BUSINESS_DATA.owner.philosophyQuote}
              </p>
              <div className="flex items-center justify-between border-t border-[#171918]/10 pt-4 text-xs font-mono text-[#171918]/60 uppercase tracking-widest">
                <span>{BUSINESS_DATA.owner.signature}</span>
                <span>CEBU CITY, PH</span>
              </div>
            </div>

            {/* Direct Inquiry Link to Facebook */}
            <div className="pt-4 flex items-center justify-between">
              <a
                href={BUSINESS_DATA.contact.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.22em] uppercase text-[#171918] hover:text-[#A68A64] transition-colors group"
              >
                <span>CONNECT WITH THE OWNER ON FACEBOOK</span>
                <ArrowUpRight className="w-4 h-4 text-[#A68A64] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
