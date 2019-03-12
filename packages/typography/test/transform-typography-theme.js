import lincoln from 'typography-theme-lincoln'
import transform from '../src/transform-typography-theme'

test('returns an object', () => {
  const config = transform(lincoln)
  expect(typeof config).toBe('object')
  expect(config).toMatchSnapshot()
})
