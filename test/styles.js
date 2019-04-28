import test from 'ava'
import {
  space,
  color,
  width,
  fontSize,
  size,
  gridGap,
  gridRowGap,
  gridColumnGap,
  textStyle,
  colorStyle,
  borders,
} from '../src/index2'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('returns color values from theme', t => {
  const a = color({ theme, color: 'blue', bg: 'black' })
  t.deepEqual(a, { color: '#07c', backgroundColor: '#111' })
})

test('returns raw color values', t => {
  const a = color({
    theme,
    color: 'inherit',
    bg: 'tomato',
  })
  t.deepEqual(a, { color: 'inherit', backgroundColor: 'tomato' })
})

// Impossible to ensure, due to perf issues

// test('backgroundColor prop overrides bg prop', t => {
//   const a = color({
//     backgroundColor: 'tomato',
//     bg: 'blue',
//   })
//   t.deepEqual(a, [{ backgroundColor: 'tomato' }])
// })

// Useless, font-size default to pixels

// test('returns a pixel font-size', t => {
//   const a = fontSize({ fontSize: 48 })
//   t.deepEqual(a, { fontSize: '48px' })
// })

test('uses a default font-size scale', t => {
  const a = fontSize({ fontSize: 2 })
  t.deepEqual(a, { fontSize: 16 })
})

test('returns a string font-size', t => {
  const a = fontSize({ fontSize: '2em' })
  t.deepEqual(a, { fontSize: '2em' })
})

test('returns a percentage based width', t => {
  const a = width({ width: 1 / 2 })
  t.deepEqual(a, { width: '50%' })
})

test('returns a pixel based width', t => {
  const a = width({ width: 256 })
  t.deepEqual(a, { width: '256px' })
})

test('returns a string width', t => {
  const a = width({ width: 'auto' })
  t.deepEqual(a, { width: 'auto' })
})

test('returns an array of style objects', t => {
  const styles = space({
    m: '4px',
  })
  t.deepEqual(styles, { margin: '4px' })
})

test('returns 0 values', t => {
  const styles = space({ m: 0 })
  t.deepEqual(styles, { margin: 0 })
})

test('returns negative pixel values', t => {
  const styles = space({ m: -2 })
  t.deepEqual(styles, { margin: -8 })
})

test('returns negative em values', t => {
  const styles = space({ m: '-16em' })
  t.deepEqual(styles, { margin: '-16em' })
})

test('returns negative theme values', t => {
  const styles = space({
    theme: {
      space: [0, 4, 8],
    },
    m: -2,
  })
  t.deepEqual(styles, { margin: -8 })
})

test('returns positive theme values', t => {
  const styles = space({
    theme: {
      space: [0, '1em', '2em'],
    },
    m: 2,
  })
  t.deepEqual(styles, { margin: '2em' })
})

test('returns responsive values', t => {
  const styles = space({
    m: [0, 2, 3],
  })
  t.deepEqual(styles, {
    margin: 0,
    '@media screen and (min-width: 40em)': { margin: 8 },
    '@media screen and (min-width: 52em)': { margin: 16 },
  })
})

test('returns aliased values', t => {
  const styles = space({
    px: 2,
  })
  t.deepEqual(styles, { paddingLeft: 8, paddingRight: 8 })
})

test('returns string values from theme', t => {
  const styles = space({
    theme: {
      space: [0, '1em'],
    },
    padding: 1,
  })
  t.deepEqual(styles, { padding: '1em' })
})

test('returns negative string values from theme', t => {
  const styles = space({
    theme: {
      space: [0, '1em'],
    },
    margin: -1,
  })
  t.deepEqual(styles, { margin: '-1em' })
})

test('returns values from theme object', t => {
  const styles = space({
    theme: {
      space: { sm: 1 },
    },
    margin: 'sm',
  })

  t.deepEqual(styles, { margin: 1 })
})

test('pl prop sets paddingLeft', t => {
  const styles = space({ pl: 2 })
  t.deepEqual(styles, { paddingLeft: 8 })
})

test('pl prop sets paddingLeft 0', t => {
  const styles = space({ pl: 0 })
  t.deepEqual(styles, { paddingLeft: 0 })
})

// The order of props matter
test('px prop overrides pl prop', t => {
  const styles = space({
    pl: 1,
    px: 2,
  })
  t.deepEqual(styles, { paddingLeft: 8, paddingRight: 8 })
})

// The order of props matter
test('py prop overrides pb prop', t => {
  const styles = space({
    pb: 1,
    py: 2,
  })
  t.deepEqual(styles, { paddingTop: 8, paddingBottom: 8 })
})

// The order of props matter
test('mx prop overrides mr prop', t => {
  const styles = space({
    mr: 1,
    mx: 2,
  })
  t.deepEqual(styles, { marginLeft: 8, marginRight: 8 })
})

// The order of props matter
test('my prop overrides mt prop', t => {
  const styles = space({
    mt: 1,
    my: 2,
  })
  t.deepEqual(styles, { marginTop: 8, marginBottom: 8 })
})

// The order of props matter
test('margin overrides m prop', t => {
  const styles = space({
    m: 1,
    margin: 2,
  })
  t.deepEqual(styles, { margin: 8 })
})

// PropTypes are no longer included
// test('space includes propTypes', t => {
//   const { propTypes } = space
//   t.is(typeof propTypes, 'object')
//   t.is(typeof propTypes.m, 'function')
// })

test('size returns width and height', t => {
  const styles = size({
    size: 4,
  })
  t.deepEqual(styles, { width: '4px', height: '4px' })
})

// // grid
test('gridGap returns a scalar style', t => {
  const a = gridGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridGap: 3,
  })

  t.deepEqual(a, { gridGap: 8 })
})

test('gridGap uses the default scale', t => {
  const a = gridGap({
    theme: {},
    gridGap: 2,
  })

  t.deepEqual(a, { gridGap: 8 })
})

test('gridRowGap returns a scalar style', t => {
  const a = gridRowGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridRowGap: 3,
  })

  t.deepEqual(a, { gridRowGap: 8 })
})

test('gridRowGap uses the default scale', t => {
  const a = gridRowGap({
    theme: {},
    gridRowGap: 2,
  })

  t.deepEqual(a, { gridRowGap: 8 })
})

test('gridColumnGap returns a scalar style', t => {
  const a = gridColumnGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridColumnGap: 3,
  })

  t.deepEqual(a, { gridColumnGap: 8 })
})

test('gridColumnGap uses the default scale', t => {
  const a = gridColumnGap({
    theme: {},
    gridColumnGap: 2,
  })

  t.deepEqual(a, { gridColumnGap: 8 })
})

test('textStyle prop returns theme.textStyles object', t => {
  const a = textStyle({
    theme: {
      textStyles: {
        heading: {
          fontWeight: 'bold',
          lineHeight: 1.25,
        },
      },
    },
    textStyle: 'heading',
  })
  t.deepEqual(a, {
    fontWeight: 'bold',
    lineHeight: 1.25,
  })
})

test('colors prop returns theme.colorStyles object', t => {
  const a = colorStyle({
    theme: {
      colorStyles: {
        dark: {
          color: '#fff',
          backgroundColor: '#000',
        },
      },
    },
    colors: 'dark',
  })
  t.deepEqual(a, {
    color: '#fff',
    backgroundColor: '#000',
  })
})

test('borders prop returns correct sequence', t => {
  const a = borders({
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red',
  })
  t.deepEqual(a, {
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red',
  })
})
