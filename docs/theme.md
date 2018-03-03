# Theme

Although it's not required, styled-system works best with a theme that's tailored to your own custom styles.
The theme is used to provide a color palette, type scale, spacing scale, and anything else you want to customize.

Create a `theme.js` file that exports an object:

```js
const theme = {}

export default theme
```

Add a [ThemeProvider](https://www.styled-components.com/docs/advanced#theming) to the root of your application:

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

__How this works__: The `ThemeProvider` adds the theme to the `context` for your styled-components, exposing your theme for styled-system to access.

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

### Breakpoints

There are default breakpoints provided by styled-system, but they can be customized by adding them to your theme object.
It accepts an array of breakpoint values.

```js
const breakpoints = [
  '40em', '52em', '64em'
]
```

### Colors

The color palette can be customized by using an object that can contain key-value pairs, other objects and even arrays.
Nested objects work well for dark and light mode specific color palettes or branding.
Arrays can be used for scales.

```js
const colors = {
  text: '#024',
  blue: '#07c',
  dark: {
    blue: '#058'
  },
  gray: [
    '#333',
    '#666',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
  ]
}
```

### Space

Space is used for margin and padding scales.
It's recommended to use powers of two to ensure alignment when used in nested elements.
All numbers are converted to `px`.

```js
const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]
```

### Font Sizes

Font Sizes are used to specify your type scale.
All numbers are converted to `px`.

For special cases, you can specify a font size value outside your scale, so `fontSize={30}` would result in `font-size: 30px`.
It's preferable to only access values defined by your theme, but styled-system does allow for an escape hatch when extraordinary cases arise.

```js
const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 96, 128
]
```

### Line Heights

Line Heights can be added to your theme, and can be defined as either an array or an object.

As an array:

```js
// <Span lineHeight={3} />
const lineHeights = [
  1, 1.125, 1.25, 1.5
]
```

As an object:

```js
// <Span lineHeight='text' />
const lineHeights = {
  solid: 1,
  text: 2,
  heading: 1.6
}
```

### Further theming

You can essentially add anything you'd like to your theme object, including shadows, border radii, letter spacing, etc.
For custom keys you will need to create custom functions, but styled-system provides [helpers](customize.md) functions.

## Example

```js
const breakpoints = [
  '40em', '52em', '64em'
]

const colors = {
  text: '#024',
  blue: '#07c',
  dark: {
    blue: '#058'
  },
  gray: [
    '#333',
    '#666',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
  ]
}

const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 96, 128
]

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
