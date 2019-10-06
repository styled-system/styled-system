import React from 'react'
import { render } from 'react-dom'
import { css } from 'linaria'
import { styled } from 'linaria/react'
import { createTheming } from '@callstack/react-theme-provider'
import {
  compose,
  space,
  color,
  layout,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { get } from '@styled-system/core'
import { pick } from '@styled-system/props'
import mem from 'mem'

const allInOne = mem(
  compose(
    space,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    layout
  ),
  {
    cacheKey: props => JSON.stringify({ ...pick(props), theme: props.theme }),
  }
)

const apply = (path, fallback = null) => props =>
  get(allInOne(props), path, fallback)

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  colors: {
    blue: '#07c',
    red: '#e10',
  },
}

const { ThemeProvider, withTheme } = createTheming(theme)

const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`
const breakpoints = [
  '@media screen and (min-width: 40em)',
  '@media screen and (min-width: 52em)',
]

const Box = withTheme(styled.div`
  background-color: ${apply('backgroundColor')};
  color: ${apply('color')};
  padding-left: ${apply('paddingLeft')}px;
  padding-right: ${apply('paddingRight')}px;
  padding-top: ${apply('paddingTop')}px;
  padding-bottom: ${apply('paddingBottom')}px;

  ${breakpoints[0]} {
    padding-left: ${apply(`${breakpoints[0]}.paddingLeft`)}px;
    padding-right: ${apply(`${breakpoints[0]}.paddingRight`)}px;
    padding-top: ${apply(`${breakpoints[0]}.paddingTop`)}px;
    padding-bottom: ${apply(`${breakpoints[0]}.paddingBottom`)}px;
  }
`)

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space,
}

const Text = withTheme(styled.div`
  font-weight: ${apply('fontWeight')};
`)

Text.propTypes = {
  ...propTypes.fontWeight,
}

const Heading = styled(Text)`
  font-size: ${apply('fontSize')}px;
  line-height: ${apply('lineHeight')};
  margin: ${apply('margin')}px;
  ${breakpoints[0]} {
    font-size: ${apply(`${breakpoints[0]}.fontSize`)}px;
  }
  ${breakpoints[1]} {
    font-size: ${apply(`${breakpoints[1]}.fontSize`)}px;
  }
`

Heading.propTypes = {
  ...propTypes.fontSize,
  ...propTypes.lineHeight,
  ...propTypes.layout,
}

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0,
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Root>
          <Box px={[3, 4]} py={[5, 6]} color="white" bg="blue">
            <Heading as="h1" fontSize={[4, 5, 6]}>
              styled-system
            </Heading>
            <Text fontWeight="bold">Linaria demo</Text>
          </Box>
        </Root>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('root'))

export const globals = css`
  :global() {
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
    }
  }
`
