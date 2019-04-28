import { style, compose } from '../style'
import { num } from '../util'
import { px } from '../unit'

const getBorder = n => (num(n) && n > 0 ? `${n}px solid` : n)

export const border = style({
  prop: 'border',
  key: 'borders',
  transformValue: getBorder,
})

export const borderWidth = style({
  prop: 'borderWidth',
  key: 'borderWidths',
  transformValue: px,
})

export const borderStyle = style({
  prop: 'borderStyle',
  key: 'borderStyles',
})

export const borderColor = style({
  prop: 'borderColor',
  key: 'colors',
})

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: px,
})

export const borderTop = style({
  prop: 'borderTop',
  key: 'borders',
  transformValue: getBorder,
})

export const borderTopColor = style({
  prop: 'borderTopColor',
  key: 'colors',
})

export const borderRight = style({
  prop: 'borderRight',
  key: 'borders',
  transformValue: getBorder,
})

export const borderRightColor = style({
  prop: 'borderRightColor',
  key: 'colors',
})

export const borderBottom = style({
  prop: 'borderBottom',
  key: 'borders',
  transformValue: getBorder,
})

export const borderBottomColor = style({
  prop: 'borderBottomColor',
  key: 'colors',
})

export const borderLeft = style({
  prop: 'borderLeft',
  key: 'borders',
  transformValue: getBorder,
})

export const borderLeftColor = style({
  prop: 'borderLeftColor',
  key: 'colors',
})

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows',
})

export const borders = compose(
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderTopColor,
  borderRight,
  borderRightColor,
  borderBottom,
  borderBottomColor,
  borderLeft,
  borderLeftColor,
  borderRadius,
  boxShadow
)
