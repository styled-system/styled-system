import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { space, fontSize, width, color } from 'styled-system'
import { colors } from './theme'

const code = `const Box = styled.div(space, fontSize, width, color)

render(
  <Box
    mb={3}
    p={[ 3, 4 ]}
    fontSize={[ 4, 5, 6 ]}
    color='orange'
    bg='lavender'>
    Edit me
  </Box>
)`

export default () =>
  <LiveProvider
    noInline
    mountStylesheet={false}
    code={code}
    scope={{
      styled,
      space,
      fontSize,
      width,
      color
    }}>
    <LivePreview />
    <LiveEditor
      style={{
        fontFamily: 'Menlo, monospace',
        fontSize: 14,
        padding: 16,
        overflowX: 'auto',
        color: colors.navy,
        backgroundColor: colors.lightgray,
        outline: 'none',
      }}
    />
    <LiveError />
  </LiveProvider>
