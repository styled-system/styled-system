import React, { useState } from 'react'
import Readme from '@styled-system/typography/README.md'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { Helmet } from 'react-helmet'
import { typography, themes } from '@styled-system/typography'
import Layout from '../../layout'
import { Box } from '../../system'

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
const names = Object.keys(themes)

export default props => {
  const [ theme, setTheme ] = useState('future')
  const system = {
    typography: themes[theme]
  }
  const { googleFonts } = themes[theme]

  return (
    <Layout {...props}>
      <ThemeProvider theme={system}>
        <Global styles={typography} />
        <Helmet>
          {googleFonts && (
            <link
              rel='stylesheet'
              href={googleFonts}
            />
          )}
        </Helmet>
        <Box>
          <Box
            as='label'
            htmlFor='theme'
            fontSize={1}
            mr={2}>
            Theme
          </Box>
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
        </Box>
        <Box
          mx='auto'
          maxWidth={1024}
          px={3}
          py={4}>
          <Readme />
        </Box>
      </ThemeProvider>
    </Layout>
  )
}

