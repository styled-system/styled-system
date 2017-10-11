const path = require('path')
const BabelEnginePlugin = require('babel-engine-plugin');

module.exports = {
  entry: './docs/entry.js',
  plugins: [
    new BabelEnginePlugin({
      presets: ['env']
    })
  ],
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
