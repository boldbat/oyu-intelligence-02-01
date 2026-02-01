'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProcessSection() {
  const wrapperRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    let tween: gsap.core.Tween | undefined;

    const initScroll = () => {
      if (window.innerWidth >= 768) {
        tween = gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            end: () => "+=" + (container.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
          }
        });
      }
    };

    initScroll();

    const handleResize = () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (tween) tween.kill();
      gsap.set(container, { clearProps: "all" });
      initScroll();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (tween) tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="process" ref={wrapperRef} className="process-wrapper overflow-hidden bg-[#030303] md:h-screen relative border-b border-neutral-900/50">
      <div ref={containerRef} className="process-container flex flex-col md:flex-row h-auto md:h-full w-full md:w-[400vw]">
        {/* Panel 1 - Discovery */}
        <div className="w-full md:w-screen min-h-[70vh] md:h-full grid grid-cols-1 lg:grid-cols-2 border-b md:border-b-0 md:border-r border-neutral-800/50 relative bg-[#030303]">
          <div className="flex flex-col justify-center px-6 md:px-24 py-20 md:py-0 relative z-10 pointer-events-none">
            <div className="absolute top-8 left-6 md:top-12 md:left-12 text-xs mono-font text-indigo-500 mb-2">PHASE_01</div>
            <h3 className="text-5xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-6 md:mb-8 heading-font">Discovery</h3>
            <p className="text-lg md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
              Deep dive into business logic. Understanding goals, target audience, and defining technical constraints.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/20">
            <div className="relative p-12 border border-neutral-800/50 rounded-2xl bg-black/40 shadow-2xl">
              <div className="grid grid-cols-4 gap-6 opacity-40">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-neutral-600 rounded-full"></div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-scan border-b border-emerald-500/50"></div>
            </div>
          </div>
        </div>

        {/* Panel 2 - Architecture */}
        <div className="w-full md:w-screen min-h-[70vh] md:h-full grid grid-cols-1 lg:grid-cols-2 border-b md:border-b-0 md:border-r border-neutral-800/50 relative bg-[#030303]">
          <div className="flex flex-col justify-center px-6 md:px-24 py-20 md:py-0 relative z-10 pointer-events-none">
            <div className="absolute top-8 left-6 md:top-12 md:left-12 text-xs mono-font text-cyan-500 mb-2">PHASE_02</div>
            <h3 className="text-5xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-6 md:mb-8 heading-font">Architecture</h3>
            <p className="text-lg md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
              Blueprinting the system. Designing scalable schemas, API contracts, and choosing the right stack.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/20">
            <div className="relative w-96 h-96 flex items-center justify-center">
              <div className="absolute inset-0 border border-neutral-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-12 border border-dashed border-neutral-700 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="w-24 h-24 bg-neutral-900 border border-cyan-500/30 rounded-xl flex items-center justify-center z-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3 - Development */}
        <div className="w-full md:w-screen min-h-[70vh] md:h-full grid grid-cols-1 lg:grid-cols-2 border-b md:border-b-0 md:border-r border-neutral-800/50 relative bg-[#030303]">
          <div className="flex flex-col justify-center px-6 md:px-24 py-20 md:py-0 relative z-10 pointer-events-none">
            <div className="absolute top-8 left-6 md:top-12 md:left-12 text-xs mono-font text-purple-500 mb-2">PHASE_03</div>
            <h3 className="text-5xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-6 md:mb-8 heading-font">Development</h3>
            <p className="text-lg md:text-2xl text-neutral-400 max-w-xl font-light leading-relaxed">
              Rigorous coding sprints. Continuous integration, automated testing, and pixel-perfect implementation.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center relative border-l border-neutral-800/50 overflow-hidden bg-neutral-900/20">
            <div className="relative flex items-center gap-8">
              <div className="w-14 h-14 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
              </div>
              <div className="w-32 h-[1px] bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2 animate-data-flow"></div>
              </div>
              <div className="w-24 h-24 rounded-2xl border border-purple-500/30 bg-neutral-900 flex items-center justify-center relative shadow-[0_0_40px_-5px_rgba(168,85,247,0.3)] z-10">
                <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="w-32 h-[1px] bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2 animate-data-flow" style={{ animationDelay: '.5s' }}></div>
              </div>
              <div className="w-14 h-14 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 4 - Ready CTA */}
        <div className="w-full md:w-screen min-h-[50vh] md:h-full flex items-center justify-center relative bg-white text-black py-20 md:py-0">
          <div className="text-center relative z-10">
            <h3 className="text-6xl md:text-[10rem] font-semibold tracking-tighter mb-8 md:mb-10 heading-font">
              Ready?
            </h3>
            <Link 
              href="mailto:oyu.intelligence@icloud.com" 
              className="px-8 md:px-10 py-4 md:py-5 bg-black text-white rounded-full text-xs md:text-sm mono-font uppercase tracking-widest hover:scale-105 transition-transform hover-trigger inline-block hover:shadow-2xl hover:shadow-black/20"
            >
              Initialize Project
            </Link>
          </div>
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
      </div>
    </section>
  );
}
