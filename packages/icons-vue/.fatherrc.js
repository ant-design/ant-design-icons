const config = {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  runtimeHelpers: true,
};

if (process.env.NODE_ENV !== 'ci') {
  config.umd = {
    globals: { react: 'window.React' },
    minFile: true,
    sourcemap: false,
  };
}

export default config;
