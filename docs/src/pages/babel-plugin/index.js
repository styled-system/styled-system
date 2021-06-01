import React from 'react'
import Readme from '../babel-plugin/README.md'
import Layout from '../../layout'

export default props => {
  return (
    <Layout {...props}>
      <Readme />
    </Layout>
  )
}
