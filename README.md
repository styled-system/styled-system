# styled-system

Design system utilities for styled-components, glamorous, and other css-in-js libraries

[![Build Status][build-badge]][build]
[![Coverage][coverage-badge]][coverage]

[build-badge]: https://img.shields.io/travis/jxnblk/styled-system/master.svg?style=flat-square
[build]: https://travis-ci.org/jxnblk/styled-system
[coverage-badge]: https://img.shields.io/codecov/c/github/jxnblk/styled-system.svg?style=flat-square
[coverage]: https://codecov.io/github/jxnblk/styled-system

```sh
npm i styled-system
```

## Usage

```jsx
// With styled-components
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
```

```jsx
// Or with glamorous
import glamorous from 'glamorous'
import { space, width, fontSize, color } from 'styled-system'

const Box = glamorous.div(space, width, fontSize, color)
```

```jsx
// width: 50%
<Box width={1/2} />

// font-size: 20px
<Box fontSize={4} />

// margin: 16px
<Box m={2} />

// padding: 32px
<Box p={3} />

// color
<Box color='tomato' />
<Box color='grays.0' />

// background color
<Box bg='tomato' />

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
import { space } from 'styled-system'
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

## color

```js
import { color } from 'styled-system'
```

The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
By default the raw value of the prop is returned.
Color palettes can be configured with the [ThemeProvider](#configuration) to use keys as prop values, with support for dot notation.
Array values are converted into [responsive values](#responsive-styles).


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

## responsiveStyle

The `responsiveStyle` utility can be used to handle array-based responsive style props for other CSS properties.

```js
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'

// Usage
// responsiveStyle(cssProperty[, propName][, booleanValue])

const Flex = styled.div`
  display: flex;
  ${responsiveStyle('flex-direction', 'direction')}
`

const App = props => (
  <Flex direction={[ 'column', 'row' ]}>
    <div>Responsive</div>
    <div>Direction</div>
  </Flex>
)
```

## Remove Props

Styled-components attempts to remove invalid HTML attributes from props,
but does not remove `width`, `fontSize`, or `color`.
When using styled-system with other CSS-in-JS libraries,
it can also be helpful to remove style props.
To ensure style props are not passed to the element, a `removeProps`
utility can be used.

```jsx
import React from 'react'
import styled from 'styled-components'
import {
  width,
  fontSize,
  space,
  removeProps
} from 'styled-system'

const BaseComponent = props => {
  const next = removeProps(props)
  return <div {...next} />
}

const Component = styled(BaseComponent)([],
  width,
  fontSize,
  space
)
```

## Breakpoints

styled-system uses a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
The default set of breakpoints aims to cover a wide range of devices from mobile to desktop.
Breakpoints default to `em` but can be overridden by passing strings with unit appended.
Breakpoints can be customized using styled-components' [ThemeProvider](#configuration).

```js
[ 40, 52, 64 ]
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

[ '300px', '600px', '1200px' ]
// @media screen and (min-width: 300px)
// @media screen and (min-width: 600px)
// @media screen and (min-width: 1200px)
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

As opposed to the built-in configurations, arrays given to the `breakpoints`, `space`, and
`fontSizes` theme properties can be of arbitrary lengths.

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
  ],
  colors: {
    black: '#111',
    blue: '#07c',
  }
}

const App = props => (
  <ThemeProvider theme={theme}>
    <MyComponent
      fontSize={4}
      my={[ 2, 3 ]}
      color='blue'
    />
  </ThemeProvider>
)
```

## Related

- [grid-styled](https://github.com/jxnblk/grid-styled)
- [Rebass](http://jxnblk.com/rebass)
- [styled-components](https://github.com/styled-components/styled-components)
- [glamorous](https://github.com/paypal/glamorous)

MIT License

