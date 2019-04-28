export const minBreakpoint = breakpoint =>
  breakpoint !== 0 ? breakpoint : null

export const minWidth = value => `@media screen and (min-width: ${value})`

export const DEFAULT_BREAKPOINTS = [0, 40, 52, 64].map(n =>
  n > 0 ? n + 'em' : n
)
