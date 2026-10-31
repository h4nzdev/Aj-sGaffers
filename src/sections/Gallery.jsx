import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X, ZoomIn, Eye, Sparkles, Phone, ShieldCheck } from 'lucide-react';
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
              title="PRODUCTS & ATELIER SHOWCASE"
              dark={false}
              className="mb-6"
            />
            <TextReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF9F6] leading-[1.05]"
            >
              AUTHENTIC CRAFT IN FOCUS.
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

        {/* Products Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card group relative flex flex-col justify-between bg-[#1D211F]/70 border border-[#A68A64]/20 hover:border-[#A68A64] p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              onClick={() => setSelectedItem(item)}
            >
              {/* Product Image Frame */}
              <div className="relative overflow-hidden aspect-[4/5] bg-[#121413] border border-[#A68A64]/15 flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain filter contrast-105 transition-transform duration-500 ease-editorial group-hover:scale-108"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171918]/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />

                {/* Hover Quick Action Badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#171918]/90 backdrop-blur-md border border-[#A68A64]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-[#A68A64]">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Product Tag */}
                <div className="absolute bottom-3 left-3 text-[9px] font-mono tracking-widest uppercase bg-[#171918]/90 px-2 py-0.5 text-[#A68A64] border border-[#A68A64]/40">
                  {item.tag || item.year}
                </div>
              </div>

              {/* Editorial Caption Underneath */}
              <div className="pt-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A68A64]">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#A68A64]/60 group-hover:text-[#A68A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-[#FAF9F6] font-normal group-hover:text-[#A68A64] transition-colors mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D6CDBE]/70 font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#A68A64]/15 flex items-center justify-between text-[10px] font-mono text-[#D6CDBE]/50 uppercase tracking-widest">
                  <span>JHO MAGBAL • CEBU</span>
                  <span className="text-[#A68A64]">VIEW SPECS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Archive Note */}
        <div className="mt-16 pt-8 border-t border-[#A68A64]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D6CDBE]/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A68A64]" />
            <span>ORIGINAL AJ'S GAFFERS & ACCESSORIES PRODUCT ARCHIVE</span>
          </div>
          <div className="text-right">
            OFFICIAL HOTLINE: {BUSINESS_DATA.contact.phone} / {BUSINESS_DATA.contact.secondaryPhone}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Detailed Product Inspection */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#101211]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171918] border-2 border-[#A68A64]/50 p-6 md:p-10 shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 text-[#FAF9F6] hover:text-[#A68A64] transition-colors focus:outline-none"
              aria-label="Close product inspection"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Large Product Image Preview */}
              <div className="relative aspect-square overflow-hidden bg-[#121413] border border-[#A68A64]/30 flex items-center justify-center p-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain filter contrast-105"
                />
              </div>

              {/* Product Details Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#222524] text-[10px] font-mono tracking-widest text-[#A68A64] uppercase border border-[#A68A64]/30 mb-4">
                    {selectedItem.category} • {selectedItem.tag || "Authentic Item"}
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-medium text-[#FAF9F6] mb-3 leading-snug">
                    {selectedItem.title}
                  </h3>

                  <p className="text-sm text-[#D6CDBE]/85 font-light leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Product Verification & Specs */}
                  <div className="space-y-2.5 text-xs font-mono text-[#D6CDBE]/70 border-t border-[#A68A64]/20 pt-4 mb-6">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#A68A64]" />
                      <span>MAKER: Jho Magbal (AJ's Gaffers & Accessories)</span>
                    </div>
                    <div>PROVENANCE: Hand-finished & Inspected in Cebu City, PH</div>
                    <div>INQUIRY HOTLINE: {BUSINESS_DATA.contact.phone} / {BUSINESS_DATA.contact.secondaryPhone}</div>
                    <div>AVAILABILITY: Direct inquiry via Facebook or Call</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#A68A64]/20 flex flex-col gap-3">
                  <a
                    href={BUSINESS_DATA.contact.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#A68A64] text-[#171918] font-mono text-xs tracking-[0.2em] uppercase font-bold text-center hover:bg-[#FAF9F6] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>INQUIRE ON FACEBOOK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="w-full py-3 px-4 border border-[#A68A64]/40 text-xs font-mono tracking-widest uppercase text-[#FAF9F6] hover:bg-[#222524] transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A68A64]" />
                    <span>CALL / TEXT: {BUSINESS_DATA.contact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
