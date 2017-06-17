import React from 'react'
import styled from 'styled-components'
import { connect } from 'funcup'
import {
  LiveProvider,
  LivePreview,
  LiveError,
  LiveEditor,
} from 'react-live'
import { Flex, Box } from 'grid-styled'
import XRay from 'react-x-ray'
import {
  space,
  width,
  fontSize
} from '../src'
import { hoc } from '../styled-components'
import banner from './banner'
import { toggleXRay } from './updaters'
import colors from './colors'
import Bar from './Bar'

const Button = hoc('a').extend`
  display: inline-flex;
  text-decoration: none;
  text-align: center;
  padding: 12px;
  border: 0;
  border-radius: 6px;
  color: white;
  background-color: #07c;
`

const Heading = hoc('h1').extend`
  margin: 0;
`

const Text = hoc('p').extend`
  margin: 0;
  ${props => props.bold ? { fontWeight: 'bold' } : null}
`

const scope = {
  styled,
  space,
  width,
  fontSize,
  Flex,
  Box,
  hoc,
  Heading,
  Text,
  Button,
}

const Provider = styled(LiveProvider)`
  position: relative;
`

const Preview = styled(LivePreview)`
  height: calc(80vh - 48px);
  min-height: 448px;
  overflow: auto;
`

const Editor = styled(LiveEditor)`
  ${space}
  height: 30vh;
  min-height: 256px;
  overflow: auto;
  outline: none;
  color: ${colors.blue};
  background-color: ${colors.dark};
`

const Err = styled(LiveError)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 13px;
  padding: 16px;
  color: #fff;
  background-color: #f00;
`

const Demo = props => (
  <Provider
    scope={scope}
    code={banner}
    mountStylesheet={false}>
    <Err />
    <XRay
      color={colors.blue}
      backgroundColor={colors.dark}
      disabled={!props.xray}>
      <Preview />
    </XRay>
    <Bar />
    <Editor p={3} />
  </Provider>
)


export default connect()(Demo)
