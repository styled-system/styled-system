
# Styled System Typography

Add typographic styles to child elements using styled-system theme primitives – intended for MDX or markdown content

**EXPERIMENTAL/WIP**

```sh
npm i @styled-system/typography
```

```jsx
import React from 'react'
import Typography from '@styled-system/typography'

export default props =>
  <Typography
    maxWidth={768}
    mx='auto'
    px={[ 3, 4 ]}
    py={4}
    h1={{
      fontSize: [4, 5],
      lineHeight: 1.25,
      mt: 4,
      mb: 2,
    }}>
    <h1>Hello</h1>
  </Typography>
```


## Getting Started

Styled System Typography uses [Emotion][], be sure your build setup includes support for Emotion if you plan to use server side rendering.
To configure the theme, add the Emotion `ThemeProvider` to your application's root.

```jsx
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

## Typography Themes

The base Typography component can be customized to include default typographic styles that you plan to use across different applications.

```jsx
// example "themed" Typography component
import React from 'react'
import Typography from '@styled-system/typography'

const config = {
  maxWidth: 768,
  mx: 'auto',
  px: 4,
  py: 4,
  lineHeight: 1.5
  h1: {
    fontSize: [5, 6],
    lineHeight: 1.25,
    mt: [3, 4],
    mb: 3,
    color: 'rebeccapurple',
  },
  h2: {
    fontSize: 4,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: 3,
    lineHeight: 1.25,
  },
}

export default props =>
  <Typography
    {...config}
    {...props}
  />
```

Props can also be deep merged for one-off overrides:

```jsx
import merge from 'lodash.merge'

export default props =>
  <Typography
    {...merge(config, props)}
  />
```

## Built-in Themes

This package includes a handful of pre-configured typography themes.
Import a component from one of the following paths to use a default theme:

- `import Modern from '@styled-system/typography/modern'`
- `import Future from '@styled-system/typography/future'`
- `import Roboto from '@styled-system/typography/roboto'`
- `import Baskerville from '@styled-system/typography/baskerville'`
- `import Poppins from '@styled-system/typography/poppins'`

## Props

[Styled System][] props can pick up values from a theme context when using a `ThemeProvider` component.
This means that the value passed to the prop can be a key from the correlating theme object.
For example, setting `fontSize={5}` picks up the `theme.fontSizes[5]` value, which defaults to `32px`.
All [styled-system][] props also accept arrays as values to create [responsive props][].
Read more about how Styles System works in the [docs][styled-system].

### Root element props

The root element adds styles using the following [styled-system][] typography props:

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

### Child element props

Most typographic elements can be styled via props. Pass an object with Styled System typographic props and CSS objects as a tag name to style child elements.

```jsx
// example styles for `blockquote`
<Typography
  blockquote={{
    fontSize: [3, 4],
    fontWeight: 'bold',
    px: 3,
    borderLeft: '2px solid gray',
  }}
/>
```

### `css` prop

For all other styles, use the `css` prop. This can be helpful for targeting other elements or deeply nested elements.

```jsx
// example
<Typography
  css={{
    '& pre code': {
      fontSize: 'inherit',
    }
  }}
/>
```

### Related

The [typography-system][] module attempts to solve a similar problem with a different implementation. It takes a Typography.js theme and converts it into a theme object that works with Styled System. The component in this package starts with primitive values from a Styled System theme, and creates typographic styles based on those primitives.

### Prior Art

This component is inspired by many other similar projects, especially [Typography.js][]

[styled system]: https://styled-system.com
[styled-system]: https://styled-system.com
[responsive props]: https://styled-system.com/responsive-styles
[emotion]: https://emotion.sh
[typography.js]: https://kyleamathews.github.io/typography.js/
[typography-system]: https://github.com/jxnblk/typography-system

MIT License
