import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import bootstrap from '../src/bootstrap@4.2'

const Box = props => <div {...bootstrap(props)} />

test('basic use-case', t => {
    const json = render(<Box m={[2, 3]} p={4} border/>).toJSON()
    t.deepEqual(json.props, {className:'m-2 m-sm-3 p-4 border'})
})

test('warning for using array notation where it is not applicable', t => {
    const warn = console.warn;
    const warnings = []
    console.warn = (warning) => warnings.push(warning)
    const json = render(<Box bg={['primary', 'secondary']} />).toJSON()
    t.deepEqual(json.props, {className: 'bg-primary bg-sm-secondary'})
    t.is(warnings.length, 1)
    t.deepEqual(warnings[0].message, 'The prop "bg" does not support breakpoints, do not use the array notation.')
    console.warn = warn
})

test('false valued props', t => {
    const json = render(<Box invisible={false} />).toJSON()
    t.deepEqual(json.props, {className: ''})
})

test('implicit values', t => {
    const json = render(<Box visible />).toJSON()
    t.deepEqual(json.props, {className: 'visible'})
})

test('2 classes with the same prop name', t => {
    const json = render(<Box border='primary' />).toJSON()
    t.deepEqual(json.props, {className: 'border border-primary'})
})

test('prop with 2 values', t => {
    const json = render(<Box d='flex' flex='row wrap' />).toJSON()
    t.deepEqual(json.props, {className: 'd-flex flex-row flex-wrap'})
})

test('camel case to snake case', t => {
    const json = render(<Box borderTop />).toJSON()
    t.deepEqual(json.props, {className: 'border-top'})
})