import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    include: ['test/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: ['./test/setup.js'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': __dirname,
    },
  },
});
