'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function CapabilitiesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-900/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-medium heading-font tracking-tight text-white mb-2">
            {t('capabilities.title')}
          </h2>
          <p className="text-sm text-neutral-500">{t('capabilities.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Card Large */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl glass-card p-6 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute top-0 right-0 p-40 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-all duration-500"></div>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20">
                <svg className="w-7 h-7 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"></circle>
                    <circle cx="19" cy="5" r="2"></circle>
                    <circle cx="5" cy="5" r="2"></circle>
                    <circle cx="19" cy="19" r="2"></circle>
                    <circle cx="5" cy="19" r="2"></circle>
                    <path d="M7 7l3 3" className="opacity-50"></path>
                    <path d="M17 7l-3 3" className="opacity-50"></path>
                    <path d="M17 17l-3-3" className="opacity-50"></path>
                    <path d="M7 17l3-3" className="opacity-50"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl text-white heading-font mb-3">{t('capabilities.items.multiAgent.title')}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-md">{t('capabilities.items.multiAgent.description')}</p>
              </div>
            </div>
          </div>

          {/* Card Medium Top */}
          <div className="md:col-span-2 rounded-3xl glass-card p-6 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),transparent)]"></div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl text-white heading-font">{t('capabilities.items.security.title')}</h3>
              <div className="p-2 rounded-lg bg-neutral-900/50 border border-white/5">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 11l2 2 4-4" className="opacity-50"></path>
                </svg>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mt-4 group-hover:text-neutral-300 transition-colors" dangerouslySetInnerHTML={{ __html: t('capabilities.items.security.description') }} />
          </div>

          {/* Card Small Bottom Left */}
          <div className="md:col-span-1 rounded-3xl glass-card p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-full h-full flex flex-col justify-between relative z-10">
              <svg className="w-8 h-8 text-neutral-500 group-hover:text-rose-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                  <path d="M19 12h2"></path>
                  <path d="M22 2l-3 3"></path>
                  <path d="M3 2l3 3"></path>
                  <path d="M3 12h2" className="opacity-50"></path>
              </svg>
              <h3 className="text-lg text-white heading-font">{t('capabilities.items.crossPlatform.title')}</h3>
            </div>
          </div>

          {/* Card Small Bottom Right */}
          <div className="md:col-span-1 rounded-3xl glass-card p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-full h-full flex flex-col justify-between relative z-10">
              <svg className="w-8 h-8 text-neutral-500 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                  <path d="M4.93 4.93l14.14 14.14" className="opacity-50"></path>
                  <path d="M4.93 19.07l14.14-14.14" className="opacity-50"></path>
              </svg>
              <h3 className="text-lg text-white heading-font">{t('capabilities.items.globalEdge.title')}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
