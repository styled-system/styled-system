
# system-loader

webpack loader for creating styled-system components from JSON

```sh
npm i system-components system-loader
```

```js
module.exports = {
  // partial webpack.config.js
  module: {
    rules: [
      {
        test: /\.system\.json$/,
        use: 'system-loader'
      }
    ]
  }
}
```

MIT License
