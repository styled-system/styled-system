// prototype for theming utilities
import React from 'react'
import { ComponentProvider } from 'emotion-mdx'
import css from '@styled-system/css'

export { useComponents, Styled } from 'emotion-mdx'
export { default as css } from '@styled-system/css'

export const SystemProvider = props =>
  <ComponentProvider
    {...props}
    transform={css}
  />

export const Box = ({ as: Tag = 'div', ...props }) =>
  <Tag
    {...props}
    css={{
      boxSizing: 'border-box',
      minWidth: 0,
    }}
  />

export const block = name => props => {
  const theme = props.theme || props
  return css(theme.layout[name])(props)
}

