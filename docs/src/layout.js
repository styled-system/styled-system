import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  Flex,
  Box,
  Container,
  Link,
} from './components'
import navigation from './navigation'
import Navbar from './navbar'

const Header = styled(Box)({
  height: 64,
})

const Sidebar = styled(Box)({
  minWidth: 0,
  flex: 'none',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  position: 'sticky',
  top: 0,
  alignSelf: 'flex-start',
},
  props => ({
    '@media screen and (max-width: 40em)': {
      height: props.open ? 'auto' : 0,
      overflow: 'hidden',
      borderBottom: props.open ? '1px solid' : 0,
      // color: 'white', backgroundColor: 'black',
    }
  })
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

export default ({
  ...props
}) => {
  const [ open, setOpen ] = useState(false)

  return (
    <Flex flexDirection='column'>
      <Navbar
        open={open}
        setOpen={setOpen}
      />
      {open && <Overlay onClick={e => setOpen(false)} />}
      <Flex flexDirection={[ 'column', 'row' ]}>
        <Sidebar
          open={open}
          width={[ 1, 256, 320 ]}
          bg='white'>
          {navigation.map(({ href, text }) => (
            <Box key={href}>
              <Link
                href={href}
                color='inherit'
                px={3}
                py={2}
                css={{
                  display: 'block',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}>
                {text}
              </Link>
            </Box>
          ))}
          <Link
            href='https://github.com/styled-system/styled-system'
            color='inherit'
            px={3}
            py={2}
            css={{
              display: 'block',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}>
            GitHub
          </Link>
        </Sidebar>
        <Container as='main'>
          {props.children}
          <pre>PAGINATION</pre>
        </Container>
      </Flex>
    </Flex>
  )
}
