import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  space,
  color,
  width,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
} from 'styled-system'
import Tag from 'clean-tag'

const fonts = {
  sans: 'system-ui, sans-serif'
}

const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 96
]

const theme = {
  fonts,
  fontSizes,
}

const Root = styled(Tag)`
  ${fontFamily}
  ${lineHeight}
  ${color}
`
Root.propTypes = {
  ...fontFamily.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

Root.defaultProps = {
  fontFamily: 'sans'
}

const Box = styled(Tag)`
  ${space}
  ${color}
  ${width}
`

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
}

const Text = styled(Tag)`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
`

Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
}

Text.defaultProps = {
  lineHeight: 1.5
}

const App = props => (
  <ThemeProvider theme={theme}>
    <Root>
      <Box p={3} width={[ 1, 1/2 ]} color='white' bg='tomato'>
        <Text fontSize={4} fontWeight='bold'>
          Hello
        </Text>
      </Box>
    </Root>
  </ThemeProvider>
)

export default App
