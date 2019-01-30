import {
  style,
  compose,
  mapProps,
  get,
  num,
  px,
} from './index'

const scale = [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]

const transformValue = (n, scale) => {
  // get(scale, n) happens in style
  if (!num(n)) return n
  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute)
  if (!num(value)) {
    // this cant be reached?
    return isNegative ? '-' + value : value
  }
  return px(value * (isNegative ? -1 : 1))
}

export const margin = style({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue,
  scale
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  key: 'space',
  transformValue,
  scale
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue,
  scale
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue,
  scale
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue,
  scale
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  transformValue,
  scale
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  transformValue,
  scale
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  transformValue,
  scale
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  transformValue,
  scale
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  transformValue,
  scale
})

export const space = mapProps(props => ({
  ...props,
  mt: props.my,
  mb: props.my,
  ml: props.mx,
  mr: props.mx,
  pt: props.py,
  pb: props.py,
  pl: props.px,
  pr: props.px,
}))(compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
))

export default space
