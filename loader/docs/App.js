import React from 'react'
import {
  Heading,
  Button
} from './system.json'

const App = props => (
  <div
    style={{
      fontFamily: 'system-ui, sans-serif'
    }}>
    <Heading color='black'>system-loader</Heading>
    <Heading>Hello</Heading>
    <Button>Beep</Button>
  </div>
)

export default App
