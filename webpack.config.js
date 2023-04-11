const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'jquery': 'jquery',
      'window.jquery': 'jquery',
      '$': 'jquery',
      'window.$': 'jquery',
    }),
  ],
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  entry: {
    main: './src/js/index.js',
    page_search: './src/js/page_search.js',
    page_covid: './src/js/page_covid.js',
    page_campus: './src/js/page_campus.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      '%sections%': path.resolve(__dirname, 'src/blocks/sections'),
      '%components%': path.resolve(__dirname, 'src/blocks/components'),
    },
  },
}
