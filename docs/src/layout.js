import React from 'react'
import styled from '@emotion/styled'
import { flexDirection } from 'styled-system'
import { useAppContext } from './index'
import Link from './link'
import navigation from './navigation'
import { Box, css, block } from './system'
import Burger from './system/burger'

const HeaderRoot = styled(Box)(css({
  width: '100%',
  height: 64,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,
  bg: 'background',
  transition: 'background-color .2s ease-out',
}), block('header'))

export const Header = ({
  sidebar = true,
  ...props
}) => {
  const state = useAppContext()
  return (
    <HeaderRoot>
      <NavLink href='/'>
        Styled System
      </NavLink>
      <Box mx='auto' />
      <button
        title='Toggle Color Mode'
        css={css({
          appearance: 'none',
          fontFamily: 'inherit',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 'bold',
          border: 'none',
          m: 3,
          p: 2,
          color: 'text',
          bg: 'gray',
          '&:focus': {
            outline: '2px solid',
          }
        })}
        onClick={e => {
          e.preventDefault()
          state.cycleMode()
        }}>
        {state.mode}
      </button>
      {sidebar && (
        <button
          title='Show Menu'
          css={css({
            appearances: 'none',
            border: 0,
            mr: 3,
            p: 2,
            color: 'inherit',
            backgroundColor: 'transparent',
            '&:focus': {
              outline: '2px solid',
            },
            '@media screen and (min-width: 40em)': {
              display: 'none',
            }
          })}
          onClick={state.toggleOpen}>
          <Burger />
        </button>
      )}
    </HeaderRoot>
  )
}

const Root = styled(Box)(css({
  display: 'flex',
  flexDirection: 'column',
}), block('root'))

const Main = styled(Box)({
  display: 'flex',
}, flexDirection, block('main'))

const Sidebar = styled(Box)(css({
  minWidth: 0,
  flex: 'none',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  position: 'sticky',
  top: 0,
  alignSelf: 'flex-start',
  minHeight: 'calc(100vh - 0px)',
  transition: 'background-color .2s ease-out',
}),
  props => ({
    '@media screen and (max-width: 40em)': {
      minHeight: 0,
      maxHeight: props.open ? '100vh' : 0,
      height: 'auto',
      transition: 'max-height .5s ease-out',
      overflow: 'hidden',
      boxShadow: `0 2px 8px rgba(0, 0, 0, .25)`,
    }
  }),
  block('sidebar')
)

const Overlay = props =>
  <Box
    {...props}
    css={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}
  />

export const Container = styled(Box)(
  css({
    width: '100%',
    maxWidth: 1024,
    mx: 'auto',
    p: 4,
  }),
  block('main')
)
Container.defaultProps = {
  as: 'main',
}

const Pagination = styled(Box)({
  display: 'flex',
  alignItems: 'center'
},
  block('pagination')
)

export const NavLink = props =>
  <Link
    {...props}
    activeClassName='active'
    css={theme => css({
      display: 'block',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'inherit',
      px: 3,
      py: 2,
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      }
    })({ ...props, theme })}
  />

const removeSlash = str => str.replace(/\/$/, '')

export default ({
  ...props
}) => {
  const state = useAppContext()
  const { pathname } = props.location
  const index = navigation.findIndex(({ href }) => href === removeSlash(pathname))
  const previous = navigation[index - 1]
  const next = navigation[index + 1]

  return (
    <Root>
      <Header />
      {state.open && <Overlay onClick={e => state.setOpen(false)} />}
      <Main flexDirection={[ 'column', 'row' ]}>
        <Sidebar
          open={state.open}
          onClick={e => state.setOpen(false)}
          width={[ 1, 256, 320 ]}>
          {navigation.map(({ href, text }) => (
            <Box key={href}>
              <NavLink href={href}>
                {text}
              </NavLink>
            </Box>
          ))}
          <NavLink mb={4} href='https://github.com/styled-system/styled-system'>
            GitHub
          </NavLink>
        </Sidebar>
        <Container>
          {props.children}
          <Pagination
            py={5}>
            {previous && (
              <NavLink
                px={0}
                fontSize={3}
                href={previous.href}>
                {previous.text}
              </NavLink>
            )}
            <Box mx='auto' />
            {next && (
              <NavLink
                id='next-link'
                px={0}
                fontSize={3}
                href={next.href}>
                {next.text}
              </NavLink>
            )}
          </Pagination>
        </Container>
      </Main>
    </Root>
  )
}
