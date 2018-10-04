var path = require("path");
var webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    App: './frontend/App',
    vendors: ['react'],
  },

  output: {
    path: path.resolve('./backend/static/bundles/local/'),
    filename: "[name]-[hash].js"
  },

  externals: [], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ], // add all common plugins here

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude:  /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader:  'style!css'
      },
    ],
  }
};

console.log(module);