import {
  style,
  compose,
  mapProps,
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
  alias: 'mt',
  key: 'space',
  transformValue
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue
})

export const space = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
)

export default mapProps(props => ({
  ...props,
  mt: props.my,
  mb: props.my,
  ml: props.mx,
  mr: props.mx,
}))(space)
