import test from 'ava'
import {
  space,
  width,
  fontSize,
  util
} from './src'

const theme = {
  breakpoints: [ 32, 48, 64 ],
  space: [ 0, 6, 12, 18, 24 ],
  fontSizes: [ 12, 16, 18, 24, 36, 72 ]
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
  const b = util.arr([ 1 ])
  t.true(Array.isArray(a))
  t.true(Array.isArray(b))
})

test('util.idx checks for existential values', t => {
  const props = {
    a: {
      b: {
        c: 'hello'
      }
    },
    x: 'x'
  }
  const a = util.idx([ 'a', 'b', 'c' ], props)
  const b = util.idx([ 'x' ], props)
  const c = util.idx([ 'x', 'y', 'z' ], props)
  t.is(a, 'hello')
  t.is(b, 'x')
  t.is(c, null)
})

test('util.breaks returns a media queries array', t => {
  const a = util.breaks({
    theme: {
      breakpoints: [ 24 ]
    }
  })
  t.deepEqual(a, [ null, '@media screen and (min-width: 24em)' ])
})

test('util.media returns media query wrapped rules', t => {
  const a = util.media([])('hello')
  const b = util.media([ 'hi' ])('hello', 0)
  t.is(a, 'hello')
  t.is(b, 'hi{hello}')
})

test('util.dec returns declaration strings', t => {
  const a = util.dec('foo')('bar')
  const b = util.dec([ 'foo', 'baz' ])('bar')
  t.is(a, 'foo: bar;')
  t.is(b, 'foo: bar;baz: bar;')
})

test('space returns margin declarations', t => {
  const dec = space({ m: 1 })
  t.is(dec, 'margin: 8px;')
})

test('space returns non-scalar margins', t => {
  const a = space({ m: 24 })
  const b = space({ m: 'auto' })
  t.is(a, 'margin: 24px;')
  t.is(b, 'margin: auto;')
})

test('space returns negative margins', t => {
  const a = space({ m: -1 })
  const b = space({ m: -24 })
  t.is(a, 'margin: -8px;')
  t.is(b, 'margin: -24px;')
})

test('space returns directional margins', t => {
  const top = space({ mt: 1 })
  const r = space({ mr: 2 })
  const b = space({ mb: 3 })
  const l = space({ ml: 4 })
  const x = space({ mx: 1 })
  const y = space({ my: 2 })
  t.is(top, 'margin-top: 8px;')
  t.is(r, 'margin-right: 16px;')
  t.is(b, 'margin-bottom: 32px;')
  t.is(l, 'margin-left: 64px;')
  t.is(x, 'margin-left: 8px;margin-right: 8px;')
  t.is(y, 'margin-top: 16px;margin-bottom: 16px;')
})

test('space returns responsive margins', t => {
  const a = space({ m: [ 0, 1 ] })
  t.is(a, 'margin: 0px;@media screen and (min-width: 40em){margin: 8px;}')
})

test('space returns padding declarations', t => {
  const dec = space({ p: 1 })
  t.is(dec, 'padding: 8px;')
})

test('space returns non-scalar paddings', t => {
  const a = space({ p: 24 })
  const b = space({ p: 'auto' })
  t.is(a, 'padding: 24px;')
  t.is(b, 'padding: auto;')
})

test('space returns directional paddings', t => {
  const top = space({ pt: 1 })
  const r = space({ pr: 2 })
  const b = space({ pb: 3 })
  const l = space({ pl: 4 })
  const x = space({ px: 1 })
  const y = space({ py: 2 })
  t.is(top, 'padding-top: 8px;')
  t.is(r, 'padding-right: 16px;')
  t.is(b, 'padding-bottom: 32px;')
  t.is(l, 'padding-left: 64px;')
  t.is(x, 'padding-left: 8px;padding-right: 8px;')
  t.is(y, 'padding-top: 16px;padding-bottom: 16px;')
})

test('space returns responsive paddings', t => {
  const a = space({ p: [ 0, 1 ] })
  t.is(a, 'padding: 0px;@media screen and (min-width: 40em){padding: 8px;}')
})

test('space can be configured with a theme', t => {
  const a = space({ theme, m: 1 })
  const b = space({ theme, m: 2 })
  const c = space({ theme, m: 3 })
  const d = space({ theme, m: 4 })
  t.is(a, 'margin: 6px;')
  t.is(b, 'margin: 12px;')
  t.is(c, 'margin: 18px;')
  t.is(d, 'margin: 24px;')
})

test('width returns percentage widths', t => {
  const a = width({ width: 1/2 })
  t.is(a, 'width: 50%;')
})

test('width returns pixel values', t => {
  const a = width({ width: 256 })
  t.is(a, 'width: 256px;')
})

test('width returns string values', t => {
  const a = width({ width: 'auto' })
  t.is(a, 'width: auto;')
})

test('width returns responsive values', t => {
  const a = width({ width: [ 1, 1/2 ] })
  t.is(a, 'width: 100%;@media screen and (min-width: 40em){width: 50%;}')
})

test('width returns responsive pixel values', t => {
  const a = width({ width: [ 128, 256 ] })
  t.is(a, 'width: 128px;@media screen and (min-width: 40em){width: 256px;}')
})

test('width returns 0 value', t => {
  const a = width({ width: 0 })
  t.is(a, 'width: 0%;')
})

test('width accepts shortcut prop', t => {
  const a = width({ w: 1/2 })
  t.is(a, 'width: 50%;')
})

test('fontSize returns scale values', t => {
  const a = fontSize({ fontSize: 0 })
  const b = fontSize({ fontSize: 1 })
  const c = fontSize({ fontSize: 2 })
  t.is(a, 'font-size: 12px;')
  t.is(b, 'font-size: 14px;')
  t.is(c, 'font-size: 16px;')
})

test('fontSize returns pixel values', t => {
  const a = fontSize({ fontSize: 24 })
  t.is(a, 'font-size: 24px;')
})

test('fontSize returns string values', t => {
  const a = fontSize({ fontSize: '2em' })
  t.is(a, 'font-size: 2em;')
})

test('fontSize returns responsive values', t => {
  const a = fontSize({ fontSize: [ 1, 2 ] })
  t.is(a, 'font-size: 14px;@media screen and (min-width: 40em){font-size: 16px;}')
})

test('fontSize accepts shortcut prop', t => {
  const a = fontSize({ f: 2 })
  t.is(a, 'font-size: 16px;')
})

test('fontSize can be configured with a theme', t => {
  const a = fontSize({ theme, f: 0 })
  const b = fontSize({ theme, f: 1 })
  const c = fontSize({ theme, f: 2 })
  const d = fontSize({ theme, f: 3 })
  const e = fontSize({ theme, f: 4 })
  const f = fontSize({ theme, f: 5 })
  t.is(a, 'font-size: 12px;')
  t.is(b, 'font-size: 16px;')
  t.is(c, 'font-size: 18px;')
  t.is(d, 'font-size: 24px;')
  t.is(e, 'font-size: 36px;')
  t.is(f, 'font-size: 72px;')
})

test('breakpoints can be configured with a theme', t => {
  const a = space({ theme, m: [ 1, 2, 3, 4 ] })
  t.regex(a, /min\-width:\s32em/)
  t.regex(a, /min\-width:\s48em/)
  t.regex(a, /min\-width:\s64em/)
})
