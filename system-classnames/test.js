import test from 'ava'
import createMapper from './src'

test('returns a props map function', t => {
  const map = createMapper()
  t.is(typeof map, 'function')
})

test('removes blacklisted props', t => {
  const map = createMapper({
    props: [ 'm', 'mx' ]
  })
  const props = map({ m: 2, mx: 'auto', id: 'hi' })
  t.is(props.m, undefined)
  t.is(props.mx, undefined)
  t.is(props.id, 'hi')
})

test('adds a className prop', t => {
  const map = createMapper({
    props: [ 'm' ]
  })
  const props = map({})
  t.is(typeof props.className, 'string')
})

test('uses the getter to create classNames', t => {
  const map = createMapper({
    props: [ 'm' ],
    getter: () => 'beep'
  })
  const props = map({ m: 2 })
  t.is(props.className, 'beep')
})

test('array values call the getter for each breakpoint', t => {
  const map = createMapper({
    breakpoints: [ null, 'sm', 'md', 'lg' ],
    props: [ 'm' ],
    getter: ({ breakpoint, prop, value }) => breakpoint
      ? [ prop, breakpoint, value ].join('-')
      : [ prop, value ].join('-')
  })
  const props = map({ m: [ 2, 3, 4 ] })
  t.is(props.className, 'm-2 m-sm-3 m-md-4')
})

test('keeps className prop when creating new classNames', t => {
  const map = createMapper({
    props: [ 'm' ],
    getter: () => 'beep'
  })
  const props = map({ className: 'hello', m: 2 })
  t.is(props.className, 'hello beep')
})

test('ignores null values', t => {
  const map = createMapper({
    breakpoints: [ 'sm', 'md', 'lg' ],
    props: [ 'm', 'p' ],
    getter: ({ breakpoint, prop, value }) => [
      breakpoint, prop, value
    ].join('')
  })
  const props = map({ p: null, m: [ 1, null, 2 ] })
  t.is(props.className, 'smm1 lgm2')
})
