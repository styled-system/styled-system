import {
  get,
  style,
  compose,
  system
} from '@styled-system/core'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const isNumber = n => typeof n === 'number' && !isNaN(n)

const getMargin = (n, scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n)
  }

  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute)
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value
  }
  return value * (isNegative ? -1 : 1)
}

const configs = {}
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginX: {
    properties: [ 'marginLeft', 'marginRight' ],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginY: {
    properties: [ 'marginTop', 'marginBottom' ],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
}
configs.margin.m = configs.margin.margin
configs.margin.mt = configs.margin.marginTop
configs.margin.mr = configs.margin.marginRight
configs.margin.mb = configs.margin.marginBottom
configs.margin.ml = configs.margin.marginLeft
configs.margin.mx = configs.margin.marginX
configs.margin.my = configs.margin.marginY

configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingX: {
    properties: [ 'paddingLeft', 'paddingRight' ],
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingY: {
    properties: [ 'paddingTop', 'paddingBottom' ],
    scale: 'space',
    defaultScale: defaults.space,
  },
}
configs.padding.p = configs.padding.padding
configs.padding.pt = configs.padding.paddingTop
configs.padding.pr = configs.padding.paddingRight
configs.padding.pb = configs.padding.paddingBottom
configs.padding.pl = configs.padding.paddingLeft
configs.padding.px = configs.padding.paddingX
configs.padding.py = configs.padding.paddingY

export const margin = system(configs.margin)
export const padding = system(configs.padding)
export const space = system({ ...configs.margin, ...configs.padding })

/*
export const margin = style({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginX = style({
  prop: 'marginX',
  properties: [ 'marginLeft', 'marginRight' ],
  alias: 'mx',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginY = style({
  prop: 'marginY',
  properties: [ 'marginTop', 'marginBottom' ],
  alias: 'my',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  scale: defaults.space,
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  scale: defaults.space,
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  scale: defaults.space,
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  scale: defaults.space,
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  scale: defaults.space,
})

export const paddingX = style({
  prop: 'paddingX',
  properties: [ 'paddingLeft', 'paddingRight' ],
  alias: 'px',
  key: 'space',
  scale: defaults.space,
})

export const paddingY = style({
  prop: 'paddingY',
  properties: [ 'paddingTop', 'paddingBottom' ],
  alias: 'py',
  key: 'space',
  scale: defaults.space,
})

export const space = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY
)
*/

export default space
