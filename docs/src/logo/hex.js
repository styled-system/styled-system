import React from 'react'

export const hex = `
  M0 -16
  L-14 -8
  L -14 8
  L 0 16
  L 14 8
  L 14 -8
  L 0 -16
  z
`
export const inner = `
M0 -16
L 0 0
M-14 8
L0 0
L14 8
`

const pattern = (
  <pattern
    id="hex"
    patternUnits="userSpaceOnUse"
    patternTransform="translate(-3.5 6)"
    viewBox="-14 -16 28 48"
    width="7"
    height="12"
  >
    <g fill="none" strokeWidth={1} stroke="currentcolor">
      <path d={hex} />
      <path d={hex} transform="translate(14 24)" />
      <g strokeWidth={1} opacity="0.5">
        <path d={inner} />
        <path d={inner} transform="translate(14 24)" />
        <path d={inner} transform="translate(-14 24)" />
      </g>
    </g>
  </pattern>
)

export default ({ width = 1024, height = 512 }) => (
  <div
    style={{
      textAlign: 'center',
      overflow: 'hidden',
    }}
  >
    <svg
      viewBox="0 0 126 48"
      width={width}
      height={height}
      style={{
        overflow: 'visible',
      }}
    >
      <defs>{pattern}</defs>
      <rect width="126" height="48" fill="url(#hex)" />
    </svg>
  </div>
)
