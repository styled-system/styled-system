import { style, compose } from '../style'
import { scale } from '../unit'

const key = 'space'

export const margin = style({
  prop: 'margin',
  alias: 'm',
  cssProperties: ['margin'],
  key,
  transformValue: scale(),
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  cssProperties: ['marginTop'],
  key,
  transformValue: scale(),
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  cssProperties: ['marginRight'],
  key,
  transformValue: scale(),
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  cssProperties: ['marginBottom'],
  key,
  transformValue: scale(),
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  cssProperties: ['marginLeft'],
  key,
  transformValue: scale(),
})

export const mx = style({
  prop: 'mx',
  cssProperties: ['marginRight', 'marginLeft'],
  key,
  transformValue: scale(),
})

export const my = style({
  prop: 'my',
  cssProperties: ['marginTop', 'marginBottom'],
  key,
  transformValue: scale(),
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  cssProperties: ['padding'],
  key,
  transformValue: scale(),
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  cssProperties: ['paddingTop'],
  key,
  transformValue: scale(),
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  cssProperties: ['paddingRight'],
  key,
  transformValue: scale(),
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  cssProperties: ['paddingBottom'],
  key,
  transformValue: scale(),
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  cssProperties: ['paddingLeft'],
  key,
  transformValue: scale(),
})

export const px = style({
  prop: 'px',
  cssProperties: ['paddingRight', 'paddingLeft'],
  key,
  transformValue: scale(),
})

export const py = style({
  prop: 'py',
  cssProperties: ['paddingTop', 'paddingBottom'],
  key,
  transformValue: scale(),
})

export const space = compose(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  mx,
  my,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  px,
  py
)
