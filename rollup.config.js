import typescript from 'rollup-plugin-typescript2';
import svgToSymbol from 'rollup-plugin-svg-to-symbol';
import kebabcase from 'lodash.kebabcase';
import { getComponentName } from '@svgr/core';
import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
      typescript(),
      svgToSymbol({
        extractId({ name, filePath }) {
          return `${pkg.iconPrefix}${kebabcase(getComponentName({ filePath }))}`;
        }
      })
    ],
    external: ['react']
  },
  {
    input: './src/index.ts',
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      typescript(),
      svgToSymbol({
        extractId({ name, filePath }) {
          return `${pkg.iconPrefix}${kebabcase(getComponentName({ filePath }))}`;
        }
      })
    ],
    external: ['react']
  }
]
