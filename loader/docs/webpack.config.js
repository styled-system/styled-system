module.exports = {
  module: {
    rules: [
      {
        test: /system\.json$/,
        use: require.resolve('../index')
      }
    ]
  }
}
