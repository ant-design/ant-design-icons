module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  env: {
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'react/no-did-update-set-state': 0,
    'react/no-find-dom-node': 0,
  },
};
