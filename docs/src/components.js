import styled from 'styled-components'
import {
  space,
  color,
  width,
  maxWidth,
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

export const Container = styled(Box)(
  maxWidth
)

Container.defaultProps = {
  maxWidth: 896,
  mx: 'auto',
  px: 4,
}

export const Text = styled(Box)(
  fontSize,
  fontWeight
)

Text.defaultProps = {
  m: 0,
}

export const Pre = styled.pre({
  fontFamily: 'Menlo, monospace',
  fontSize: '14px',
}, space, color)

Pre.defaultProps = {
  p: 3,
  my: 3,
  color: 'navy',
  backgroundColor: 'lightgray',
}

export default {
  pre: props => props.children,
  code: Pre,
  // inlineCode: Code,
}
