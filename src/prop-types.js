const PropTypes = require('prop-types')

const responsive = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

const responsiveBoolean = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array
])

const numberOrString = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
])

const width = {
  width: responsive,
  w: responsive
}

const space = {
  m: responsive,
  mt: responsive,
  mr: responsive,
  mb: responsive,
  ml: responsive,
  mx: responsive,
  my: responsive,
  p: responsive,
  pt: responsive,
  pr: responsive,
  pb: responsive,
  pl: responsive,
  px: responsive,
  py: responsive
}

const fontSize = {
  fontSize: responsive,
  f: responsive
}

const color = {
  color: responsive,
  bg: responsive
}

const textAlign = {
  align: responsive
}

const fontWeight = {
  fontWeight: numberOrString
}

const alignItems = {
  align: responsive
}

const justifyContent = {
  justify: responsive
}

const flexWrap = {
  wrap: responsiveBoolean
}

const flexDirection = {
  flexDirection: responsive
}

const flex = {
  flex: responsive
}

const alignSelf = {
  alignSelf: responsive
}

const borderRadius = {
  borderRadius: numberOrString
}

const borderWidth = {
  borderWidth: numberOrString,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool
}

const borderColor = {
  borderColor: PropTypes.string
}

const boxShadow = {
  boxShadow: PropTypes.string
}

const hover = {
  hover: PropTypes.object
}

const focus = {
  focus: PropTypes.object
}

const active = {
  active: PropTypes.object
}

const disabled = {
  disabledStyle: PropTypes.object
}

const propTypes = {
  width,
  space,
  fontSize,
  color,
  textAlign,
  fontWeight,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  borderRadius,
  borderWidth,
  boxShadow,
  hover,
  focus,
  active,
  disabled
}

module.exports = propTypes
