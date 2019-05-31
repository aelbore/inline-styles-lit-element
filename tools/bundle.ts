import { clean, minifyHTML, terser, TSRollupConfig, bundle } from 'aria-build'
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'

(async function() {

  const options: TSRollupConfig[] = [
    {
      input: './src/hello-world.js',
      external: [
        'lit-element'
      ],
      plugins: [
        inlineLitElement()
      ],
      output: {
        format: 'es',
        file: './dist/hello-world.es.js'
      }
    },
    {
      input: './src/hello-world.js',
      plugins: [
        terser(),
        minifyHTML(),
        inlineLitElement()
      ],
      output: {
        format: 'es',
        sourcemap: true,
        file: './dist/hello-world.js'
      }
    },
    {
      input: './src/hello-world.js',
      plugins: [
        terser(),
        minifyHTML(),
        inlineLitElement()
      ],
      output: {
        sourcemap: true,
        format: 'umd',
        file: './dist/bundles/hello-world.umd.js',
        name: 'helloWorld'
      }
    }
  ]

  await clean('dist')
  await bundle(options)
})()