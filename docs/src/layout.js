import React from 'react'
import styled from '@emotion/styled'
import { flexDirection } from 'styled-system'
import { useAppContext } from './index'
import NavLink from './nav-link'
import { Box, css, block } from './system'
import Burger from './system/burger'
import Sidebar from './sidebar'
import Pagination from './pagination'

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

export default ({
  ...props
}) => {
  const state = useAppContext()

  return (
    <Root>
      <Header />
      {state.open && <Overlay onClick={e => state.setOpen(false)} />}
      <Main flexDirection={[ 'column', 'row' ]}>
        <Sidebar
          open={state.open}
          onClick={e => state.setOpen(false)}
          width={[ 1, 256, 320 ]}
        />
        <Container>
          {props.children}
          <Pagination />
        </Container>
      </Main>
    </Root>
  )
}
