import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import { ThemeProvider, ColorMode, css } from 'theme-ui'
import components from './components'
import theme from './theme'

const style = (
  <Global
    styles={theme =>
      css({
        '*': { boxSizing: 'border-box' },
        body: {
          margin: 0,
          fontFamily: 'body',
          lineHeight: 1.5,
        },
      })(theme)
    }
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
export const useAppContext = () => useContext(Context)

const Root = props => {
  const [open, setOpen] = useState(false)

  const context = {
    open,
    setOpen,
    toggleOpen: () => setOpen(!open),
  }

  return (
    <Context.Provider value={context}>
      <ThemeProvider components={components} theme={theme}>
        <ColorMode />
        {style}
        {props.children}
      </ThemeProvider>
    </Context.Provider>
  )
}

const Page = props => {
  const data = useStaticQuery(query)
  const { title, description } = data.site.siteMetadata
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jxnblk" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://styled-system.com/logo.png"
        />
        <link rel='icon' type='image/png' href='logo.png' />
      </Helmet>
      {props.children}
    </>
  )
}

export const wrapRootElement = ({ element, props }) => (
  <Root {...props}>{element}</Root>
)

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
)
