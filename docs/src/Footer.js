import React from 'react'
import {
  Flex,
  Text,
  Container,
  Link,
} from './components'

// import { NavLink } from '@rebass/gatsby-theme-docs'
// placeholder
const NavLink = Link

export default props =>
  <Container as='footer' py={5} {...props}>
    <Flex alignItems='center' flexWrap='wrap'>
      <Text fontSize={1} mr={2}>
        <b>
          MIT License
        </b>
      </Text>
      <NavLink as={Link} mr={2} href='https://jxnblk.com'>
        Made by Jxnblk
      </NavLink>
      <NavLink mr={2} href='https://github.com/jxnblk/styled-system'>
        GitHub
      </NavLink>
      <NavLink mr={2} href='https://npmjs.com/package/styled-system'>
        npm
      </NavLink>
    </Flex>
  </Container>
