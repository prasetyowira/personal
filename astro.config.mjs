// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain
  site: 'https://ariwira.me',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false // Default language won't show in the URL
    }
  },
  output: 'server',
  adapter: vercel(),
  integrations: [
    vue(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
    }),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ja: 'ja-JP',
        },
      },
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});