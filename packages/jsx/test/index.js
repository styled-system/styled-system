/** @jsx jsx */
import jsx from '../src'
import renderer from 'react-test-renderer'
import serializer, { matchers } from 'jest-emotion'
import { ThemeContext } from '@emotion/core'

expect.addSnapshotSerializer(serializer)
expect.extend(matchers)

const renderJSON = el => renderer.create(el).toJSON()

const theme = {
  colors: {
    primary: '#609',
  },
}

test('renders with styles', () => {
  const json = renderJSON(
    <div
      css={{
        color: 'tomato',
      }}
    />
  )
  expect(json).toHaveStyleRule('color', 'tomato')
})

test('renders with responsive styles', () => {
  const json = renderJSON(
    <div
      css={{
        padding: [1, 2, 3],
      }}
    />
  )
  expect(json).toHaveStyleRule('padding', '4px')
  expect(json).toHaveStyleRule('padding', '8px', {
    media: 'screen and (min-width: 40em)',
  })
  expect(json).toHaveStyleRule('padding', '16px', {
    media: 'screen and (min-width: 52em)',
  })
})

test('renders with shorthand props', () => {
  const json = renderJSON(
    <div
      css={{
        m: 2,
        p: 3,
        bg: 'tomato',
      }}
    />
  )
  expect(json).toHaveStyleRule('margin', '8px')
  expect(json).toHaveStyleRule('padding', '16px')
  expect(json).toHaveStyleRule('background-color', 'tomato')
})

test('renders with theme values', () => {
  const json = renderJSON(
    <ThemeContext.Provider value={theme}>
      <div
        css={{
          color: 'primary',
        }}
      />
    </ThemeContext.Provider>
  )
  expect(json).toHaveStyleRule('color', '#609')
})

test('renders nested styles', () => {
  const json = renderJSON(
    <div
      css={{
        '&:hover': {
          color: 'tomato',
        },
      }}
    />
  )
  expect(json).toHaveStyleRule('color', 'tomato', {
    target: ':hover',
  })
})

test('renders bi-directional props', () => {
  const json = renderJSON(
    <div
      css={{
        px: 2,
        py: 3,
        my: 4,
      }}
    />
  )
  expect(json).toHaveStyleRule('padding-left', '8px')
  expect(json).toHaveStyleRule('padding-right', '8px')
  expect(json).toHaveStyleRule('padding-top', '16px')
  expect(json).toHaveStyleRule('padding-bottom', '16px')
  expect(json).toHaveStyleRule('margin-top', '32px')
  expect(json).toHaveStyleRule('margin-bottom', '32px')
})

test('renders with functional arguments', () => {
  const json = renderJSON(
    <div
      css={t => ({
        color: 'purple',
      })}
    />
  )
  expect(json).toHaveStyleRule('color', 'purple')
})

test('renders without props', () => {
  const json = renderJSON(<div />)
  expect(json.type).toBe('div')
  expect(json.props).toEqual({})
})

test('renders functional values', () => {
  const json = renderJSON(
    <ThemeContext.Provider value={theme}>
      <div
        css={{
          border: t => `1px solid ${t.colors.primary}`,
        }}
      />
    </ThemeContext.Provider>
  )
  expect(json).toHaveStyleRule('border', '1px solid #609')
})

test('picks up fallback theme values for non-standard properties', () => {
  const json = renderJSON(
    <ThemeContext.Provider
      value={{
        backgroundImage: {
          cool: 'linear-gradient(cyan, magenta)',
        },
      }}
    >
      <div
        css={{
          backgroundImage: 'cool',
        }}
      />
    </ThemeContext.Provider>
  )
  expect(json).toHaveStyleRule(
    'background-image',
    'linear-gradient(cyan,magenta)'
  )
})
