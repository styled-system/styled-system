import React, { useState } from 'react'
import styled from '@emotion/styled'
import { flexDirection } from 'styled-system'
import Link from './link'
import navigation from './navigation'
import { Box, css, block } from './system'

const Header = styled(Box)({
  width: '100%',
  height: 64,
  display: 'flex',
  alignItems: 'center'
}, block('header'))

const Root = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
}, block('layout'))

const Main = styled(Box)({
  display: 'flex',
}, flexDirection, block('main'))

const Sidebar = styled(Box)({
  minWidth: 0,
  flex: 'none',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  position: 'sticky',
  top: 0,
  alignSelf: 'flex-start',
  minHeight: 'calc(100vh - 0px)',
},
  props => ({
    '@media screen and (max-width: 40em)': {
      minHeight: 0,
      height: props.open ? 'auto' : 0,
      overflow: 'hidden',
      borderBottom: props.open ? '1px solid' : 0,
      // color: 'white', backgroundColor: 'black',
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

export const NavLink = styled(Link)(css({
  display: 'block',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: 'inherit',
  px: 3,
  py: 2,
}))

export default ({
  ...props
}) => {
  const [ open, setOpen ] = useState(false)
  const { pathname } = props.location
  const index = navigation.findIndex(({ href }) => href === pathname)
  const previous = navigation[index - 1]
  const next = navigation[index + 1]

  return (
    <Root>
      <Header>
        <NavLink href='/'>
          Styled System
        </NavLink>
        <Box mx='auto' />
        <button
          css={{
            '@media screen and (min-width: 40em)': {
              display: 'none',
            }
          }}
          style={{
            margin: 16,
          }}
          onClick={e => {
            setOpen(!open)
          }}>
          Menu
        </button>
      </Header>
      {open && <Overlay onClick={e => setOpen(false)} />}
      <Main flexDirection={[ 'column', 'row' ]}>
        <Sidebar
          open={open}
          py={2}
          width={[ 1, 256, 320 ]}>
          {navigation.map(({ href, text }) => (
            <Box key={href}>
              <NavLink href={href}>
                {text}
              </NavLink>
            </Box>
          ))}
          <NavLink href='https://github.com/styled-system/styled-system'>
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
