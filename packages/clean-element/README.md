# clean-element

```sh
npm i clean-element
```

Styled-components and other libraries attempt to remove invalid HTML attributes from props using a whitelist, but do not remove width, fontSize, color, or other valid HTML attributes when used as props.

To ensure that style props are not passed on to the underlying DOM element, even in cases where a prop is a valid HTML attribute, like width or align, use the cleanElement higher order component to create a base component that remove props defined in propTypes.

```jsx
import styled from 'styled-components'
import { textAlign, propTypes } from 'styled-system'
import cleanElement from 'clean-element'

const CleanDiv = cleanElement('div')

// props that are defined as propTypes are removed
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

**Manually omitting props**

As an alternative to using the `cleanElement` function, removing style props from styled-components can be done manually, with a more React-like approach.

```js
import React from 'react'
import styled from 'styled-components'
import { width, color } from' styled-system'

const Box = styled(({
  width,
  color,
  bg,
  ...props
}) => <div {...props} />)`
  ${width}
  ${color}
`
```

See this discussion for more information:
https://github.com/styled-components/styled-components/issues/439

---

## Related

- [system-components](https://github.com/jxnblk/system-components)
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

---

[MIT License](LICENSE.md)
