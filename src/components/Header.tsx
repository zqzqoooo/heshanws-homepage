import React from 'react';
import { useI18n } from '../i18n';

export const Header: React.FC = () => {
  const { t } = useI18n();

  return (
    <header className="w-full py-6 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {t('site.title')}
        </h1>
        <p className="mt-2 text-gray-500 text-sm md:text-base">
          {t('site.subtitle')}
        </p>
      </div>
    </header>
  );
};