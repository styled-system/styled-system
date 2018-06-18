
## API

- [Core](#core)
  - [space](#space-responsive) (margins & paddings)
  - [width](#width-responsive)
  - [fontSize](#fontsize-responsive)
  - [color](#color-responsive) (and background-color)
- [Typography](#typography)
- [Layout](#layout)
- [Flexbox](#flexbox)
- [Borders](#borders)
- [Position](#position)
- [Misc](#misc)
- [Pseudo-classes](#pseudo-classes)
- [Complex styles](#complex-styles)
- [Utilities](#utilities)
  - [themeGet](#themeget)
  - [propTypes](#proptypes)
- [Customize](#customize)
  - [style](#style)
  - [responsiveStyle](#responsivestyle)
  - [pseudoStyle](#pseudostyle)
  - [complexStyle](#complexstyle)
- [Default Theme](#default-theme)

## Core

### space (responsive)

```js
import { space } from 'styled-system'
```

The space utility converts shorthand margin and padding props to margin and padding CSS declarations.

- Numbers from 0-4 (or the length of `theme.space`) are converted to values on the [spacing scale](#spacing-scale).
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

### width (responsive)

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

### fontSize (responsive)

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

### color (responsive)

```js
import { color } from 'styled-system'
```

The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
By default the raw value of the prop is returned.
Color palettes can be configured with the [ThemeProvider][configuration] to use keys as prop values, with support for dot notation.
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
```

---

## Typography

```jsx
// fontFamily
<Text fontFamily='mono' />

// textAlign (responsive)
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

```jsx
// display (responsive)
<Box display='inline-block' />
<Box display={[ 'block', 'inline-block' ]} />

// maxWidth (responsive)
<Box maxWidth={1024} />
<Box maxWidth={[ 768, null, null, 1024 ]} />

// minWidth (responsive)
<Box minWidth={128} />
<Box minWidth={[ 96, 128 ]} />

// height (responsive)
<Box height={64} />
<Box height={[ 48, 64 ]} />

// maxHeight (responsive)
<Box maxHeight={512} />
<Box maxHeight={[ 384, 512 ]} />

// minHeight (responsive)
<Box minHeight={512} />
<Box minHeight={[ 384, 512 ]} />

// size (responsive, width & height)
<Box size={32} />
<Box size={[ 32, 48 ]} />

// ratio (height: 0 & paddingBottom)
<Box ratio={3/4} />
```

## Flexbox

```jsx
// alignItems (responsive)
<Flex alignItems='center' />

// alignContent (responsive)
<Flex alignContent='center' />

// justifyContent (responsive)
<Flex justifyContent='center' />

// flexWrap (responsive)
<Flex flexWrap='wrap' />

// flexBasis (responsive)
<Flex flexBasis='auto' />

// flexDirection (responsive)
<Flex flexDirection='column' />

// flex (responsive)
<Box flex='1 1 auto' />

// justifySelf (responsive)
<Box justifySelf='center' />

// alignSelf (responsive)
<Box alignSelf='center' />
```

## Borders

The `borders` utility combines `border`, `borderTop`, `borderRight`, `borderBottom` and `borderLeft`, all of which are responsive

```jsx
<Box border='1px solid' />
<Box borderTop='1px solid' />
<Box borderRight='1px solid' />
<Box borderBottom='1px solid' />
<Box borderLeft='1px solid' />
```
```jsx
// borderColor
<Box borderColor='blue' />

// borderRadius
<Box borderRadius={4} />
```

## Position

```jsx
// position (responsive)
<Box position='absolute' />

// zIndex
<Absolute zIndex={2} />

// top, right, bottom, left (responsive)
<Fixed
  top='0'
  right='0'
  bottom='0'
  left='0'
/>
```

## Misc

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
```

## Pseudo-classes

Pseudo-class utility props accept style objects that can pick up certain values, such as color, from a theme.

### hover

```jsx
<Box
  hover={{
    textDecoration: 'underline',
    color: 'blue'
  }}
/>
```

### focus

```jsx
<Box focus={{ color: 'blue' }} />
```

### active

```jsx
<Box active={{ color: 'navy' }} />
```

### disabled

```jsx
<Box disabledStyle={{ color: 'gray' }} />
```

## Complex Styles

The complex style utilities allow you to define reusable style objects in your theme for things like text styles and color combinations.

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

```jsx
// textStyle
<Text textStyle='caps' />

// colorStyle
<Box colors='warning' />

// buttonStyle
<Button buttonStyle='primary' />
```

Styles can be applied with the utility's prop or by using boolean shorthand props for the key used in the theme.
Be sure to use key values that will be unique for a particular component, and avoid using HTML attributes as keys.

```jsx
<Text caps />
<Box warning />
<Button primary />
```

---

## Utilities

### themeGet

<div id='theme' />

The themeGet function is an existential getter function
that can be used in any style declaration to get a value
from your theme, with support for fallback values.
This helps prevent errors from throwing when a theme value is missing,
which can be helpful when unit testing styled-components.

```js
themeGet(objectPath, fallbackValue)
```

```js
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Box = styled.div`
  border-radius: ${themeGet('radii.small', '4px')};
`
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

Create a non-responsive style utility.

```js
import styled from 'styled-components'
import { style } from 'styled-system'

const textShadow = style({
  // React prop name
  prop: 'shadow',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'textShadow',
  // key for theme values
  key: 'shadows',
  // convert number values to pixels
  numberToPx: false,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'sh'
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

Create a responsive style utility that accepts array-based responsive prop values.

```js
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'

const borderRadius = responsiveStyle({
  // React prop name
  prop: 'borderRadius',
  // corresponding CSS property (defaults to prop argument)
  cssProperty: 'borderRadius',
  // key for theme values
  key: 'radii',
  // convert number values to pixels
  numberToPx: true,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'radius'
})

const RoundedBox = styled.div`
  ${borderRadius}
`

const App = props => (
  <RoundedBox borderRadius={[ 0, 2 ]} />
)
```

### pseudoStyle

Create a pseudo-class style utility that accepts a style object prop value.

```js
import styled from 'styled-components'
import { pseudoStyle } from 'styled-system'

const checkedStyle = pseudoStyle({
  prop: 'checkedStyle',
  pseudoclass: 'checked',
  keys: {
    // keys for theme-based values
    color: 'colors',
    backgroundColor: 'colors',
  }
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

### complexStyle

Create a complex style utility that maps props to style objects in a theme.

```js
import styled from 'styled-components'
import { complexStyle } from 'styled-system'

const cardStyles = complexStyle({
  prop: 'cardStyle',
  key: 'cards'
})

const Card = styled.div`
  ${cardStyle}
`
Card.defaultProps = {
  cardStyle: 'normal'
}
// <Card cardStyle='large' />
```

---

## Default Theme

If no theme is provided, styled-system uses smart defaults for breakpoints, the typographic scale, and the spacing scale.

```js
// Breakpoints
const breakpoints = [ '40em', '52em', '64em' ]
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

// Typographic Scale (numbers are converted to px values)
const fontSizes = [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]

// Spacing Scale (used for margin and padding)
const space = [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]
```

[responsive-styles]: responsive-styles.md
[configuration]: configuration.md
