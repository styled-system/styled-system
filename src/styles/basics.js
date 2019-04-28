import { style, compose } from '../style'

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const basics = compose(
  opacity,
  overflow,
)
