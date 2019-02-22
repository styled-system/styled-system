import React from 'react'
import styled, { css } from 'styled-components'

const colors = {
  lavender: '#cbd',
  orange: '#f60',
  cyan: '#8ee',
  navy: '#22a',
  purple: '#92e',
  lightgray: '#f0f6f6',
}

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

const Logo = ({
  size = 128,
}) =>
<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='-12 -12 24 24'
  width={size}
  height={size}
  style={{
    display: 'block',
  }}>
    <path d={D} fill={colors.orange} />
    <path d={E} fill={colors.cyan} />
  </svg>

  Logo.defaultProps = {
    ignore: true
  }

export default Logo
