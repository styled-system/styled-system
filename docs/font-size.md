# Font Size

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

