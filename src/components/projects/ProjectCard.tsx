'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { locale } = useLanguage();

  return (
    <Link 
      href={`/${locale}/projects/${project.slug}`}
      className="group block relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover-trigger"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <Image
          src={project.thumbnailImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] mono-font uppercase tracking-widest text-white">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold heading-font flex-1 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        
        <p className="text-neutral-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[9px] mono-font uppercase tracking-tighter px-2 py-1 rounded bg-white/5 text-neutral-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
