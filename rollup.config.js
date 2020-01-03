import filesize from 'rollup-plugin-filesize'
import { minifyHTML, nodeResolve, terser } from 'aria-build'
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'

export default {
  treeshake: true,
  input: 'src/hello-world.js',
  external: [],
  plugins: [    
    inlineLitElement(),
    minifyHTML(),
    nodeResolve(),
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
    file: 'dist/hello-world.js',
    format: 'esm'
  }
}