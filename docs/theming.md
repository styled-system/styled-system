
# Theming

It's recommended to add objects and array scales to your theme to ensure consistent, constraint-based values are used throughout your app.
All theme values are optional, so use your own discretion when creating a theme.
See the [Default Theme](#default-theme) section for a reference to the default fallback values.

```js
// theme.js

// breakpoint values
// any array length works with styled-system
const breakpoints = [
  '40em', '52em', '64em'
]

const colors = {
  text: '#024',
  blue: '#07c',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: [
    '#333',
    '#666',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
  ]
}

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

// typographic scale
const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 96, 128
]

// for any scale, either array or objects will work
const lineHeights = [
  1, 1.125, 1.25, 1.5
]

const fontWeights = {
  normal: 500,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em'
}

// border-radius
const radii = [
  0, 2, 4, 8
]

const borders = [
  0, '1px solid', '2px solid'
]

const shadows = [
  `0 1px 2px 0 ${colors.text}`,
  `0 1px 4px 0 ${colors.text}`
]

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
}

export default theme
```

