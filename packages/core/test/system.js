import { system } from '../src'

test('returns a style parser', () => {
  const parser = system({
    color: true,
    backgroundColor: {
      property: 'backgroundColor',
      scale: 'colors',
    },
    mx: {
      scale: 'space',
      properties: [
        'marginLeft',
        'marginRight',
      ]
    }
  })
  expect(typeof parser).toBe('function')
  const styles = parser({
    theme: {
      space: [ 0, 4, 8, 16, 32 ],
      colors: {
        primary: 'rebeccapurple',
      }
    },
    color: 'tomato',
    backgroundColor: 'primary',
    mx: [ 2, 3, 4 ],
  })
  expect(styles).toEqual({
    color: 'tomato',
    backgroundColor: 'rebeccapurple',
    marginLeft: 8,
    marginRight: 8,
    '@media screen and (min-width: 40em)': {
      marginLeft: 16,
      marginRight: 16,
    },
    '@media screen and (min-width: 52em)': {
      marginLeft: 32,
      marginRight: 32,
    },
  })
})

test('merges multiple responsive styles', () => {
  const parser = system({
    margin: true,
    padding: true,
    width: true,
  })
  const styles = parser({
    margin: [ 0, 4, 8 ],
    padding: [ 16, 32, 64 ],
    width: [ '100%', '50%' ],
  })
  expect(styles).toEqual({
    margin: 0,
    padding: 16,
    width: '100%',
    '@media screen and (min-width: 40em)': {
      margin: 4,
      padding: 32,
      width: '50%',
    },
    '@media screen and (min-width: 52em)': {
      margin: 8,
      padding: 64,
    },
  })
})
