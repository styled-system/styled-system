import React from 'react'
import {
  Box,
  Flex,
  Link,
} from '../../components'
// import { NavLink } from '@rebass/gatsby-theme-docs'
const NavLink = Link

export default props =>
  <Flex
    as='header'
    px={2}
    py={2}
    alignItems='center'
    color='white'
    bg='black'>
    <NavLink as={Link} mr={2} href='/'>
      Styled System
    </NavLink>
    <Box mx='auto' />
    {props.children}
  </Flex>
