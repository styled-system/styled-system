import React, { useState, useReducer, useEffect } from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { space, color } from 'styled-system'
import merge from 'lodash.merge'
import Typography from '../src'
import Modern from '../src/modern'
import Future from '../src/future'
import Baskerville from '../src/baskerville'
import RRoboto from '../src/roboto'
import PPoppins from '../src/poppins'

const defaultProps = {
  maxWidth: 768,
  mx: 'auto',
  px: [3, 4],
  py: 4,
}

const getFontHREF = fonts => '//fonts.googleapis.com/css?family=' +
  fonts.map(font => {
    let str = ''
    str += font.name.split(' ').join('+')
    str += ':'
    str += font.styles.join(',')
    return str
  }).join('|')

export const GoogleFont = props => {
  useEffect(() => {
    if (!props.theme.googleFonts) return
    const link = document.head.appendChild(
      document.createElement('link')
    )
    link.href = getFontHREF(props.theme.googleFonts)
    link.setAttribute('rel', 'stylesheet')

    return () => {
      link.remove()
    }
  })

  return false
}

const Roboto = props =>
  <>
    <GoogleFont
      theme={{
        googleFonts: [
          { name: 'Roboto', styles: [400,700] },
          { name: 'Roboto Mono', styles: [400] },
        ]
      }}
    />
    <RRoboto
      {...props}
      maxWidth={1024}
      mx='auto'
    />
  </>

const Poppins = props =>
  <>
    <GoogleFont
      theme={{
        googleFonts: [
          { name: 'Poppins', styles: [400, 700, 900] },
          { name: 'Roboto Mono', styles: [400] },
        ]
      }}
    />
    <PPoppins {...props} />
  </>

const themes = {
  Modern,
  Future,
  Baskerville,
  Roboto,
  Poppins,
}

export default props => {
  const [ theme, setTheme ] = useState('Poppins')
  const Layout = themes[theme]

  return (
    <Layout>
      {props.children}
    </Layout>
  )
}
