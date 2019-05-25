import test from 'ava'
import css from '../src'

const theme = {
  colors: {
    primary: 'tomato',
    secondary: 'cyan',
  },
  fontSizes: [
    12, 14, 16, 24, 36
  ],
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
      fontSize: [ 1, 2 ],
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: [ 3, 4 ],
      letterSpacing: [ '-0.01em', '-0.02em']
    },
  }
}

test('returns a function', t => {
  const res = css()
  t.is(typeof res, 'function')
})

test('returns an object', t => {
  const res = css()()
  t.is(typeof res, 'object')
})

test('returns styles', t => {
  const res = css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
  })()
  t.deepEqual(res, {
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
  })
})

test('returns system props styles', t => {
  const res = css({
    color: 'primary',
    fontSize: [ 2, 3, 4]
  })({ theme })
  t.deepEqual(res, {
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

test('returns nested system props styles', t => {
  const res = css({
    color: 'primary',
    '&:hover': {
      color: 'secondary',
    }
  })({ theme })
  t.deepEqual(res, {
    color: 'tomato',
    '&:hover': {
      color: 'cyan',
    }
  })
})

test('returns nested responsive styles', t => {
  const res = css({
    color: 'primary',
    h1: {
      py: [3, 4],
    }
  })({ theme })
  t.deepEqual(res, {
    color: 'tomato',
    h1: {
      paddingTop: 16,
      paddingBottom: 16,
      '@media screen and (min-width: 40em)': {
        paddingTop: 32,
        paddingBottom: 32,
      }
    }
  })
})

test('handles all core styled system props', t => {
  const res = css({
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
  t.deepEqual(res, {
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

test('works with the css prop', t => {
  const res = css({
    color: 'primary',
    m: 0,
    fontSize: 2,
  })(theme)
  t.deepEqual(res, {
    color: 'tomato',
    margin: 0,
    fontSize: 16,
  })
})

test('works with functional arguments', t => {
  const res = css(t => ({
    color: t.colors.primary,
  }))(theme)
  t.deepEqual(res, {
    color: 'tomato',
  })
})

test('supports functional values', t => {
  const res = css({
    color: t => t.colors.primary,
  })(theme)
  t.deepEqual(res, {
    color: 'tomato',
  })
})

test('returns variants from theme', t => {
  const res = css({
    variant: 'buttons.primary',
  })(theme)
  t.deepEqual(res, {
    padding: 16,
    fontWeight: 600,
    color: 'white',
    backgroundColor: 'tomato',
    borderRadius: 2,
  })
})

test('handles variants with responsive values', t => {
  const res = css({
    variant: 'text.caps',
  })(theme)
  t.deepEqual(res, {
    fontSize: 14,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    '@media screen and (min-width: 40em)': {
      fontSize: 16,
    }
  })
})

test('handles responsive variants', t => {
  const res = css({
    variant: 'text.title',
  })(theme)
  t.deepEqual(res, {
    fontSize: 24,
    letterSpacing: '-0.01em',
    '@media screen and (min-width: 40em)': {
      fontSize: 36,
      letterSpacing: '-0.02em',
    }
  })
})

test('handles negative margins from scale', t => {
  const result = css({
    mt: -3,
    mx: -4,
  })(theme)
  t.deepEqual(result, {
    marginTop: -16,
    marginLeft: -32,
    marginRight: -32,
  })
})
