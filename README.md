# styled-system

Design system utilities for styled-components

[![Build Status](https://travis-ci.org/jxnblk/styled-system.svg?branch=master)](https://travis-ci.org/jxnblk/styled-system)

```sh
npm i styled-system
```

## Usage

```jsx
import styled from 'styled-components'
import { space, width, fontSize } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
`
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

The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
Numbers from 0-8 are converted to values on the fontSizes scale.
Numbers greater than x are converted to raw pixel values.
String values are passed as raw CSS values.
And array values are converted into [responsive values](#responsive-styles).

## space

The space utility converts shorthand margin and padding props to margin and padding CSS declarations.

<!--
- scale
- Negative margins
- pixel values
- Strings
- Arrays
-->

## Responsive Styles

## Higher Order Component

```jsx
import { hoc } from 'styled-system'
const Box = hoc('div')
```

```jsx
<Box p={2} />
```

## `<Box />`

## Breakpoints

```js
[ '40em', '52em', '64em' ]
```

## Font Size Scale

```js
[ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
```

## Spacing Scale

```js
[ 0, 8, 16, 32, 64 ]
```

## Configuration

styled-system can be configured with styled-components'
[ThemeProvider](https://www.styled-components.com/docs/advanced#theming)

```jsx
import { ThemeProvider } from 'styled-components'
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
- [grid-styled](https://github.com/jxnblk/grid-styled)

MIT License

---

- [x] travis
- [x] install
- [x] usage
- [ ] width
- [ ] font-size
- [ ] space
- [ ] hoc
- [ ] Box
- [ ] config
- [ ] related
