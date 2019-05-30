import { build, clean, terser, TSRollupConfig, copyReadmeFile, copyPackageFile, renameDtsEntryFile } from 'aria-build'
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
      },
      tsconfig: {
        compilerOptions: {
          declaration: true
        }
      }
    },
    {
      input: './src/hello-world.js',
      plugins: [
        terser(),
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

  const pkgOptions = {
    main: 'hello-world.js',
    typings: 'hello-world.d.ts',
    module: 'hello-world.es.js'
  }

  await clean('dist')
  await build(options)
  await Promise.all([ copyReadmeFile(), copyPackageFile(pkgOptions) ])
})()