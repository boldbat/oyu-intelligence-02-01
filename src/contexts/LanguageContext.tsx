'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

import en from '@/locales/en.json';
import mn from '@/locales/mn.json';
import ja from '@/locales/ja.json';

type TranslationData = typeof en;
type Locale = 'en' | 'mn' | 'ja';

const translations: Record<Locale, TranslationData> = { en, mn, ja };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  translations: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested value from object using dot notation
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return the key if path not found
    }
  }
  
  return current;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale = 'en' }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [currentTranslations, setCurrentTranslations] = useState<TranslationData>(translations[initialLocale]);

  useEffect(() => {
    // Update translations when locale changes
    setCurrentTranslations(translations[locale]);
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    
    // Update cookie
    document.cookie = `NEXT_LOCALE=${newLocale};max-age=${60 * 60 * 24 * 365};path=/;samesite=lax`;
    
    // Navigate to new locale path
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|mn|ja)/, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    
    window.location.href = newPath;
  }, []);

  const t = useCallback((key: string): string => {
    const value = getNestedValue(currentTranslations as unknown as Record<string, unknown>, key);
    return typeof value === 'string' ? value : key;
  }, [currentTranslations]);

  const tArray = useCallback((key: string): string[] => {
    const value = getNestedValue(currentTranslations as unknown as Record<string, unknown>, key);
    return Array.isArray(value) ? value : [];
  }, [currentTranslations]);

  const value: LanguageContextType = {
    locale,
    setLocale,
    t,
    tArray,
    translations: currentTranslations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export type { Locale, TranslationData };
