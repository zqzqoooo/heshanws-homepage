import React from 'react';
import { useI18n } from '../i18n';

export const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage } = useI18n();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-1.5 text-xs font-medium tracking-wider text-gray-500 hover:text-gray-900 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
};