import React from 'react'
import { render } from 'react-sketchapp'
import styled from 'styled-components/primitives'
import { color, fontSize, space } from 'styled-system'

const Box = styled.View`
  ${color}
  ${space}
`

const H1 = styled.Text`
  ${color}
  ${fontSize}
  ${space}
`

const Doc = () =>
  <Box px={6} py={5} color='white' bg='tomato'>
    <H1 fontSize={7}>Hello, world!</H1>
  </Box>

export default () =>
  render(<Doc />, context.document.currentPage())
