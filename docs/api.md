
# API

- [Core](#core)
  - [space](#space) (margins & paddings)
  - [width](#width)
  - [fontSize](#fontsize)
  - [color](#color) (and background-color)
- [Typography](#typography)
- [Layout](#layout)
- [Flexbox](#flexbox)
- [Grid Layout](#grid-layout)
- [Borders](#borders)
- [Position](#position)
- [Misc](#misc)
- [Variant styles](#variants)
- [Utilities](#utilities)
  - [themeGet](#themeget)
  - [propTypes](#proptypes)
- [Customize](#customize)
  - [style](#style)
  - [variant](#variant)
- [Defaults](#defaults)

## Core

### space

```js
import { space } from 'styled-system'
```

The space utility converts shorthand margin and padding props to margin and padding CSS declarations.

- Numbers from 0-4 (or the length of `theme.space`) are converted to values on the [spacing scale](#defaults).
- Negative values can be used for negative margins.
- Numbers greater than the length of the `theme.space` array are converted to raw pixel values.
- String values are passed as raw CSS values.
- And array values are converted into [responsive values][responsive-styles].

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

```jsx
// examples (margin prop)

// sets margin value of `theme.space[2]`
<Box m={2} />

// sets margin value of `-1 * theme.space[2]`
<Box m={-2} />

// sets a margin value of `16px` since it's greater than `theme.space.length`
<Box m={16} />

// sets margin `'auto'`
<Box m='auto' />

// sets margin `8px` on all viewports and `16px` from the smallest breakpoint and up
<Box m={[ 1, 2 ]} />
```

As of v4.0.0, verbose margin and padding props (e.g. `margin`, `marginTop`) can also be used instead of the shorthand props.

### width

```js
import { width } from 'styled-system'
```

The width utility parses a component's `width` prop and converts it into a CSS width declaration.

- Numbers from 0-1 are converted to percentage widths.
- Numbers greater than 1 are converted to pixel values.
- String values are passed as raw CSS values.
- And arrays are converted to [responsive width styles][responsive-styles].

```jsx
// examples

// width `50%`
<Box width={1/2} />

// width `256px`
<Box width={256} />

// width `'2em'`
<Box width='2em' />

// width `100%` on all viewports and `50%` from the smallest breakpoint and up
<Box width={[ 1, 1/2 ]} />
```

### fontSize

```js
import { fontSize } from 'styled-system'
```

The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.

- Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
- Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
- String values are passed as raw CSS values.
- And array values are converted into [responsive values][responsive-styles].

```jsx
// examples

// font-size of `theme.fontSizes[3]`
<Text fontSize={3} />

// font-size `32px`
<Text fontSize={32} />

// font-size `'2em'`
<Text fontSize='2em' />

// font-size `10px` on all viewports and `12px` from the smallest breakpoint and up
<Text fontSize={[ 10, 12 ]} />
```

### color

```js
import { color } from 'styled-system'
```

The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
By default the raw value of the prop is returned.
Color palettes can be configured with the [ThemeProvider][theming] to use keys as prop values, with support for dot notation.
Array values are converted into [responsive values][responsive-styles].

```jsx
// examples

// picks the value defined in `theme.colors['blue']`
<Box color='blue' />

// picks up a nested color value using dot notation
// `theme.colors['gray'][0]`
<Box color='gray.0' />

// raw CSS color value
<Box color='#f00' />

// background colors
<Box bg='blue' />

// verbose prop
<Box backgroundColor='blue' />
```

---

## Typography

```js
// style functions
import {
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing
} from 'styled-system'
```

```jsx
// fontFamily
<Text fontFamily='mono' />

// textAlign
<Text textAlign='center' />
<Text textAlign={[ 'center', 'left' ]} />

// lineHeight
<Text lineHeight='1.25' />

// fontWeight
<Text fontWeight='bold' />

// letterSpacing
<Text letterSpacing='0.1em' />
```

## Layout

```js
// style functions
import {
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
} from 'styled-system'
```

```jsx
// display
<Box display='inline-block' />
<Box display={[ 'block', 'inline-block' ]} />

// maxWidth
<Box maxWidth={1024} />
<Box maxWidth={[ 768, null, null, 1024 ]} />

// minWidth
<Box minWidth={128} />
<Box minWidth={[ 96, 128 ]} />

// height
<Box height={64} />
<Box height={[ 48, 64 ]} />

// maxHeight
<Box maxHeight={512} />
<Box maxHeight={[ 384, 512 ]} />

// minHeight
<Box minHeight={512} />
<Box minHeight={[ 384, 512 ]} />

// size (width & height)
<Box size={32} />
<Box size={[ 32, 48 ]} />
```

## Flexbox

```js
// style functions
import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order
} from 'styled-system'
```

```jsx
// alignItems
<Flex alignItems='center' />

// alignContent
<Flex alignContent='center' />

// justifyContent
<Flex justifyContent='center' />

// flexWrap
<Flex flexWrap='wrap' />

// flexBasis
<Flex flexBasis='auto' />

// flexDirection
<Flex flexDirection='column' />

// flex
<Box flex='1 1 auto' />

// justifySelf
<Box justifySelf='center' />

// alignSelf
<Box alignSelf='center' />

// order
<Box order='2' />
```

## Grid Layout

```js
// style functions
import {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea
} from 'styled-system'
```

```jsx
// gridGap
<Box gridGap={10} />
<Box gridGap={[ 1, 2 ]} />

// gridColumnGap
<Box gridColumnGap={10} />
<Box gridColumnGap={[ 1, 2 ]} />

// gridRowGap
<Box gridRowGap={10} />
<Box gridRowGap={[ 1, 2 ]} />

// gridColumn
<Box gridColumn={1} />

// gridRow
<Box gridRow={1} />

// gridAutoFlow
<Box gridAutoFlow='row' />

// gridAutoColumns
<Box gridAutoColumns='auto' />

// gridAutoRows
<Box gridAutoRows='auto' />

// gridTemplateColumns
<Box gridTemplateColumns='1fr 2fr' />

// gridTemplateRows
<Box gridTemplateRows='auto' />

// gridTemplateAreas
<Box gridTemplateAreas='a b' />

// gridArea
<Box gridArea='a' />
```

## Borders

The `borders` utility combines `border`, `borderTop`, `borderRight`, `borderBottom`, `borderLeft`, `borderWidth`, `borderStyle`, `borderColor`, and `borderRadius` props.

```js
// style functions
import {
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius
} from 'styled-system'
```

```js
// composed style function with all border props
import { borders } from 'styled-system'
```

```jsx
<Box border='1px solid' />
<Box borderTop='1px solid' />
<Box borderRight='1px solid' />
<Box borderBottom='1px solid' />
<Box borderLeft='1px solid' />

// borderWidth
<Box borderWidth='4px' />

// borderStyle
<Box borderStyle='dotted' />

// borderColor
<Box borderColor='blue' />

// borderRadius
<Box borderRadius={4} />
```

## Position

```js
// style functions
import {
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from 'styled-system'
```

```jsx
// position
<Box position='absolute' />

// zIndex
<Absolute zIndex={2} />

// top, right, bottom, left
<Fixed
  top='0'
  right='0'
  bottom='0'
  left='0'
/>
```

## Misc

```js
// style functions
import {
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  overflow,
} from 'styled-system'
```

```jsx
// boxShadow
<Box boxShadow={1} />

// backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat
<Box
  backgroundImage='kitten.png'
  backgroundSize='cover'
  backgroundPosition='center'
  backgroundRepeat='repeat-x'
/>

// opacity
<Box opacity={0.5} />

// overflow
<Box overflow='auto' />
```

## Variants

The variant style utilities allow you to define reusable style objects in your theme for things like text styles and color combinations.

**NOTE:** the objects defined in the theme are *CSS style* objects, not component *props*. Styled system props **will not** work here to avoid conflating CSS style objects with component props.

```js
// example theme
const theme = {
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  colorStyles: {
    warning: {
      color: 'black',
      backgroundColor: 'orange'
    },
    error: {
      color: 'white',
      backgroundColor: 'red'
    },
  },
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: 'blue',
      '&:hover': {
        backgroundColor: 'black',
      }
    }
  }
}
```

```js
// style functions
import {
  textStyle,
  colorStyle,
  buttonStyle
} from 'styled-system'
```

```jsx
// textStyle
<Text textStyle='caps' />

// colorStyle
<Box colors='warning' />

// buttonStyle
<Button variant='primary' />
```

---

## Utilities

### themeGet

<div id='theme' />

The `themeGet` function is an existential getter function
that can be used in any style declaration to get a value
from your theme, with support for fallback values.
This helps prevent errors from throwing when a theme value is missing,
which can be helpful when unit testing styled-components.

```js
themeGet(objectPath, fallbackValue)(props)
```

`themeGet` returns a function that accepts props as an argument
(`themeGet(objectPath)(props)`), which when used in a tagged template
literal should look like this:

```js
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Box = styled.div`
  border-radius: ${themeGet('radii.small', '4px')};
`
```

When used with object literal syntax, `themeGet` needs to be in a
function call and have `props` passed to it:

```js
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Box = styled('div')(props => ({
  borderRadius: themeGet('radii.small', '4px')(props),
}))
```

### propTypes

Prop type definitions are available for each style function to add to your component's propTypes object.
Each value in `propTypes` is an object which should be assigned (or spread) to the component's `propTypes`.

```jsx
import styled from 'styled-components'
import { width } from 'styled-system'

const Box = styled.div`
  ${width}
`

Box.propTypes = {
  ...width.propTypes
}
```

---

## Customize

To create custom utilities for other CSS properties,
use the following low-level utility functions.

### style

Create a style utility.

```js
import styled from 'styled-components'
import { style } from 'styled-system'

const fontSize = style({
  // React prop name and CSS property
  prop: 'fontSize',
  // CSS property (if different from prop argument)
  cssProperty: 'fontSize',
  // key for theme values
  key: 'fontSizes',
  // accessor function for transforming the value
  transformValue: n => n + 'px',
  // add a fallback scale object or array, if theme is not present
  scale: [ 0, 4, 8, 16, 32 ],
  // Optional prop alias
  alias: 'fs',
})

const Text = styled.div`
  ${fontSize}
`

// with a `theme.shadows` array
const App = props => (
  <Text fontSize={3}>
    Hello
  </Text>
)
```

### variant

Create a style utility that maps props to style objects in a theme.

```js
import styled from 'styled-components'
import { variant } from 'styled-system'

const cardStyle = variant({
  key: 'cards'
})

const Card = styled.div`
  ${cardStyle}
`
Card.defaultProps = {
  variant: 'normal'
}
// <Card variant='large' />
```

---

## Defaults

### Breakpoints

If no theme is provided, styled-system uses smart defaults for breakpoints.

```js
// Default Breakpoints
const breakpoints = [ '40em', '52em', '64em' ]
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)
```

### Font Sizes

```
// default fontSizes
const fontSizes = [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
```

### Space

```
// default space for margin and padding
const space = [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]
```

[responsive-styles]: /responsive-styles
[theming]: /getting-started#theming
