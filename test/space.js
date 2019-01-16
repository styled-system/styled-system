import test from 'ava'
import {
  space,
} from '../src/space'

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
