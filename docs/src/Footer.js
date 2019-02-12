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
  </Container>
