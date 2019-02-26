const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),

  configProject = {
    entryJs: {
      app: './src/index.js'
    },
    publicPath: 'dist',
    portServer: 3000,
    cssName: '[name].css',
    htmlTemplate: {
      homePage: './src/index.html'
    }
  };

module.exports = {
  mode: 'development',
  entry: {
    index: configProject.entryJs.app
  },
  output: {
    path: path.resolve(__dirname, configProject.publicPath),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, configProject.publicPath),
    port: configProject.portServer,
    compress: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: {
      index: 'dist/index.html'
    }
    // open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Homework Assignment – Frontend',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      },
      template: configProject.htmlTemplate.homePage
    }),
    new ExtractTextPlugin({
      filename: configProject.cssName,
      disable: false,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

