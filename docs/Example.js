import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from '../styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <Box p={[ 0, 1, 2, 3 ]}>
      <Box f={[ 5, 6, 7, 8 ]}>
        Hello there
      </Box>
    </Box>
  </ThemeProvider>
)

const theme = {}

export default App
