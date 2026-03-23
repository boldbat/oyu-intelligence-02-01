'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLatestPosts } from '@/lib/blog-service';
import { BlogPost } from '@/types/blog';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';

export default function FeaturedNewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load posts (using latest for now, or filtered by 'featured' if we had a lot)
    const loadPosts = async () => {
      const data = await getLatestPosts(locale);
      setPosts(data.slice(0, 3)); // Take top 3
    };
    loadPosts();
  }, [locale]);

  useEffect(() => {
    if (posts.length === 0) return;
    
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
       gsap.from(".news-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
        }
       });
    }, containerRef);

    return () => ctx.revert();
  }, [posts]);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
                 <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-4">
                    {t('news.badge') || 'LATEST INSIGHTS'}
                 </h2>
                 <p className="text-4xl md:text-5xl font-medium heading-font text-white leading-tight">
                    {t('news.title') || 'Intelligence In Motion'}
                 </p>
            </div>
            <Link 
                href={`/${locale}/blog`}
                className="group flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
                {t('news.viewAll') || 'View All Articles'}
                <div className="w-8 h-[1px] bg-neutral-700 group-hover:bg-white transition-colors group-hover:w-12 transition-all" />
            </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => (
                <div key={post.id} className="news-card">
                    <BlogCard post={post} />
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
