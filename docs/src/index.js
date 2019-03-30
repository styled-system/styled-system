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

const Root = props => {
  const [ mode, setMode ] = useState(modes[0])

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
  }

  return (
    <Context.Provider value={context}>
      <SystemProvider
        components={components}
        theme={getTheme(mode)}>
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
  <Root>
    {element}
  </Root>

export const wrapPageElement = ({ element, props }) =>
  <Page>
    {element}
  </Page>
