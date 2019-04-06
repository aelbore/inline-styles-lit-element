import minifyHTML from 'rollup-plugin-minify-html-literals';
import resolve from 'rollup-plugin-node-resolve'

import { terser } from 'rollup-plugin-terser'
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'

export default {
  treeshake: true,
  input: 'src/hello-world.js',
  external: [],
  plugins: [
    minifyHTML(),
    inlineLitElement(),
    resolve(),
    terser()
  ],
  output: {
    sourcemap: true,
    globals: {},
    file: 'dist/hello-world.js',
    format: 'esm'
  }
}