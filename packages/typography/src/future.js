// Future Typography Theme
import React from 'react'
import Typography from './index'
import merge from 'lodash.merge'

const config = {
  color: 'text',
  bg: 'background',
  fontFamily: '"Avenir Next", system-ui, sans-serif',
  lineHeight: 1.5,
  px: [3, 4],
  py: 4,
  a: {
    color: 'link',
  },
  h1: {
    fontSize: [5, 6],
    fontWeight: 600,
    my: 5,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  pre: {
    fontFamily: 'monospace',
    color: 'highlight',
    bg: 'black',
    p: 3,
    borderRadius: 8,
    overflowX: 'auto',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: '85%',
    color: 'link',
    bg: 'black',
  },
  p: {
    fontSize: [2, 3],
    lineHeight: 1.625,
    my: 4,
    maxWidth: '40em',
  },
  css: {
    'pre code': {
      fontSize: 'inherit',
      color: 'inherit',
    },
    'li > p': {
      fontSize: 'inherit',
      margin: 0,
    }
  }
}

export const Future = props =>
  <Typography
    {...merge(config, props)}
  />

Future.defaultProps = {
  theme: {
    fonts: {
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#00ccff',
      background: '#000e12',
      highlight: '#ff4ca5',
      black: '#000',
      link: '#99ebff',
    }
  }
}

export default Future
