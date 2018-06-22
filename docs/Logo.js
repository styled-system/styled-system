import React from 'react'
import styled, { keyframes } from 'styled-components'

const radius = 11
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

const sx = {
  opacity: 0.75,
  WebkitMixBlendMode: 'multiply',
  animationDuration: '8s',
  animationTimingFuction: 'ease-in-out',
  animationIterationCount: 'infinite',
}

const colors = [
  '#f00',
  '#ff0',
  '#0f0',
  '#0ff',
  '#00f',
  '#f0f'
]

const animations = {
  a: keyframes([], {
    '0%':  { fill: colors[0] },
    '16%': { fill: colors[1] },
    '32%': { fill: colors[2] },
    '48%': { fill: colors[3] },
    '64%': { fill: colors[4] },
    '80%': { fill: colors[5] },
    '96%': { fill: colors[0] },
  }),
  b: keyframes([], {
    '0%':  { fill: colors[2] },
    '16%': { fill: colors[3] },
    '32%': { fill: colors[4] },
    '48%': { fill: colors[5] },
    '64%': { fill: colors[0] },
    '80%': { fill: colors[1] },
    '96%': { fill: colors[2] },
  }),
  c: keyframes([], {
    '0%':  { fill: colors[4] },
    '16%': { fill: colors[5] },
    '32%': { fill: colors[0] },
    '48%': { fill: colors[1] },
    '64%': { fill: colors[2] },
    '80%': { fill: colors[3] },
    '96%': { fill: colors[4] },
  })
}

const Path = {
  A: styled(props =>
    <path
      {...props}
      d={A}
      style={{
        // fill: '#f00',
        // opacity: 0.75,
        // mixBlendMode: 'multiply'
      }}
    />
  )([], sx, {
    // fill: '#f00',
    animationName: animations.a
  }),
  B: styled(props =>
    <path
      {...props}
      d={B}
      style={{
        // fill: '#0f0',
        // opacity: 0.75,
        // mixBlendMode: 'multiply'
      }}
    />
  )([], sx, {
    fill: '#0f0',
    animationDelay: '.5s',
    animationName: animations.b
  }),
  C: styled(props =>
    <path
      {...props}
      d={C}
      style={{
        // fill: '#00f',
        // opacity: 0.75,
        // mixBlendMode: 'multiply'
      }}
    />
  )([], sx, {
    fill: '#00f',
    animationDelay: '1s',
    animationName: animations.c
  }),
}

const Logo = ({
  size = 256,
  blend = 'multiply',
  styles // for scrs svg output
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-12 -12 24 24'
    width={size}
    height={size}
    style={{
      WebkitMixBlendMode: blend,
      mixBlendMode: blend,
    }}
  >
    {styles}
    <Path.A />
    <Path.B />
    <Path.C />
  </svg>
)

Logo.defaultProps = {
  ignore: true
}

export default Logo
