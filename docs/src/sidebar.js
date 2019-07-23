/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx, ThemeProvider, css } from 'theme-ui'
import NavLink from './nav-link'
import Content from './sidebar.mdx'

const components = {
  a: NavLink,
}

const styles = {
  ul: {
    listStyle: 'none',
    px: 0,
    my: 0,
  },
  li: {
    '& > ul': {
      pl: 16,
    },
  },
  a: {
    color: 'inherit',
    '&:hover': {
      color: 'primary',
    },
  },
}

const Root = styled('div')(
  css({
    minWidth: 0,
    flex: 'none',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    position: 'sticky',
    top: 0,
    alignSelf: 'flex-start',
    maxHeight: '100vh',
    color: 'text',
    bg: 'background',
  }),
  props => ({
    '@media screen and (max-width: 40em)': {
      position: 'fixed',
      top: '64px',
      minHeight: 0,
      maxHeight: props.open ? 'calc(100vh - 64px)' : 0,
      height: 'auto',
      transition: 'max-height .2s ease-out',
      boxShadow: `0 2px 8px rgba(0, 0, 0, .25)`,
    },
  })
  // block('sidebar')
)

export default props => (
  <Root {...props}>
    <ThemeProvider theme={{ styles }} components={components}>
      <Content />
    </ThemeProvider>
  </Root>
)
