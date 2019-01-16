import test from 'ava'
import * as system from '../src'
import {
  space,
  style,
  themeGet,
  util,
} from '../src'
import {
  width,
  display
} from '../src/styles'

const theme = {
  breakpoints: [32, 48, 64].map(n => n + 'em'),
  space: [0, 6, 12, 18, 24],
  fontSizes: [12, 16, 18, 24, 36, 72],
  radii: [2, 4],
  colors: {
    blue: '#07c',
    green: '#1c0',
    gray: ['#ccc', '#555'],
  },
}

// aliases
theme.space.big = 64
theme.fontSizes.big = 128

test('exports space', t => {
  t.is(typeof space, 'function')
})

test('themeGet gets theme values', t => {
  const a = themeGet('colors.gray.0')({ theme })
  t.is(a, theme.colors.gray[0])
})

test('themeGet returns a fallback', t => {
  const a = themeGet('colors.blue', 'tomato')({ theme: {} })
  t.is(a, 'tomato')
})

test.skip('themeGet returns declared 0 rather than undefined', t => {
  const a = themeGet('space.0')({ theme })
  t.is(a, 0)
})

// util
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

test('util.merge reduces objects', t => {
  const a = [
    {
      a: 'hello',
      b: {
        beep: 'boop',
      },
    },
    {
      b: {
        hello: 'hi',
      },
    },
  ].reduce(util.merge, {})
  t.deepEqual(a, {
    a: 'hello',
    b: {
      beep: 'boop',
      hello: 'hi',
    },
  })
})

test('util.merge merges objects', t => {
  const a = util.merge(
    {
      a: 'hello',
      b: {
        beep: 'boop',
      },
      c: {
        d: 2,
        e: 'f',
      },
    },
    {
      b: {
        hello: 'hi',
      },
      c: {
        g: 3,
      },
    }
  )
  t.deepEqual(a, {
    a: 'hello',
    b: {
      beep: 'boop',
      hello: 'hi',
    },
    c: {
      d: 2,
      e: 'f',
      g: 3,
    },
  })
})

test('util.merge doesn’t throw with null values', t => {
  t.notThrows(() => {
    util.merge(null, null)
  })
})

test('util.compose combines style functions', t => {
  const combo = util.compose(
    display,
    width
  )
  const a = combo({ display: 'inline-block', width: 1 / 2 })
  t.deepEqual(a, {
    display: 'inline-block',
    width: '50%',
  })
})

test('util.get returns nested values', t => {
  const value = util.get({ colors: { blue: '#07c' } }, 'colors.blue')
  t.is(value, '#07c')
})

// space
test('space returns margin declarations', t => {
  const dec = space({ m: 1 })
  t.deepEqual(dec, { margin: '4px' })
})

test('space returns non-scalar margins', t => {
  const a = space({ m: 24 })
  const b = space({ m: 'auto' })
  t.deepEqual(a, { margin: '24px' })
  t.deepEqual(b, { margin: 'auto' })
})

test('space returns keyed values', t => {
  const a = space({
    theme: {
      space: {
        nested: {
          big: theme.space.big,
        },
      },
    },
    m: 'nested.big',
  })
  t.is(a.margin, theme.space.big + 'px')
})

test('space returns negative margins', t => {
  const a = space({ m: -1 })
  const b = space({ m: -24 })
  t.deepEqual(a, { margin: '-4px' })
  t.deepEqual(b, { margin: '-24px' })
})

test('space returns directional margins', t => {
  const top = space({ mt: 1 })
  const r = space({ mr: 2 })
  const b = space({ mb: 3 })
  const l = space({ ml: 4 })
  const x = space({ mx: 1 })
  const y = space({ my: 2 })
  t.deepEqual(top, { marginTop: '4px' })
  t.deepEqual(r, { marginRight: '8px' })
  t.deepEqual(b, { marginBottom: '16px' })
  t.deepEqual(l, { marginLeft: '32px' })
  t.deepEqual(x, { marginLeft: '4px', marginRight: '4px' })
  t.deepEqual(y, { marginTop: '8px', marginBottom: '8px' })
})

test('space returns responsive margins', t => {
  const a = space({ m: [0, 1] })
  t.deepEqual(a, {
    margin: '0px',
    '@media screen and (min-width: 40em)': {
      margin: '4px',
    },
  })
})

test('space returns responsive directional margins', t => {
  const a = space({ mt: [0, 1], mb: [2, 3] })
  t.deepEqual(a, {
    marginBottom: '8px',
    marginTop: '0px',
    '@media screen and (min-width: 40em)': {
      marginBottom: '16px',
      marginTop: '4px',
    },
  })
})

test('space sorts responsive directional margins', t => {
  const a = space({
    mb: 2,
    m: [0, 1],
  })
  const keys = Object.keys(a)
  t.deepEqual(keys, [
    'margin',
    '@media screen and (min-width: 40em)',
    'marginBottom',
  ])
})

test('space returns padding declarations', t => {
  const dec = space({ p: 1 })
  t.deepEqual(dec, { padding: '4px' })
})

test('space returns non-scalar paddings', t => {
  const a = space({ p: 24 })
  const b = space({ p: 'auto' })
  t.deepEqual(a, { padding: '24px' })
  t.deepEqual(b, { padding: 'auto' })
})

test('space returns directional paddings', t => {
  const top = space({ pt: 1 })
  const r = space({ pr: 2 })
  const b = space({ pb: 3 })
  const l = space({ pl: 4 })
  const x = space({ px: 1 })
  const y = space({ py: 2 })
  t.deepEqual(top, { paddingTop: '4px' })
  t.deepEqual(r, { paddingRight: '8px' })
  t.deepEqual(b, { paddingBottom: '16px' })
  t.deepEqual(l, { paddingLeft: '32px' })
  t.deepEqual(x, { paddingLeft: '4px', paddingRight: '4px' })
  t.deepEqual(y, { paddingTop: '8px', paddingBottom: '8px' })
})

test('space returns responsive paddings', t => {
  const a = space({ p: [0, 1] })
  t.deepEqual(a, {
    padding: '0px',
    '@media screen and (min-width: 40em)': {
      padding: '4px',
    },
  })
})

test('space can accept a breakpoint map (object)', t => {
  const a = space({
    theme: { breakpoints: { xs: 0, sm: '40em', md: '50em', lg: '60em' } },
    p: { xs: 1, md: 2 },
  })

  t.deepEqual(a, {
    padding: '4px',
    '@media screen and (min-width: 50em)': {
      padding: '8px',
    },
  })
})

test('space returns responsive directional paddings', t => {
  const a = space({ pt: [0, 1], pb: [2, 3] })
  t.deepEqual(a, {
    paddingBottom: '8px',
    paddingTop: '0px',
    '@media screen and (min-width: 40em)': {
      paddingBottom: '16px',
      paddingTop: '4px',
    },
  })
})

test('space can be configured with a theme', t => {
  const a = space({ theme, m: 1 })
  const b = space({ theme, m: 2 })
  const c = space({ theme, m: 3 })
  const d = space({ theme, m: 4 })
  t.deepEqual(a, { margin: '6px' })
  t.deepEqual(b, { margin: '12px' })
  t.deepEqual(c, { margin: '18px' })
  t.deepEqual(d, { margin: '24px' })
})

test('space can accept string values', t => {
  const a = space({ theme: { space: ['1em', '2em'] }, m: 1 })
  t.deepEqual(a, { margin: '2em' })
})

test('space can accept string values with negative', t => {
  const a = space({ theme: { space: ['1em', '2em'] }, m: -1 })
  t.deepEqual(a, { margin: '-2em' })
})

test('space handles null values in arrays', t => {
  const a = space({
    m: [0, null, 2],
    theme: {
      space: [0, 4, 8, 16],
    },
  })
  t.deepEqual(a, {
    margin: '0px',
    '@media screen and (min-width: 52em)': {
      margin: '8px',
    },
  })
})

test('space handles undefined values in arrays', t => {
  const a = space({
    m: [0, , 2],
    theme: {
      space: [0, 4, 8, 16],
    },
  })
  t.deepEqual(a, {
    margin: '0px',
    '@media screen and (min-width: 52em)': {
      margin: '8px',
    },
  })
})

test('space can handle alias values', t => {
  const a = space({
    m: 'large',
    theme: {
      space: {
        large: 12,
      },
    },
  })
  t.deepEqual(a, { margin: '12px' })
})

// style
test('style returns a function', t => {
  const sx = style({
    prop: 'color',
    key: 'colors',
  })
  t.is(typeof sx, 'function')
})

test('style function returns a style object', t => {
  const a = style({
    prop: 'color',
    key: 'colors',
  })({ color: 'tomato' })
  t.is(typeof a, 'object')
  t.deepEqual(a, { color: 'tomato' })
})

test('style function returns null', t => {
  const sx = style({
    prop: 'color',
  })
  const a = sx({})
  t.is(a, null)
})

test('style function returns scale values', t => {
  const sx = style({
    key: 'colors',
    prop: 'color',
  })
  const a = sx({
    color: 'blue',
    theme: {
      colors: {
        blue: '#07c',
      },
    },
  })
  t.is(a.color, '#07c')
})

test('style function returns pixels for number values', t => {
  const sx = style({
    prop: 'borderRadius',
    transformValue: util.px,
  })
  const a = sx({
    borderRadius: 4,
    theme: {},
  })
  t.is(a.borderRadius, '4px')
})

test('style function returns unitless number values', t => {
  const sx = style({
    prop: 'borderRadius',
  })
  const a = sx({
    borderRadius: 4,
    theme: {},
  })
  t.is(a.borderRadius, 4)
})

test('style function accepts a transformValue option', t => {
  const sx = style({
    prop: 'width',
    transformValue: n => (!util.num(n) || n > 1 ? util.px(n) : n * 100 + '%'),
  })
  const a = sx({ width: 1 / 2 })
  const b = sx({ width: 24 })
  t.is(a.width, '50%')
  t.is(b.width, '24px')
})

test('style allows property aliases', t => {
  const direction = style({
    cssProperty: 'flex-direction',
    prop: 'direction',
  })
  const a = direction({ direction: 'column' })
  t.deepEqual(a, {
    'flex-direction': 'column',
  })
})

test('style allows array values', t => {
  const direction = style({
    cssProperty: 'flex-direction',
    prop: 'direction',
  })
  const a = direction({ direction: ['column', null, 'row'] })
  t.deepEqual(a, {
    'flex-direction': 'column',
    '@media screen and (min-width: 52em)': {
      'flex-direction': 'row',
    },
  })
})

test('style allows array values with undefined', t => {
  const direction = style({
    cssProperty: 'flex-direction',
    prop: 'direction',
  })
  const a = direction({ direction: ['column', , 'row'] })
  t.deepEqual(a, {
    'flex-direction': 'column',
    '@media screen and (min-width: 52em)': {
      'flex-direction': 'row',
    },
  })
})

test('style allows a breakpoint map', t => {
  const direction = style({
    cssProperty: 'flex-direction',
    prop: 'direction',
  })
  const a = direction({
    theme: {
      breakpoints: { default: null, sm: '40em', md: '50em', lg: '60em' },
    },
    direction: { default: 'column', sm: 'row', lg: 'column' },
  })
  t.deepEqual(a, {
    'flex-direction': 'column',
    '@media screen and (min-width: 40em)': {
      'flex-direction': 'row',
    },
    '@media screen and (min-width: 60em)': {
      'flex-direction': 'column',
    },
  })
})

test('style allows a breakpoint map without a default', t => {
  const direction = style({
    cssProperty: 'flex-direction',
    prop: 'direction',
  })
  const a = direction({
    theme: { breakpoints: { sm: '40em', md: '50em' } },
    direction: { md: 'column' },
  })
  t.deepEqual(a, {
    '@media screen and (min-width: 50em)': {
      'flex-direction': 'column',
    },
  })
})

test('style returns pixel values for number arrays', t => {
  const radius = style({
    cssProperty: 'borderRadius',
    prop: 'radius',
    transformValue: util.px,
  })
  const a = radius({ radius: [4, 5, 6] })
  t.deepEqual(a, {
    borderRadius: '4px',
    '@media screen and (min-width: 40em)': {
      borderRadius: '5px',
    },
    '@media screen and (min-width: 52em)': {
      borderRadius: '6px',
    },
  })
})

test('style returns a theme value', t => {
  const sx = style({
    prop: 'borderColor',
    key: 'colors',
  })
  const a = sx({
    theme,
    borderColor: ['blue', 'green'],
  })
  t.deepEqual(a, {
    borderColor: theme.colors.blue,
    '@media screen and (min-width: 32em)': {
      borderColor: theme.colors.green,
    },
  })
})

test('style returns a theme number value in px', t => {
  const sx = style({
    prop: 'borderRadius',
    key: 'radii',
    transformValue: util.px,
  })
  const a = sx({
    theme,
    borderRadius: [0, 1],
  })
  t.deepEqual(a, {
    borderRadius: theme.radii[0] + 'px',
    '@media screen and (min-width: 32em)': {
      borderRadius: theme.radii[1] + 'px',
    },
  })
})

// theme
test('breakpoints can be configured with a theme', t => {
  const a = space({ theme, m: [1, 2, 3, 4] })
  const [, b, c, d] = Object.keys(a)
  t.is(b, '@media screen and (min-width: 32em)')
  t.is(c, '@media screen and (min-width: 48em)')
  t.is(d, '@media screen and (min-width: 64em)')
})

/*
test('textStyle returns a value from theme', t => {
  const theme = {
    textStyles: {
      caps: {
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
    },
  }
  const a = textStyle({ textStyle: 'caps', theme })
  t.deepEqual(a, theme.textStyles.caps)
})

test('colorStyle returns a value from theme', t => {
  const theme = {
    colorStyles: {
      primary: {
        color: 'white',
        backgroundColor: 'tomato',
      },
    },
  }
  const a = colorStyle({ colors: 'primary', theme })
  t.deepEqual(a, theme.colorStyles.primary)
})

test('buttonStyle returns a value from theme', t => {
  const theme = {
    buttons: {
      primary: {
        color: 'white',
        backgroundColor: 'tomato',
        '&:hover': {
          backgroundColor: 'black',
        },
      },
    },
  }
  const a = buttonStyle({ variant: 'primary', theme })
  t.deepEqual(a, theme.buttons.primary)
})

test('variant returns a value from theme', t => {
  const theme = {
    buttons: {
      primary: {
        backgroundColor: 'tomato',
      },
    },
  }
  const a = variant({ key: 'buttons' })({ theme, variant: 'primary' })
  t.deepEqual(a, theme.buttons.primary)
})

test('variant returns null', t => {
  const theme = {}
  const a = variant({ key: 'buttons' })({ theme, variant: 'primary' })
  t.is(a, null)
})
*/


/* TODO
Object.keys(styles).forEach(key => {
  test(`${key}.propTypes is an object`, t => {
    const fn = system[key]
    if (typeof fn !== 'function') return t.pass()
    t.is(typeof fn.propTypes, 'object')
    Object.keys(fn.propTypes).forEach(prop => {
      t.is(typeof fn.propTypes[prop], 'function')
    })
  })
})
*/

test('responsive props can have falsey values', t => {
  const dec = space({ m: [null, 1] })
  t.deepEqual(dec, {
    '@media screen and (min-width: 40em)': {
      margin: '4px',
    },
  })
})

test('responsive props can have undefined values', t => {
  const dec = space({ m: [, 1] })
  t.deepEqual(dec, {
    '@media screen and (min-width: 40em)': {
      margin: '4px',
    },
  })
})

