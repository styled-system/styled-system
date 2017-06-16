# styled-system

Design system utilities for CSS in JS (like styled-components, glamorous, etc.)

[![Build Status](https://travis-ci.org/jxnblk/styled-system.svg?branch=master)](https://travis-ci.org/jxnblk/styled-system)

```sh
npm i styled-system
```

## Usage

**With `styled-components`**

```jsx
import styled from 'styled-components'
import { space, width, fontSize } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
`
```

**Or with `glamorous`**

```jsx
import glamorous from 'glamorous'
import { space, width, fontSize } from 'styled-system'

const Box = glamorous.div(space, width, fontSize)
```

Then use `Box`:

```jsx
// width: 50%
<Box width={1/2} />

// font-size: 20px
<Box fontSize={4} />

// margin: 16px
<Box m={2} />

// padding: 32px
<Box p={3} />

// responsive width
<Box width={[ 1, 1/2, 1/4 ]} />

// responsive font-size
<Box fontSize={[ 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// responsive padding
<Box p={[ 1, 2, 3 ]} />
```

## width

```js
import { width } from 'styled-system'
```

The width utility parses a component's `width` prop and converts it into a CSS width declaration.

Numbers from 0-1 are converted to percentage widths.
Numbers greater than 1 are converted to pixel values.
String values are passed as raw CSS values.
And arrays are converted to [responsive width styles](#responsive-styles).

## fontSize

```js
import { fontSize } from 'styled-system'
```

The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
Numbers from 0-8 are converted to values on the [font size scale](#font-size-scale).
Numbers greater than 8 are converted to raw pixel values.
String values are passed as raw CSS values.
And array values are converted into [responsive values](#responsive-styles).

## space

```js
import { fontSize } from 'styled-system'
```

The space utility converts shorthand margin and padding props to margin and padding CSS declarations.
Numbers from 0-4 are converted to values on the [spacing scale](#spacing-scale).
Negative values can be used for negative margins.
Numbers greater than 4 are converted to raw pixel values.
String values are converted passed as raw CSS values.
And array values are converted into [responsive values](#responsive-styles).

Margin and padding props follow a shorthand syntax for specifying direction.

- `m`:  margin
- `mt`: margin-top
- `mr`: margin-right
- `mb`: margin-bottom
- `ml`: margin-left
- `mx`: margin-left and margin-right
- `my`: margin-top and margin-bottom
- `p`:  padding
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom


## Responsive Styles

All props accept arrays as values for mobile-first responsive styles.

```jsx
// 100% below the smallest breakpoint,
// 50% from the next breakpoint and up,
// and 25% from the next breakpoint and up
<Box w={[ 1, 1/2, 1/4 ]} />

// responsive font size
<Box fontSize={[ 1, 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```


## Higher Order Component

styled-system includes a higher order component to add style props to any component.

**With `styled-components`**

```jsx
import { hoc } from 'styled-system/styled-components'
const Box = hoc('div')
```

**Or with `glamorous`**

```jsx
import { hoc } from 'styled-system/glamorous'
const Box = hoc('div')
```

```jsx
<Box w={[ 1, 1/2 ]} p={2} />
```

## Breakpoints

styled-system uses a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
The default set of breakpoints aims to cover a wide range of devices from mobile to desktop.
Breakpoints can be customized using styled-components' [ThemeProvider](#configuration).

```js
[ 40, 52, 64 ]
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)
```

## Font Size Scale

Using a typographic scale helps create visual rhythm and reduces the
number of decisions needed when designing UI.
Styled system uses a modular scale that covers most of a UI's needs,
but it can be customized with styled-components' [ThemeProvider](#configuration).

```js
[ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
```

## Spacing Scale

Using a scale for spacing helps ensure elements line up, even when nested inside one another.
styled-system uses a spacing scale based on an 8px, powers-of-two grid for margin and padding
by default and can be customized with styled-components' [ThemeProvider](#configuration).

```js
[ 0, 8, 16, 32, 64 ]
```

## Configuration

styled-system can be configured with styled-components'
[ThemeProvider](https://www.styled-components.com/docs/advanced#theming)

```jsx
import { ThemeProvider } from 'styled-components'
// or import { ThemeProvider } from 'glamorous'
import MyComponent from './MyComponent'

const theme = {
  breakpoints: [
    32, 48, 64
  ],
  space: [
    0, 6, 12, 18, 24
  ],
  fontSizes: [
    12, 16, 18, 24, 36, 72
  ]
}

const App = props => (
  <ThemeProvider theme={theme}>
    <MyComponent
      fontSize={4}
      my={[ 2, 3 ]}
    />
  </ThemeProvider>
)
```

## Related

- [styled-components](https://github.com/styled-components/styled-components)
- [glamorous](https://github.com/paypal/glamorous)
- [grid-styled](https://github.com/jxnblk/grid-styled)

MIT License
