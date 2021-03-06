const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = () => ({
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.(c|sa|sc)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'] 
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      }
    }, {
      test: /\.(wav|mp3)$/,
      use: { 
        loader: 'file-loader',
        options: { 
          outputPath: 'sounds/'
        }
      }  
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ]
})

