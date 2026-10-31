import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Compass } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_DATA } from '../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ isPreloaded = true }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const bgImgRef = useRef(null);
  const metaBadgeRef = useRef(null);
  const actionsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (!isPreloaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Split headline into letter spans
      const titleChars = headlineRef.current?.querySelectorAll('.hero-char');

      tl.fromTo(
        bgImgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1.03, opacity: 0.88, duration: 2.2, ease: 'power2.out' },
        0.1
      )
      .fromTo(
        metaBadgeRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        0.4
      );

      if (titleChars && titleChars.length > 0) {
        tl.fromTo(
          titleChars,
          { yPercent: 120, opacity: 0, rotateX: -40 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.035,
            ease: 'power4.out',
          },
          0.6
        );
      }

      tl.fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        1.1
      )
      .fromTo(
        actionsRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        1.3
      )
      .fromTo(
        indicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.5
      );

      // Hero background parallax zoom on scroll
      gsap.to(bgImgRef.current, {
        yPercent: 20,
        scale: 1.18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Headline fade on scroll down
      gsap.to([headlineRef.current, subtextRef.current, actionsRef.current], {
        y: -50,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, [isPreloaded]);

  const handleScrollToStory = (e) => {
    e.preventDefault();
    if (window.__lenis) {
      window.__lenis.scrollTo('#story', { duration: 1.4 });
    } else {
      document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split headline text into characters
  const headlineText = BUSINESS_DATA.hero.mainHeadline;
  const renderHeadlineChars = () => {
    return headlineText.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block overflow-hidden pb-2 -mb-2 will-change-transform"
      >
        <span className="hero-char inline-block will-change-transform">
          {char === ' ' ? '\u00A0' : char}
        </span>
      </span>
    ));
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-14 bg-[#171918] text-[#F3F0E9] overflow-hidden select-none"
    >
      {/* Background Cinematic Atmosphere Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImgRef}
          src={BUSINESS_DATA.hero.heroImage}
          alt={BUSINESS_DATA.hero.imageAlt}
          className="w-full h-full object-cover object-[75%_center] md:object-right lg:object-center filter contrast-110 brightness-95 will-change-transform"
        />
        {/* Layered directional gradients: Keeps typography area dark and readable while allowing the blade and sparks on the right to glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171918] via-[#171918]/85 md:via-[#171918]/70 lg:via-[#171918]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-[#171918]/65" />
        <div className="absolute inset-0 bg-grain opacity-25" />
      </div>

      {/* Top Meta Badge */}
      <div
        ref={metaBadgeRef}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A68A64]/20 pb-6"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#A68A64] rotate-45 inline-block" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#A68A64]">
            {BUSINESS_DATA.hero.badge}
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] font-mono tracking-widest text-[#D6CDBE]/70 uppercase">
          <span className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap">
            <Compass className="w-3.5 h-3.5 text-[#A68A64] flex-shrink-0" />
            <span>CEBU CITY, PH</span>
          </span>
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A68A64] flex-shrink-0" />
            <span>11+ YEARS CRAFTSMANSHIP</span>
          </span>
        </div>
      </div>

      {/* Central Dramatic Headline Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-20">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm font-mono tracking-[0.35em] text-[#D6CDBE]/80 uppercase mb-4 md:mb-6">
            CHAPTER 01 / THE INTRODUCTION
          </p>

          <h1
            ref={headlineRef}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-[#FAF9F6] tracking-tight leading-[0.95] mb-8"
          >
            {renderHeadlineChars()}
          </h1>

          <div
            ref={subtextRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#A68A64]/20 pt-8"
          >
            <p className="md:col-span-7 font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#F3F0E9]/90 italic leading-relaxed">
              "{BUSINESS_DATA.hero.supportingText}"
            </p>

            <p className="md:col-span-5 text-sm md:text-base text-[#D6CDBE]/80 font-light leading-relaxed">
              Serving the Cebuano sporting and craftsmanship tradition with tailored gaffing instruments, master-sharpened edges, and artisanal leather cases. Every detail carries the mark of patience and dedication.
            </p>
          </div>

          {/* Action CTAs */}
          <div
            ref={actionsRef}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href={BUSINESS_DATA.contact.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#A68A64] text-[#171918] font-mono text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#FAF9F6] transition-all duration-300 flex items-center gap-2 group shadow-xl"
            >
              <span>CONNECT ON FACEBOOK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#story"
              onClick={handleScrollToStory}
              className="px-7 py-3.5 border border-[#A68A64]/40 hover:border-[#A68A64] bg-[#171918]/60 backdrop-blur-sm text-[#FAF9F6] font-mono text-xs tracking-[0.25em] uppercase hover:bg-[#222524] transition-all duration-300"
            >
              EXPLORE OUR STORY
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer & Scroll Indicator */}
      <div
        ref={indicatorRef}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between border-t border-[#A68A64]/20 pt-6"
      >
        <div className="text-[11px] font-mono text-[#D6CDBE]/60 uppercase tracking-widest">
          <span>AJ'S GAFFERS & ACCESSORIES</span>
          <span className="mx-2 text-[#A68A64]">•</span>
          <span>EST. 2013</span>
        </div>

        <a
          href="#story"
          onClick={handleScrollToStory}
          className="group flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#A68A64] hover:text-[#FAF9F6] transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="hidden sm:inline text-[10px] uppercase">
            {BUSINESS_DATA.hero.scrollPrompt}
          </span>
          <div className="w-7 h-11 border border-[#A68A64]/60 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-[#A68A64] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
