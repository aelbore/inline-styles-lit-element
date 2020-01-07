import filesize from 'rollup-plugin-filesize';

import { inlineLitElement } from 'rollup-plugin-inline-lit-element'
import { terser, minifyHTML, nodeResolve } from 'aria-build'

export default {
  treeshake: true,
  input: 'src/index.js',
  external: [],
  plugins: [
    nodeResolve(),
    inlineLitElement(),
    minifyHTML(),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        }
      },
      output: {
        comments: false
      }
    }),
    filesize({
      showBrotliSize: true,
    })
  ],
  output: {
    sourcemap: true,
    globals: {},
    file: 'dist/inline-styles-lit-element.js',
    format: 'es'
  }
}