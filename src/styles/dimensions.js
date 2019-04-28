import { style, compose } from '../style'
import { percent } from '../unit'

export const width = style({
  prop: 'width',
  transformValue: percent,
  key: 'widths',
})

export const height = style({
  prop: 'height',
  transformValue: percent,
  key: 'heights',
})

export const size = style({
  prop: 'size',
  cssProperties: ['width', 'height'],
  transformValue: percent,
  key: 'sizes',
})

export const maxWidth = style({
  prop: 'maxWidth',
  transformValue: percent,
  key: 'widths',
})

export const maxHeight = style({
  prop: 'maxHeight',
  transformValue: percent,
  key: 'heights',
})

export const minWidth = style({
  prop: 'minWidth',
  transformValue: percent,
  key: 'widths',
})

export const minHeight = style({
  prop: 'minHeight',
  transformValue: percent,
  key: 'heights',
})

export const dimensions = compose(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight
)
