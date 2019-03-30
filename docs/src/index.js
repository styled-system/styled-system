import React, { useState, useContext, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import merge from 'lodash.merge'
import get from 'lodash.get'
import { SystemProvider, css } from './system'
import components from './components'
import theme from './theme'

const style = (
  <Global
    styles={theme => css({
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
        color: 'text',
        bg: 'background',
        transitionProperty: 'background-color, color',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out',
      }
    })(theme)}
  />
)

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export const Context = React.createContext()
export const useAppContext = () =>
  useContext(Context)

const modes = [
  'light',
  'dark',
  'gray',
  'cyan',
  'book',
  // 'magenta',
]

const getTheme = mode => merge({}, theme, {
  colors: get(theme.colors.modes, mode, theme.colors),
})

const getCustomColors = search => {
  const reg = /^\?colors\=/
  const hex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  if (!reg.test(search)) return null
  const keys = [ 'text', 'background', 'primary', 'secondary', 'gray', 'lightgray' ]
  const colors = search
    .replace(reg, '')
    .split(',')
    .map(value => hex.test(value) ? '#' + value : value)
    .reduce((a, value, i) => ({
      ...a,
      [keys[i]]: value
    }), {})
  const defaults = {
    gray: 'rgba(0, 0, 0, .125)',
    lightgray: 'rgba(0, 0, 0, .0625)',
  }
  console.log(
    '%c%s',
    `padding:4px;color:${colors.text};background-color:${colors.background}`,
    ' Custom Colors ',
    // 'color:black',
    // ' ' + result.color + ' ' + result.base
  )
  return merge({}, defaults, colors)
}

const Root = props => {
  const [ mode, setMode ] = useState(modes[0])
  const [ open, setOpen ] = useState(false)

  const theme = getTheme(mode)
  if (props.location && props.location.search) {
    const colors = getCustomColors(props.location.search)
    theme.colors = merge({}, theme.colors, colors)
  }
  useEffect(() => {
    const initialMode = window.localStorage.getItem('mode') || modes[0]
    if (initialMode && initialMode !== mode) {
      setMode(initialMode)
    }
  }, [])
  useEffect(() => {
    window.localStorage.setItem('mode', mode)
  }, [ mode ])

  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }
  const context = {
    modes,
    mode,
    setMode,
    cycleMode,
    open,
    setOpen,
    toggleOpen: () => setOpen(!open),
  }

  return (
    <Context.Provider value={context}>
      <SystemProvider
        components={components}
        theme={theme}>
        {style}
        {props.children}
      </SystemProvider>
    </Context.Provider>
  )
}

const Page = props => {
  const data = useStaticQuery(query)
  const {
    title,
    description,
  } = data.site.siteMetadata
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@jxnblk' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='https://styled-system.com/logo.png' />
      </Helmet>
      {props.children}
    </>
  )
}

export const wrapRootElement = ({ element, props }) =>
  <>
    {element}
  </>

export const wrapPageElement = ({ element, props }) =>
<Root {...props}>
  <Page {...props}>
    {element}
  </Page>
</Root>
