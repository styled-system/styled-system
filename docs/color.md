# Color

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

[Font Size](font-size.md)
