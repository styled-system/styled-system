import test from 'ava'
import space from '../src/space'

test('returns an array of style objects', t => {
  const styles = space({
    m: '4px'
  })
  t.deepEqual(styles, [
    { margin: '4px' }
  ])
})

test('returns 0 values', t => {
  const styles = space({ m: 0 })
  t.deepEqual(styles, [
    { margin: 0 }
  ])
})

test('returns negative pixel values', t => {
  const styles = space({ m: -16 })
  t.deepEqual(styles, [
    { margin: '-16px' }
  ])
})

test('returns negative em values', t => {
  const styles = space({ m: '-16em' })
  t.deepEqual(styles, [
    { margin: '-16em' }
  ])
})

test('returns negative theme values', t => {
  const styles = space({ theme: {
    space: [ 0, 4, 8 ]
  }, m: -2 })
  t.deepEqual(styles, [
    { margin: '-8px' }
  ])
})

test('returns responsive values', t => {
  const styles = space({
    m: [
      0, 8, 16
    ]
  })
  // TODO check if this needs to be flattened?
  t.deepEqual(styles, [
    [
      { margin: 0 },
      { '@media screen and (min-width: 40em)': { margin: '8px' } },
      { '@media screen and (min-width: 52em)': { margin: '16px' } },
    ]
  ])
})

test.todo('returns aliased values')
