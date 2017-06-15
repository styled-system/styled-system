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

test.todo('width returns 0 value')

test('fontSize returns scale values', t => {
  const a = fontSize({ fontSize: 1 })
  const b = fontSize({ fontSize: 2 })
  const c = fontSize({ fontSize: 3 })
  t.is(a, 'font-size: 14px;')
  t.is(b, 'font-size: 16px;')
  t.is(c, 'font-size: 20px;')
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

