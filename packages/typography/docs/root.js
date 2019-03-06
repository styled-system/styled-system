import React, { useState, useReducer, useEffect } from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { space, color } from 'styled-system'
import lincoln from 'typography-theme-lincoln'
import merge from 'lodash.merge'
import Typography from '../src'
import transform from '../src/transform-typography-theme'
import Modern from '../src/modern'
import Future from '../src/future'
import Baskerville from '../src/baskerville'
import RRoboto from '../src/roboto'
import PPoppins from '../src/poppins'

const configs = {
  lincoln: transform(lincoln),
}

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

const Lincoln = props =>
  <>
    <GoogleFont theme={lincoln} />
    <Typography
      {...merge(defaultProps, configs.lincoln, props)}
    />
  </>

const themes = {
  Modern,
  Future,
  Baskerville,
  Roboto,
  Poppins,

  // typography.js themes
  Lincoln,
}

const names = Object.keys(themes)

const Box = styled.div(space, color)

const NavBar = styled.div({
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  margin: 4,
  top: 0,
  right: 0,
  left: 0,
}, space, color)

NavBar.defaultProps = {
  px: 3,
  py: 2,
  color: 'white',
  bg: 'black',
}

const Spacer = styled.div({ margin: 'auto' })

const typeScales = [
  [ 12, 14, 16, 20, 24, 32, 48, 64, 96, ],
  [ 12, 16, 18, 24, 36, 48, 64, 96, 128, ],
  [ 12, 14, 16, 20, 26, 28, 42, ],
]

const spacings = [
  [ 0, 4, 8, 16, 32, 64, 128, 256, ],
  [ 0, 4, 8, 16, 24, 32, 40, 48, ],
  [ 0, 6, 12, 18, 24, 30, 36, 42 ],

  // for testing
  [ 0, 2, 4, 6, 8, 10, 12, 14 ],
]
const system = {
  fontSizes: typeScales[2],
  space: spacings[0],
}

export default props => {
  const [ theme, setTheme ] = useState('Roboto')
  const [ space, setSpace ] = useState(0)
  const [ typeScale, setTypeScale ] = useState(0)

  const Layout = themes[theme]

  // theming might not force an update??
  system.space = spacings[space]
  system.fontSizes = typeScales[typeScale]

  return (
    <ThemeProvider theme={system}>
      <>
        <NavBar>
          <Spacer />
          {/*
          <label htmlFor='typeScale'>Type Scale</label>
          <select
            id='typeScale'
            name='typeScale'
            value={typeScale}
            onChange={e => {
              setTypeScale(parseInt(e.target.value, 10))
            }}
          >
            {typeScales.map((scale, i) => (
              <option
                key={i}
                label={`${i}`}
                value={i}
              />
            ))}
          </select>
          <label htmlFor='space'>Space</label>
          <select
            id='space'
            name='space'
            value={space}
            onChange={e => {
              setSpace(parseInt(e.target.value, 10))
            }}
          >
            {spacings.map((space, i) => (
              <option
                key={i}
                label={`${i}`}
                value={i}
              />
            ))}
          </select>
          */}
          <label htmlFor='theme'>Theme</label>
          <select
            id='theme'
            name='theme'
            value={theme}
            onChange={e => {
              setTheme(e.target.value)
            }}
          >
            {names.map(name => (
              <option
                key={name}
                label={name}
                value={name}
              />
            ))}
          </select>
        </NavBar>
        <Box py={3} />
        <Layout>
          {props.children}
        </Layout>
      </>
    </ThemeProvider>
  )
}
