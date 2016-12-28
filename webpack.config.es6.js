import webpack from 'webpack'

const PORT = 3000

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
      }
    ]
  },
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: PORT
  }
}
