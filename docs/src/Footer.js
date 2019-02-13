import React from 'react'
import {
  Box,
  Container,
  Link,
} from './components'

export default props =>
  <Container as='footer' py={5}>
    <Box mr={2} as='span'>
      <b>
        MIT License
      </b>
    </Box>
    <Link mr={2} href='https://jxnblk.com'>
      Made by Jxnblk
    </Link>
    <Link mr={2} href='https://github.com/jxnblk/styled-system'>
      GitHub
    </Link>
    <Link mr={2} href='https://npmjs.com/package/styled-system'>
      npm
    </Link>
  </Container>
