const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const PORT = 3001
const LIVE_RELOAD_PORT = 9000

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.local.html' }),
    new LiveReloadPlugin({ port: LIVE_RELOAD_PORT })
  ],
  devServer: {
    host: '0.0.0.0',
    port: PORT
  }
}
