// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

// When deploying to GitHub Pages at https://<user>.github.io/<repo>/ set:
//   site: 'https://<user>.github.io', base: '/<repo>'
// For a user/organization page or custom domain, keep base as '/'.
const SITE = process.env.SITE_URL || 'https://example.github.io';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.png'],
      manifest: {
        name: 'Agri Sathi — Farming Companion',
        short_name: 'Agri Sathi',
        description:
          'Offline-first crop encyclopedia, crop calendar, pest management and fertiliser guidance for Indian farmers.',
        theme_color: '#1f7a3d',
        background_color: '#f7f5ef',
        display: 'standalone',
        start_url: BASE,
        scope: BASE,
        lang: 'en',
        categories: ['education', 'productivity', 'utilities'],
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{html,js,css,svg,woff2,json,webmanifest}'],
        navigateFallback: `${BASE}en/`,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'agri-sathi-images',
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 60 },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
});
