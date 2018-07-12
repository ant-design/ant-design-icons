import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  external: [
    'antd-icons',
    'vue'
  ],
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main
    },
    {
      name: pkg.name,
      format: 'es',
      file: pkg.module
    }
  ],
  plugins: [
    typescript()
  ]
}
