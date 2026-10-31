import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  parallax = true,
  scaleEffect = true,
  overlay = true,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const curtainRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    const curtain = curtainRef.current;
    if (!container || !img) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      if (curtain) {
        tl.to(curtain, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.2,
          ease: 'power3.inOut',
        });
      }

      if (scaleEffect) {
        tl.fromTo(
          img,
          { scale: 1.2 },
          { scale: 1.0, duration: 1.6, ease: 'power2.out' },
          0
        );
      }

      if (parallax) {
        gsap.to(img, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [parallax, scaleEffect]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#171918] ${aspectRatio} ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover will-change-transform"
      />
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#171918]/60 via-transparent to-transparent pointer-events-none" 
          aria-hidden="true" 
        />
      )}

      {/* Wipe Curtain */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-[#171918] z-10 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
