// Baskerville Typography Theme
export const baskerville = {
  body: {
    fontFamily: 'Baskerville, monospace, Georgia, serif',
    lineHeight: 1.625,
  },
  a: {
    color: 'link',
  },
  h1: {
    fontSize: [5, 6, 7],
    lineHeight: 1.25,
    fontWeight: 500,
    my: 5,
  },
  h2: {
    fontSize: 4,
    fontWeight: 600,
    lineHeight: 1.25,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    my: 4,
  },
  h3: {
    fontSize: 3,
    fontWeight: 600,
    lineHeight: 1.25,
    my: 4,
  },
  h4: {
    fontSize: 2,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    my: 4,
  },
  p: {
    fontSize: 3,
  },
  ul: {
    fontSize: 3,
  },
  ol: {
    fontSize: 3,
  },
  pre: {
    fontFamily: 'Courier, monospace',
    p: 2,
    bg: 'muted'
  },
  code: {
    fontFamily: 'Courier, monospace',
    fontSize: '87.5%',
  },
  blockquote: {
    fontSize: [3, 4, 5],
    fontStyle: 'italic',
    mx: 0,
    px: 3,
    my: 6,
    borderLeft: '4px solid',
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
    my: 6,
  },
  // how to handle this?
  css: {
    'blockquote p': {
      fontSize: 'inherit',
    }
  }
}

export default baskerville
