# Components

To use styled-system, create a set of UI components using the library's utilities.
Each utility adds style props to your components that hook into theme values.

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

## Prop Types

## How it Works

Most CSS-in-JS libraries accept functions as arguments to create dynamic styles based on props.
For example, the following sets color dynamically in styled-components based on the `color` prop:

```js
import styled from 'styled-components'

const Box = styled.div`
  color: ${props => props.color};
`
```

Beyond just passing a dynamic value, an entire style declaration can be returned in functions like this.

```js
import styled from 'styled-components'

const getColor = props => `color: ${props.color};`

const Box = styled.div`
  ${getColor}
`
```

Style object can also be returned, which is a much simpler way to handle dynamic values in JavaScript.

```js
import styled from 'styled-components'

// works exactly the same as the previous function
const getColor = props => ({
  color: props.color
})

const Box = styled.div`
  ${getColor}
`
```

By using style objects instead of embedded CSS strings, styled-system is compatible with other libraries,
such as [glamorous][glamorous] and [emotion][emotion].

The core utilities in styled-system are built on this pattern and consist of functions that take `props` as an argument
and return style objects,
while making it simpler to use values from a theme and apply styles responsively across breakpoints.

These style functions can be written on a one-off basis, but styled-system is meant to help reduce boilerplate, ensure a consistent styling API, and speed the development of React-based design systems.

[glamorous]: https://github.com/paypal/glamorous
[emotion]: https://github.com/emotion-js/emotion
