import React from 'react'
import { graphql } from 'gatsby'
import Logo from '../Logo'

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default ({
  data: {
    site: {
      siteMetadata: meta
    }
  }
}) =>
  <div>
    <header>
      <Logo />
      <h1>{meta.title}</h1>
      <p>
        {meta.description}
      </p>
    </header>
  </div>
