import { px } from '../unit'
import { style, compose } from '../style'
import { scale } from '../unit'

export const fontFamily = style({
  prop: 'fontFamily',
  key: 'fonts',
})

export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: scale([12, 14, 16, 20, 24, 32, 48, 64, 72]),
})

export const lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights',
})

export const fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights',
})

export const textAlign = style({
  prop: 'textAlign',
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: px,
})

export const textColor = style({
  prop: 'color',
  key: 'colors',
})

export const textTransform = style({
  prop: 'textTransform',
})

export const typography = compose(
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  textColor,
  textTransform
)
