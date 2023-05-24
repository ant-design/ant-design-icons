import { defineConfig } from 'father';

const config = {
  // Locked version only supports 1.0.0
  plugins: ['@rc-component/father-plugin'],
};

if (process.env.NODE_ENV !== 'ci') {
  config.umd = {
    externals: { react: 'window.React' },
    sourcemap: false,
  };
}

export default defineConfig(config);
