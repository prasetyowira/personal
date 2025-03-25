import { getRelativeLocaleUrl } from 'astro:i18n';

// UI translations object
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.welcome': 'Welcome to my terminal portfolio',
    'language.en': 'English',
    'language.ja': 'Japanese',
    'readMore': 'Read More →',
    'viewProject': 'View Project →',
    'backToAllPosts': 'Back to All Posts',
    'publishedOn': 'Published on',
    'updatedOn': 'Updated on',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.projects': 'プロジェクト',
    'nav.blog': 'ブログ',
    'nav.about': '自己紹介',
    'nav.contact': 'お問い合わせ',
    'nav.welcome': 'ターミナルポートフォリオへようこそ',
    'language.en': '英語',
    'language.ja': '日本語',
    'readMore': '続きを読む →',
    'viewProject': 'プロジェクトを見る →',
    'backToAllPosts': 'すべての記事に戻る',
    'publishedOn': '公開日',
    'updatedOn': '更新日',
  },
};

// Get translation function for a given locale
export function useTranslations(locale: string) {
  return function t(key: keyof typeof ui.en | keyof typeof ui.ja) {
    return ui[locale as keyof typeof ui][key] || key;
  };
}

// Helper to get localized URLs
export function getLocalizedUrl(locale: string, path: string = '') {
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return getRelativeLocaleUrl(locale, cleanPath);
} 