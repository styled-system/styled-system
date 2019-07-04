import { system, compose } from '../src'

const theme = {
  colors: {
    primary: 'rebeccapurple',
    secondary: 'papayawhip',
  },
  fontSize: [0, 4, 8, 16],
}

const parser = system({
  color: {
    property: 'color',
    scale: 'colors',
  },
  fontSize: true,
})

test('uses default breakpoints', () => {
  const styles = parser({
    theme: theme,
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary'],
  })
  expect(styles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 40em)': {
      fontSize: 8,
    },
    '@media screen and (min-width: 52em)': {
      fontSize: 16,
      color: 'papayawhip',
    },
  })
})

test('uses dynamically provided breakpoints', () => {
  const styles = parser({
    theme: { ...theme, breakpoints: ['11em', '22em', '33em'] },
    fontSize: [1, 2, 3],
    color: ['primary', null, 'secondary'],
  })
  expect(styles).toEqual({
    color: 'rebeccapurple',
    fontSize: 4,
    '@media screen and (min-width: 11em)': {
      fontSize: 8,
    },
    '@media screen and (min-width: 22em)': {
      fontSize: 16,
      color: 'papayawhip',
    },
  })
})
