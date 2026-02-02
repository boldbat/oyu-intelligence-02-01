'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ZoomMaskSection() {
  const wrapperRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const wrapper = wrapperRef.current;
    const circle = circleRef.current;
    if (!wrapper || !circle) return;

    const tween = gsap.to(circle, {
      scale: 500,
      borderRadius: "0%",
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={wrapperRef} className="zoom-wrapper h-[200vh] relative bg-[#030303]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div ref={circleRef} className="zoom-circle w-1 h-1 rounded-full overflow-hidden relative z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=3000&auto=format&fit=crop" 
            alt="Footer Visual" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h3 className="text-white text-5xl md:text-7xl heading-font font-medium tracking-tight">{t('zoomMask.title')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
