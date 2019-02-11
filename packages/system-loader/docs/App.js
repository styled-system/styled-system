import React from 'react'
import {
  Box,
  Heading,
  Button
} from './system.json'

const App = props => (
  <Box
    p={3}
    style={{
      fontFamily: 'system-ui, sans-serif'
    }}>
    <Heading color='black'>system-loader</Heading>
    <Heading>Hello</Heading>
    <Button>Beep</Button>
  </Box>
)

export default App
