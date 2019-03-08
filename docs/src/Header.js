import React from 'react'
import { NavLink } from '@rebass/gatsby-theme-docs'
import {
  Box,
  Flex,
  Container,
  Link,
} from './components'

export default props =>
  <Flex
    as='header'
    px={2}
    py={2}
    color='white'
    bg='black'>
    <NavLink as={Link} mr={2} href='/'>
      Styled System
    </NavLink>
    <Box mx='auto' />
    {props.children}
  </Flex>
