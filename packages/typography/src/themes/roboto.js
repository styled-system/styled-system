export const roboto = {
  body: {
    fontFamily: '"Roboto", system-ui, sans-serif',
    lineHeight: 1.5,
  },
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
    // color: 'link',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  pre: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    p: 3,
    // color: 'link',
    // bg: 'muted',
  },
  code: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    // color: 'black',
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
    // move to reset
    'pre code': { color: 'inherit' },
    'li p': { margin: 0 },
    'blockquote p': { fontSize: 'inherit' },
  },
  googleFonts: '//fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400',
}

export default roboto
