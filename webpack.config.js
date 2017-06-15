const path = require('path')

module.exports = {
  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'docs')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'docs/',
    historyApiFallback: true
  }
}
