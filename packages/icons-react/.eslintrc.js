const base = require('@umijs/fabric/dist/eslint');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    '@typescript-eslint/no-explicit-any': 0,
    'react/no-did-update-set-state': 0,
    'react/no-find-dom-node': 0,
  },
};
