import React from 'react'
import styled from '@emotion/styled'
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
  flexDirection,
  flexWrap,
} from 'styled-system'

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
  flexWrap,
  flexDirection
)

export const Container = styled(Box)({
  minWidth: 0,
},
  maxWidth
)

Container.defaultProps = {
  maxWidth: 1024,
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
  overflowX: 'auto',
}, space, color)

Pre.defaultProps = {
  p: 3,
  my: 3,
  color: 'navy',
  backgroundColor: 'lightgray',
}

export const Code = styled.code({
  fontFamily: 'Menlo, monospace',
  fontSize: '14px',
}, color)

Code.defaultProps = {
  color: 'purple',
}

const StyledLink = styled.a({
}, space, color)

StyledLink.defaultProps = {
  color: 'navy'
}

export const Link = ({ href, ...props }) => isAbsoluteURL(href)
  ? <StyledLink {...props} href={href} />
  : <StyledLink {...props} as={GatsbyLink} to={href} />

export const UL = styled.ul({
  margin: 0
}, space)

UL.defaultProps = {
  pl: 0,
}
export const Columns = styled(UL)({
  columnWidth: '320px',
  columnGap: '32px',
  listStyle: 'none',
  '& li': {
    breakInside: 'avoid',
  }
})

export const Blockquote = styled.blockquote({
}, space, fontSize, fontWeight, lineHeight, color)

Blockquote.defaultProps = {
  m: 0,
  fontSize: 4,
  // lineHeight: 1.25,
  fontWeight: 'bold',
}

const heading = defaults => ({ id, ...props }) =>
  <Text
    id={id}
    {...defaults}
    {...props}>
    <a href={'#' + id}>
      {props.children}
    </a>
  </Text>

export default {
  Link,
  h1: heading({ as: 'h1', fontSize: [5, 6] }),
  h2: heading({ as: 'h2', fontSize: [4, 5] }),
  h3: heading({ as: 'h3', fontSize: 3 }),
  a: Link,
  pre: props => props.children,
  code: Pre,
  ul: UL,
  inlineCode: Code,
  blockquote: Blockquote,
}
