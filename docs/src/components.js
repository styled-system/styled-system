import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
} from '../../src'

export const Box = styled.div(
  space,
  color,
  width,
  flex
)

export const Flex = styled(Box)({
  display: 'flex'
},
  alignItems,
  justifyContent,
  flexWrap
)

export const Text = styled(Box)(
  fontSize,
  fontWeight
)

Text.defaultProps = {
  m: 0,
}
