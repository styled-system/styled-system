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

test.todo('returns 0 values')
test.todo('returns responsive values')
test.todo('returns aliased values')
