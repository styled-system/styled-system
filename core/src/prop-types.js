import PropTypes from 'prop-types'

const responsive = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
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
  textAlign: responsive
}

const fontWeight = {
  fontWeight: numberOrString
}

const alignItems = {
  alignItems: responsive
}

const justifyContent = {
  justifyContent: responsive
}

const flexWrap = {
  flexWrap: responsive
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
  boxShadow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
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
  borderColor,
  boxShadow,
  hover,
  focus,
  active,
  disabled
}

export default propTypes
