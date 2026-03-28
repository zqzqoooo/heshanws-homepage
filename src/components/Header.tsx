import React from 'react';
import { useI18n } from '../i18n';

export const Header: React.FC = () => {
  const { t } = useI18n();

  return (
    <header className="w-full pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm md:text-base text-gray-400 tracking-wide uppercase mb-4">
          heshan
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
          {t('site.title')}
        </h1>
        <p className="mt-4 text-lg text-gray-500 font-light">
          {t('site.subtitle')}
        </p>
      </div>
    </header>
  );
};