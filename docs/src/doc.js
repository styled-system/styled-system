import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from './layout'

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      code {
        body
      }
    }
  }
`

export default props => {
  const { code } = props.data.mdx
  const children = <MDXRenderer children={code.body} />


  return (
    <Layout
      {...props}
      children={children}
    />
  )
}
