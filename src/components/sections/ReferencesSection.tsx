'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const references = [
  {
    name: 'Wang OK',
    role: 'Singer, 88rising',
    quote: '"Exceeded our expectations."',
    quoteColor: 'text-indigo-500/50 group-hover:text-indigo-400',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Ahmet YURDAKUL',
    role: 'Data Scientist, HubX',
    quote: '"A game-changer."',
    quoteColor: 'text-cyan-500/50 group-hover:text-cyan-400',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'David Wilson',
    role: 'Founder, StartUp Ventures',
    quote: '"True technology partner."',
    quoteColor: 'text-emerald-500/50 group-hover:text-emerald-400',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function ReferencesSection() {
  const trailWrapperRef = useRef<HTMLDivElement>(null);
  const trailImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const trailWrapper = trailWrapperRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (trailWrapper) {
        gsap.to(trailWrapper, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = (imgUrl: string) => {
    if (trailImgRef.current && trailWrapperRef.current) {
      trailImgRef.current.src = imgUrl;
      gsap.to(trailWrapperRef.current, { opacity: 1, scale: 1, rotate: 0, duration: 0.4 });
    }
  };

  const handleMouseLeave = () => {
    if (trailWrapperRef.current) {
      gsap.to(trailWrapperRef.current, { opacity: 0, scale: 0.8, rotate: -5, duration: 0.4 });
    }
  };

  return (
    <>
      <section className="py-32 px-6 md:px-12 bg-[#030303] border-b border-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-20 items-end">
            <h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white">
              References
            </h2>
            <p className="text-sm mono-font text-neutral-500 uppercase mt-4 md:mt-0">
              [ Trusted By ]
            </p>
          </div>

          <div className="flex flex-col border-t border-neutral-800/50">
            {references.map((ref, index) => (
              <div 
                key={index}
                className="team-item py-16 border-b border-neutral-800/50 flex justify-between items-center group cursor-pointer hover-trigger transition-all duration-300 hover:pl-8"
                onMouseEnter={() => handleMouseEnter(ref.image)}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-4xl md:text-6xl font-medium text-neutral-500 group-hover:text-white transition-colors heading-font">
                  {ref.name}
                </h3>
                <span className="text-xs mono-font uppercase text-neutral-600 group-hover:text-neutral-400 text-right">
                  {ref.role}<br /><span className={ref.quoteColor}>{ref.quote}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Trail Container */}
      <div ref={trailWrapperRef} className="trail-img-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          ref={trailImgRef} 
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
          alt="" 
          className="trail-img" 
        />
      </div>
    </>
  );
}
