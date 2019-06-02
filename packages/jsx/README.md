
# @styled-system/jsx

Custom JSX pragma for `css` prop with Styled System - built with [Emotion][]

```jsx
/** @jsx jsx */
import jsx from '@styled-system/jsx'

export default props =>
  <div
    {...props}
    css={{
      fontSize: 32,
      // use theme values
      color: 'primary',
      // responsive arrays
      padding: [ 2, 3, 4 ],
      // use shorthands
      mx: 'auto',
    }}
  />
```

- Use Styled System seamlessly with the `css` prop
- No custom `styled` HOC API required
- Mix with *any* CSS property
- Pick up theme values for anything
- Apply any CSS property responsively with array props

## Getting Started

If you're already using JSX syntax, the most explicit way to use Styled System JSX is by adding a custom pragma to the top of any module that uses the pragma.

```js
/** @jsx jsx */
import jsx from '@styled-system/jsx'
```

This is similar to what the Emotion plugin does, so the Emotion plugin should be disabled when using this one instead.

For any module with the custom pragma enabled, use Styled System shortcuts, responsive arrays and theme values directly in the `css` prop.

```jsx
<div
  css={{
    px: 3,
    py: 4,
    mb: 4,
    bg: 'primary'
  }}
/>
```

To use explicit values instead of referencing values from the theme, use a value that will *not* be interpreted as an object key.
For example, use `2px` instead of `2` (which would pick up the `space[2]` value.

```jsx
<div css={{ mb: '2px' }} />
```

## Styled Components

To create reusable styled components, wrap an element like so.

```jsx
/** @jsx jsx */
import jsx from '@styled-system/jsx'

export const Button = ({
  primary,
  ...props
}) =>
  <button
    {...props}
    css={{
      color: 'white',
      bg: primary ? 'primary' : 'secondary',
    }}
  />
```

### Differences from core Styled System

- No `width` fractions
- No need to define custom style functions
- No responsive object syntax (this would get messy with nested styles)

[emotion]: https://emotion.sh

MIT License
