'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/${post.locale}/blog/${post.slug}`} className="group block relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-neutral-900">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`${post.category.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm bg-opacity-90 shadow-lg`}>
            {post.category.name}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-500 mono-font">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300 heading-font">
          {post.title}
        </h3>
        
        <p className="text-neutral-400 line-clamp-3 leading-relaxed text-sm">
          {post.excerpt}
        </p>

        <div className="pt-4 flex items-center text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
          Read Article <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
