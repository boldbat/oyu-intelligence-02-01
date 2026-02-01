'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MarqueeSection() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".marquee-content", {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: ".marquee-container",
                scrub: 1.5
            }
        });
    }, []);

    return (
        <div className="py-16 bg-[#030303] overflow-hidden whitespace-nowrap border-b border-neutral-900/50 marquee-container relative z-10">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
            
            <div className="inline-flex items-center gap-16 marquee-content opacity-50 hover:opacity-100 transition-opacity duration-500">
                <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">Next.js</span>
                <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:from-indigo-400 hover:to-indigo-900 transition-all">React</span>
                <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">Node.js</span>
                <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:from-cyan-400 hover:to-cyan-900 transition-all">Python</span>
                <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">TypeScript</span>
                <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 tracking-tighter heading-font uppercase stroke-text hover:from-emerald-400 hover:to-emerald-900 transition-all">PostgreSQL</span>
                 <span className="text-7xl md:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900 tracking-tighter heading-font uppercase stroke-text hover:from-white hover:to-neutral-400 transition-all">Docker</span>
            </div>
        </div>
    );
}
