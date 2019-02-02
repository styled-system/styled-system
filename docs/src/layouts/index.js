import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
`

export default props =>
  <>
    <Style />
    {props.children}
  </>
