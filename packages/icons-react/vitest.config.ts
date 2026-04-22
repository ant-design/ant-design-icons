import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    environmentOptions: {
      happyDOM: {
        settings: {
          // Enable iconfont.cn support, which requires loading and evaluating JavaScript.
          disableJavaScriptFileLoading: false,
          disableJavaScriptEvaluation: false,
        }
      }
    },
    globals: true,
    setupFiles: ['./tests/setupTests.ts'],
    include: ['tests/**/*.{test,spec}.{ts,tsx,js,jsx}'],
  },
});
