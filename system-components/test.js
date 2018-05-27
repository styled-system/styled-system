import test from 'ava'
import styled, { css as scCSS, isStyledComponent } from 'styled-components'
import {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
} from 'styled-components'
import { propTypes } from 'styled-system'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { isDOMComponent, isCompositeComponent } from 'react-dom/test-utils'
import system, { createSystem } from './src'

// 😎
const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS

const getCSS = () => StyleSheet.instance.toReactElements()
  .map(el => el.props.dangerouslySetInnerHTML.__html)
  .join('')

test.afterEach(() => {
  StyleSheet.reset()
})

test('returns a React component', t => {
  const Box = system()
  const box = render(<Box />).getInstance()
  t.true(isCompositeComponent(box))
})

test('returns a styled-component', t => {
  const Box = system()
  t.is(typeof Box, 'function')
  t.is(typeof Box.styledComponentId, 'string')
  // t.true(isStyledComponent(Box)) // not yet published
})

test('Adds defaultProps', t => {
  const Box = system({
    p: 2,
    bg: 'tomato'
  })
  t.deepEqual(Box.defaultProps, {
    p: 2,
    bg: 'tomato'
  })
})

test('adds propTypes', t => {
  const Box = system({
    p: 2,
    bg: 'tomato'
  })
  t.deepEqual(Box.propTypes, {
    ...propTypes.space,
    ...propTypes.color,
  })
})

test('adds styled-system functions based on default props', t => {
  const Box = system({
    p: 3,
    bg: 'tomato'
  })
  const json = render(<Box />).toJSON()
  const css = getCSS()
  t.regex(css, /padding:16px/)
  t.regex(css, /background-color:tomato/)
})

test('accepts system key arguments', t => {
  const Box = system('space', 'color')
  t.is(typeof Box.propTypes.m, 'function')
  t.is(typeof Box.propTypes.color, 'function')
  t.is(typeof Box.propTypes.bg, 'function')
})

test('ignores nonexistant function keys', t => {
  const Box = system('foo', 'bar')
  t.is(Box.propsTypes, undefined)
})

test('accepts custom function arguments', t => {
  const big = props => props.big ? { padding: '64px' } : null
  const Box = system(big)
  const json = render(<Box big />).toJSON()
  const css = getCSS()
  t.regex(css, /padding:64px/)
})

test('removes styled-system props from underlying DOM element', t => {
  const Box = system({
    color: 'blue'
  })
  const json = render(<Box />).toJSON()
  t.is(json.props.color, undefined)
  t.is(typeof json.props.className, 'string')
})

test('removes blacklist props from underlying DOM element', t => {
  const Box = system({
    blacklist: ['customProp']
  })
  const json = render(<Box />).toJSON()
  t.is(json.props.customProp, undefined)
})

test('accepts an `is` prop to change the underlying DOM element', t => {
  const Box = system({
    p: 2
  })
  const json = render(<Box is='h1' />).toJSON()
  t.is(json.type, 'h1')
})

test('accepts a style function argument', t => {
  const Box = system(props => `color:${props.color};`)
  const json = render(<Box color='magenta' />).toJSON()
  const css = getCSS()
  t.regex(css, /color:magenta/)
})

test('accepts theme as a default prop', t => {
  const theme = {
    colors: {
      blue: '#0af'
    }
  }
  const Box = system({ color: 'blue', theme })
  const json = render(<Box />).toJSON()
  const css = getCSS()
  t.regex(css, /color:#0af/)
})

test('passes css string arguments', t => {
  const Box = system('color:cyan;')
  const json = render(<Box />).toJSON()
  const css = getCSS()
  t.regex(css, /color:cyan;/)
})

test('works with the styled-component `css` helper', t => {
  const Box = system(scCSS`
    color: ${props => props.color};
  `)
  const json = render(<Box color='yellow' />).toJSON()
  const css = getCSS()
  t.regex(css, /color:yellow/)
})

test('defaultProps are passed to extended components', t => {
  const Box = system({
    p: 2,
    bg: 'tomato'
  }, 'space', 'color')
  const ExtendedBox = system({ is: Box })
  const json = render(<ExtendedBox />).toJSON()
  const css = getCSS()
  t.regex(css, /background-color:tomato/)
})

test('creates system interface form `styled` function', t => {
  const mySystem = createSystem(styled)
  const Box = mySystem({
    p: 2,
    bg: 'hotpink'
  }, 'space', 'color')
  const json = render(<Box />).toJSON()
  const css = getCSS()
  t.regex(css, /background-color:hotpink/)
})
