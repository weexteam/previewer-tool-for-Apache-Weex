'use strict';

var path = require('path');
var weex = {
  name: 'weex',
  entry: '',
  output: {
    path: '',
    filename: ''
  },
  module: {
    loaders: [{
      test: /\.(we|vue)(\?[^?]+)?$/,
      loaders: ['weex']
    }, {
      test: /\.js(\?[^?]+)?$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },

  babel: {
    presets: [require.resolve("babel-preset-es2015")]
  },
  resolve: {
    root: ''
  },
  resolveLoader: {
    root: ''
  },
  debug: true,
  bail: true
};

var web = {
  name: 'web',
  entry: '',
  output: {
    path: '',
    filename: ''
  },
  module: {
    loaders: [{
      test: /\.we(\?[^?]+)?$/,
      loaders: ['weex']
    }, {
      test: /\.js(\?[^?]+)?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue(\?[^?]+)?$/,
      loader: 'vue'
    }]
  },

  babel: {
    presets: [require.resolve("babel-preset-es2015")]
  },

  resolve: {
    root: ''
  },
  resolveLoader: {
    root: ''
  },
  debug: true,
  bail: true
};

module.exports = function (entry, output, type) {
  var config = null;
  if (type == 'weex') {
    config = weex;
    config.output.filename = path.basename(output);
  } else {
    config = web;
    config.output.filename = path.basename(output).replace('.js', '.web.js');
  }
  config.output.path = path.dirname(output);
  config.entry = entry;
  path.resolve.root = [path.dirname(entry), path.join(path.dirname(entry), "node_modules/"), process.cwd(), path.join(process.cwd(), "node_modules/")];
  config.resolveLoader.root = [path.join(path.dirname(__dirname), "../", "node_modules/")];
  return config;
};