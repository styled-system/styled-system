// Future Typography Theme
export const future = {
  body: {
    fontFamily: '"Avenir Next", system-ui, sans-serif',
    lineHeight: 1.5,
  },
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

export default future
