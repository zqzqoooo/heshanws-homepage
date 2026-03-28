import React from 'react';
import { useI18n } from '../i18n';

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
        <p>
          &copy; {year} heshanws.top {t('footer.copyright')}
        </p>
        <p className="mt-1">
          {t('footer.madeWith')}
        </p>
      </div>
    </footer>
  );
};