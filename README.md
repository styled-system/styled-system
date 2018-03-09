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
- Used in [Rebass](http://jxnblk.com/rebass), [Grid Styled](http://jxnblk.com/grid-styled/), and the [Priceline Design System](https://github.com/pricelinelabs/design-system)

> "The future of css-in-js is going to look something like styled-system with its responsive values."<br/>
> – [Kye Hohenberger](https://mobile.twitter.com/tkh44/status/905474043729416192)

> "Fantastic set of tools that offer the ease and API of tachyons/functional CSS but, are way more customisable."
> – [Varun Vachhar](https://mobile.twitter.com/winkerVSbecks/status/955619873463431168)

> "Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for."<br/>
> – [Nathan Young](https://mobile.twitter.com/nathanyoung/status/891353221880360960)

### Table of Contents

- [Usage](#usage)
- [Getting Started](#getting-started)
- [How it Works](#how-it-works)
- [Responsive Styles](#responsive-styles)
- [API](#api)
- [system-components](#system-components)
- [Default Theme](#default-theme)
- [Troubleshooting](#troubleshooting)
- [Related](#related)

## Usage

```jsx
// Example uses styled-components, but styled-system works with most other css-in-js libraries as well
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

// font-size: 20px (theme.fontSizes[4])
<Box fontSize={4} />

// margin: 16px (theme.space[2])
<Box m={2} />

// padding: 32px (theme.space[3])
<Box p={3} />

// color
<Box color='tomato' />

// color: #333 (theme.colors.gray[0])
<Box color='grays.0' />

// background color
<Box bg='tomato' />
```

## Responsive Style Props

Set responsive width, margin, padding, font-size, and other properties with a shorthand array syntax.
[Read more](#responsive-styles)

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

## Getting Started

Although it's not required, styled-system works best with a theme that's tailored to your own custom styles.
Create a `theme.js` file that exports an object and add a [ThemeProvider](https://www.styled-components.com/docs/advanced#theming)
to the root of your application.

```js
// empty theme.js
const theme = {}

export default theme
```

```jsx
// root App component
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>
    {/* ... */}
  </ThemeProvider>
)
```

Most utility functions in styled-system will attempt to find a value from your theme first,
then fallback to a hard-coded value if it hasn't been defined in your theme.
For example, defining a `colors` object can make using a common color palette across your app simpler.

```js
// theme.js
const colors = {
  text: '#024',
  blue: '#07c'
}

const theme = {
  colors
}

export default theme
```

With a component that uses the `color` function from styled-system, the name of the color defined in your theme can be used as a prop.

```jsx
// picks up the value `#07c` from the theme
<Box color='blue' />
```

When a value is passed that's **not** in the theme, it will be passed as a raw value.

```jsx
// renders the CSS `tomato` color since it's not defined in theme
<Box color='tomato' />
```

It's recommended to add objects and array scales to your theme to ensure consistent, constraint-based values are used throughout your app.
All theme values are optional, so use your own discretion when creating a theme.
See the [Default Theme](#default-theme) section for a reference to the default fallback values.

```js
// theme.js

// breakpoint values
// any array length works with styled-system
const breakpoints = [
  '40em', '52em', '64em'
]

const colors = {
  text: '#024',
  blue: '#07c',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: [
    '#333',
    '#666',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
  ]
}

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

// typographic scale
const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 96, 128
]

// for any scale, either array or objects will work
const lineHeights = [
  1, 1.125, 1.25, 1.5
]

const fontWeights = {
  normal: 500,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em'
}

// border-radius
const radii = [
  0, 2, 4, 8
]

const borders = [
  0, '1px solid', '2px solid'
]

const shadows = [
  `0 1px 2px 0 ${colors.text}`,
  `0 1px 4px 0 ${colors.text}`
]

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
}

export default theme
```

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


## Responsive Styles

Often when working on responsive layouts, it's useful to adjust styles across a singular dimension –
such as font-size, margin, padding, and width.
Instead of manually managing media queries and adding nested style objects throughout a code base,
styled-system offers a convenient shorthand syntax for adding responsive styles with a mobile-first approach.
While this syntax can seem odd at first, it can become a powerful way to manage responsive typography and layouts.

All core props accept arrays as values for mobile-first responsive styles.

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
- [Table of Style Props](#table-of-style-props)
- [Utilities](#utilities)
  - [themeGet](#themeget)
  - [propTypes](#proptypes)
- [Customize](#customize)
  - [style](#style)
  - [responsiveStyle](#responsivestyle)
  - [pseudoStyle](#pseudostyle)
  - [complexStyle](#complexstyle)

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
- And array values are converted into [responsive values](#responsive-styles).

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
- And arrays are converted to [responsive width styles](#responsive-styles).

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

- Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#font-size-scale).
- Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
- String values are passed as raw CSS values.
- And array values are converted into [responsive values](#responsive-styles).

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
Color palettes can be configured with the [ThemeProvider](#configuration) to use keys as prop values, with support for dot notation.
Array values are converted into [responsive values](#responsive-styles).

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

The `borders` utiilty combines `border`, `borderTop`, `borderRight`, `borderBottom` and `borderLeft`, all of which are responsive

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

## Table of Style Props

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`space`       | `m`        | `margin`        | `space`      | yes
`space`       | `mt`       | `margin-top`    | `space`      | yes
`space`       | `mr`       | `margin-right`  | `space`      | yes
`space`       | `mb`       | `margin-bottom` | `space`      | yes
`space`       | `ml`       | `margin-left`   | `space`      | yes
`space`       | `p`        | `padding`       | `space`      | yes
`space`       | `pt`       | `padding-top`   | `space`      | yes
`space`       | `pr`       | `padding-right` | `space`      | yes
`space`       | `pb`       | `padding-bottom` | `space`     | yes
`space`       | `pl`       | `padding-left`  | `space`      | yes
`width`       | `width`    | `width`         | none         | yes
`fontSize`    | `fontSize` |`font-size`      |`fontSizes`   | yes
`color`       | `color`    | `color`         | `colors`     | yes
`color`       | `bg`       | `background-color`| `colors`   | yes

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`textAlign`   | `textAlign`    | `text-align`   | none         | yes
`lineHeight`  | `lineHeight` | `line-height` | `lineHeights` | no
`fontWeight`  | `fontWeight` | `font-weight` | `fontWeights` | no
`letterSpacing` | `letterSpacing` | `letter-spacing` | `letterSpacings` | no

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`display` | `display` | `display` | none | yes
`maxWidth` | `maxWidth` | `max-width` | `maxWidths` | yes
`minWidth` | `minWidth` | `min-width` | `minWidths` | yes
`height` | `height` | `height` | `heights` | yes
`maxHeight` | `maxHeight` | `max-height` | `maxHeights` | yes
`minHeight` | `minHeight` | `min-height` | `minHeights` | yes
`size` | `size` | `width` `height` | none | yes
`ratio` | `ratio` | `height` `padding-bottom` | none | no

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`alignItems`  | `alignItems` | `align-items` | none | yes
`justifyContent` | `justifyContent` | `justify-content` | none | yes
`flexWrap` | `flexWrap` | `flex-wrap` | none | yes
`flexDirection` | `flexDirection` | `flex-direction` | none | yes
`flex` | `flex` | `flex` (shorthand) | none | yes
`alignContent`  | `alignContent` | `align-content` | none | yes
`justifySelf` | `justifySelf` | `justify-self` | none | yes
`alignSelf` | `alignSelf` | `align-self` | none | yes
`order` | `order` | `order` | none | yes
`flexWrap` | `flexWrap` | `flex-wrap` | none | yes
`flexBasis` | `flexBasis` | `flex-basis` | none | yes

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`gridGap`  | `gridGap` | `grid-gap` | `space` | yes
`gridRowGap` | `gridRowGap` | `grid-row-gap` | `space` | yes
`gridColumnGap` | `gridColumnGap` | `grid-column-gap` | `space` | yes
`gridColumn` | `gridColumn` | `grid-column` | none | yes
`gridRow` | `gridRow` | `grid-row` | none | yes
`gridAutoFlow` | `gridAutoFlow` | `grid-auto-flow` | none | no
`gridAutoRows` | `gridAutoRows` | `grid-auto-rows` | none | no
`gridAutoColumns` | `gridAutoColumns` | `grid-auto-columns` | none | no
`gridTemplateRows` | `gridTemplateRows` | `grid-template-rows` | none | yes
`gridTemplateColumns` | `gridTemplateColumns` | `grid-template-columns` | none | yes

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`borderRadius` | `borderRadius` | `border-radius` | `radii` | no
`borderColor` | `borderColor` | `border-color` | `colors` | no
`borders` | `border` | `border` | `borders` | yes
`borders` | `borderTop` | `border-top` | `borders` | yes
`borders` | `borderRight` | `border-right` | `borders` | yes
`borders` | `borderBottom` | `border-bottom` | `borders` | yes
`borders` | `borderLeft` | `border-left` | `borders` | yes
`boxShadow` | `boxShadow` | `box-shadow` | `shadows` | no

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`position` | `position` | `position` | none | yes
`zIndex` | `zIndex` | `z-index` | none | no
`top` | `top` | `top` | none | yes
`right` | `right` | `right` | none | yes
`bottom` | `bottom` | `bottom` | none | yes
`left` | `left` | `left` | none | yes

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`hover` | `hover` | style object | -- | no
`focus` | `focus` | style object | -- | no
`active` | `active` | style object | -- | no
`disabled` | `disabledStyle` | style object | -- | no

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`textStyle` | `textStyle` | style object | `textStyles` | no
`colorStyle` | `colors` | style object | `colorStyles` | no
`buttonStyle` | `buttonStyle` | style object | `buttons` | no

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

## system-components

For an even simpler authoring experience when using styled-system with styled-components, see [system-components](https://github.com/jxnblk/system-components), which is a lightweight wrapper around the two libraries.

```js
import system from 'system-components'

// creates a Box component with default props tied to your theme
const Box = system({
  p: 2,
  bg: 'blue'
})
```

---

## system-loader

The [system-loader](system-loader) package is a webpack loader for creating styled-system components from JSON.

---

### Default Theme

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

---

### Troubleshooting

#### Unknown attribute warnings in React 16

<div id='cleanelement' />

To remove styled-system style props from the underlying DOM element, use either the [clean-tag](clean-tag) or [clean-element](clean-element) components when creating your styled-components.

#### Issues with prop-types

If you encounter issues while using this library alongside the `prop-types` npm package,
webpack's [`resolve.modules`](https://webpack.js.org/configuration/resolve/#resolve-modules)
option might be misconfigured using a relative (instead of absolute) path.
This changes the way CommonJS modules work in a way that will likely cause other issues,
and it's recommended that you only use absolute paths with the `resolve.modules` option.

If you're using `resolve.modules` to avoid import syntax with lots of directory changes,
you might want to consider using a flatter or better organized folder structure in your app.

See https://github.com/jxnblk/grid-styled/issues/51#issuecomment-336116426

---

## Related

- [system-components](https://github.com/jxnblk/system-components)
- [grid-styled](https://github.com/jxnblk/grid-styled)
- [Rebass](http://jxnblk.com/rebass)
- [Compositor Lab](https://compositor.io/lab)
- [styled-components][sc]
- [glamorous][glamorous]
- [emotion][emotion]
- [fela][fela]
- [nano-style][nano-style]
- [cxs][cxs]

[sc]: https://github.com/styled-components/styled-components
[glamorous]: https://github.com/paypal/glamorous
[emotion]: https://github.com/emotion-js/emotion
[fela]: https://github.com/rofrischmann/fela
[nano-style]: https://github.com/jxnblk/nano-style
[cxs]: https://github.com/jxnblk/cxs


[MIT License](LICENSE.md)
