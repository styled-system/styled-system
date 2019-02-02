
# Custom Style Props

To extend styled-system for other CSS properties that aren't included in the library, use the [custom utilities](api.md#customize) to create your own style functions.

All styled-system functions rely on these low-level utilities.

- `style` creates a non-responsive style function
- `variant` creates a complex style function based on style objects defined in a theme

## Example Usage

```jsx
import styled from 'styled-components'
import { style } from 'styled-system'

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration'
})

const Link = styled.a`
  ${textDecoration}
`

Link.propTypes = {
  ...textDecoration.propTypes
}

export default Link
```

Read more in the [custom utilities docs](api.md#customize).

