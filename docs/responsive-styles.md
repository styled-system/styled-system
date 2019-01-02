
# Responsive Styles

Often when working on responsive layouts, it's useful to adjust styles across a singular dimension –
such as font-size, margin, padding, and width.
Instead of manually managing media queries and adding nested style objects throughout a code base,
styled-system offers a convenient shorthand syntax for adding responsive styles with a mobile-first approach.
While this syntax can seem odd at first, it can become a powerful way to manage responsive typography and layouts.

All style utilities add props that accept arrays as values for mobile-first responsive styles.

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

To inject responsive props into a styled component, use the `renderStyledSystemProps` helper:
```jsx
import styled from 'styled-components';
import { renderStyledSystemProps } from 'styled-system';

const ResponsiveStyledComponent = styled.div`
  ${renderStyledSystemProps({ p : ['0px', '8px', '16px']})}
`
```

## Using objects

Alternatively you can define your breakpoints as an `object` e.g.

```jsx
// theme.js
export default {
  breakpoints: {
    sm: 0,    // zero represents the default (for mobile-first approach)
    md: '48em',
    lg: '80em'
  }
}
```

And then pass an `object` to configure how the component should respond at these breakpoints:

```jsx
<Box
  width={{
    sm: 1,    // 100% by default (no media query)
    md: 1/2,  // 50% at 'md' (48em and up)
    lg: 1/4   // 25% at 'lg' (80em and up)
  }}
/>
```

Note: it isn't necessary to set a value for each breakpoint. The following would only apply 50% width at the `md` breakpoint:

```jsx
<Box width={{ md: 1/2 }} />
