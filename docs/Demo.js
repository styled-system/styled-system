import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveError,
  LiveEditor,
} from 'react-live'
import {
  space,
  width,
  fontSize,
  Box,
  hoc
} from '../src'

const Button = hoc('button').extend`
  display: block;
  text-align: center;
  border: 0;
  border-radius: 6px;
  background-color: tomato;
`

const scope = {
  styled,
  space,
  width,
  fontSize,
  Box,
  hoc,
  Button,
}

const Demo = props => (
  <LiveProvider
    scope={scope}
    code={code}>
    <LivePreview />
    <LiveError />
    <LiveEditor />
  </LiveProvider>
)

const code = `<Box p={3}>
  <Button
    width={[ 1, 1/2 ]}
    mx='auto'
    fontSize={4}
    p={2}
    children='Hello'
  />
</Box>`

export default Demo
