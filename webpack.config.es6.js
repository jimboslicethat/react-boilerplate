import webpack from 'webpack' // eslint-disable-line no-unused-vars

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
  devServer: {
    host: '0.0.0.0',
    port: PORT
  }
}
