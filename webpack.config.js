const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [["env", {"modules": false}]]
    }
  }],
};

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [autoprefixer({
        browsers: 'last 2 versions'
      }),
      require('cssnano')()]
    },
    sourceMap: true
  }
};

const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract(['css-loader?sourceMap', postcss, 'sass-loader?sourceMap'])
};

const images = {
  test: /\.(png|jpg|gif)$/,
  loader: 'file-loader',
  options: {
    name: './img/[name].[ext]'
  }
};

const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  sourceMap: true,
  uglifyOptions: {
    output: {
      comments: false,
    },
    compress: true,
    warnings: true
  }
});


const config = {
  entry: {
    template: './src/js/template-app.js',
    vendor: './src/js/vendors/vendor.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [javascript, styles, images]
  },
  plugins: [
    uglify,
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
};

process.noDeprecation = true;

module.exports = config;