import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import theme from '../theme'
import components from '../components'

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
    <MDXProvider components={components}>
      <>
        <Style />
        {props.children}
      </>
    </MDXProvider>
  </ThemeProvider>
