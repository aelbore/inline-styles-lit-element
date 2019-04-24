const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')

const INPUT_FILE = path.resolve('./src/index.js')
const OUTPUT_FILE = path.resolve('./dist/todo.js')

const plugins = {
  terser() {
    return new TerserPlugin({
      parallel: true,
      sourceMap: true,
      terserOptions: {
        ecma: 6,
        output: { comments: false }
      }
    })      
  }
}

module.exports = {
  entry: INPUT_FILE,
  devtool: 'source-map',
  output: {
    path: path.dirname(OUTPUT_FILE),
    filename: path.basename(OUTPUT_FILE)
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /\.(css|scss)$/,
        loader: 'inline-lit-element-loader'
      }
    ]
  },
  optimization: {
    minimizer: [  plugins.terser()  ]
  }
}