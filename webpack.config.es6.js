// getAppDependencies() => {
//   return [

//   ]
// }

const PORT = 3000

export default {
  entry: {
    main: './src/index.js'
  },
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ],
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  // plugins: getPlugins(),
  devServer: {
    host: '0.0.0.0',
    port: PORT
  }
}