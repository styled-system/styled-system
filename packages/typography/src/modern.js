import React from 'react'
import Typography from './index'
import merge from 'lodash.merge'

const config = {
  maxWidth: 768,
  mx: 'auto',
  px: [3, 4],
  py: 4,
  lineHeight: 1.5,
  h1: {
    fontSize: [5, 6],
    lineHeight: 1.25,
    mt: [3, 4],
    mb: 3,
  },
  h2: {
    fontSize: [4, 5],
    lineHeight: 1.25,
  },
  h3: {
    fontSize: 3,
    lineHeight: 1.25,
  },
  code: {
    color: 'rebeccapurple',
    bg: '#f6f0f9',
  },
  pre: {
    p: [2, 3],
    color: 'rebeccapurple',
    bg: '#f6f0f9',
  },
}

export const Modern = props =>
  <Typography
    {...merge(config, props)}
  />

export default Modern
