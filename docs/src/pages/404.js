import React from 'react'
import {
  Box,
  Text,
} from '../components'
import Logo from '../Logo'

export default props =>
  <Box>
    <Logo size={256} />
    <Text
      as='h1'
      mt={4}
      fontSize={6}>
      404
    </Text>
    <Text fontSize={5} fontWeight='bold'>
      Page not found
    </Text>
  </Box>
