import { variant, textStyle, colorStyle } from '../src'
import { system, compose } from '@styled-system/core'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

const fontSize = system({ fontSize: true })
const color = system({ color: true })

test('variant returns style objects from theme', () => {
  const buttons = variant({ key: 'buttons' })
  const a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato',
        },
      },
    },
    variant: 'primary',
  })
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato',
  })
})

test('variant prop can be customized', () => {
  const buttons = variant({ key: 'buttons', prop: 'type' })
  const a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato',
        },
      },
    },
    type: 'primary',
  })
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato',
  })
})

test('variant aliases key and scale', () => {
  const buttons = variant({ scale: 'buttonSizes', prop: 'size' })
  const a = buttons({
    theme: {
      buttonSizes: [
        {
          fontSize: 20,
        },
      ],
    },
    size: 0,
  })
  expect(a).toEqual({
    fontSize: 20,
  })
})

test('variant styles can be declared inline', () => {
  const buttons = variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: 'tomato',
      },
    },
  })
  const buttonSizes = variant({
    prop: 'size',
    scale: [
      {
        p: 3,
      },
    ],
  })
  const a = buttons({
    variant: 'primary',
  })
  const b = buttonSizes({
    size: 0,
  })
  expect(a).toEqual({
    backgroundColor: 'tomato',
  })
  expect(b).toEqual({
    p: 3,
  })
})

test('variant can be composed', () => {
  const system = compose(
    variant({ key: 'typography' }),
    fontSize,
    color
  )
  const result = system({
    theme: {
      typography: {
        primary: {
          fontSize: '32px',
          color: '#fff',
        },
      },
    },
    variant: 'primary',
    color: '#111',
  })
  expect(result).toEqual({
    fontSize: '32px',
    color: '#111',
  })
})

test('textStyle prop returns theme.textStyles object', () => {
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
  expect(a).toEqual({
    fontWeight: 'bold',
    lineHeight: 1.25,
  })
})

test('colors prop returns theme.colorStyles object', () => {
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
  expect(a).toEqual({
    color: '#fff',
    backgroundColor: '#000',
  })
})
