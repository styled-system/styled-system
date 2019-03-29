import React, { useState } from 'react'
import Readme from '@styled-system/typography/README.md'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { space, maxWidth, color } from 'styled-system'
import { Helmet } from 'react-helmet'
import { typography, themes } from '@styled-system/typography'
import { Text } from '../../components'
import Header from './Header'

const Select = styled('select')({
  fontFamily: 'inherit',
  fontSize: '14px',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: '2px solid',
  borderRadius: 8,
  padding: 8,
  appearance: 'none',
  '&:focus': {
    color: '#c0c',
    outline: 'none',
  }
})

const Box = styled('div')(
  space,
  maxWidth,
  color
)

const names = Object.keys(themes)

export default props => {
  const [ theme, setTheme ] = useState('future')
  const system = {
    typography: themes[theme]
  }
  const { googleFonts } = themes[theme]

  return (
    <ThemeProvider theme={system}>
      <Global styles={typography} />
      <Helmet>
        {googleFonts && (
          <link
            rel='stylesheet'
            href={'https:' + googleFonts}
          />
        )}
      </Helmet>
      <Header>
        <div>
          <Text
            as='label'
            htmlFor='theme'
            fontSize={1}
            mr={2}>
            Theme
          </Text>
          <Select
            id='theme'
            name='theme'
            value={theme}
            onChange={e => {
              setTheme(e.target.value)
            }}>
            {names.map(name => (
              <option
                key={name}
                label={name}
                value={name}
              />
            ))}
          </Select>
        </div>
      </Header>
      <Box
        mx='auto'
        maxWidth={1024}
        px={3}
        py={4}>
        <Readme />
      </Box>
    </ThemeProvider>
  )
}

