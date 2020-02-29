export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  umd: {
    globals: { react: 'window.React' },
    minFile: false,
    sourcemap: false,
  },
  preCommit: {
    eslint: true,
    prettier: true,
  },
};
