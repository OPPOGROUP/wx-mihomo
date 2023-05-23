const path = require('path')
const pkg = require('./package.json')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function createExternals() {
  const ret = {}
  const keys = Object.keys(pkg.dependencies ?? {})
  for (const key of keys) {
    ret[key] = `commonjs ${key}`
  }
  return ret
}

const webpackConfig = {
  entry: {
    main: './src/main.ts'
  },
  mode: "production",
  target: 'node',
  externals: createExternals(),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = webpackConfig
