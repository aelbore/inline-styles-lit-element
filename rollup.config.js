import { minifyHTML, nodeResolve, terser } from 'aria-build'
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'

export default {
  treeshake: true,
  input: 'src/hello-world.js',
  external: [],
  plugins: [
    minifyHTML(),
    inlineLitElement(),
    nodeResolve(),
    terser()
  ],
  output: {
    sourcemap: true,
    globals: {},
    file: 'dist/hello-world.js',
    format: 'esm'
  }
}