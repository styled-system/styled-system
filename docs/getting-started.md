
## Getting Started

Styled-system is a collection of style functions that expose props
to your React components for controlling style based on global theme constants.
To use styled-system, you'll most likely want to use a CSS-in-JS library.
These examples use [styled-components][styled-components],
but styled-system works with other libraries
like [emotion][emotion] and [glamorous][glamorous] as well.

```sh
npm i styled-system styled-components
```

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
To create a more consistent UI, create a theme module which will include a color palette.

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

Most CSS-in-JS libraries use a ThemeProvider to handle theming in React.
Import the styled-components [ThemeProvider][ThemeProvider] in the root of your application and pass the theme to the `theme` prop.

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

The `space` function adds margin and padding props, and the `width` function adds a `width` prop.

- space margin and padding props
- responsive styles

- [API documentation](api.md)
- [Table of Style Functions](table.md)


[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
[glamorous]: https://github.com/paypal/glamorous
