import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider, Box, css, } from 'theme-ui'
import NavLink from './nav-link'
import Content from './sidebar.mdx'

const List = props => {
  return <ul {...props} />
}

const ListItem = props => {
  if (Array.isArray(props.children)) {
    const [ name, children ] = props.children
    return (
      <li {...props}>
        <details open>
          <summary
            css={css({
              px: 3,
              py: 2,
              fontSize: 1,
              fontWeight: 'bold',
              cursor: 'pointer',
              '::-webkit-details-marker': {
                display: 'none',
              }
            })}>
            {name.props.children}
          </summary>
          <div
            css={css({
              pl: 3
            })}
          >
            {children}
          </div>
        </details>
      </li>
    )
  }
  return <li {...props} />
}

const components = {
  a: NavLink,
  ul: List,
  li: ListItem,
}

const styles = {
  ul: {
    listStyle: 'none',
    px: 0,
    my: 0,
  },
  li: {},
  a: {
    color: 'inherit',
    fontSize: 1,
    '&:hover': {
      color: 'primary',
    },
  },
}

const Root = styled(Box)(
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
  }),
)

export default props => (
  <Root {...props}>
    <ThemeProvider theme={{ styles }} components={components}>
      <Content />
    </ThemeProvider>
  </Root>
)
