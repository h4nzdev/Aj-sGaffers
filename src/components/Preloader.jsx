import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Counter object for GSAP
    const counter = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Animate counter from 0 to 100
    tl.to(counter, {
      val: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(counter.val));
      },
    })
    .to('.preloader-content', {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: 'power3.in',
    }, '-=0.2')
    .to(container, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#171918] text-[#FAF9F6] pointer-events-auto"
      aria-label="Loading site"
    >
      {/* Top Header */}
      <div className="preloader-content flex justify-between items-center text-xs tracking-[0.25em] text-[#A68A64] font-mono uppercase">
        <span>AJ'S GAFFERS & ACCESSORIES</span>
        <span>CEBU • 2013</span>
      </div>

      {/* Center Branding */}
      <div className="preloader-content text-center max-w-lg mx-auto">
        <div className="w-16 h-16 mx-auto mb-6 border border-[#A68A64]/40 flex items-center justify-center">
          <span className="font-display font-light text-2xl text-[#A68A64]">AJ</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-light tracking-wide text-[#FAF9F6] mb-3">
          CRAFTED THROUGH EXPERIENCE
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-[#D6CDBE]/70 font-light">
          Heritage Craftsmanship × Cebu, Philippines
        </p>
      </div>

      {/* Bottom Counter */}
      <div className="preloader-content flex justify-between items-end border-t border-[#A68A64]/20 pt-4">
        <div className="text-[11px] tracking-widest text-[#D6CDBE]/60 uppercase font-mono">
          INITIALIZING ARCHIVE
        </div>
        <div className="font-mono text-3xl md:text-5xl font-light text-[#A68A64] tracking-tight">
          {progress.toString().padStart(2, '0')}%
        </div>
      </div>
    </div>
  );
}
