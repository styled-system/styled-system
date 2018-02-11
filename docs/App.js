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
  DotGrid,
} from './ui'
import Markdown from './Markdown'

const InstallPre = Pre.extend`
  display: inline-block;
`

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
        <ThemeProvider theme={theme}>
          <Root>
            <DotGrid
              color='white'
              bg='black'
              gridColor='lighten'>
              <Box
                px={[ 3, 4 ]}
                py={[ 4, 5, 6 ]}
                >
                <Container>
                  <header>
                    <Title mb={0}>
                      Styled System
                    </Title>
                    <Lead mb={4} color='cyan'>
                      Design system utilities for styled-components
                    </Lead>
                    <InstallPre
                      mr={3}
                      color='black'
                      bg='cyan'>
                      npm i styled-system
                    </InstallPre>
                    <Button href='https://github.com/jxnblk/styled-system'>
                      GitHub
                    </Button>
                  </header>
                </Container>
              </Box>
            </DotGrid>
            <DotGrid>
              <Box px={[ 3, 4 ]} py={4}>
                <Container>
                  <main>
                    <Markdown>
                      {readme}
                    </Markdown>
                  </main>
                </Container>
              </Box>
              <Box px={[ 3, 4 ]} py={5}>
                <Container>
                  <footer>
                    <Button
                      fontSize={0}
                      mr={3}
                      href='https://github.com/jxnblk/styled-system'>
                      GitHub
                    </Button>
                    <Button fontSize={0} href='http://jxnblk.com'>
                      Made by Jxnblk
                    </Button>
                  </footer>
                </Container>
              </Box>
            </DotGrid>
          </Root>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App
