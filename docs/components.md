
# Creating Components

*Taken from the previous readme*

Next, create a set of UI components that provide convenient style props to the values defined in the theme.
It's recommended to keep components simple and focused on doing one thing well.
For UI components, it's common to separate them according to different concerns, such as layout, typography, and other styles.
However, there may be some general purpose style props that you'd like to apply consistently across your entire component set, such as margin, padding, and color.

```js
import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight
} from 'styled-system'

// Example of a general purpose Box layout component
export const Box = styled.div`
  ${space}
  ${color}
  ${width}
`

// General purpose typographic component
export const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
`
```
