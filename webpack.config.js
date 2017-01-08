var webpack = require('webpack');

module.exports = {
  entry: './main.ts',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    contentBase: 'build/'
  }
}
