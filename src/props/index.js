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

const regex = new RegExp(`^(${all.propNames.join('|')})$`)

export const omit = props => {
  const next = {}
  for (let key in props) {
    if (regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

export const pick = props => {
  const next = {}
  for (let key in props) {
    if (!regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}
