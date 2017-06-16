import React from 'react'
import { createProvider } from 'funcup'
import { Box, hoc } from '../styled-components'
import Demo from './Demo'

const App = props => (
  <div>
    <Demo />
  </div>
)

const state = {
  xray: true
}

export default createProvider(state)(App)
