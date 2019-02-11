import React from 'react'
import styled, { css } from 'styled-components'

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

const style = css`
  opacity: 0.75;
  mix-blend-mode: multiply;
  animation-duration: 8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`

const colors = [
  '#f00',
  '#ff0',
  '#0f0',
  '#0ff',
  '#00f',
  '#f0f'
]

// keyframes are broken in sc v4
const animations = `
  @keyframes path-a {
    0%  { fill: ${colors[0]} }
    16% { fill: ${colors[1]} }
    32% { fill: ${colors[2]} }
    48% { fill: ${colors[3]} }
    64% { fill: ${colors[4]} }
    80% { fill: ${colors[5]} }
    96% { fill: ${colors[0]} }
  }
  @keyframes path-b {
    0%  { fill: ${colors[2]} }
    16% { fill: ${colors[3]} }
    32% { fill: ${colors[4]} }
    48% { fill: ${colors[5]} }
    64% { fill: ${colors[0]} }
    80% { fill: ${colors[1]} }
    96% { fill: ${colors[2]} }
  }
  @keyframes path-c {
    0%  { fill: ${colors[4]} }
    16% { fill: ${colors[5]} }
    32% { fill: ${colors[0]} }
    48% { fill: ${colors[1]} }
    64% { fill: ${colors[2]} }
    80% { fill: ${colors[3]} }
    96% { fill: ${colors[4]} }
  }
`

const PathA = styled('path')`
  ${style}
  fill: ${colors[0]};
  animation-name: path-a;
`

const PathB = styled('path')`
  ${style}
  fill: ${colors[2]};
  animation-delay: .5s;
  animation-name: path-b;
`

const PathC = styled('path')`
  ${style}
  fill: ${colors[4]};
  animation-delay: 1s;
  animation-name: path-c;
`

const _Logo = ({
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
    <style
      dangerouslySetInnerHTML={{
        __html: animations
      }}
    />
    <PathA d={A} />
    <PathB d={B} />
    <PathC d={C} />
  </svg>
)

const Logo = ({
  size = 256,
}) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-12 -12 24 24'
    width={size}
    height={size}
    style={{
      display: 'block',
    }}>
    <path d={D} fill='black' />
    <path d={E} fill='#cbd' />
  </svg>

Logo.defaultProps = {
  ignore: true
}

export default Logo
