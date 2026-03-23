'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { ArrowRight } from 'lucide-react';

interface Props {
  post: BlogPost;
  label?: string; // e.g. "Featured Insight"
}

export default function FeaturedPost({ post, label = "Featured Insight" }: Props) {
  return (
    <div className="relative w-full border-b border-white/10 pb-12 mb-12 lg:mb-20">
      <Link href={`/${post.locale}/blog/${post.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Helper Label Mobile */}
        <div className="lg:hidden text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">
          {label}
        </div>

        {/* Image Side */}
        <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900 order-2 lg:order-1">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <div className="hidden lg:block text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
             {label}
          </div>
          
          <div className="mb-6 flex items-center gap-3">
             <span className={`${post.category.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
              {post.category.name}
            </span>
            <span className="text-neutral-500 text-sm mono-font border-l border-white/10 pl-3">
              {post.date}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 group-hover:text-blue-400 transition-colors duration-300 heading-font tracking-tight">
            {post.title}
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
            {post.excerpt}
          </p>

          <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
             Read Full Story <ArrowRight className="ml-3 w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
