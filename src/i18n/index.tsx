import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'zh' | 'en';

interface I18nContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const translations: Record<Language, Record<string, string>> = {
  zh: {
    'site.title': 'heshan',
    'site.subtitle': '探索我的数字产品世界',
    'product.visit': '访问',
    'footer.copyright': '版权所有',
    'footer.madeWith': '用 React + Tailwind CSS 构建',
  },
  en: {
    'site.title': 'Heshan\'s Product Hub',
    'site.subtitle': 'Explore my digital product world',
    'product.visit': 'Visit',
    'footer.copyright': 'All rights reserved',
    'footer.madeWith': 'Built with React + Tailwind CSS',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'en' ? 'en' : 'zh') as Language;
  });

  const setLanguageHandler = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageHandler(language === 'zh' ? 'en' : 'zh');
  }, [language, setLanguageHandler]);

  const t = useCallback((key: string) => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, t, setLanguage: setLanguageHandler, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};