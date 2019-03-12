import typography, { themes } from '../src'

test('returns a styles object', () => {
  const styles = typography({
    theme: {
      typography: themes.future
    }
  })
  expect(styles).toMatchSnapshot()
})
