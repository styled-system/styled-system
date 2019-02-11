import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
`

export default props =>
  <ThemeProvider theme={theme}>
    <>
      <Style />
      {props.children}
    </>
  </ThemeProvider>
