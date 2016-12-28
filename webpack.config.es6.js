import webpack from 'webpack' // eslint-disable-line no-unused-vars
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LiveReloadPlugin from 'webpack-livereload-plugin'

const PORT = 3000
const LIVE_RELOAD_PORT = 9000

export default {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.local.html' }),
    new LiveReloadPlugin({port: LIVE_RELOAD_PORT})
  ],
  devServer: {
    host: '0.0.0.0',
    port: PORT
  }
}
