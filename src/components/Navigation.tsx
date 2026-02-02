'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 pt-6">
            <div className="rounded-full border border-white/5 backdrop-blur-md px-6 py-4 flex items-center justify-between bg-black/40 transition-all duration-300 hover:border-white/10 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {/* Left Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm"></div>
                    <span className="text-sm font-semibold tracking-tight heading-font text-white">OYU / INTELLIGENCE</span>
                </div>

                {/* Middle Nav */}
                <div className="hidden md:flex gap-8 text-[11px] mono-font uppercase tracking-widest text-neutral-400">
                    <Link href="#about" className="hover:text-indigo-400 transition-colors hover-trigger relative group">
                        {t('navigation.services')}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#metrics" className="hover:text-cyan-400 transition-colors hover-trigger relative group">
                        {t('navigation.solutions')}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#work" className="hover:text-emerald-400 transition-colors hover-trigger relative group">
                        {t('navigation.work')}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#process" className="hover:text-rose-400 transition-colors hover-trigger relative group">
                        {t('navigation.process')}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-500 transition-all group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Right Status */}
                <div className="flex items-center gap-3 text-[10px] mono-font uppercase tracking-wider text-neutral-500 bg-neutral-900/50 px-3 py-1.5 rounded-full border border-white/5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-neutral-300">{t('navigation.systemVersion')}</span>
                </div>
            </div>
        </div>
    </nav>
  );
}
