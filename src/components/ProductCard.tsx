import React from 'react';
import { useI18n } from '../i18n';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, language } = useI18n();
  const displayName = language === 'zh' ? product.name : product.nameEn;
  const displayDesc = language === 'zh' ? product.description : product.descriptionEn;

  return (
    <div className="group block bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${product.accentColor}12` }}
      >
        {product.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
        {displayName}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        {displayDesc}
      </p>
      <div className="flex items-center gap-4">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
        >
          <span>{t('product.visit')}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href={product.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};