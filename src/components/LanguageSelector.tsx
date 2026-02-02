'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage, Locale } from '@/contexts/LanguageContext';

const languages: { code: Locale; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'mn', name: 'Mongolian', nativeName: 'Монгол', flag: '🇲🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
];

export default function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const handleLanguageSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  return (
    <>
      {/* Floating Globe Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Change language"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button */}
          <div className="relative w-14 h-14 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-indigo-500/50 group-hover:bg-neutral-800/80 transition-all duration-300 hover:scale-110">
            {/* Globe Icon */}
            <svg 
              className="w-6 h-6 text-neutral-400 group-hover:text-indigo-400 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            
            {/* Current Locale Badge */}
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[9px] font-bold uppercase bg-indigo-600 text-white rounded-full">
              {locale.toUpperCase()}
            </span>
          </div>
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            className="relative bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-white heading-font">{t('languageSelector.title')}</h2>
              <p className="text-sm text-neutral-500 mt-1">{t('languageSelector.subtitle')}</p>
            </div>

            {/* Language Options */}
            <div className="grid grid-cols-1 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left group ${
                    locale === lang.code
                      ? 'bg-indigo-500/10 border-indigo-500/50 text-white'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Flag */}
                  <span className="text-3xl">{lang.flag}</span>
                  
                  {/* Names */}
                  <div className="flex-1">
                    <div className="font-medium">{lang.name}</div>
                    <div className="text-sm text-neutral-500">{lang.nativeName}</div>
                  </div>
                  
                  {/* Checkmark */}
                  {locale === lang.code && (
                    <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
