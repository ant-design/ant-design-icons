import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.main,
        format: 'cjs'
      }
    ],
    plugins: [
      typescript(),
    ]
  }
]
