'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ManifestoSection() {
  const manifestoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const manifesto = manifestoRef.current;
    if (!manifesto) return;

    // Save original text if not already processed
    if (!manifesto.dataset.processed) {
      const text = manifesto.innerText;
      manifesto.innerHTML = "";
      manifesto.dataset.processed = "true";
      
      text.split(" ").forEach(word => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.opacity = "0.2";
        span.style.filter = "blur(8px)";
        span.style.display = "inline-block";
        span.style.willChange = "transform, opacity, filter";
        span.style.transform = "translateY(10px)";
        manifesto.appendChild(span);
      });
    }

    const spans = manifesto.querySelectorAll("span");
    
    const ctx = gsap.context(() => {
        gsap.to(spans, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            color: "#ffffff",
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: manifesto,
                start: "top 85%",
                end: "bottom 45%",
                scrub: 1,
            }
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-40 px-6 bg-[#030303] flex items-center justify-center border-t border-b border-neutral-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-900/5 blur-[100px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p 
          ref={manifestoRef}
          className="text-4xl md:text-6xl font-medium leading-[1.2] tracking-tight heading-font text-neutral-600"
        >
          We don&apos;t just build systems. We architect intelligence that scales, automate frameworks that save time, and build interfaces that users actually enjoy. In a world of digital noise, innovation is our currency.
        </p>
      </div>
    </section>
  );
}
