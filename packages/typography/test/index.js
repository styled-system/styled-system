import React from 'react'
import TestRenderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import Typography from '../src'
import Future from '../src/future'

expect.addSnapshotSerializer(serializer)

const renderJSON = el => TestRenderer.create(el).toJSON()

test('renders', () => {
  const json = renderJSON(<Typography />)
  expect(json).toMatchSnapshot()
})

test('renders with props', () => {
  const json = renderJSON(
    <Typography
      fontFamily='fantasy'
      lineHeight='2'
      color='tomato'
    />
  )
  expect(json).toMatchSnapshot()
})

test('renders with element props', () => {
  const json = renderJSON(
    <Typography
      h1={{
        fontSize: 3,
        fontWeight: 900,
      }}
    />
  )
  expect(json).toMatchSnapshot()
})

// seems to fail serializer
test.skip('renders with responsive element props', () => {
  const json = renderJSON(
    <Typography
      h1={{
        fontSize: [3, 4, 5],
        fontWeight: 900,
        my: [3, 4],
        color: 'tomato'
      }}
    />
  )
  expect(json).toMatchSnapshot()
})

test.skip('Future theme renders', () => {
  const json = renderJSON(<Future />)
  expect(json).toMatchSnapshot()
})
