import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Flex,
  Box,
  NavLink,
} from 'rebass'
import titleCase from 'title-case'
import Logo from './Logo'

export default ({
  routes = []
}) => (
  <nav>
    <Logo
      blend='screen'
      size={48}
    />
    {routes.map(route => (
      <Box key={route.key}>
        <NavLink
          is={RouterLink}
          to={route.path}>
          {titleCase(route.name)}
        </NavLink>
      </Box>
    ))}
  </nav>
)
