# styled-system

Design system utilities for [styled-components][sc] and other css-in-js libraries

[![Build Status][build-badge]][build]
[![Coverage][coverage-badge]][coverage]

[build-badge]: https://img.shields.io/travis/jxnblk/styled-system/master.svg?style=flat-square
[build]: https://travis-ci.org/jxnblk/styled-system
[coverage-badge]: https://img.shields.io/codecov/c/github/jxnblk/styled-system.svg?style=flat-square
[coverage]: https://codecov.io/github/jxnblk/styled-system

```sh
npm i styled-system
```

## Features

- Add style props that hook into your own theme
- Responsive prop values for quickly setting responsive font-size, margin, padding, width, and more
- Influenced by constraint-based design system principles
- Typographic scale
- Spacing scale for margin and padding
- Default 8px grid
- Works with any color palette
- Works with most css-in-js libraries, including [styled-components][sc], [glamorous][glamorous], [emotion][emotion], [fela][fela], and [cxs][cxs]

> "The future of css-in-js is going to look something like styled-system with its responsive values."<br/>
> – [Kye Hohenberger](https://mobile.twitter.com/tkh44/status/905474043729416192)

> "Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for."<br/>
> – [Nathan Young](https://mobile.twitter.com/nathanyoung/status/891353221880360960)

## Usage

```jsx
// Example uses styled-components,
// but styled-system works with most other css-in-js libraries as well
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
```

Each style function exposes its own set of props that style
elements based on values defined in a theme.

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
```

## Responsive Style Props

Set responsive width, margin, padding, font-size,
and other properties with a shorthand
array syntax. [Read more](#responsive-styles)

```jsx
// responsive width
<Box width={[ 1, 1/2, 1/4 ]} />

// responsive font-size
<Box fontSize={[ 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// responsive padding
<Box p={[ 1, 2, 3 ]} />
```

## API

- [**Core**](#core)
  - [space](#space-responsive) (margins & paddings)
  - [width](#width-responsive)
  - [fontSize](#fontsize-responsive)
  - [color](#color-responsive) (and background-color)
  - [Responsive Styles](#responsive-styles)
- [**Extras**](#extras)
  - [textAlign](#textalign-responsive)
  - [lineHeight](#lineheight)
  - [fontWeight](#fontweight)
  - [letterSpacing](#letterspacing)
  - [alignItems](#alignitems-responsive)
  - [justifyContent](#justifycontent-responsive)
  - [flexWrap](#flexwrap-responsive)
  - [flexDirection](#flexdirection-responsive)
  - [flex](#flex-responsive)
  - [alignSelf](#alignself-responsive)
  - [borderRadius](#borderradius)
  - [borderColor](#bordercolor)
  - [borderWidth](#borderwidth)
  - [boxShadow](#boxshadow)
  - [hover](#hover)
  - [focus](#focus)
  - [active](#active)
  - [disabled](#disabled)
- [**Utilities**](#utilities)
  - [theme](#theme)
  - [propTypes](#proptypes)
  - [cleanElement](#cleanelement)
  - [removeProps](#removeprops)
- [**Low-level**](#low-level-style-functions)
  - [style](#style)
  - [responsiveStyle](#responsivestyle)
  - [pseudoStyle](#pseudostyle)

## Core

### space (responsive)

```js
import { space } from 'styled-system'
```

The space utility converts shorthand margin and padding props to margin and padding CSS declarations.
Numbers from 0-4 are converted to values on the [spacing scale](#spacing-scale).
Negative values can be used for negative margins.
Numbers greater than 4 are converted to raw pixel values.
String values are passed as raw CSS values.
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

### width (responsive)

```js
import { width } from 'styled-system'
```

The width utility parses a component's `width` prop and converts it into a CSS width declaration.

- Numbers from 0-1 are converted to percentage widths.
- Numbers greater than 1 are converted to pixel values.
- String values are passed as raw CSS values.
- And arrays are converted to [responsive width styles](#responsive-styles).

### fontSize (responsive)

```js
import { fontSize } from 'styled-system'
```

The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
Numbers from 0-8 are converted to values on the [font size scale](#font-size-scale).
Numbers greater than 8 are converted to raw pixel values.
String values are passed as raw CSS values.
And array values are converted into [responsive values](#responsive-styles).

### color (responsive)

```js
import { color } from 'styled-system'
```

The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
By default the raw value of the prop is returned.
Color palettes can be configured with the [ThemeProvider](#configuration) to use keys as prop values, with support for dot notation.
Array values are converted into [responsive values](#responsive-styles).

---

### Responsive Styles

All core function props accept arrays as values for mobile-first responsive styles.

```jsx
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4   // 25% from the next breakpoint and up
  ]}
/>

// responsive font size
<Box fontSize={[ 1, 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```

---

## Extras

These functions are for adding other theme-based style props to a component.
For practical reasons, some props do not accept arrays for responsive styles.

### textAlign (responsive)

```js
import { textAlign } from 'styled-system'
// <Text align='center' />
```

### lineHeight

```js
import { lineHeight } from 'styled-system'
// <Text lineHeight={1} />
// props.theme.lineHeights[1]
```

### fontWeight

```js
import { fontWeight } from 'styled-system'
// <Text fontWeight='bold' />
// props.theme.fontWeights.bold
```

### letterSpacing

```js
import { letterSpacing } from 'styled-system'
// <Text letterSpacing={1} />
// props.theme.letterSpacings[1]
```

### alignItems (responsive)

```js
import { alignItems } from 'styled-system'
// <Flex align='center' />
```

### justifyContent (responsive)

```js
import { justifyContent } from 'styled-system'
// <Flex justify='center' />
```

### flexWrap (responsive)

```js
import { flexWrap } from 'styled-system'
// <Flex wrap />
```

### flexDirection (responsive)

```js
import { flexDirection } from 'styled-system'
// <Flex flexDirection='column' />
```

### flex (responsive)

```js
import { flex } from 'styled-system'
// <Box flex='none' />
```

### alignSelf (responsive)

```js
import { alignSelf } from 'styled-system'
// <Box alignSelf='baseline' />
```

### borderRadius

```js
import { borderRadius } from 'styled-system'
// <Box borderRadius={1} />
// props.theme.radii[1]
```

### borderColor

```js
import { borderColor } from 'styled-system'
// <Box borderColor='blue' />
// props.theme.colors.blue
```

### borderWidth

```js
import { borderWidth } from 'styled-system'
// <Box borderWidth={1} />
// props.theme.borderWidths
```

```js
// Only apply border in one direction
<Box borderWidth={1} borderBottom />

// Or in multiple directions
<Box borderWidth={1} borderTop borderBottom />
```

### boxShadow

```js
import { boxShadow } from 'styled-system'
// <Box boxShadow={1} />
// props.theme.shadows[1]
// -- OR --
// <Box boxShadow={'1px 1px 0 black'} />
```

### hover

```js
import { hover } from 'styled-system'
// <Box hover={{ color: 'blue' }} />
// props.theme.colors.blue
```

### focus

```js
import { focus } from 'styled-system'
// <Box focus={{ color: 'blue' }} />
// props.theme.colors.blue
```

### active

```js
import { active } from 'styled-system'
// <Box active={{ color: 'navy' }} />
// props.theme.colors.navy
```

### disabled

```js
import { disabled } from 'styled-system'
// <Box disabledStyle={{ color: 'gray' }} />
// props.theme.colors.gray
```

---

## Utilities

### theme

The theme function can be used in any style declaration to get a value
from your theme, with support for fallback values.

```js
import styled from 'styled-components'
import { theme } from 'styled-system'

const Box = styled.div`
  border-radius: ${theme('radii.small')};
`
```

### propTypes

Prop type definitions are available for each style function to add to your component's propTypes object.

```jsx
import styled from 'styled-components'
import { width, propTypes } from 'styled-system'

const Box = styled.div`
  ${width}
`

Box.propTypes = {
  ...propTypes.width
}
```

### cleanElement

Styled-components and other libraries attempt to remove invalid HTML attributes from props using a whitelist,
but do not remove `width`, `fontSize`, `color`, or other valid HTML attributes when used as props.

To ensure that style props are not passed on to the underlying DOM element,
even in cases where a prop is a valid HTML attribute, like `width` or `align`, use the `cleanElement` higher order component to create a base component
that remove props defined in `propTypes`.

```jsx
import styled from 'styled-components'
import { textAlign, propTypes, cleanElement } from 'styled-system'

const CleanDiv = cleanElement('div')

CleanDiv.propTypes = {
  ...propTypes.textAlign
}

const Box = styled(CleanDiv)`
  ${textAlign}
`

// <Box align='center' />
// `align` prop is picked up by styled-components,
// but not passed on to the HTML element
```

### removeProps

This is an alternative to the `cleanElement` utility for removing style props from HTML.

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

---

## Low-level style functions

To convert other CSS properties into styled-system props,
use the following low-level utility functions.

### style

Sets non-responsive styles using thematic values, based on props.

```js
import styled from 'styled-components'
import { style } from 'styled-system'

const textShadow = style({
  // React prop name
  prop: 'shadow',
  // The corresponding CSS property
  cssProperty: 'textShadow',
  // set a key to find values from `props.theme`
  key: 'shadows'
})

const ShadowText = styled(Text)`
  ${textShadow}
`

// with a `theme.shadows` array
const App = props => (
  <ShadowText shadow={0}>
    Shady
  </ShadowText>
)
```

### responsiveStyle

The `responsiveStyle` utility can be used to handle array-based responsive style props for other CSS properties.

```js
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'

const flexDirection = responsiveStyle({
  prop: 'direction',
  cssProperty: 'flexDirection'
})

const Flex = styled.div`
  display: flex;
  ${flexDirection}
`

const App = props => (
  <Flex direction={[ 'column', 'row' ]}>
    <div>Responsive</div>
    <div>Direction</div>
  </Flex>
)
```

### pseudoStyle

Adds style props for pseudoclasses like `hover`, `focus`, `active`, etc.

```js
import styled from 'styled-components'
import { pseudoStyle } from 'styled-system'

const checkedStyle = pseudoStyle('checked', 'checkedStyle')({
  // keys for theme-based values
  color: 'colors',
  backgroundColor: 'colors',
})

const FancyCheckbox = styled.input`
  /* ...base styles */
  ${checkedStyle}
`
FancyCheckbox.defaultProps = {
  type: 'checkbox'
}

// <FancyCheckbox checkedStyle={{ backgroundColor: 'blue' }} />
```

---

## Default Theme

If no theme is provided, styled-system uses smart defaults for breakpoints, the typographic scale, and the spacing scale.

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

styled-system can be configured with styled-components' (or other library's)
[ThemeProvider](https://www.styled-components.com/docs/advanced#theming)

As opposed to the built-in configurations, arrays given to the `breakpoints`, `space`, and
`fontSizes` theme properties can be of arbitrary lengths.

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
- [styled-components][sc]
- [glamorous][glamorous]
- [emotion][emotion]
- [fela][fela]
- [cxs][cxs]

[sc]: https://github.com/styled-components/styled-components
[glamorous]: https://github.com/paypal/glamorous
[emotion]: https://github.com/emotion-js/emotion
[fela]: https://github.com/rofrischmann/fela
[cxs]: https://github.com/jxnblk/cxs

MIT License

