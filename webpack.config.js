var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/dist');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: ['babel-polyfill','webpack-hot-middleware/client?reload=true', APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /(\.scss)$/, loaders:['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;