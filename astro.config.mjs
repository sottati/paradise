// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sanity({
      projectId: 'vqbixtq7',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-01-01',
      studioBasePath: '/studio',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});