import { style, compose } from '../style'
import { px } from '../unit'

export const position = style({
  prop: 'position',
})

export const zIndex = style({
  prop: 'zIndex',
  key: 'zIndices',
})

export const top = style({
  prop: 'top',
  transformValue: px,
})

export const right = style({
  prop: 'right',
  transformValue: px,
})

export const bottom = style({
  prop: 'bottom',
  transformValue: px,
})

export const left = style({
  prop: 'left',
  transformValue: px,
})

export const positions = compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
)
