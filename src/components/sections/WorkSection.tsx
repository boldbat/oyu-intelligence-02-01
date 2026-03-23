'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WorkSection() {
  const { t, tArray, locale } = useLanguage();

  const works = [
    {
      titleKey: 'oyuAi',
      slug: 'oyu-ai-platform',
      image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2940&auto=format&fit=crop', // Futuristic AI Brain/Network
      tagsKey: 'oyuAiTags',
      color: 'indigo',
      top: '24',
    },
    {
      titleKey: 'astroAi',
      slug: 'astro-ai-analytics',
      image: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?q=80&w=2940&auto=format&fit=crop', // Deep Space/Astronomy Data
      tagsKey: 'astroAiTags',
      color: 'purple',
      top: '32',
    },
    {
      titleKey: 'lookLuxeAi',
      slug: 'lookluxe-ai-fashion',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop', // Fashion/Luxury aesthetics
      tagsKey: 'lookLuxeAiTags',
      color: 'rose',
      top: '40',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-[#030303] border-t border-neutral-900/50">
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-medium heading-font tracking-tight text-white">
          {t('work.title')}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative space-y-24 md:space-y-64 pb-24 md:pb-64">
        {works.map((work, index) => {
          const tags = tArray(`work.items.${work.tagsKey}`);
          return (
            <Link
              key={index} 
              href={`/${locale}/projects/${work.slug}`}
              className="sticky block work-card group hover-trigger"
              style={{ 
                top: `${6 + index * 3}rem`,
                zIndex: index + 1
              }}
            >
              <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden aspect-video relative shadow-2xl shadow-black transform-gpu will-change-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={work.image} 
                  alt={t(`work.items.${work.titleKey}`)}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div>
                      <h3 className="text-3xl font-medium text-white mb-2 heading-font">{t(`work.items.${work.titleKey}`)}</h3>
                      <div className={`flex gap-2 text-xs mono-font text-${work.color}-300`}>
                        {tags.map((tag, i) => (
                          <span key={i} className={`bg-${work.color}-900/30 border border-${work.color}-500/30 px-2 py-1 rounded`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
