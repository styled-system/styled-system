
# Getting Started

Styled-system is a collection of utility functions that add style props
to your React components,
which allows for controlling styles based on global theme constants.

To use styled-system, you'll most likely want to use a CSS-in-JS library.
These examples use [styled-components][],
but styled-system works with other libraries
like [emotion][] and [glamorous][] as well.

```sh
npm i styled-system styled-components
```

## Create a Component

Create a new component that uses style functions from styled-system.
To start with, add the `color` function to the component's styles argument.

```js
import styled from 'styled-components'
import { color } from 'styled-system'

const Box = styled.div`
  ${color}
`

export default Box
```

Now, this component will have two style props available: `color` to set foreground color, and `bg` to set background color.

```jsx
<Box color='#fff' bg='tomato'>
  Tomato
</Box>
```

So far, this component can be styled with any valid CSS color.
To create a more consistent UI, create a theme module with a `colors` object.

```js
// theme.js
export default {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175'
  }
}
```

## Theming

Most CSS-in-JS libraries use a ThemeProvider to handle theming in React.
Import the styled-components [ThemeProvider][] in the root of your application and pass the theme to the `theme` prop.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>
    {/* application elements */}
  </ThemeProvider>
)

export default App
```

[ThemeProvider]: https://www.styled-components.com/docs/advanced#theming

With the ThemeProvider, the Box component now has access to the colors defined in the theme object.

```jsx
<Box color='black' bg='blue'>
  Blue Box
</Box>
```

Styled-system will attempt to find a value based on keys in the theme and fallback to the raw value if it's not defined in the theme.

```jsx
// uses the CSS color keyword `tomato` since it's not defined in the theme
<Box bg='tomato' />
```

To make the Box component a little more useful, add a few more styled-system functions
to handle layout styles.

```jsx
import styled from 'styled-components'
import { color, space, width } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${color}
`

// prop types can also be added from the style functions
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes
}

Box.displayName = 'Box'

export default Box
```

## Margin & Padding

The `space` function adds margin and padding props.
The margin and padding props use a shorthand syntax, similar to
[Basscss][basscss], [Tachyons][tachyons], and [Bootstrap][bootstrap].

[basscss]: http://basscss.com/#basscss-margin
[tachyons]: http://tachyons.io/docs/layout/spacing/
[bootstrap]: https://getbootstrap.com/docs/4.1/utilities/spacing/

### Margin Props

- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left
- `mx` margin-left and margin-right
- `my` margin-top and margin-bottom

### Padding Props

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `px` padding-left and padding-right
- `py` padding-top and padding-bottom

### Space Theming

To set a consistent white-space scale, add a `space` array to your theme.
Use numbers to set pixel values, or use strings for other CSS units such as `rem`.

```js
// theme.js
export default {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ]
}
```

All spacing props accept numbers, strings, or arrays as values, where:

- Numbers between 0 and the last index of the `space` array are values from the `space` array defined in theme
- Numbers greater than the length of the `space` array are converted to pixels
- String values can be used for any valid CSS value (e.g. `'auto'` or `'2em'`
- Margin props accept negative values to set negative margin
- Arrays can be used for [responsive styles](#responsive-styles)


## Width

The `width` function adds a single `width` prop for setting responsive width styles.

The `width` prop accepts number, string, or array values, where:

- Numbers between 0 and 1 are converted to percentage based widths (e.g. `1/2` becomes `'50%'`)
- Numbers greater than 1 are converted to pixels
- Strings can be used for other CSS values (e.g. `'50vw'` or `'30em'`)
- Arrays can be used for [responsive styles](#responsive-styles)


## Responsive Styles

All styled-system functions accept arrays as values to set styles responsively using a mobile-first approach.

```jsx
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4   // 25% from the next breakpoint and up
  ]}
/>
```

```jsx
// responsive margin
<Text m={[ 0, 1, 2 ]} />

// responsive padding
<Text p={[ 2, 3, 4 ]} />

// responsive font-size
<Text fontSize={[ 3, 4, 5 ]} />
```

Read more in the [Responsive Styles Docs](responsive-styles.md).

---

### More Documentation

- [Responsive Styles](responsive-styles.md)
- [How it Works](how-it-works.md)
- [API](api.md)
- [Table of Style Functions](table.md)


[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[glamorous]: https://github.com/paypal/glamorous
