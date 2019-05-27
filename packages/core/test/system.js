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
