import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./tests/setupTests.ts'],
    include: ['tests/**/*.{test,spec}.{ts,tsx,js,jsx}'],
  },
});
