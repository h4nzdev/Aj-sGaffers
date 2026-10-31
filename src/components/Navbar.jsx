import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (window.__lenis) {
      window.__lenis.scrollTo(href, { offset: -40, duration: 1.2 });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-editorial ${
          isScrolled
            ? 'bg-[#171918]/90 backdrop-blur-md border-b border-[#A68A64]/20 py-4 shadow-2xl'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="AJ's Gaffers & Accessories Home"
          >
            <div className="w-9 h-9 border border-[#A68A64]/60 bg-[#171918]/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-[#A68A64]">
              <span className="font-display text-lg font-normal text-[#A68A64]">AJ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-wider text-[#FAF9F6] font-medium leading-none group-hover:text-[#A68A64] transition-colors">
                AJ'S
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D6CDBE]/70 font-mono mt-1">
                GAFFERS & ACCESSORIES
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {BUSINESS_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-xs uppercase tracking-[0.22em] text-[#D6CDBE]/80 hover:text-[#FAF9F6] transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A68A64] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Facebook Quick Inquire */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS_DATA.contact.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono tracking-widest uppercase border border-[#A68A64]/40 text-[#FAF9F6] hover:bg-[#A68A64] hover:text-[#171918] transition-all duration-300 group"
            >
              <span>FACEBOOK INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A68A64] group-hover:text-[#171918] transition-colors" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FAF9F6] hover:text-[#A68A64] focus:outline-none"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#171918] flex flex-col justify-between p-8 pt-28 transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="text-[10px] tracking-[0.3em] font-mono text-[#A68A64] uppercase border-b border-[#A68A64]/20 pb-3">
            MENU SECTIONS
          </div>
          <nav className="flex flex-col gap-4">
            {BUSINESS_DATA.navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-3xl text-[#FAF9F6] hover:text-[#A68A64] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#A68A64]">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#A68A64]/20 pt-6 flex flex-col gap-4">
          <a
            href={BUSINESS_DATA.contact.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#A68A64] text-[#171918] text-center font-mono text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>MESSAGE US ON FACEBOOK</span>
          </a>
          <div className="text-center text-[10px] uppercase font-mono tracking-widest text-[#D6CDBE]/60">
            {BUSINESS_DATA.brand.originCity}, {BUSINESS_DATA.brand.originCountry} • EST. {BUSINESS_DATA.brand.estYear}
          </div>
        </div>
      </div>
    </>
  );
}
