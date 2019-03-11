import React from 'react'
import Typography from './index'
import merge from 'lodash.merge'

const config = {
  fontFamily: '"Roboto", system-ui, sans-serif',
  lineHeight: 1.5,
  px: 3,
  py: 4,
  color: 'text',
  h1: {
    fontSize: [4, 5, 6],
    fontWeight: 400,
    lineHeight: 1.2,
    mt: 5,
    mb: 5,
  },
  h2: {
    fontSize: [3, 4, 5],
    fontWeight: 400,
    lineHeight: 1.2,
    mt: 4,
    mb: 3,
  },
  h3: {
    fontSize: 3,
    fontWeight: 700,
  },
  p: {
    mb: 4,
  },
  a: {
    color: 'link',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  pre: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    p: 3,
    color: 'link',
    bg: 'muted',
  },
  code: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    color: 'black',
  },
  samp: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
  },
  blockquote: {
    fontSize: [4, 5],
    m: 0,
    px: 4,
    borderLeft: '4px solid',
  },
  css: {
    'pre code': { color: 'inherit' },
    'li p': { margin: 0 },
    'blockquote p': { fontSize: 'inherit' },
  }
}

export const Roboto = props =>
  <Typography
    {...merge(config, props)}
  />

Roboto.defaultProps = {
  theme: {
    colors: {
      text: '#11203b',
      link: '#4184f3',
      muted: '#f0f5fe',
    }
  }
}

export default Roboto
