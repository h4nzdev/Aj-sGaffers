import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Search, 
  Phone, 
  ShieldCheck, 
  X, 
  ZoomIn, 
  Sparkles,
  MessageSquare,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Scroll to top upon landing on the Products Page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const allItems = BUSINESS_DATA.gallery.items;

  // Filter items by category and search term
  const filteredProducts = allItems.filter(item => {
    const matchesCategory = activeCategory === "All Products" || item.category === activeCategory;
    const matchesSearch = searchQuery.trim() === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Calculate count for each category
  const getCategoryCount = (cat) => {
    if (cat === "All Products") return allItems.length;
    return allItems.filter(i => i.category === cat).length;
  };

  return (
    <div className="min-h-screen bg-[#171918] text-[#F3F0E9] pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-12 selection:bg-[#A68A64] selection:text-[#171918]">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between pb-8 border-b border-[#A68A64]/20 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#A68A64] hover:text-[#FAF9F6] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO HOME</span>
          </Link>

          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#D6CDBE]/60">
            <span>HOME</span>
            <ChevronRight className="w-3 h-3 text-[#A68A64]" />
            <span className="text-[#A68A64]">PRODUCTS DIRECTORY</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="max-w-4xl mb-12">
          <SectionLabel
            number="CATALOG"
            title="AUTHENTIC PRODUCTS & CRAFT ARCHIVE"
            dark={false}
            className="mb-4"
          />

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF9F6] leading-[1.04] mb-6">
            THE COMPLETE PRODUCT COLLECTION
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#D6CDBE]/80 italic max-w-3xl leading-relaxed mb-6">
            "Every piece is tuned with uncompromised precision, tempered balance, and artisan integrity by Jho Magbal in Cebu City."
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#A68A64] tracking-widest uppercase">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A68A64]" />
              OFFICIAL WORKSHOP INVENTORY
            </span>
            <span>•</span>
            <span>ESTABLISHED 2013 • CEBU, PHILIPPINES</span>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-[#1C1F1E] border border-[#A68A64]/30 p-4 sm:p-6 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-[#A68A64] absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blades, sapin, likit, wax, specifications..."
                className="w-full pl-10 pr-10 py-3 bg-[#121413] border border-[#A68A64]/30 text-sm font-sans text-[#FAF9F6] placeholder-[#D6CDBE]/40 focus:border-[#A68A64] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-xs text-[#D6CDBE]/60 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              {BUSINESS_DATA.gallery.categories.map((cat) => {
                const count = getCategoryCount(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 sm:px-4 py-2 text-[11px] font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#A68A64] text-[#171918] font-bold shadow-md'
                        : 'bg-[#121413] text-[#D6CDBE]/75 hover:text-[#FAF9F6] hover:bg-[#222524] border border-[#A68A64]/20'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#171918] text-[#A68A64]' : 'bg-[#222524] text-[#D6CDBE]/70'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Count Summary */}
          <div className="mt-4 pt-4 border-t border-[#A68A64]/15 flex items-center justify-between text-xs font-mono text-[#D6CDBE]/60">
            <span>SHOWING {filteredProducts.length} OF {allItems.length} TOTAL CRAFT PRODUCTS</span>
            {searchQuery && (
              <span className="text-[#A68A64]">FILTERED BY: "{searchQuery}"</span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-[#1C1F1E] border border-[#A68A64]/20 hover:border-[#A68A64] p-3 sm:p-5 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Product Image Frame */}
                <div
                  className="relative overflow-hidden aspect-[4/5] bg-[#121413] border border-[#A68A64]/15 flex items-center justify-center p-3 cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain filter contrast-105 transition-transform duration-500 ease-editorial group-hover:scale-108"
                  />

                  {/* Hover Quick Zoom Trigger */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#171918]/90 backdrop-blur-md border border-[#A68A64]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#A68A64]">
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Product Tag Badge */}
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[8px] sm:text-[9px] font-mono tracking-widest uppercase bg-[#171918]/90 px-2 py-0.5 text-[#A68A64] border border-[#A68A64]/40">
                    {item.tag || item.year}
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-3 sm:pt-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#A68A64] truncate">
                        {item.category}
                      </span>
                    </div>

                    <h3 
                      className="font-display text-sm sm:text-lg lg:text-xl text-[#FAF9F6] font-medium group-hover:text-[#A68A64] transition-colors leading-snug line-clamp-2 cursor-pointer"
                      onClick={() => setSelectedProduct(item)}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#D6CDBE]/75 font-light mt-2 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Maker & Spec Tag */}
                  <div className="mt-4 pt-3 border-t border-[#A68A64]/15">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#D6CDBE]/60 mb-3 uppercase tracking-wider">
                      <span>JHO MAGBAL</span>
                      <span className="text-[#A68A64]">CEBU CITY</span>
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <a
                        href={BUSINESS_DATA.contact.facebook.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 bg-[#A68A64] text-[#171918] font-mono text-[10px] tracking-widest uppercase font-bold flex items-center justify-center gap-1.5 hover:bg-[#FAF9F6] transition-colors"
                      >
                        <span>INQUIRE ON FACEBOOK</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSelectedProduct(item)}
                        className="w-full py-2 px-3 border border-[#A68A64]/30 hover:border-[#A68A64] text-[#D6CDBE] font-mono text-[10px] tracking-widest uppercase hover:text-[#FAF9F6] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ZoomIn className="w-3 h-3 text-[#A68A64]" />
                        <span>VIEW DETAILS</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-[#A68A64]/20 bg-[#1C1F1E] p-8">
            <Sparkles className="w-8 h-8 text-[#A68A64] mx-auto mb-4 opacity-50" />
            <h3 className="font-display text-2xl text-[#FAF9F6] mb-2">No matching products found</h3>
            <p className="text-sm text-[#D6CDBE]/60 max-w-md mx-auto mb-6">
              We couldn't find any items matching "{searchQuery}". Try searching for another term or selecting "All Products".
            </p>
            <button
              onClick={() => {
                setActiveCategory("All Products");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-[#A68A64] text-[#171918] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

        {/* Custom Order Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-gradient-to-r from-[#1C1F1E] via-[#222524] to-[#1C1F1E] border-2 border-[#A68A64]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A68A64] font-bold block mb-2">
              BESPOKE ORDERS & COMMISSIONS
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-[#FAF9F6] mb-3">
              Need Custom Arc Tuning or Bulk Sets?
            </h3>
            <p className="text-sm text-[#D6CDBE]/80 font-light leading-relaxed">
              Jho Magbal personally consults on custom blade curvatures, specialized gaffer sapin sets, and nationwide shipping arrangements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <a
              href={BUSINESS_DATA.contact.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#A68A64] text-[#171918] font-mono text-xs tracking-widest uppercase font-bold hover:bg-[#FAF9F6] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>MESSAGE JHO MAGBAL</span>
            </a>

            <a
              href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-4 border border-[#A68A64]/50 hover:border-[#A68A64] text-[#FAF9F6] font-mono text-xs tracking-widest uppercase hover:bg-[#171918] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#A68A64]" />
              <span>CALL HOTLINE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Detailed Inspection */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-[#101211]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171918] border-2 border-[#A68A64]/50 p-6 md:p-10 shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 text-[#FAF9F6] hover:text-[#A68A64] transition-colors focus:outline-none"
              aria-label="Close product inspection"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Large Product Image Preview */}
              <div className="relative aspect-square overflow-hidden bg-[#121413] border border-[#A68A64]/30 flex items-center justify-center p-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-contain filter contrast-105"
                />
              </div>

              {/* Product Details Column */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#222524] text-[10px] font-mono tracking-widest text-[#A68A64] uppercase border border-[#A68A64]/30 mb-4">
                    {selectedProduct.category} • {selectedProduct.tag || "Authentic Craft"}
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-medium text-[#FAF9F6] mb-3 leading-snug">
                    {selectedProduct.title}
                  </h3>

                  <p className="text-sm text-[#D6CDBE]/85 font-light leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Product Verification & Specs */}
                  <div className="space-y-2.5 text-xs font-mono text-[#D6CDBE]/70 border-t border-[#A68A64]/20 pt-4 mb-6">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#A68A64]" />
                      <span>MASTER CRAFTSMAN: Jho Magbal</span>
                    </div>
                    <div>PROVENANCE: Handcrafted / Tuned in Cebu City, PH</div>
                    <div>HOTLINE: {BUSINESS_DATA.contact.phone} / {BUSINESS_DATA.contact.secondaryPhone}</div>
                    <div>STATUS: Inquire for availability & specifications</div>
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
    </div>
  );
}
