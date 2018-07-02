import { resolve } from 'path';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: resolve(__dirname, './src/index.ts'),
  output: {
    file: resolve(__dirname, './lib/index.js'),
    format: 'es'
  },
  plugins: [
    typescript()
  ],
  external: [ 'react' ]
}
