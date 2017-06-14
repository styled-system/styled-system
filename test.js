import test from 'ava'
import {
  space,
  width,
  fontSize
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

test.todo('util.num checks for a number')
test.todo('util.arr converts values to arrays')
test.todo('util.scale returns scale values')
test.todo('util.breakpoint returns media queries')

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
  t.is(b, 'margin-right: 32px;')
  t.is(l, 'margin-right: 64px;')
  t.is(x, 'margin-left: 8px;margin-right: 8px;')
  t.is(y, 'margin-left: 16px;margin-right: 16px;')
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
  t.is(b, 'padding-right: 32px;')
  t.is(l, 'padding-right: 64px;')
  t.is(x, 'padding-left: 8px;padding-right: 8px;')
  t.is(y, 'padding-left: 16px;padding-right: 16px;')
})

test('space returns responsive paddings', t => {
  const a = space({ p: [ 0, 1 ] })
  t.is(a, 'padding: 0px;@media screen and (min-width: 40em){padding: 8px;}')
})

test('width returns percentage widths', t => {
  const a = width({ width: 1/2 })
  t.is(a, 'width: 50%;')
})
