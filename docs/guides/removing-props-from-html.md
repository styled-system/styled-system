# Removing props from HTML elements

Due to the nature of the popular `styled` higher order component,
as an author you must rely on the CSS-in-JS library you're using to decide whether or not to forward props along to the HTML element.
For the most part, these libraries do a good job of not forwarding props that aren't valid HTML attributes.
However, the Styled System API uses a few prop names that are either deprecated HTML attributes or SVG attributes and aren't intended to be rendered in the output HTML.
While most browsers should handle these stray HTML attributes with no problem, there might be good reason to clean these up in production.

## `shouldForwardProp`

Both [Emotion](https://emotion.sh/docs/styled#customizing-prop-forwarding "Emotion – Customizing prop forwarding") and [Styled Components](https://styled-components.com/docs/api#shouldforwardprop "styled-components API Reference – shouldForwardProp") include support for determining which props are forwarded to the HTML element with their `shouldForwardProp` APIs.

Styled System has a optional utility that can be passed directly to either API, making sure your components do not render style props as HTML. To use it, start by installing the following package:

```sh
npm i @styled-system/should-forward-prop
```

### Emotion

When using Emotion, pass this utility function as an option to the `styled` HOC.

```js
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { space, color } from 'styled-system'

const Box = styled('div', {
  shouldForwardProp,
})(space, color)
```

### Styled Components

With Styled Components, pass it as an option in the `withConfig` function.

```js
import styled from 'styled-components'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { space, color } from 'styled-system'

const Box = styled('div').withConfig({
  shouldForwardProp,
})(space, color)
```

## `css` Prop

If you're a fan of using the [`css` prop][], you can easily control which props are forwarded to the HTML element, just like in any other React component. It might be a little more work up front, but can be useful in some cases.

```js
// example using Emotion's css prop
import React from 'react'
import { color } from 'styled-system'

export default ({ color, bg, ...props }) => (
  <div {...props} css={theme => color({ theme, color, bg })} />
)
```

[`css` prop]: https://emotion.sh/docs/css-prop
