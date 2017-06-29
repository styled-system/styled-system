import React from 'react'
import { createProvider } from 'funcup'
import { Box, hoc } from './styled-components'
import Demo from './Demo'

const App = props => (
  <Demo />
)

const state = {
  xray: false
}

export default createProvider(state)(App)
