const test = require('ava')
const {
  propTypes,
  width,
  fontFamily,
  hover,
  textStyle
} = require('styled-system')
const parse = require('./index')

test('returns an object', t => {
  const meta = parse(width.propTypes)
  t.is(typeof meta, 'object')
})

test('returns metadata for propTypes', t => {
  const meta = parse(width.propTypes)
  t.is(typeof meta.width, 'object')
  t.is(meta.width.prop, 'width')
})

test('returns metadata for multiple propTypes', t => {
  const meta = parse(Object.assign({}, textStyle.propTypes, fontFamily.propTypes))
  t.deepEqual(meta, {
    textStyle: {
      prop: 'textStyle',
      themeKey: 'textStyles',
      complex: true,
      description: undefined
    },
    fontFamily: {
      prop: 'fontFamily',
      themeKey: 'fonts',
      description: undefined
    }
  })
})

test('ignores non-styled-system propTypes', t => {
  const meta = parse({
    primary: () => {}
  })
  t.deepEqual(meta, {})
})

