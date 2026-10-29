/**
 * Vite configuration.
 * - React plugin for JSX and fast refresh.
 * - Tailwind CSS v4 plugin (no PostCSS config or tailwind.config.js needed).
 * - Two HTML entry points: the landing page and a static 404 page,
 *   which Netlify serves automatically for unknown URLs.
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
      },
    },
  },
});
