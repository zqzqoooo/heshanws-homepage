export interface Product {
  id: string;
  name: string;
  nameEn: string;
  subdomain: string;
  url: string;
  githubUrl: string;
  description: string;
  descriptionEn: string;
  icon: string;
  accentColor: string;
}

export const products: Product[] = [
  {
    id: 'highlandgame',
    name: 'Highland Games',
    nameEn: 'Highland Games',
    subdomain: 'highlandgame',
    url: 'https://highlandgame.heshanws.top',
    githubUrl: 'https://github.com/zqzqoooo/IT_CW2_Highland_Games',
    description: '使用 Vue.js 的 IT 课程 CW2 作业，前后端分离，管理员可通过后台可视化实时更新网站内容。',
    descriptionEn: 'Vue.js-based IT course CW2 assignment with frontend-backend separation, allowing admins to update site content in real-time via dashboard.',
    icon: '🏋️',
    accentColor: '#8B5CF6'
  },
  {
    id: 'portfolioanalyzer',
    name: 'Portfolio Analyzer',
    nameEn: 'Portfolio Analyzer',
    subdomain: 'portfolioanalyzer',
    url: 'https://portfolioanalyzer.heshanws.top',
    githubUrl: 'https://github.com/zqzqoooo/portfolio-analyzer',
    description: '股票管理系统，使用 React 18.x + TypeScript 5.x + Vite 5.x + Tailwind CSS 4.x，可获取名称与实时价格信息。',
    descriptionEn: 'Stock management system built with React 18.x, TypeScript 5.x, Vite 5.x, and Tailwind CSS 4.x with real-time price data.',
    icon: '📊',
    accentColor: '#10B981'
  },
  {
    id: 'quickman',
    name: 'QuickMan',
    nameEn: 'QuickMan',
    subdomain: 'quickman',
    url: 'https://quickman.heshanws.top',
    githubUrl: 'https://github.com/zqzqoooo/quickman-dashboard',
    description: 'Dynamic Web Technology CW1 的网络看板部分，整体项目为本地优先、双向同步的小型设备管理系统。',
    descriptionEn: 'Dashboard part of Dynamic Web Technology CW1, a local-first device management system with bidirectional sync.',
    icon: '⚡',
    accentColor: '#F59E0B'
  },
  {
    id: 'quickshare',
    name: 'QuickShare',
    nameEn: 'QuickShare',
    subdomain: 'quickshare',
    url: 'https://quickshare.heshanws.top',
    githubUrl: 'https://github.com/zqzqoooo/SSS-CW2-QuickShare',
    description: '使用 Laravel 的文件快速分享平台，适用于小文件快速分享，无需下载特定软件。',
    descriptionEn: 'Laravel-based fast file sharing platform for small files, no special software required.',
    icon: '🚀',
    accentColor: '#EF4444'
  }
];