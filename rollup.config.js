import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import svgToSymbol from 'rollup-plugin-svg-to-symbol';
import kebabcase from 'lodash.kebabcase';
import { getComponentName } from '@svgr/core';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
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
          return `antd-icon-${kebabcase(getComponentName({ filePath }))}`;
        }
      })
    ],
    external: ['react']
  }
]
