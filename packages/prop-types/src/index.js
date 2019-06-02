import PropTypes from 'prop-types'
import {
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  grid,
} from 'styled-system'

export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])

const createPropTypes = props => {
  return props.reduce((acc, name) => ({
  ...acc,
  [name]: propType,
}), {})
}

export default {
  space: createPropTypes(space.propNames),
  color: createPropTypes(color.propNames),
  layout: createPropTypes(layout.propNames),
  typography: createPropTypes(typography.propNames),
  flexbox: createPropTypes(flexbox.propNames),
  border: createPropTypes(border.propNames),
  background: createPropTypes(background.propNames),
  position: createPropTypes(position.propNames),
  grid: createPropTypes(grid.propNames),
}
