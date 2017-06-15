import React from 'react'
import { ThemeProvider } from 'styled-components'
import Box from '../src/Box'


const App = () => (
  <ThemeProvider theme={theme}>
    <Box p={[ 0, 1, 2, 3 ]}>
      <Box f={[ 5, 6, 7, 8 ]}>
        Hello
      </Box>
    </Box>
  </ThemeProvider>
)

const theme = {}

export default App
