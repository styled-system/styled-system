import React from 'react'
import {
  Box,
  Container,
  Link,
} from './components'

export default props =>
  <Container as='footer' py={5}>
    <Box>
      MIT License
    </Box>
    <Link href='https://jxnblk.com'>
      Made by Jxnblk
    </Link>
    <Link href='https://github.com/jxnblk/styled-system'>
      GitHub
    </Link>
    <Link href='https://npmjs.com/package/styled-system'>
      npm
    </Link>
  </Container>
