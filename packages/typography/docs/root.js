import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { space, color } from 'styled-system'
import lincoln from 'typography-theme-lincoln'
import merge from 'lodash.merge'
import Typography from '../src'
import transform from '../src/transform-typography-theme'
import Modern from '../src/modern'
import Future from '../src/Future'

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
  // typography.js themes
  Lincoln,
}

const names = Object.keys(themes)

const NavBar = styled.div({
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
}, space, color)

NavBar.defaultProps = {
  px: 3,
  py: 2,
  color: 'white',
  bg: 'black',
}

const Spacer = styled.div({ margin: 'auto' })

export default props => {
  const [ theme, setTheme ] = useState('Modern')

  const Layout = themes[theme]

  return (
    <>
      <NavBar>
        <Spacer />
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
      <Layout>
        {props.children}
      </Layout>
    </>
  )
}
