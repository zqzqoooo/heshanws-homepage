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
      className="group block bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
    >
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
      <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
        <span>{t('product.visit')}</span>
        <svg
          className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
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