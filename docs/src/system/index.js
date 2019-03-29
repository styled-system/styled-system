// prototype for theming utilities
import React from 'react'
import styled from '@emotion/styled'
import { ComponentProvider } from 'emotion-mdx'
import css from '@styled-system/css'
import { width } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

export { useComponents, Styled } from 'emotion-mdx'
export { default as css } from '@styled-system/css'

export const SystemProvider = props =>
  <ComponentProvider
    {...props}
    transform={css}
  />

export const Box = styled('div', { shouldForwardProp })(css({
  boxSizing: 'border-box',
  minWidth: 0,
}), width)

export const block = name => props => {
  const theme = props.theme || props
  return css(theme.blocks[name])(props)
}

