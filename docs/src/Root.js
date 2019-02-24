import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
`

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

const Root = props => {
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
        <meta name='twitter:image' content='https://jxnblk.com/styled-system/logo.png' />
      </Helmet>
      <Style />
      {props.children}
    </>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Root>
      {element}
    </Root>
  )
}
