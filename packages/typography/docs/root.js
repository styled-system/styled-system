import React, { useState, useReducer, useEffect } from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { space, maxWidth, color } from 'styled-system'
import merge from 'lodash.merge'
import { Helmet } from 'react-helmet'
import { themes, typography } from '../src'

const Box = styled.div(
  space,
  maxWidth,
  color
)

Box.defaultProps = {
  maxWidth: 768,
  mx: 'auto',
  px: [3, 4],
  py: 4,
}

export default props => {
  const [ themeName, setTheme ] = useState('poppins')
  const config = themes[themeName]
  const theme = {
    typography: config,
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          {config.googleFonts && (
            <link
              rel='stylesheet'
              href={config.googleFonts}
            />
          )}
        </Helmet>
        <Global styles={typography} />
        <div>
          <select
            id='theme'
            name='theme'
            value={themeName}
            onChange={e => {
              setTheme(e.target.value)
            }}>
              {Object.keys(themes).map(key => (
                <option
                  key={key}
                  label={key}
                  value={key}
                />
              ))}
            </select>
        </div>
        <Box>
          {props.children}
        </Box>
        <pre children={JSON.stringify(config, null, 2)} />
        <hr />
        <pre children={JSON.stringify(typography({ theme }), null, 2)} />
    </>
  </ThemeProvider>
  )
}
