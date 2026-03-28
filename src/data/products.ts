export interface Product {
  id: string;
  name: string;
  nameEn: string;
  subdomain: string;
  url: string;
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
    description: '高地运动会 - IT课程作业实例页面',
    descriptionEn: 'Highland Games - IT course assignment page',
    icon: '🏋️',
    accentColor: '#8B5CF6'
  },
  {
    id: 'portfolioanalyzer',
    name: 'Portfolio Analyzer',
    nameEn: 'Portfolio Analyzer',
    subdomain: 'portfolioanalyzer',
    url: 'https://portfolioanalyzer.heshanws.top',
    description: '投资组合分析工具 - 智能分析您的投资配置',
    descriptionEn: 'Investment portfolio analysis tool',
    icon: '📊',
    accentColor: '#10B981'
  },
  {
    id: 'quickman',
    name: 'QuickMan',
    nameEn: 'QuickMan',
    subdomain: 'quickman',
    url: 'https://quickman.heshanws.top',
    description: '设备管理看板 - 设备管理系统可视化页面',
    descriptionEn: 'Equipment management dashboard',
    icon: '⚡',
    accentColor: '#F59E0B'
  },
  {
    id: 'quickshare',
    name: 'QuickShare',
    nameEn: 'QuickShare',
    subdomain: 'quickshare',
    url: 'https://quickshare.heshanws.top',
    description: '快速分享平台 - 便捷的文件与内容分享服务',
    descriptionEn: 'Fast file and content sharing platform',
    icon: '🚀',
    accentColor: '#EF4444'
  }
];