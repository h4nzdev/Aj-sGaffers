import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  stagger = 0.08,
  threshold = 'top 85%',
  once = true,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into words while keeping spaces
    const words = el.querySelectorAll('.reveal-word');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 110,
          opacity: 0,
          rotateZ: 1.5,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1.1,
          ease: 'power3.out',
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: threshold,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, threshold, once, children]);

  // Break string children into span wrappers
  const renderContent = () => {
    if (typeof children !== 'string') {
      return children;
    }

    const words = children.split(' ');
    return words.map((word, index) => (
      <span key={index} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.28em] align-top">
        <span className="reveal-word inline-block will-change-transform">
          {word}
        </span>
      </span>
    ));
  };

  return (
    <Component ref={containerRef} className={className}>
      {renderContent()}
    </Component>
  );
}
