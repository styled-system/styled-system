import {
  compose,
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
  cursor,
  animation,
  objectFit,
  listStyle,
} from '../styled-system'

const all = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
  cursor,
  animation,
  objectFit,
  listStyle,
)

const propNames = all.propNames.reduce((acc, current) => {
  acc[current] = true;
  return acc;
}, {});

export const omit = props => {
  const next = {}
  for (let key in props) {
    if (propNames[key]) continue
    next[key] = props[key]
  }
  return next
}

export const pick = props => {
  const next = {}
  for (let key in props) {
    if (!propNames[key]) continue
    next[`$${key}`] = props[key]
  }
  return next
}
