import React from 'react';
import { useI18n } from '../i18n';

export const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage } = useI18n();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
};