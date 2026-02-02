'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col md:px-12 border-neutral-900/50 border-b pt-24 pr-6 pl-6 relative justify-center bg-[#030303] overflow-hidden">
        
        {/* Animated Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-ring"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto w-full z-10">
            <div className="mb-10 overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 backdrop-blur-sm shutter-wrapper">
                    <span className="shutter-text text-[10px] mono-font text-indigo-300 uppercase tracking-widest">
                        {t('hero.badge')}
                    </span>
                </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.85] text-white uppercase mb-12 heading-font">
                <div className="shutter-wrapper">
                    <span className="shutter-text bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-neutral-500">{t('hero.heading.line1')}</span>
                </div>
                <div className="shutter-wrapper flex items-center gap-4 md:gap-8">
                    <span className="shutter-text text-neutral-700 italic font-serif">{t('hero.heading.line2')}</span>
                    <div className="h-[2px] w-12 md:w-32 bg-indigo-500 shutter-text"></div>
                </div>
                <div className="shutter-wrapper">
                    <span className="shutter-text bg-clip-text text-transparent bg-gradient-to-br from-neutral-200 to-neutral-600">{t('hero.heading.line3')}</span>
                </div>
            </h1>

            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10 w-full backdrop-blur-sm">
                <div className="max-w-lg text-sm md:text-base text-neutral-400 leading-relaxed mb-8 md:mb-0 shutter-wrapper delay-500">
                    <span className="shutter-text" dangerouslySetInnerHTML={{ __html: t('hero.description') }} />
                </div>

                <Link href="#work" className="group flex items-center gap-6 hover-trigger">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M7 17L17 7"></path>
                                <path d="M7 7h10v10"></path>
                            </svg>
                        </div>
                    </div>
                    <span className="text-xs mono-font uppercase tracking-widest text-neutral-500 group-hover:text-indigo-400 transition-colors">
                        {t('hero.cta')}
                    </span>
                </Link>
            </div>
        </div>
    </section>
  );
}
