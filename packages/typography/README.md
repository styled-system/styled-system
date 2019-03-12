
# Styled System Typography

Add typographic styles to child elements using styled-system theme primitives – intended for MDX or markdown content
https://styled-system.com/typography

**EXPERIMENTAL/WIP**

```sh
npm i @styled-system/typography
```

```jsx
import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import typography from '@styled-system/typography'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    <>
      <Global styles={typography} />
      {props.children}
    </>
  </ThemeProvider>
```

```js
// example theme.js
export default {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96, 128
  ],
  // the typography object defines global typography styles
  // based on the base theme scales
  typography {
    body: {
      fontFamily: 'system-ui, sans-serif',
      lineHeight: 1.5,
    },
    h1: {
      fontSize: [5, 6],
      lineHeight: 1.25,
      mt: [3, 4],
      mb: 3,
    },
    h2: {
      fontSize: [4, 5],
      lineHeight: 1.25,
    },
    h3: {
      fontSize: 3,
      lineHeight: 1.25,
    },
    pre: {
      p: [2, 3],
    },
  }
}
```

## Getting Started

Styled System Typography is intended for use with [Emotion][] or [Styled Components][], be sure your build setup includes support
for one of these libraries.
To configure the theme, add a `ThemeProvider` to your application's root.

```jsx
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

## Theming

The `typography` object in the theme defines the global styles applied by this module. Each key in the object corresponds to an HTML element selector, where many common typographic elements can also use styled-system typographic props to define responsive, theme-based styles.

### Props

[Styled System][] props can pick up values from a theme context when using a `ThemeProvider` component.
This means that the value passed to the prop can be a key from the correlating theme object.
For example, setting `fontSize: 5` picks up the `theme.fontSizes[5]` value, which defaults to `32px`.
All [styled-system][] props also accept arrays as values to create [responsive props][].
Read more about how Styles System works in the [docs][styled-system].

The core typographic elements accept styles using the following [styled-system][] typography props in addition to all CSS properties:

- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- space props:
  - `m`: margin
  - `mt`: margin-top
  - `mr`: margin-right
  - `mb`: margin-bottom
  - `ml`: margin-left
  - `mx`: (x-axis) margin-left and margin-right
  - `my`: (y-axis) margin-top and margin-bottom
  - `p`: padding
  - `pt`: padding-top
  - `pr`: padding-right
  - `pb`: padding-bottom
  - `pl`: padding-left
  - `px`: (x-axis) padding-left and padding-right
  - `py`: (y-axis) padding-top and padding-bottom
- `color`
- `bg` (or `backgroundColor`)

The following elements use thes typographic style props:
`body`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `a`, `p`, `ol`, `ul`, `dl`, `dd`, `li`, `blockquote`, `hr`, `img`, `pre`, `code`, `samp`, `kbd`, `table`, `tr`, `th`, `td`, `b`, `strong`, `em`, `i`, `abbr`


## Built-In Themes

This library includes several themes that can be used out-of-the-box or as the basis for a custom typography theme.

```jsx
// example theme
import { themes } from '@styled-system/typography'

export default {
  typography: themes.future,
}
```

---

### Related

The [typography-system][] module attempts to solve a similar problem with a different implementation. It takes a Typography.js theme and converts it into a theme object that works with Styled System. The component in this package starts with primitive values from a Styled System theme, and creates typographic styles based on those primitives.

### Prior Art

This component is inspired by many other similar projects, especially [Typography.js][]

[styled system]: https://styled-system.com
[styled-system]: https://styled-system.com
[responsive props]: https://styled-system.com/responsive-styles
[emotion]: https://emotion.sh
[styled components]: https://styled-components.com
[typography.js]: https://kyleamathews.github.io/typography.js/
[typography-system]: https://github.com/jxnblk/typography-system

MIT License
