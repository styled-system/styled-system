import React from 'react'
import styled, { css } from 'styled-components'
import {
  hex,
  inner
} from './Hex'

console.log(hex, inner)

const Logo = ({
  size = 128,
}) =>
<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='-16 -16 32 32'
  width={size}
  height={size}
  fill='none'
  style={{
    display: 'block',
    overflow: 'visible',
    stroke: 'currentColor'
  }}>
    <g>
      <path d={hex} />
      <path d={inner} strokeWidth='0.25'/>
    </g>
  </svg>

  Logo.defaultProps = {
    ignore: true
  }

export default Logo

/*
const radius = 12
const rad = a => Math.PI * a / 180
const round = n => Math.round(n * 1000) / 1000
const rx = (r, a) => round(r * Math.cos(rad(a)))
const ry = (r, a) => round(r * Math.sin(rad(a)))
const num = n => (n < 0.0000001) ? 0 : n

const offset = 90
const getPoints = length => Array.from({ length })
  .map((n, i) => {
    const a = 360 / length * i - offset
    const x = rx(radius, a)
    const y = ry(radius, a)
    return { x, y }
  })

const points = getPoints(6)

const [ a, b, c, d, e, f ] = points

const A = [
  'M', f.x, f.y,
  'L', a.x, a.y,
  'L', b.x, b.y,
  'L', c.x, c.y,
  'z'
].join(' ')

const B = [
  'M', b.x, b.y,
  'L', c.x, c.y,
  'L', d.x, d.y,
  'L', e.x, e.y,
  'z'
].join(' ')

const C = [
  'M', d.x, d.y,
  'L', e.x, e.y,
  'L', f.x, f.y,
  'L', a.x, a.y,
  'z'
].join(' ')

const D = [
  'M', a.x, a.y,
  'L', b.x, b.y,
  'L', 0, 0,
  'L', d.x, d.y,
  'L', e.x, e.y,
  'L', f.x, f.y,
  'z'
].join(' ')

const E = [
  'M', b.x, b.y,
  'L', c.x, c.y,
  'L', d.x, d.y,
  'L', 0, 0,
  'L', b.x, b.y,
  'z'
].join(' ')
*/

