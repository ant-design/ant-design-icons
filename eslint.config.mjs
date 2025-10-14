// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';

/**
 * Base ESLint configuration for ant-design-icons monorepo
 * All packages should extend this configuration
 */
export default tseslint.config(
  // Ignore common directories
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/lib/',
      '**/es/',
      '**/coverage/',
      '**/.temp/',
      '**/.cache/',
      '**/icons/', // Ignore generated icon files
    ],
  },
  // Base configs - use recommended instead of recommendedTypeChecked to avoid type service issues
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // Common rules for all packages
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // Disable overly strict type-checking rules
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
  // Jest configuration for test files
  {
    files: ['**/__tests__/**/*', '**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  }
);
