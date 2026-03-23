'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { t, locale } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const workLink = isHome ? '#work' : `/${locale}#work`;

  const handleWorkClick = (event: Parameters<NonNullable<React.ComponentProps<typeof Link>['onClick']>>[0]) => {
    if (!isHome) return;

    event.preventDefault();
    const workSection = document.getElementById('work');
    if (!workSection) return;

    const navOffset = 120;
    const targetTop = workSection.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
  };

  // Helper to build links
  const getLink = (hash: string) => {
    return isHome ? hash : `/${locale}${hash}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 pt-6">
            <div className="rounded-full border border-white/5 backdrop-blur-md px-6 py-4 flex items-center justify-between bg-black/40 transition-all duration-300 hover:border-white/10 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {/* Left Logo */}
                <Link href={`/${locale}`} className="flex items-center gap-2 group">
                    <div className="w-2 h-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm transition-transform group-hover:rotate-45"></div>
                    <span className="text-sm font-semibold tracking-tight heading-font text-white group-hover:text-indigo-400 transition-colors">OYU / INTELLIGENCE</span>
                </Link>

                {/* Middle Nav */}
                <div className="hidden md:flex gap-8 text-[11px] mono-font uppercase tracking-widest text-neutral-400">
                    <Link href={getLink('#about')} className="hover:text-indigo-400 transition-colors hover-trigger relative group">
                        {t('navigation.services')}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href={workLink} onClick={handleWorkClick} className={`transition-colors hover-trigger relative group ${pathname.includes('/projects') ? 'text-white' : 'hover:text-emerald-400'}`}>
                        {t('navigation.work')}
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-emerald-500 transition-all ${pathname.includes('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link href={`/${locale}/blog`} className={`transition-colors hover-trigger relative group ${pathname.includes('/blog') ? 'text-white' : 'hover:text-amber-400'}`}>
                        {t('navigation.blog')}
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-amber-500 transition-all ${pathname.includes('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link href={getLink('#process')} className="hover:text-rose-400 transition-colors hover-trigger relative group">
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

