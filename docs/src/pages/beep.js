import React from 'react'
import Logo from '../logo'
import LogoWhite from '../logo/white'
import { Box } from '../system'

export default props =>
  <>
    <LogoWhite />
    <Logo />
    <Box
      p={4}
      mt={4}
      bg='black'
      color='white'>
      <Logo />
    </Box>
  </>
