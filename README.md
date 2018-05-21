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

> "This is honestly my favourite way to build UI components right now ![party parrot][party-parrot]"
> – [Varun Vachhar][varun-post]

[party-parrot]: https://github.com/jmhobbs/cultofthepartyparrot.com/raw/master/parrots/parrot.gif

<!--
> "Fantastic set of tools that offer the ease and API of tachyons/functional CSS but, are way more customisable."
> – [Varun Vachhar](https://mobile.twitter.com/winkerVSbecks/status/955619873463431168)
-->

> "The future of css-in-js is going to look something like styled-system with its responsive values."<br/>
> – [Kye Hohenberger](https://mobile.twitter.com/tkh44/status/905474043729416192)

> "Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for."<br/>
> – [Nathan Young](https://mobile.twitter.com/nathanyoung/status/891353221880360960)

### Table of Contents

- [Usage](#usage)
- [Getting Started](#getting-started)
- [How it Works](#how-it-works)
- [Responsive Styles](#responsive-styles)
- [Docs](#docs)
- [Optional Packages](#optional-packages)
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


## Docs

<!-- link shims for previous readme -->
<a id='cleanelement' href='clean-element'></a>
<a id='troubleshooting' href='docs/troubleshooting.md'></a>

- [Getting Started](docs/getting-started.md)
- [Responsive Styles](docs/responsive-styles.md)
- [How it Works](docs/how-it-works.md)
- [API](docs/api.md)
  - [Core](docs/api.md#core)
    - [space](docs/api.md#space-responsive) (margins & paddings)
    - [width](docs/api.md#width-responsive)
    - [fontSize](docs/api.md#fontsize-responsive)
    - [color](docs/api.md#color-responsive) (and background-color)
  - [Typography](docs/api.md#typography)
  - [Layout](docs/api.md#layout)
  - [Flexbox](docs/api.md#flexbox)
  - [Borders](docs/api.md#borders)
  - [Position](docs/api.md#position)
  - [Misc](docs/api.md#misc)
  - [Pseudo-classes](docs/api.md#pseudo-classes)
  - [Complex styles](docs/api.md#complex-styles)
  - [Utilities](docs/api.md#utilities)
    - [themeGet](docs/api.md#themeget)
    - [propTypes](docs/api.md#proptypes)
  - [Customize](docs/api.md#customize)
    - [style](docs/api.md#style)
    - [responsiveStyle](docs/api.md#responsivestyle)
    - [pseudoStyle](docs/api.md#pseudostyle)
    - [complexStyle](docs/api.md#complexstyle)
  - [Default Theme](docs/api.md#default-theme)
- [Table of Style Functions](docs/table.md)

## Optional Packages

- [clean-tag](clean-tag)
- [system-components](system-components)
- [system-loader](system-loader)
- [system-classnames](system-classnames)
- [clean-element](clean-element)

---

## Further Reading

- [Component Based Design System With Styled-System][varun-post]

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
[varun-post]: https://varun.ca/styled-system/

<!-- new links -->
[cole-tweet]: https://mobile.twitter.com/colebemis/status/996565848138526721
[mrmrs-elements]: https://github.com/mrmrs/elements
[broccs-react-starter]: https://github.com/broccolini/react-website-starter
[dalgleish]: https://mobile.twitter.com/markdalgleish/status/913191186944241665

[MIT License](LICENSE.md)
