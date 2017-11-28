import PropTypes from 'prop-types'

export const responsive = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

export const responsiveBoolean = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array
])

export const numberOrString = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
])

export const width = {
  width: responsive,
  w: responsive
}

export const space = {
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

export const fontSize = {
  fontSize: responsive,
  f: responsive
}

export const color = {
  color: responsive,
  bg: responsive
}

export const textAlign = {
  align: responsive
}

export const fontWeight = {
  fontWeight: numberOrString
}

export const alignItems = {
  align: responsive
}

export const justifyContent = {
  justify: responsive
}

export const flexWrap = {
  wrap: responsiveBoolean
}

export const flexDirection = {
  flexDirection: responsive
}

export const flex = {
  flex: responsive
}

export const alignSelf = {
  alignSelf: responsive
}

export const borderRadius = {
  borderRadius: numberOrString
}

export const borderWidth = {
  borderWidth: numberOrString,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool
}

export const boxShadow = {
  boxShadow: PropTypes.string
}

export const hover = {
  hover: PropTypes.object
}

export const focus = {
  focus: PropTypes.object
}

export const active = {
  active: PropTypes.object
}

export const disabled = {
  disabledStyle: PropTypes.object
}
