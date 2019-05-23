import bundleSize from 'rollup-plugin-filesize';

import { inlineLitElement } from 'rollup-plugin-inline-lit-element'
import { terser, minifyHTML, nodeResolve } from 'aria-build'

export default {
  treeshake: true,
  input: 'src/index.js',
  external: [],
  plugins: [
    minifyHTML(),
    inlineLitElement(),
    nodeResolve(),
    terser(),
    bundleSize()
  ],
  output: {
    sourcemap: true,
    globals: {},
    file: 'dist/main.js',
    format: 'es'
  }
}