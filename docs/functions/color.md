# Color

You can use the color functions to set `color` and `background-color` on your component.

## Usage

You can create a component by importing the `color` function and passing it to the `styled-components` template string:

```jsx
import styled from 'styled-components'
import { color } from 'styled-system'

export const Box = styled.div`
  ${color}
`
```

The `Box` component now handles `color` and `bg`/`backgroundColor` props:

```.jsx
<Box color='white' bg='blue' p={3}>
  <Box color='blue' bg='white' p={3}>
    Hello, world!
  </Box>
</Box>
```

## Theme

The `color` functions rely upon the `color` object in your `theme.js`.
This is how you define a common color palette across your app.

```js
const colors = {
  text: '#024',
  blue: '#07c'
}

const theme = {
  colors
}

export default theme
```

If a particular color is not defined, it falls back to it's hard-coded value.
In the example above, `white` ends up with `color: white;` as the CSS declaration.

You can also pass color values like `hex`, `rgba`, etc. but it isn't recommended.
