import test from 'ava'
import {
  space,
  width,
  fontSize,
  color,
  util
} from './src'

const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 6, 12, 18, 24],
  fontSizes: [12, 16, 18, 24, 36, 72],
  colors: {
    blue: '#07c',
    green: '#1c0'
  }
}

test('exports space, width, and fontSize', t => {
  t.is(typeof space, 'function')
  t.is(typeof width, 'function')
  t.is(typeof fontSize, 'function')
})

test('util.is checks for non null values', t => {
  const a = util.is(null)
  const b = util.is()
  const c = util.is(0)
  const d = util.is('')
  const e = util.is(false)
  const f = util.is([])
  t.false(a)
  t.false(b)
  t.true(c)
  t.true(d)
  t.true(e)
  t.true(f)
})

test('util.px adds px unit to numbers', t => {
  const a = util.px(1)
  const b = util.px('2em')
  t.is(a, '1px')
  t.is(b, '2em')
})

test('util.neg checks for negative number', t => {
  const a = util.neg(0)
  const b = util.neg(1)
  const c = util.neg(-1)
  t.false(a)
  t.false(b)
  t.true(c)
})

test('util.num checks for a number', t => {
  const a = util.num(1)
  const b = util.num(0)
  const c = util.num('1')
  const d = util.num(null)
  t.true(a)
  t.true(b)
  t.false(c)
  t.false(d)
})

test('util.arr converts values to arrays', t => {
  const a = util.arr(1)
  const b = util.arr([1])
  t.true(Array.isArray(a))
  t.true(Array.isArray(b))
})

test('util.idx checks for existential values', t => {
  const props = {
    a: {
      b: {
        c: 'hello',
      },
    },
    x: 'x',
  }
  const a = util.idx(['a', 'b', 'c'], props)
  const b = util.idx(['x'], props)
  const c = util.idx(['x', 'y', 'z'], props)
  t.is(a, 'hello')
  t.is(b, 'x')
  t.is(c, null)
})

test('util.breaks returns a media queries array', t => {
  const a = util.breaks({
    theme: {
      breakpoints: [24],
    },
  })
  t.deepEqual(a, [null, '@media screen and (min-width: 24em)'])
})

test('util.media returns media query wrapped rules', t => {
  const a = util.media([])('hello')
  const b = util.media(['hi'])('hello', 0)
  t.is(a, 'hello')
  t.deepEqual(b, {hi: 'hello'})
})

test('util.dec returns declaration strings', t => {
  const a = util.dec('foo')('bar')
  const b = util.dec(['foo', 'baz'])('bar')
  t.deepEqual(a, {foo: 'bar'})
  t.deepEqual(b, {foo: 'bar', baz: 'bar'})
})

test('space returns margin declarations', t => {
  const dec = space({m: 1})
  t.deepEqual(dec, {margin: '8px'})
})

test('space returns non-scalar margins', t => {
  const a = space({m: 24})
  const b = space({m: 'auto'})
  t.deepEqual(a, {margin: '24px'})
  t.deepEqual(b, {margin: 'auto'})
})

test('space returns negative margins', t => {
  const a = space({m: -1})
  const b = space({m: -24})
  t.deepEqual(a, {margin: '-8px'})
  t.deepEqual(b, {margin: '-24px'})
})

test('space returns directional margins', t => {
  const top = space({mt: 1})
  const r = space({mr: 2})
  const b = space({mb: 3})
  const l = space({ml: 4})
  const x = space({mx: 1})
  const y = space({my: 2})
  t.deepEqual(top, {'marginTop': '8px'})
  t.deepEqual(r, {'marginRight': '16px'})
  t.deepEqual(b, {'marginBottom': '32px'})
  t.deepEqual(l, {'marginLeft': '64px'})
  t.deepEqual(x, {'marginLeft': '8px', 'marginRight': '8px'})
  t.deepEqual(y, {'marginTop': '16px', 'marginBottom': '16px'})
})

test('space returns responsive margins', t => {
  const a = space({m: [0, 1]})
  t.deepEqual(a, {
    margin: '0px',
    '@media screen and (min-width: 40em)': {
      margin: '8px',
    },
  })
})

test('space returns responsive directional margins', t => {
  const a = space({mt: [0, 1], mb: [2, 3]})
  t.deepEqual(a, {
    marginBottom: '16px',
    marginTop: '0px',
    '@media screen and (min-width: 40em)': {
      marginBottom: '32px',
      marginTop: '8px',
    },
  })
})

test('space returns padding declarations', t => {
  const dec = space({p: 1})
  t.deepEqual(dec, {padding: '8px'})
})

test('space returns non-scalar paddings', t => {
  const a = space({p: 24})
  const b = space({p: 'auto'})
  t.deepEqual(a, {padding: '24px'})
  t.deepEqual(b, {padding: 'auto'})
})

test('space returns directional paddings', t => {
  const top = space({pt: 1})
  const r = space({pr: 2})
  const b = space({pb: 3})
  const l = space({pl: 4})
  const x = space({px: 1})
  const y = space({py: 2})
  t.deepEqual(top, {'paddingTop': '8px'})
  t.deepEqual(r, {'paddingRight': '16px'})
  t.deepEqual(b, {'paddingBottom': '32px'})
  t.deepEqual(l, {'paddingLeft': '64px'})
  t.deepEqual(x, {'paddingLeft': '8px', 'paddingRight': '8px'})
  t.deepEqual(y, {'paddingTop': '16px', 'paddingBottom': '16px'})
})

test('space returns responsive paddings', t => {
  const a = space({p: [0, 1]})
  t.deepEqual(a, {
    padding: '0px',
    '@media screen and (min-width: 40em)': {
      padding: '8px',
    },
  })
})

test('space returns responsive directional paddings', t => {
  const a = space({pt: [0, 1], pb: [2, 3]})
  t.deepEqual(a, {
    paddingBottom: '16px',
    paddingTop: '0px',
    '@media screen and (min-width: 40em)': {
      paddingBottom: '32px',
      paddingTop: '8px',
    },
  })
})

test('space can be configured with a theme', t => {
  const a = space({theme, m: 1})
  const b = space({theme, m: 2})
  const c = space({theme, m: 3})
  const d = space({theme, m: 4})
  t.deepEqual(a, {margin: '6px'})
  t.deepEqual(b, {margin: '12px'})
  t.deepEqual(c, {margin: '18px'})
  t.deepEqual(d, {margin: '24px'})
})

test('width returns percentage widths', t => {
  const a = width({width: 1 / 2})
  t.deepEqual(a, {width: '50%'})
})

test('width returns pixel values', t => {
  const a = width({width: 256})
  t.deepEqual(a, {width: '256px'})
})

test('width returns string values', t => {
  const a = width({width: 'auto'})
  t.deepEqual(a, {width: 'auto'})
})

test('width returns responsive values', t => {
  const a = width({width: [1, 1 / 2]})
  t.deepEqual(a, {
    width: '100%',
    '@media screen and (min-width: 40em)': {width: '50%'},
  })
})

test('width returns responsive pixel values', t => {
  const a = width({width: [128, 256]})
  t.deepEqual(a, {
    width: '128px',
    '@media screen and (min-width: 40em)': {width: '256px'},
  })
})

test('width returns 0 value', t => {
  const a = width({width: 0})
  t.deepEqual(a, {width: '0%'})
})

test('width accepts shortcut prop', t => {
  const a = width({w: 1 / 2})
  t.deepEqual(a, {width: '50%'})
})

test('fontSize returns scale values', t => {
  const a = fontSize({fontSize: 0})
  const b = fontSize({fontSize: 1})
  const c = fontSize({fontSize: 2})
  t.deepEqual(a, {'fontSize': '12px'})
  t.deepEqual(b, {'fontSize': '14px'})
  t.deepEqual(c, {'fontSize': '16px'})
})

test('fontSize returns pixel values', t => {
  const a = fontSize({fontSize: 24})
  t.deepEqual(a, {'fontSize': '24px'})
})

test('fontSize returns string values', t => {
  const a = fontSize({fontSize: '2em'})
  t.deepEqual(a, {'fontSize': '2em'})
})

test('fontSize returns responsive values', t => {
  const a = fontSize({fontSize: [1, 2]})
  t.deepEqual(a, {
    fontSize: '14px',
    '@media screen and (min-width: 40em)': {
      fontSize: '16px',
    },
  })
})

test('fontSize accepts shortcut prop', t => {
  const a = fontSize({f: 2})
  t.deepEqual(a, {'fontSize': '16px'})
})

test('fontSize can be configured with a theme', t => {
  const a = fontSize({theme, f: 0})
  const b = fontSize({theme, f: 1})
  const c = fontSize({theme, f: 2})
  const d = fontSize({theme, f: 3})
  const e = fontSize({theme, f: 4})
  const f = fontSize({theme, f: 5})
  t.deepEqual(a, {'fontSize': '12px'})
  t.deepEqual(b, {'fontSize': '16px'})
  t.deepEqual(c, {'fontSize': '18px'})
  t.deepEqual(d, {'fontSize': '24px'})
  t.deepEqual(e, {'fontSize': '36px'})
  t.deepEqual(f, {'fontSize': '72px'})
})

test('color returns color and backgroundColor styles', t => {
  const a = color({ color: 'tomato' })
  const b = color({ bg: 'tomato' })
  t.deepEqual(a, { color: 'tomato' })
  t.deepEqual(b, { backgroundColor: 'tomato' })
})

test('color returns theme.colors values', t => {
  const a = color({ theme, color: 'blue' })
  const b = color({ theme, bg: 'green' })
  t.deepEqual(a, { color: theme.colors.blue })
  t.deepEqual(b, { backgroundColor: theme.colors.green })
})

test('color returns responsive values', t => {
  const a = color({ theme, color: [ 'blue', 'green' ] })
  t.deepEqual(a, {
    color: theme.colors.blue,
    '@media screen and (min-width: 32em)': {
      color: theme.colors.green
    }
  })
})

test('color works with array theme.colors', t => {
  const a = color({
    theme: {
      colors: [ 'tomato', 'plum' ]
    },
    color: 0
  })
  t.is(a.color, 'tomato')
})

test('breakpoints can be configured with a theme', t => {
  const a = space({theme, m: [1, 2, 3, 4]})
  const [, b, c, d] = Object.keys(a)
  t.is(b, '@media screen and (min-width: 32em)')
  t.is(c, '@media screen and (min-width: 48em)')
  t.is(d, '@media screen and (min-width: 64em)')
})
