import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import LiveReloadPlugin from 'webpack-livereload-plugin'

const PORT = 3000
const LIVE_RELOAD_PORT = 9000

export default {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
