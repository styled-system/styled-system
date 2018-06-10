module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'babel-loader',
          '@comp/md-loader'
        ]
      }
    ]
  }
}
