const PropTypes = require('prop-types')
const {
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
  background,
  position,
  grid,
} = require('styled-system')

const propType = PropTypes.oneOfType([
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

module.exports = propType
module.exports.space = createPropTypes(space.propNames)
module.exports.color = createPropTypes(color.propNames)
module.exports.layout = createPropTypes(layout.propNames)
module.exports.typography = createPropTypes(typography.propNames)
module.exports.flexbox = createPropTypes(flexbox.propNames)
module.exports.border = createPropTypes(border.propNames)
module.exports.background = createPropTypes(background.propNames)
module.exports.position = createPropTypes(position.propNames)
module.exports.grid = createPropTypes(grid.propNames)
