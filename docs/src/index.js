import React, { useState, useContext } from 'react'
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
  'dark'
]

const getTheme = mode => merge({}, theme, {
  colors: get(theme.colors.modes, mode, theme.colors),
})

const Page = props => {
  const data = useStaticQuery(query)
  const [ mode, setMode ] = useState(modes[0])
  const {
    title,
    description,
  } = data.site.siteMetadata
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
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@jxnblk' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='https://styled-system.com/logo.png' />
      </Helmet>
      <SystemProvider
        components={components}
        theme={getTheme(mode)}>
        {style}
        {props.children}
      </SystemProvider>
    </Context.Provider>
  )
}

export const wrapRootElement = ({ element, props }) =>
  <>
    {element}
  </>

export const wrapPageElement = ({ element, props }) =>
  <Page>
    {element}
  </Page>
