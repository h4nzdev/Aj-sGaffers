import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  X, 
  ZoomIn, 
  Eye, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Search,
  ExternalLink
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [catalogSearch, setCatalogSearch] = useState('');

  const filteredItems = (activeCategory === "All Products" || activeCategory === "All Works")
    ? BUSINESS_DATA.gallery.items
    : BUSINESS_DATA.gallery.items.filter(item => item.category === activeCategory);

  const modalFilteredItems = catalogSearch.trim()
    ? BUSINESS_DATA.gallery.items.filter(item =>
        item.title.toLowerCase().includes(catalogSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(catalogSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(catalogSearch.toLowerCase())
      )
    : (activeCategory === "All Products" || activeCategory === "All Works"
        ? BUSINESS_DATA.gallery.items
        : BUSINESS_DATA.gallery.items.filter(item => item.category === activeCategory));

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.gallery-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [activeCategory, showAllMobile]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-[#171918] text-[#F3F0E9] py-20 md:py-36 px-4 sm:px-6 md:px-12 border-t border-[#A68A64]/20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 pb-8 md:pb-12 border-b border-[#A68A64]/20">
          <div>
            <SectionLabel
              number="03"
              title="PRODUCTS & ATELIER SHOWCASE"
              dark={false}
              className="mb-4 md:mb-6"
            />
            <TextReveal
              as="h2"
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF9F6] leading-[1.05]"
            >
              AUTHENTIC CRAFT IN FOCUS.
            </TextReveal>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <p className="max-w-md text-xs sm:text-base text-[#D6CDBE]/75 font-light leading-relaxed">
              {BUSINESS_DATA.gallery.description}
            </p>
            <button
              onClick={() => setCatalogModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A68A64] hover:text-[#FAF9F6] transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>EXPLORE ALL {BUSINESS_DATA.gallery.items.length} PRODUCTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="py-6 md:py-8 flex items-center justify-between border-b border-[#A68A64]/10 mb-8 md:mb-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap">
            <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.25em] text-[#A68A64] mr-1">
              CATEGORY:
            </span>
            {BUSINESS_DATA.gallery.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllMobile(false);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#A68A64] text-[#171918] font-bold shadow-md'
                    : 'bg-[#222524]/60 text-[#D6CDBE]/70 hover:text-[#FAF9F6] hover:bg-[#2A2E2C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCatalogModalOpen(true)}
            className="sm:hidden flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-[#A68A64] hover:text-[#FAF9F6] ml-2 flex-shrink-0"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>CATALOG</span>
          </button>
        </div>

        {/* Products Grid — 2 columns on mobile (2x2 layout initially), 4 columns on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8"
        >
          {filteredItems.map((item, idx) => {
            const isHiddenOnMobile = !showAllMobile && idx >= 4;
            return (
              <div
                key={item.id}
                className={`gallery-card group relative ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                } flex-col justify-between bg-[#1D211F]/80 border border-[#A68A64]/20 hover:border-[#A68A64] p-2.5 sm:p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Product Image Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#121413] border border-[#A68A64]/15 flex items-center justify-center p-2 sm:p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain filter contrast-105 transition-transform duration-500 ease-editorial group-hover:scale-108"
                  />

                  {/* Hover Quick Action Badge */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#171918]/90 backdrop-blur-md border border-[#A68A64]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-[#A68A64]">
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Product Tag */}
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[8px] sm:text-[9px] font-mono tracking-widest uppercase bg-[#171918]/90 px-1.5 py-0.5 sm:px-2 text-[#A68A64] border border-[#A68A64]/40">
                    {item.tag || item.year}
                  </div>
                </div>

                {/* Editorial Caption Underneath */}
                <div className="pt-2.5 sm:pt-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#A68A64] truncate">
                        {item.category}
                      </span>
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#A68A64]/60 group-hover:text-[#A68A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                    </div>
                    <h3 className="font-display text-sm sm:text-lg lg:text-xl text-[#FAF9F6] font-medium group-hover:text-[#A68A64] transition-colors mt-1 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="hidden sm:block text-xs text-[#D6CDBE]/70 font-light mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#A68A64]/15 flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-[#D6CDBE]/60 uppercase tracking-wider">
                    <span className="truncate max-w-[80px] sm:max-w-none">JHO MAGBAL</span>
                    <span className="text-[#A68A64] font-semibold">VIEW SPECS</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View More Controls (shown when more than 4 items) */}
        {filteredItems.length > 4 && (
          <div className="sm:hidden mt-6 flex flex-col gap-3">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="w-full py-3.5 px-4 bg-[#222524] border border-[#A68A64]/40 text-[#FAF9F6] font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#A68A64] hover:text-[#171918] active:scale-[0.99] transition-all shadow-md"
            >
              <span>
                {showAllMobile
                  ? 'SHOW FEWER PRODUCTS (2X2)'
                  : `VIEW MORE PRODUCTS (${filteredItems.length - 4} MORE)`}
              </span>
              {showAllMobile ? (
                <ChevronUp className="w-4 h-4 text-[#A68A64]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#A68A64]" />
              )}
            </button>

            <button
              onClick={() => setCatalogModalOpen(true)}
              className="w-full py-3 px-4 bg-[#171918] border border-[#A68A64]/30 text-[#D6CDBE] font-mono text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:text-[#FAF9F6] transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#A68A64]" />
              <span>OPEN FULL CATALOG PAGE / ARCHIVE</span>
            </button>
          </div>
        )}

        {/* Bottom Editorial Archive Note */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#A68A64]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D6CDBE]/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A68A64]" />
            <span>ORIGINAL AJ'S GAFFERS & ACCESSORIES PRODUCT ARCHIVE</span>
          </div>
          <div className="text-right">
            OFFICIAL HOTLINE: {BUSINESS_DATA.contact.phone} / {BUSINESS_DATA.contact.secondaryPhone}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Single Product Detailed Inspection */}
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

      {/* Full Catalog Page / Modal (Shows all products with search & categories) */}
      {catalogModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#101211]/98 backdrop-blur-xl flex flex-col p-4 sm:p-8 md:p-12 animate-fadeIn overflow-hidden"
          onClick={() => setCatalogModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full mx-auto my-auto bg-[#171918] border-2 border-[#A68A64]/40 flex flex-col max-h-[92vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-[#A68A64]/20 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-[#A68A64] mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>AJ'S COMPLETE PRODUCT CATALOG</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl text-[#FAF9F6] font-normal">
                  All Authentic Craft & Equipment
                </h3>
                <p className="text-xs font-mono text-[#D6CDBE]/70 mt-1">
                  Crafted by Jho Magbal • Cebu City, Philippines
                </p>
              </div>

              <button
                onClick={() => setCatalogModalOpen(false)}
                className="p-2 text-[#FAF9F6] hover:text-[#A68A64] border border-[#A68A64]/30 transition-colors"
                aria-label="Close catalog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Search & Category Filter */}
            <div className="p-4 md:px-8 border-b border-[#A68A64]/10 bg-[#121413] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#A68A64] absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products, blades, sapin, wax..."
                  value={catalogSearch}
                  onChange={(e) => setCatalogSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#1C1F1E] border border-[#A68A64]/30 text-xs font-sans text-[#FAF9F6] focus:border-[#A68A64] focus:outline-none placeholder-[#D6CDBE]/40"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {BUSINESS_DATA.gallery.categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setCatalogSearch('');
                    }}
                    className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider whitespace-nowrap transition-colors ${
                      activeCategory === cat
                        ? 'bg-[#A68A64] text-[#171918] font-bold'
                        : 'bg-[#1C1F1E] text-[#D6CDBE]/70 hover:text-[#FAF9F6]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Scrollable Product List */}
            <div className="p-4 md:p-8 overflow-y-auto flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {modalFilteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-[#1D211F] border border-[#A68A64]/20 hover:border-[#A68A64] transition-all flex flex-col justify-between group cursor-pointer"
                    onClick={() => {
                      setSelectedItem(item);
                    }}
                  >
                    <div className="relative aspect-square bg-[#121413] border border-[#A68A64]/15 p-2 flex items-center justify-center overflow-hidden mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 text-[8px] font-mono tracking-widest uppercase bg-[#171918]/90 text-[#A68A64] px-1.5 py-0.5 border border-[#A68A64]/30">
                        {item.tag || item.year}
                      </div>
                    </div>

                    <div>
                      <div className="text-[9px] font-mono uppercase tracking-widest text-[#A68A64]">
                        {item.category}
                      </div>
                      <h4 className="font-display text-sm md:text-base text-[#FAF9F6] font-medium leading-tight mt-1 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#D6CDBE]/70 font-light mt-1.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#A68A64]/15 flex items-center justify-between text-[9px] font-mono">
                      <span className="text-[#A68A64] uppercase font-semibold">TAP TO INSPECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#A68A64]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:px-8 border-t border-[#A68A64]/20 bg-[#121413] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#D6CDBE]/60 text-[11px]">
                ALL PRODUCTS HANDCRAFTED OR INSPECTED BY JHO MAGBAL • CEBU
              </span>
              <a
                href={BUSINESS_DATA.contact.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#A68A64] text-[#171918] font-mono text-[11px] uppercase tracking-widest font-bold hover:bg-[#FAF9F6] transition-colors flex items-center gap-2"
              >
                <span>MESSAGE JHO MAGBAL ON FACEBOOK</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
