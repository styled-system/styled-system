import React, { useState } from 'react'
import Typography from '../src'
import Modern from '../src/modern'
import Future from '../src/Future'

const themes = {
  Modern,
  Future,
}

const names = Object.keys(themes)

export default props => {
  const [ theme, setTheme ] = useState('Modern')

  const Layout = themes[theme]

  return (
    <>
      <div>
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
      </div>
      <Layout>
        {props.children}
      </Layout>
    </>
  )
}
