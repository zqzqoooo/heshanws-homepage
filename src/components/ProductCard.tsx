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
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
        style={{ backgroundColor: `${product.accentColor}15` }}
      >
        {product.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {displayName}
      </h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
        {displayDesc}
      </p>
      <div className="flex items-center text-blue-600 text-sm font-medium">
        <span>{t('product.visit')}</span>
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
};