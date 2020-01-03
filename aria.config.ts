
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'
import { minifyHTML, terser } from 'aria-build'

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
    })
  ]
}