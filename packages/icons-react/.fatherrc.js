import { defineConfig } from 'father';

const config = defineConfig({
  // Locked version only supports 1.0.0
  plugins: ['@rc-component/father-plugin'],
});

if (process.env.NODE_ENV !== 'ci') {
  config.umd = {
    entry: {
      'index.umd': {
        chainWebpack(memo) {
          memo.entryPoints.clear();
          memo.entry('index.umd').add('./src/index.ts');
          memo.optimization.minimize(false);

          return memo;
        },
      },
      'index.umd.min': {
        chainWebpack(memo) {
          memo.entryPoints.clear();
          memo.entry('index.umd.min').add('./src/index.ts');

          return memo;
        },
      },
    },
    output: 'dist',
    name: 'icons',
    externals: { react: 'React' },
    sourcemap: false,
  };
}

export default config;
