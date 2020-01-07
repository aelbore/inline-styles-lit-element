
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'
import { minifyHTML, terser } from 'aria-build'

const filesize = require('rollup-plugin-filesize')

export default {
  plugins: {
    before: [
      inlineLitElement(),
      minifyHTML()
    ],
    after: [
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
    ]
  }
}