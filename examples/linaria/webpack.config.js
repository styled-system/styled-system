const CSSPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: CSSPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ]
      },
    ]
  },
  plugins: [
    new CSSPlugin({
      filename: 'styles.css',
    })
  ]
}
