import {
  style,
  compose,
  num,
  px,
} from './index'

const transformValue = (n, scale) => {
  // get(scale, n) happens in style
  if (!num(n)) return n
  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = scale[absolute] || absolute
  if (!num(value)) {
    return isNegative ? '-' + value : value
  }
  return px(value * (isNegative ? -1 : 1))
}

export const margin = style({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt', // 'my'],
  key: 'space',
  transformValue
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr', //'mx'],
  key: 'space',
  transformValue
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb', //'my'],
  key: 'space',
  transformValue
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml', //'mx'],
  key: 'space',
  transformValue
})

// mx, my

export const space = compose(
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
)
