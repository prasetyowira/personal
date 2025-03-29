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
    // Welcome component translations
    'terminal.whoami': 'Wira - Senior Backend Engineer @ Sea',
    'terminal.uname': 'Human v3.5 Coffee-Powered x86_64',
    'terminal.about': '9+ years of experience in software engineering.\nFluent in Golang, Python, and NodeJS.\nPassionate about building scalable microservices and distributed systems.\nCurrently learning Rust.',
    'skills.loading': 'Loading skills',
    'skills.command': 'ls -la | more',
    'projects.loading': 'Loading projects',
    'projects.command': 'ls | grep featured | head -2',
    'contact.command': 'cat contact_info.md',
    'contact.title': '## Contact Information',
    'contact.email': 'Email:',
    'contact.github': 'GitHub:',
    'contact.linkedin': 'LinkedIn:',
    'contact.work': 'Want to work together or just have a chat?',
    'contact.message': 'Click here to send me a message',
    'view.details': 'view details',
    'view.more.projects': 'view more projects',
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
    // Welcome component translations
    'terminal.whoami': 'ウィラ - シニアバックエンドエンジニア @ Sea',
    'terminal.uname': 'ヒューマン v3.5 コーヒー駆動 x86_64',
    'terminal.about': 'ソフトウェアエンジニアとして9年以上の経験。\nGolang、Python、NodeJSに精通。\nスケーラブルなマイクロサービスと分散システムの構築に情熱を持つ。\n現在、Rustを学習中。',
    'skills.loading': 'スキルを読み込み中',
    'skills.command': 'ls -la | more',
    'projects.loading': 'プロジェクトを読み込み中',
    'projects.command': 'ls | grep featured | head -2',
    'contact.command': 'cat contact_info.md',
    'contact.title': '## 連絡先情報',
    'contact.email': 'メール：',
    'contact.github': 'GitHub：',
    'contact.linkedin': 'LinkedIn：',
    'contact.work': '一緒に仕事をしたい、または単にチャットしたいですか？',
    'contact.message': 'ここをクリックしてメッセージを送信',
    'view.details': '詳細を見る',
    'view.more.projects': 'もっと見る',
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