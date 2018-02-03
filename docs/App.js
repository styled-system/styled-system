import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  theme,
  CSS,
  Root,
  Box,
  Container,
  Text,
  Heading,
  Pre,
  Button,
  Title,
  Lead,
} from './ui'
import Markdown from './Markdown'

class App extends React.Component {
  static async getInitialProps () {
    const fs = require('fs')
    const path = require('path')
    const pkg = require('../package.json')
    const readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')

    return {
      readme,
      pkg
    }
  }

  render () {
    const { pkg, readme } = this.props

    return (
      <React.Fragment>
        <head>
          <title>Styled System</title>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,viewport-fit=cover'
          />
          <meta
            name='desription'
            content={pkg.description}
          />
          <meta
            name='twitter:card'
            content='summary'
          />
          <meta
            name='twitter:site'
            content='@jxnblk'
          />
          <meta
            name='twitter:title'
            content='Styled System'
          />
          <meta
            name='twitter:description'
            content={pkg.description}
          />
          <meta
            name='twitter:image'
            content='http://jxnblk.com/styled-system/icon.png'
          />
          <CSS />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto+Mono'
          />
        </head>
        <ThemeProvider theme={theme}>
          <Root>
            <Box
              px={[ 3, 4 ]}
              py={[ 4, 5 ]}
              color='white'
              bg='black'>
              <Container>
                <Title mb={0}>
                  Styled System
                </Title>
                <Lead mb={4} color='magenta'>
                  Design system utilities for styled-components
                </Lead>
                <Pre color='black' bg='magenta'>
                  npm i styled-system
                </Pre>
                <Button href='https://github.com/jxnblk/styled-system'>
                  GitHub
                </Button>
              </Container>
            </Box>
            <Box px={[ 3, 4 ]} py={4}>
              <Container>
                <Markdown>
                  {readme}
                </Markdown>
              </Container>
            </Box>
          </Root>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App
