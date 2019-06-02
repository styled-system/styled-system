import React from 'react'
import { Box } from 'theme-ui'
import Logo from '../logo'
import LogoWhite from '../logo/white'

export default props => (
  <>
    <LogoWhite />
    <Logo />
    <Box p={4} mt={4} bg="black" color="white">
      <Logo />
    </Box>
  </>
)
