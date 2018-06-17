
# Troubleshooting

## Unknown attribute warnings in React 16

To remove styled-system style props from the underlying DOM element, use either the [clean-tag][clean-tag] or [clean-element][clean-element] components when creating your styled-components.

If you want to extend clean-tag blacklist by custom props, just extend the original `blacklist` list adding the new props:

```jsx
Button.defaultProps.blacklist = [
  ...Object.keys(Button.propTypes),
  'buttonSize'
]
```

## Issues with prop-types

If you encounter issues while using this library alongside the `prop-types` npm package,
webpack's [`resolve.modules`](https://webpack.js.org/configuration/resolve/#resolve-modules)
option might be misconfigured using a relative (instead of absolute) path.
This changes the way CommonJS modules work in a way that will likely cause other issues,
and it's recommended that you only use absolute paths with the `resolve.modules` option.

If you're using `resolve.modules` to avoid import syntax with lots of directory changes,
you might want to consider using a flatter or better organized folder structure in your app.

See https://github.com/jxnblk/grid-styled/issues/51#issuecomment-336116426

[clean-tag]: https://github.com/jxnblk/styled-system/tree/master/clean-tag
[clean-element]: https://github.com/jxnblk/styled-system/tree/master/clean-element
