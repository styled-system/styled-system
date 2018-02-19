# Theme

Although it's not required, styled-system works best with a theme that's tailored to your own custom styles.
Create a `theme.js` file that exports an object and add a [ThemeProvider](https://www.styled-components.com/docs/advanced#theming)
to the root of your application.

```js
// empty theme.js
const theme = {}

export default theme
```

```jsx
// root App component
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>
    {/* ... */}
  </ThemeProvider>
)
```

Most utility functions in styled-system will attempt to find a value from your theme first,
then fallback to a hard-coded value if it hasn't been defined in your theme.
For example, defining a `colors` object can make using a common color palette across your app simpler.

```js
// theme.js
const colors = {
  text: '#024',
  blue: '#07c'
}

const theme = {
  colors
}

export default theme
```

With a component that uses the `color` function from styled-system, the name of the color defined in your theme can be used as a prop.

```jsx
// picks up the value `#07c` from the theme
<Box color='blue' />
```

When a value is passed that's **not** in the theme, it will be passed as a raw value.

```jsx
// renders the CSS `tomato` color since it's not defined in theme
<Box color='tomato' />
```

It's recommended to add objects and array scales to your theme to ensure consistent, constraint-based values are used throughout your app.
All theme values are optional, so use your own discretion when creating a theme.
See the `theme.js` file for a reference to the default fallback values.

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

---

[Components](components.md)
