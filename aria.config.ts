import { inlineLitElement } from 'rollup-plugin-inline-lit-element'
import { minifyHTML, terser } from 'aria-build'

const filesize = require('rollup-plugin-filesize')

export default {
  plugins: [
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
  test: {
    plugins: [ 
      inlineLitElement() 
    ]
  }
}