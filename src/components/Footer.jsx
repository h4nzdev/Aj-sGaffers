import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Layers } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();

    if (link.label === "Products" || link.href === "/products") {
      navigate('/products');
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${link.href}`);
      setTimeout(() => {
        const target = document.querySelector(link.href);
        if (target) {
          if (window.__lenis) {
            window.__lenis.scrollTo(link.href, { offset: -40, duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      return;
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(link.href, { offset: -40, duration: 1.2 });
    } else {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#101211] text-[#F3F0E9] border-t border-[#A68A64]/20 relative overflow-hidden">
      {/* Background Monogram Watermark */}
      <div 
        className="absolute -right-12 -bottom-20 text-[260px] font-display font-bold text-[#A68A64]/[0.025] select-none pointer-events-none" 
        aria-hidden="true"
      >
        AJ
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#A68A64]/15">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 inline-block">
                <div className="w-10 h-10 border border-[#A68A64]/60 bg-[#171918] flex items-center justify-center">
                  <span className="font-display text-xl text-[#A68A64]">AJ</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-wide text-[#FAF9F6]">
                    AJ'S GAFFERS & ACCESSORIES
                  </h3>
                  <p className="text-[10px] font-mono tracking-[0.25em] text-[#A68A64] uppercase">
                    ESTABLISHED 2013 • CEBU, PHILIPPINES
                  </p>
                </div>
              </Link>

              <p className="font-serif text-lg italic text-[#D6CDBE]/80 max-w-sm mb-6 leading-relaxed">
                “Crafted through experience. Rooted in Cebu's tradition of precision metalcraft and dedicated service.”
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A68A64]">
              <span className="w-2 h-2 rounded-full bg-[#A68A64] animate-pulse"></span>
              <span>VERIFIED CEBU ATELIER • JHO MAGBAL</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono tracking-[0.28em] text-[#A68A64] uppercase mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {BUSINESS_DATA.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm text-[#D6CDBE]/80 hover:text-[#FAF9F6] transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm text-[#A68A64] hover:text-[#FAF9F6] transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Full Products Page</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Inquiries & Social */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-mono tracking-[0.28em] text-[#A68A64] uppercase mb-6">
                OFFICIAL INQUIRY
              </h4>
              <p className="text-xs text-[#D6CDBE]/70 mb-5 leading-relaxed font-light">
                Direct all business consultations, custom blade specifications, and product availability to our verified Facebook presence or hotline.
              </p>

              <a
                href={BUSINESS_DATA.contact.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 border border-[#A68A64]/30 hover:border-[#A68A64] bg-[#171918]/60 transition-all duration-300 group shadow-md"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A68A64]">
                    OFFICIAL FACEBOOK
                  </div>
                  <div className="text-sm font-medium text-[#FAF9F6] mt-0.5">
                    {BUSINESS_DATA.contact.facebook.displayName}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A68A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-[#A68A64]/10 text-xs font-mono text-[#D6CDBE]/60 flex items-center justify-between">
              <span>LOCATION: CEBU CITY, PH</span>
              <span className="text-[#A68A64] font-semibold">{BUSINESS_DATA.contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D6CDBE]/50">
          <div>
            © {BUSINESS_DATA.brand.estYear}–{new Date().getFullYear()} {BUSINESS_DATA.brand.name}. All Rights Reserved.
          </div>

          <div className="text-[11px] text-center md:text-right">
            Master Gaffer Craftsman Jho Magbal • Cebu City
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] tracking-widest uppercase hover:text-[#A68A64] transition-colors focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
