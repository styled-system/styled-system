# Variants

Variants can be useful for applying complex styles to a component based on a single prop.
Styled System includes built-in variants for `textStyle`, `colorStyle`, and `buttonStyle`.

To use variants, first define styles in your `theme` object.

```js
// example theme with variants
import colors from './colors'

export default {
  ...colors,
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  colorStyles: {
    inverted: {
      color: colors.background,
      backgroundColor: colors.text,
    },
  },
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
    },
    secondary: {
      color: colors.text,
      backgroundColor: colors.secondary,
    },
  },
}
```

**NOTE:** the objects defined in the theme are _CSS style_ objects, not component _props_. Styled system props **will not** work here to avoid conflating CSS style objects with component props.

Next, add variant utilities to your components.

```js
// example Button with variants
import styled from 'styled-components'
import { buttonStyle } from 'styled-system'

const Button = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  buttonStyle
)
```

The `Button` component can now use the `variant` prop to change between a primary and secondary style.

```jsx
<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
```

The built-in variants use the following props and theme keys:

| Function Name | Prop        | Theme Key     |
| ------------- | ----------- | ------------- |
| `textStyle`   | `textStyle` | `textStyles`  |
| `colorStyle`  | `colors`    | `colorStyles` |
| `buttonStyle` | `variant`   | `buttons`     |

## Custom Variants

Creating custom variants allows you to extend this API in many ways.
To create a custom variant, import the `variant` utility to create a style prop function.

```js
import styled from 'styled-components'
import { variant } from 'styled-system'

const buttonSizes = variant({
  // theme key for variant definitions
  scale: 'buttonSizes',
  // component prop
  prop: 'size',
})

const Button = styled('button')(buttonSizes)
```
