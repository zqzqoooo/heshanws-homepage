import React from 'react';
import { useI18n } from '../i18n';

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-4 mt-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-gray-400 tracking-wide">
          &copy; {year} heshan. {t('footer.madeWith')}
        </p>
      </div>
    </footer>
  );
};