import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
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

const StyledLink = styled.a({
}, color)

StyledLink.defaultProps = {
  color: 'navy'
}

export const Link = ({ href, ...props }) => isAbsoluteURL(href)
  ? <StyledLink {...props} href={href} />
  : <StyledLink {...props} as={GatsbyLink} to={href} />

export const UL = styled.ul({
  // paddingLeft: 0,
}, space)

UL.defaultProps = {
  pl: 0,
}

export default {
  a: Link,
  pre: props => props.children,
  code: Pre,
  ul: UL,
  // inlineCode: Code,
}
