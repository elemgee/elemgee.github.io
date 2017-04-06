//var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname ,
    publicPath: '/',
    //filename: '../VAQCService/WebServerResources/js/qcSvc.bundle.js'
    filename: 'bin/webfarm.bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
