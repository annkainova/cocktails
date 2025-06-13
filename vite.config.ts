import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> | false = {
  theme_color: '#b7f0e6',
  background_color: '#2EC6FE',
  icons: [
    {
      purpose: 'maskable',
      sizes: '512x512',
      src: 'icon512_maskable.png',
      type: 'image/png',
    },
    {
      purpose: 'any',
      sizes: '512x512',
      src: 'icon512_rounded.png',
      type: 'image/png',
    },
  ],
  orientation: 'any',
  display: 'standalone',
  lang: 'ru-RU',
  name: 'our PWA-app',
  short_name: 'PWA-app',
  start_url: '/',
  // TODO: add screenshots
  // screenshots: [
  //   {
  //     src: '/screenshots/desktop.png',
  //     type: 'image/png',
  //     sizes: '3718x1648',
  //     form_factor: 'wide',
  //   },
  //   {
  //     src: '/screenshots/mobile.png',
  //     type: 'image/png',
  //     sizes: '1170x2532',
  //     form_factor: 'narrow',
  //   },
  // ],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{html,css,js,png,svg}'],
      },
      manifest: manifest,
    }),
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
    },
  },
});
