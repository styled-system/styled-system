import React from 'react'
import Typography from './index'
import merge from 'lodash.merge'

const config = {
  fontFamily: '"Roboto", system-ui, sans-serif',
  px: 3,
  py: 4,
  h1: {
    fontSize: [4, 5, 6],
    fontWeight: 400,
    lineHeight: 1.2,
    mt: 0,
    mb: 3,
  },
  h2: {
    fontSize: [3, 4, 5],
    fontWeight: 400,
    lineHeight: 1.2,
    mt: 0,
    mb: 3,
  },
  pre: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
  },
  code: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
  },
  samp: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
  },
}

export const Roboto = props =>
  <Typography
    {...merge(config, props)}
  />

export default Roboto
