import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import tag from './index'

test('renders', t => {
  const json = render(React.createElement(tag)).toJSON()
  t.is(json.type, 'div')
  t.snapshot(json)
})

test('omits props', t => {
  const json = render(React.createElement(tag, {
    id: 'hello',
    m: 2,
    px: 3,
    color: 'blue'
  })).toJSON()
  t.is(json.props.m, undefined)
  t.is(json.props.px, undefined)
  t.is(json.props.blue, undefined)
  t.is(json.props.id, 'hello')
})

test('exports html tags', t => {
  const h1 = render(React.createElement(tag.h1)).toJSON()
  const header = render(React.createElement(tag.header)).toJSON()
  t.is(h1.type, 'h1')
  t.is(header.type, 'header')
})

test('exported html tags only omit blacklisted props', t => {
  const json = render(React.createElement(tag.h1, {
    id: 'hello',
    m: 2,
    px: 3,
    color: 'blue'
  })).toJSON()
  t.is(json.props.m, undefined)
  t.is(json.props.px, undefined)
  t.is(json.props.blue, undefined)
  t.is(json.props.id, 'hello')
})
