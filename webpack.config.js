const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src/entry/index.js')
    // app: path.resolve('src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web UI System',
      inject: 'body',
      template: 'src/entry/index.html'
    }),
    // this handles the bundled .css output file
    new ExtractTextPlugin({
      // filename: '[name].[contenthash].css',
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@symbols': path.resolve(__dirname, './src/symbols/'),
      '@key-shortcuts': path.resolve(__dirname, './src/system/key-shortcuts'),
      'react-virtualized/List': 'react-virtualized/dist/es/List',
      'react-virtualized/AutoSizer': 'react-virtualized/dist/es/AutoSizer',
      'react-virtualized/ArrowKeyStepper': 'react-virtualized/dist/es/ArrowKeyStepper',
      'react-virtualized/CellMeasurer': 'react-virtualized/dist/es/CellMeasurer',
      'react-virtualized/Collection': 'react-virtualized/dist/es/Collection',
      'react-virtualized/ColumnSizer': 'react-virtualized/dist/es/ColumnSizer',
      'react-virtualized/Grid': 'react-virtualized/dist/es/Grid',
      'react-virtualized/InfiniteLoader': 'react-virtualized/dist/es/InfiniteLoader',
      'react-virtualized/Masonry': 'react-virtualized/dist/es/Masonry',
      'react-virtualized/MultiGrid': 'react-virtualized/dist/es/MultiGrid',
      'react-virtualized/ScrollSync': 'react-virtualized/dist/es/ScrollSync',
      'react-virtualized/Table': 'react-virtualized/dist/es/Table',
      'react-virtualized/utils': 'react-virtualized/dist/es/utils',
      'react-virtualized/vendor': 'react-virtualized/dist/es/vendor',
      'react-virtualized/WindowScroller': 'react-virtualized/dist/es/WindowScroller'
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // this handles .less translation
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-1'] }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        })
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
            'sass-loader'
          ]
        }),
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'lib')]
      },
      {
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        }),
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      }
    ]
  }
};
