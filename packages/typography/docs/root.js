import React, { useState, useReducer, useEffect } from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { space, maxWidth, color } from 'styled-system'
import merge from 'lodash.merge'
import Typography from '../src'
import GoogleFont from '../src/GoogleFont'
import * as themes from '../src/themes'
// import Modern from '../src/modern'
// import Future from '../src/future'
// import Baskerville from '../src/baskerville'
// import RRoboto from '../src/roboto'
// import PPoppins from '../src/poppins'

const defaultProps = {
  maxWidth: 768,
  mx: 'auto',
  px: [3, 4],
  py: 4,
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
    <Typography
      {...themes.roboto}
      {...props}
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
    <Typography {...themes.poppins} {...props} />
  </>


export default props => {
  const [ theme, setTheme ] = useState('poppins')
  const config = themes[theme]

  return (
    <Typography {...config}>
      {config.googleFonts && (
        <GoogleFont {...config} />
      )}
      <div>
        <select
          id='theme'
          name='theme'
          value={theme}
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
      {props.children}
      <pre children={JSON.stringify(config)} />
    </Typography>
  )
}
