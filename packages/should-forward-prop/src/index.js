import memoize from '@emotion/memoize'
import isPropValid from '@emotion/is-prop-valid'
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
  grid
} from 'styled-system'

const all = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid
)

export const props = all.propNames

const regex = new RegExp(`^(${props.join('|')})$`)

export default memoize(prop => isPropValid(prop) && !regex.test(prop))
