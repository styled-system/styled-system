
# Custom Style Props

To extend styled-system for other CSS properties that aren't included in the library, use the [custom utilities](api.md#customize) to create your own style functions.

All styled-system functions rely on these low-level utilities.

- `style` creates a non-responsive style function
- `responsiveStyle` creates a responsive style function
- `pseudoStyle` creates a pseudo-class style function
- `complexStyle` creates a "complex" style function

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

Read more in the [custom utilities docs](api#customize).

