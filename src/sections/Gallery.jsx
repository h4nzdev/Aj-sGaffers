import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === "All Works"
    ? BUSINESS_DATA.gallery.items
    : BUSINESS_DATA.gallery.items.filter(item => item.category === activeCategory);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.gallery-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-[#171918] text-[#F3F0E9] py-24 md:py-36 px-6 md:px-12 border-t border-[#A68A64]/20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#A68A64]/20">
          <div>
            <SectionLabel
              number="03"
              title="VISUAL GALLERY"
              dark={false}
              className="mb-6"
            />
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF9F6] leading-[1.05]"
            >
              {BUSINESS_DATA.gallery.headline}
            </TextReveal>
          </div>

          <p className="max-w-md text-sm md:text-base text-[#D6CDBE]/75 font-light leading-relaxed">
            {BUSINESS_DATA.gallery.description}
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="py-8 flex flex-wrap items-center gap-3 border-b border-[#A68A64]/10 mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A68A64] mr-2">
            CATEGORY:
          </span>
          {BUSINESS_DATA.gallery.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#A68A64] text-[#171918] font-semibold'
                  : 'bg-[#222524]/60 text-[#D6CDBE]/70 hover:text-[#FAF9F6] hover:bg-[#2A2E2C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
        >
          {filteredItems.map((item, idx) => {
            // Asymmetrical grid column spans for editorial rhythm
            const colSpan = idx % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4';
            return (
              <div
                key={item.id}
                className={`gallery-card group relative flex flex-col justify-between ${colSpan} cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Frame with Minimal Hairline Border */}
                <div className={`relative overflow-hidden ${item.aspect} bg-[#1D211F] border border-[#A68A64]/20 transition-all duration-500 group-hover:border-[#A68A64]/70`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-108 filter contrast-110"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171918]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Quick Action Badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#171918]/80 backdrop-blur-md border border-[#A68A64]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-[#A68A64]">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Year Tag */}
                  <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest uppercase bg-[#171918]/85 px-2.5 py-1 text-[#A68A64] border border-[#A68A64]/30">
                    {item.year}
                  </div>
                </div>

                {/* Editorial Caption Underneath */}
                <div className="pt-4 flex items-start justify-between gap-4 border-t border-[#A68A64]/10 mt-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A68A64]">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-[#FAF9F6] font-normal group-hover:text-[#A68A64] transition-colors mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D6CDBE]/70 font-light mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#A68A64]/60 group-hover:text-[#A68A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Archive Note */}
        <div className="mt-16 pt-8 border-t border-[#A68A64]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D6CDBE]/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A68A64]" />
            <span>ORIGINAL ARCHIVE PHOTOGRAPHY & PRECISION EQUIPMENT</span>
          </div>
          <div className="text-right">
            FOR SPECIAL ORDER INQUIRIES, MESSAGE OFFICIAL FACEBOOK
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Detailed Inspection */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#101211]/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171918] border border-[#A68A64]/40 p-6 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 text-[#FAF9F6] hover:text-[#A68A64] transition-colors focus:outline-none"
              aria-label="Close image inspection"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Large Image Preview */}
              <div className="relative aspect-square overflow-hidden bg-[#1D211F] border border-[#A68A64]/20">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#222524] text-[10px] font-mono tracking-widest text-[#A68A64] uppercase border border-[#A68A64]/30 mb-4">
                    {selectedItem.category} • {selectedItem.year}
                  </div>
                  <h3 className="font-display text-3xl font-normal text-[#FAF9F6] mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-[#D6CDBE]/80 font-light leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 text-xs font-mono text-[#D6CDBE]/60 border-t border-[#A68A64]/20 pt-4">
                    <div>AUTHENTICITY: Official AJ's Specification</div>
                    <div>PROVENANCE: Handcrafted / Inspected in Cebu</div>
                    <div>STATUS: Inquiry upon request</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#A68A64]/20 flex flex-col sm:flex-row gap-4">
                  <a
                    href={BUSINESS_DATA.contact.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#A68A64] text-[#171918] font-mono text-xs tracking-widest uppercase font-semibold text-center hover:bg-[#FAF9F6] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>INQUIRE VIA FACEBOOK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="py-3 px-5 border border-[#A68A64]/40 text-xs font-mono tracking-widest uppercase text-[#FAF9F6] hover:bg-[#222524] transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
