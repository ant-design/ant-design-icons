const config = {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true,
  },
};

if (process.env.NODE_ENV !== 'ci') {
  config.umd = {
    globals: { react: 'window.React' },
    minFile: false,
    sourcemap: false,
  };
}

export default config;
