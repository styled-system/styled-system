import React from 'react'
import { Link } from 'gatsby'
import { Box } from '../system'
import Logo from '../logo'

export default props => (
  <Box
    css={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Box p={4} mb={5}>
      <Link
        to="/"
        title="Home"
        css={{
          display: 'block',
          color: 'inherit',
        }}
      >
        <Logo size={256} />
      </Link>
      <Box as="h1" m={0} mt={3} fontSize={6}>
        404
      </Box>
      <Box fontSize={5} fontWeight="bold">
        Page not found
      </Box>
    </Box>
  </Box>
)
