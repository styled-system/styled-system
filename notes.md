
# v4

- Returns arrays of styles for responsive and composed styles. This should work the same as before when combined with CSS-in-JS libraries like styled-components and emotion
- Refactors `space` function to use core `style` function
- Adds long-hand props for margin and padding. Shorthand aliases still work.
- The get utility works differently, returning the last argument as a fallback.
- **UNDER CONSIDERATION** Requires a `theme.mediaQueries` field with full media query strings instead of the `theme.breakpoints` array.
- Removes the `styles` export
- Removes `meta` field from `propTypes` - this was used by system-docs. An alternative/optional object export for documentation will be added
- Removes the `merge` utility
- Removes `mixed` utility

To do:

- [ ] width
- [ ] color
- [ ] fontSize
- [ ] variant
- [ ] other style functions
