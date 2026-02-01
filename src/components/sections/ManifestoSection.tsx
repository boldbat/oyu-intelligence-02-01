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

    const text = manifesto.innerText;
    manifesto.innerHTML = "";
    
    text.split(" ").forEach(word => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      span.style.opacity = "0.1";
      span.style.transition = "opacity 0.3s ease";
      manifesto.appendChild(span);
    });

    const spans = manifesto.querySelectorAll("span");
    gsap.to(spans, {
      opacity: 1,
      color: "#ffffff",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#manifesto",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-40 px-6 bg-[#030303] flex items-center justify-center border-t border-b border-neutral-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <p 
          id="manifesto" 
          ref={manifestoRef}
          className="text-4xl md:text-6xl font-medium leading-[1.15] tracking-tight heading-font text-neutral-300"
        >
          We don&apos;t just build systems. We architect intelligence that scales, automate frameworks that save time, and build interfaces that users actually enjoy. In a world of digital noise, innovation is our currency.
        </p>
      </div>
    </section>
  );
}
