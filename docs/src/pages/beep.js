import React from 'react'
import Hex from '../Hex'
import Logo from '../Logo'
import { Box } from '../components'

export default props =>
  <>
    <Logo />
    <Box
      p={4}
      mt={4}
      bg='black'
      color='white'>
      <Logo />
    </Box>
  </>
