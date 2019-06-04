import css from '../src'

const theme = {
  colors: {
    primary: 'tomato',
    secondary: 'cyan',
  },
  fontSizes: [12, 14, 16, 24, 36],
  fonts: {
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
  },
  fontWeights: {
    bold: 600,
  },
  buttons: {
    primary: {
      p: 3,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: 2,
    },
  },
  text: {
    caps: {
      fontSize: [1, 2],
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: [3, 4],
      letterSpacing: ['-0.01em', '-0.02em'],
    },
  },
}

test('returns a function', () => {
  const result = css()
  expect(typeof result).toBe('function')
})

test('returns an object', () => {
  const result = css()()
  expect(typeof result).toBe('object')
})

test('returns styles', () => {
  const result = css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
  })()
  expect(result).toEqual({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
  })
})

test('returns system props styles', () => {
  const result = css({
    color: 'primary',
    fontSize: [2, 3, 4],
  })({ theme })
  expect(result).toEqual({
    fontSize: 16,
    '@media screen and (min-width: 40em)': {
      fontSize: 24,
    },
    '@media screen and (min-width: 52em)': {
      fontSize: 36,
    },
    color: 'tomato',
  })
})

test('returns nested system props styles', () => {
  const result = css({
    color: 'primary',
    '&:hover': {
      color: 'secondary',
    },
  })({ theme })
  expect(result).toEqual({
    color: 'tomato',
    '&:hover': {
      color: 'cyan',
    },
  })
})

test('returns nested responsive styles', () => {
  const result = css({
    color: 'primary',
    h1: {
      py: [3, 4],
    },
  })({ theme })
  expect(result).toEqual({
    color: 'tomato',
    h1: {
      paddingTop: 16,
      paddingBottom: 16,
      '@media screen and (min-width: 40em)': {
        paddingTop: 32,
        paddingBottom: 32,
      },
    },
  })
})

test('handles all core styled system props', () => {
  const result = css({
    m: 0,
    mb: 2,
    mx: 'auto',
    p: 3,
    py: 4,
    fontSize: 3,
    fontWeight: 'bold',
    color: 'primary',
    bg: 'secondary',
    fontFamily: 'monospace',
    lineHeight: 'body',
  })({ theme })
  expect(result).toEqual({
    margin: 0,
    marginBottom: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    color: 'tomato',
    backgroundColor: 'cyan',
    fontFamily: 'Menlo, monospace',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
  })
})

test('works with the css prop', () => {
  const result = css({
    color: 'primary',
    m: 0,
    fontSize: 2,
  })(theme)
  expect(result).toEqual({
    color: 'tomato',
    margin: 0,
    fontSize: 16,
  })
})

test('works with functional arguments', () => {
  const result = css(t => ({
    color: t.colors.primary,
  }))(theme)
  expect(result).toEqual({
    color: 'tomato',
  })
})

test('supports functional values', () => {
  const result = css({
    color: t => t.colors.primary,
  })(theme)
  expect(result).toEqual({
    color: 'tomato',
  })
})

test('returns variants from theme', () => {
  const result = css({
    variant: 'buttons.primary',
  })(theme)
  expect(result).toEqual({
    padding: 16,
    fontWeight: 600,
    color: 'white',
    backgroundColor: 'tomato',
    borderRadius: 2,
  })
})

test('handles variants with responsive values', () => {
  const result = css({
    variant: 'text.caps',
  })(theme)
  expect(result).toEqual({
    fontSize: 14,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    '@media screen and (min-width: 40em)': {
      fontSize: 16,
    },
  })
})

test('handles responsive variants', () => {
  const result = css({
    variant: 'text.title',
  })(theme)
  expect(result).toEqual({
    fontSize: 24,
    letterSpacing: '-0.01em',
    '@media screen and (min-width: 40em)': {
      fontSize: 36,
      letterSpacing: '-0.02em',
    },
  })
})

test('handles negative margins from scale', () => {
  const result = css({
    mt: -3,
    mx: -4,
  })(theme)
  expect(result).toEqual({
    marginTop: -16,
    marginLeft: -32,
    marginRight: -32,
  })
})

test('handles layout values from sizes', () => {
  const result = css({
    width: [0, 1],
    height: 0,
  })({
    sizes: [24, 48, 96],
  })
  expect(result).toEqual({
    width: 24,
    height: 24,
    '@media screen and (min-width: 40em)': { width: 48 },
  })
})

test('handles with percentage values', () => {
  const result = css({
    width: [1, 0.5],
  })(theme)
  expect(result).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': { width: '50%' },
  })
})
