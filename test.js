import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import palx from 'palx'
import * as system from './src'
import {
  space,
  width,
  fontSize,
  color,
  style,
  responsiveStyle,
  pseudoStyle,
  propTypes,
  cleanElement,
  removeProps,
  util,
  textAlign,
  fontWeight,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  hover,
  focus,
  active,
  disabled,
} from './src'

const palette = palx('#07c')

const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 6, 12, 18, 24],
  fontSizes: [12, 16, 18, 24, 36, 72],
  radii: [ 2, 4 ],
  colors: {
    blue: '#07c',
    green: '#1c0',
    gray: ['#ccc', '#555']
  }
}

test('exports space, width, and fontSize', t => {
  t.is(typeof space, 'function')
  t.is(typeof width, 'function')
  t.is(typeof fontSize, 'function')
})

test('system.theme gets theme values', t => {
  const a = system.theme('colors.blue')({ theme })
  t.is(a, theme.colors.blue)
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

test('util.em adds em unit to numbers', t => {
  const a = util.em(1)
  const b = util.em('2px')
  t.is(a, '1em')
  t.is(b, '2px')
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

test('util.breaks accepts non-em breakpoints', t => {
  const a = util.breaks({
    theme: {
      breakpoints: ["600px"],
    },
  })
  t.deepEqual(a, [null, '@media screen and (min-width: 600px)'])
})

test('util.media returns media query wrapped rules', t => {
  const a = util.media([])('hello')
  const b = util.media([ 'hi' ])('hello', 0)
  const c = util.media([ 'hi' ])(null, 0)
  t.is(a, 'hello')
  t.deepEqual(b, { hi: 'hello' })
  t.is(c, null)
})

test('util.dec returns declaration strings', t => {
  const a = util.dec('foo')('bar')
  const b = util.dec(['foo', 'baz'])('bar')
  t.deepEqual(a, {foo: 'bar'})
  t.deepEqual(b, {foo: 'bar', baz: 'bar'})
})

test('util.merge reduces objects', t => {
  const a = [
    {
      a: 'hello',
      b: {
        beep: 'boop'
      }
    },
    {
      b: {
        hello: 'hi'
      }
    }
  ].reduce(util.merge, {})
  t.deepEqual(a, {
    a: 'hello',
    b: {
      beep: 'boop',
      hello: 'hi'
    }
  })
})

test('util.merge merges objects', t => {
  const a = util.merge({
    a: 'hello',
    b: {
      beep: 'boop'
    },
    c: {
      d: 2,
      e: 'f'
    }
  }, {
    b: {
      hello: 'hi'
    },
    c: {
      g: 3
    }
  })
  t.deepEqual(a, {
    a: 'hello',
    b: {
      beep: 'boop',
      hello: 'hi'
    },
    c: {
      d: 2,
      e: 'f',
      g: 3
    }
  })
})

// space
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

test('space sorts responsive directional margins', t => {
  const a = space({
    mb: 2,
    m: [0, 1]
  })
  const keys = Object.keys(a)
  t.deepEqual(keys, [
    'margin',
    '@media screen and (min-width: 40em)',
    'marginBottom'
  ])
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

test('space can accept string values', t => {
  const a = space({ theme: { space: ['1em', '2em'] }, m: -1 })
  t.deepEqual(a, {margin: '2em'})
})

// width
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

test('width returns null ', t => {
  const a = width({})
  t.is(a, null)
})

test('width accepts shortcut prop', t => {
  const a = width({w: 1 / 2})
  t.deepEqual(a, {width: '50%'})
})

// fontSize
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

test('fontSize returns null', t => {
  const a = fontSize({})
  t.is(a, null)
})

// color
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

test('color keys support dot notation', t => {
  const a = color({
    theme: {
      colors: palette
    },
    color: 'gray.2'
  })
  t.is(a.color, palette.gray[2])
})

// style
test('style returns a function', t => {
  const sx = style({
    prop: 'color',
    key: 'colors'
  })
  t.is(typeof sx, 'function')
})

test('style function returns a style object', t => {
  const a = style({
    prop: 'color',
    key: 'colors'
  })({ color: 'tomato' })
  t.is(typeof a, 'object')
  t.deepEqual(a, { color: 'tomato' })
})

test('style function returns null', t => {
  const sx = style({
    prop: 'color'
  })
  const a = sx({})
  t.is(a, null)
})

test('style function returns scale values', t => {
  const sx = style({
    key: 'colors',
    prop: 'color'
  })
  const a = sx({
    color: 'blue',
    theme: {
      colors: {
        blue: '#07c'
      }
    }
  })
  t.is(a.color, '#07c')
})

test('style function returns pixels for number values', t => {
  const sx = style({
    prop: 'borderRadius',
    numberToPx: true
  })
  const a = sx({
    borderRadius: 4,
    theme: {}
  })
  t.is(a.borderRadius, '4px')
})

test('style function returns unitless number values', t => {
  const sx = style({
    prop: 'borderRadius'
  })
  const a = sx({
    borderRadius: 4,
    theme: {}
  })
  t.is(a.borderRadius, 4)
})

// responsiveStyle
test('responsiveStyle returns a function', t => {
  const sx = responsiveStyle('order')
  t.is(typeof sx, 'function')
})

test('responsiveStyle‘s returned function returns a style object', t => {
  const order = responsiveStyle('order')
  const a = order({ order: 1 })
  t.deepEqual(a, { order: 1 })
})

test('responsiveStyle‘s returned function returns null', t => {
  const order = responsiveStyle('order')
  const a = order({ })
  t.is(a, null)
})

test('responsiveStyle allows property aliases', t => {
  const direction = responsiveStyle('flex-direction', 'direction')
  const a = direction({ direction: 'column' })
  t.deepEqual(a, {
    'flex-direction': 'column'
  })
})

test('responsiveStyle allows array values', t => {
  const direction = responsiveStyle('flex-direction', 'direction')
  const a = direction({ direction: [ 'column', null, 'row' ] })
  t.deepEqual(a, {
    'flex-direction': 'column',
    '@media screen and (min-width: 40em)': {
      'flex-direction': null
    },
    '@media screen and (min-width: 52em)': {
      'flex-direction': 'row',
    }
  })
})

test('responsiveStyle can be configured for boolean props', t => {
  const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
  const a = wrap({ wrap: true })
  t.deepEqual(a, {
    'flex-wrap': 'wrap'
  })
})

test('responsiveStyle boolean props handle arrays', t => {
  const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
  const a = wrap({ wrap: [ true, false ] })
  t.deepEqual(a, {
    'flex-wrap': 'wrap',
    '@media screen and (min-width: 40em)': {
      'flex-wrap': false
    }
  })
})

test('responsiveStyle accepts an object argument', t => {
  const direction = responsiveStyle({
    cssProperty: 'flexDirection',
    prop: 'direction'
  })
  const a = direction({ direction: [ 'column', 'row' ] })
  t.deepEqual(a, {
    'flexDirection': 'column',
    '@media screen and (min-width: 40em)': {
      'flexDirection': 'row'
    }
  })
})

test('responsiveStyle returns pixel values for numbers', t => {
  const radius = responsiveStyle({
    cssProperty: 'borderRadius',
    prop: 'radius',
    numberToPx: true
  })
  const a = radius({ radius: 4 })
  t.deepEqual(a, {
    borderRadius: '4px'
  })
})

test('responsiveStyle returns pixel values for number arrays', t => {
  const radius = responsiveStyle({
    cssProperty: 'borderRadius',
    prop: 'radius',
    numberToPx: true
  })
  const a = radius({ radius: [ 4, 5, 6 ] })
  t.deepEqual(a, {
    borderRadius: '4px',
    '@media screen and (min-width: 40em)': {
      borderRadius: '5px'
    },
    '@media screen and (min-width: 52em)': {
      borderRadius: '6px'
    }
  })
})

test('responsiveStyle returns unitless numbers', t => {
  const radius = responsiveStyle({
    cssProperty: 'borderRadius',
    prop: 'radius'
  })
  const a = radius({ radius: 4 })
  t.deepEqual(a, {
    borderRadius: 4
  })
})

test('responsiveStyle returns a theme value', t => {
  const sx = responsiveStyle({
    cssProperty: 'borderColor',
    key: 'colors',
  })
  const a = sx({
    theme,
    borderColor: [
      'blue',
      'green'
    ]
  })
  t.deepEqual(a, {
    borderColor: theme.colors.blue,
    '@media screen and (min-width: 32em)': {
      borderColor: theme.colors.green
    }
  })
})

test('responsiveStyle returns a theme number value in px', t => {
  const sx = responsiveStyle({
    cssProperty: 'borderRadius',
    key: 'radii',
    numberToPx: true
  })
  const a = sx({
    theme,
    borderRadius: [ 0, 1 ]
  })
  t.deepEqual(a, {
    borderRadius: theme.radii[0],
    '@media screen and (min-width: 32em)': {
      borderRadius: theme.radii[1],
    }
  })
})

test('psuedoStyle returns a function', t => {
  const hover = pseudoStyle('hover')
  const hoverStyle = pseudoStyle('hover')()
  t.is(typeof hover, 'function')
  t.is(typeof hoverStyle, 'function')
})

test('pseudoStyle returns a style object', t => {
  const hoverStyle = pseudoStyle('hover')({})
  const a = hoverStyle({
    hover: {
      color: 'tomato'
    }
  })
  t.deepEqual(a, {
    '&:hover': {
      color: 'tomato'
    }
  })
})

test('pseudoStyle uses theme values', t => {
  const hoverStyle = pseudoStyle('hover')({
    color: 'colors'
  })
  const a = hoverStyle({
    theme,
    hover: {
      color: 'blue'
    }
  })
  t.deepEqual(a, {
    '&:hover': {
      color: theme.colors.blue
    }
  })
})

test('pseudoStyle returns number pixel values', t => {
  const hoverStyle = pseudoStyle('hover')({
    numberToPx: {
      borderRadius: true
    }
  })
  const a = hoverStyle({
    hover: {
      borderRadius: 4
    }
  })
  t.deepEqual(a, {
    '&:hover': {
      borderRadius: '4px'
    }
  })
})

// theme
test('breakpoints can be configured with a theme', t => {
  const a = space({theme, m: [1, 2, 3, 4]})
  const [, b, c, d] = Object.keys(a)
  t.is(b, '@media screen and (min-width: 32em)')
  t.is(c, '@media screen and (min-width: 48em)')
  t.is(d, '@media screen and (min-width: 64em)')
})

// cleanElement
test('removes props defined with propTypes', t => {
  const Clean = cleanElement('div')
  Clean.propTypes = propTypes.textAlign
  const json = render(React.createElement(Clean, {
    align: 'center',
    id: 'beep',
    children: 'Hello'
  })).toJSON()
  t.is(json.props.align, undefined)
  t.is(json.props.id, 'beep')
  t.deepEqual(json.children, [ 'Hello' ])
})

test('does not remove props without propTypes', t => {
  const Clean = cleanElement('div')
  const json = render(React.createElement(Clean, {
    align: 'center',
    id: 'beep',
    children: 'Hello'
  })).toJSON()
  t.is(json.props.align, 'center')
  t.is(json.props.id, 'beep')
  t.deepEqual(json.children, [ 'Hello' ])
})

// removeProps
test('removeProps removes style props', t => {
  const a = removeProps({
    name: 'hello',
    type: 'text',
    value: 'Hi',
    m: 1,
    mt: 2,
    mr: 3,
    mb: 4,
    mx: 5,
    my: 6,
    p: 1,
    pt: 2,
    pr: 3,
    pb: 4,
    px: 5,
    py: 6,
    w: 1/2,
    width: 1/4,
    f: 4,
    fontSize: 5,
    color: 'tomato',
    bg: 'lime'
  })
  t.deepEqual(a, {
    name: 'hello',
    type: 'text',
    value: 'Hi',
  })
})

// textAlign
test('textAlign returns text-align', t => {
  const a = textAlign({ align: 'center' })
  t.deepEqual(a, { textAlign: 'center' })
})

// textAlign
test('textAlign returns text-align', t => {
  const a = textAlign({ align: 'center' })
  t.deepEqual(a, { textAlign: 'center' })
})

test('textAlign returns responsive text-align', t => {
  const a = textAlign({ align: [ 'center', 'left' ] })
  t.deepEqual(a, {
    textAlign: 'center',
    '@media screen and (min-width: 40em)': {
      textAlign: 'left',
    }
  })
})

// fontWeight
test('fontWeight returns fontWeight', t => {
  const a = fontWeight({ fontWeight: 'bold' })
  t.deepEqual(a, { fontWeight: 'bold' })
})

test('fontWeight returns a scalar style', t => {
  const a = fontWeight({
    theme: {
      fontWeights: [
        400, 600, 800
      ]
    },
    fontWeight: 2
  })
  t.deepEqual(a, { fontWeight: 800 })
})

test('alignItems returns a style', t => {
  const a = alignItems({ align: 'center' })
  t.deepEqual(a, { alignItems: 'center' })
})

test('justifyContent returns a style', t => {
  const a = justifyContent({ justify: 'center' })
  t.deepEqual(a, { justifyContent: 'center' })
})

test('flexWrap returns a style', t => {
  const a = flexWrap({ wrap: true })
  t.deepEqual(a, { flexWrap: 'wrap' })
})

test('flexDirection returns a style', t => {
  const a = flexDirection({ flexDirection: 'column' })
  t.deepEqual(a, { flexDirection: 'column' })
})


test('flex returns a style', t => {
  const a = flex({ flex: 'none' })
  t.deepEqual(a, { flex: 'none' })
})

test('alignSelf returns a style', t => {
  const a = alignSelf({ alignSelf: 'center' })
  t.deepEqual(a, { alignSelf: 'center' })
})

test('borderRadius returns borderRadius', t => {
  const a = borderRadius({ borderRadius: '4px' })
  t.deepEqual(a, { borderRadius: '4px' })
})

test('borderRadius returns a pixel value', t => {
  const a = borderRadius({ borderRadius: 4 })
  t.deepEqual(a, { borderRadius: '4px' })
})

test('borderRadius returns a pixel value from theme', t => {
  const a = borderRadius({
    theme,
    borderRadius: 0
  })
  t.deepEqual(a, { borderRadius: '2px' })
})

test('borderColor returns borderColor', t => {
  const a = borderColor({ borderColor: 'blue' })
  t.deepEqual(a, { borderColor: 'blue' })
})

test('borderColor returns borderColor', t => {
  const a = borderColor({ borderColor: 'blue' })
  t.deepEqual(a, { borderColor: 'blue' })
})

test('borderColor returns borderColor', t => {
  const a = borderColor({ theme, borderColor: 'gray.0' })
  t.deepEqual(a, { borderColor: theme.colors.gray[0] })
})

test('borderWidth returns borderWidth and borderStyle', t => {
  const a = borderWidth({ borderWidth: '2px' })
  t.deepEqual(a, {
    borderWidth: '2px',
    borderStyle: 'solid'
  })
})

test('borderWidth returns a pixel value', t => {
  const a = borderWidth({ borderWidth: 2 })
  t.deepEqual(a, {
    borderWidth: '2px',
    borderStyle: 'solid'
  })
})

test('borderWidth returns 0', t => {
  const a = borderWidth({ borderWidth: 0 })
  t.deepEqual(a, {
    borderWidth: '0px',
    borderStyle: 'solid'
  })
})

test('borderWidth returns null', t => {
  const a = borderWidth({})
  t.is(a, null)
})

test('borderWidth returns borderTopWidth and borderTopStyle', t => {
  const a = borderWidth({ borderWidth: '2px', borderTop: true })
  t.deepEqual(a, {
    borderTopWidth: '2px',
    borderTopStyle: 'solid'
  })
})

test('borderWidth returns borderRightWidth and borderRightStyle', t => {
  const a = borderWidth({ borderWidth: '2px', borderRight: true })
  t.deepEqual(a, {
    borderRightWidth: '2px',
    borderRightStyle: 'solid'
  })
})

test('borderWidth returns borderBottomWidth and borderBottomWidth', t => {
  const a = borderWidth({ borderWidth: '2px', borderBottom: true })
  t.deepEqual(a, {
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid'
  })
})

test('borderWidth returns borderLeftWidth and borderLeftStyle', t => {
  const a = borderWidth({ borderWidth: '2px', borderLeft: true })
  t.deepEqual(a, {
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid'
  })
})

test('borderWidth returns multiple directions', t => {
  const a = borderWidth({
    borderWidth: '2px',
    borderLeft: true,
    borderRight: true,
  })
  t.deepEqual(a, {
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightWidth: '2px',
    borderRightStyle: 'solid'
  })
})


test('boxShadow returns box-shadow styles', t => {
  const a = boxShadow({ boxShadow: '0 0 8px rgba(0, 0, 0, .125)' })
  t.deepEqual(a, { boxShadow: '0 0 8px rgba(0, 0, 0, .125)' })
})

test('boxShadow returns theme value', t => {
  const a = boxShadow({
    theme: {
      shadows: [
        '0 0 4px rgba(0, 0, 0, .125)',
        '0 0 8px rgba(0, 0, 0, .125)',
      ]
    },
    boxShadow: 1
  })
  t.deepEqual(a, { boxShadow: '0 0 8px rgba(0, 0, 0, .125)' })
})

test('hover returns a style object', t => {
  const a = hover({
    hover: {
      color: 'tomato'
    }
  })
  t.deepEqual(a, {
    '&:hover': {
      color: 'tomato'
    }
  })
})

test('hover uses theme values', t => {
  const a = hover({
    theme,
    hover: {
      color: 'blue',
      backgroundColor: 'green'
    }
  })
  t.deepEqual(a, {
    '&:hover': {
      color: theme.colors.blue,
      backgroundColor: theme.colors.green,
    }
  })
})

test('focus returns a style object', t => {
  const a = focus({
    focus: {
      color: 'tomato'
    }
  })
  t.deepEqual(a, {
    '&:focus': {
      color: 'tomato'
    }
  })
})

test('focus uses theme values', t => {
  const a = focus({
    theme,
    focus: {
      color: 'blue',
      backgroundColor: 'green'
    }
  })
  t.deepEqual(a, {
    '&:focus': {
      color: theme.colors.blue,
      backgroundColor: theme.colors.green,
    }
  })
})

test('active returns a style object', t => {
  const a = active({
    active: {
      color: 'tomato'
    }
  })
  t.deepEqual(a, {
    '&:active': {
      color: 'tomato'
    }
  })
})

test('active uses theme values', t => {
  const a = active({
    theme,
    active: {
      color: 'blue',
      backgroundColor: 'green'
    }
  })
  t.deepEqual(a, {
    '&:active': {
      color: theme.colors.blue,
      backgroundColor: theme.colors.green,
    }
  })
})

test('disabled returns a style object', t => {
  const a = disabled({
    disabledStyle: {
      color: 'tomato'
    }
  })
  t.deepEqual(a, {
    '&:disabled': {
      color: 'tomato'
    }
  })
})

test('disabled uses theme values', t => {
  const a = disabled({
    theme,
    disabledStyle: {
      color: 'blue',
      backgroundColor: 'green'
    }
  })
  t.deepEqual(a, {
    '&:disabled': {
      color: theme.colors.blue,
      backgroundColor: theme.colors.green,
    }
  })
})
