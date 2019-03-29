import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import { SystemProvider } from './system'
import components from './components'
import theme from './theme'

const style = (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
      }
    }}
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
  <SystemProvider
    components={components}
    theme={theme}>
    {style}
    {element}
  </SystemProvider>

export const wrapPageElement = ({ element, props }) =>
  <Page>
    {element}
  </Page>
