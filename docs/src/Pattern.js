import React from 'react'
// Generative SVG patterns

const rand = (max = 128, min = 0) => Math.floor(Math.random() * (max - min) + min)

const diamond = [
  4, 0,
  8, 4,
  4, 8,
  0, 4
]

const rect = [
  0, 0,
  6, 0,
  6, 6,
  0, 6
]

const triangle = [
  5, 0,
  10, 8,
  0, 8
]

const pentagon = [
  5, 0,
  10, 3,
  8, 10,
  2, 10,
  0, 3
]

const shapes = [
  diamond,
  rect,
  triangle,
  pentagon,
]

const colors = [
  '#cbd',
  '#f83',
  '#f0f6f6',
  '#92e',
]

const tweak = arr => arr.map(n => n * (1 + Math.random()))

export default ({
  width = 1024,
  height = 768,
  bg = '#8ee',
  style = {},
  ...props
}) => {
  const blobs = Array.from({
    length: rand(64, 32)
  }).map((n, i) => {
    const x = rand(128)
    const y = rand(96)
    const si = rand(shapes.length)
    const shape = shapes[si]
    const color = colors[rand(colors.length)]
    const points = tweak(shape).join(',')
    const path = tweak(shape)
      .reduce((a, n, i) => {
        if (i % 2) {
          a[a.length - 1].push(n)
          return a
        } else {
          return [
            ...a,
            [n]
          ]
        }
      }, [])
      .map(([ x, y ], i, arr) => {
        if (i === 0) return [ 'M', x, y ].join(' ')
        if (i === 1) {
          // const [ x2, y2 ] = arr[i + 1]
          const [ x0, y0 ] = arr[i - 1]
          const x1 = x0 + Math.random()
          const y1 = y0 + Math.random()
          const x2 = x - Math.random()
          const y2 = y - Math.random()
          return [
            'C', x1, y1, x2, y2, x, y
          ].join(' ')
          // return [ 'L', x, y ].join(' ')
          // return [ 'Q', x, y, x, y ].join(' ')
        }
        const x1 = x - Math.random()
        const y1 = y - Math.random()
        return [ 'S', x1, y1, x, y ].join(' ')
        // return ['L', x, y ].join(' ')
        // return ['T', x, y ].join(' ')
      }).join(' ') + 'z'
    const skew = `skew(${rand(15, -15)})`
    return (
      <path
        key={i}
        d={path}
        transform={`translate(${x} ${y})`}
        fill={color}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
    )
    return (
      <g transform={`translate(${x} ${y})`}>
        <polygon
          key={i}
          transform={`${skew}`}
          points={points}
          fill={color}
          style={{
            mixBlendMode: 'multiply',
          }}
        />
      </g>
    )
  })

  return (
    <svg
      viewBox='0 0 128 96'
      width={width}
      height={height}
      {...props}>
      <rect
        width='128'
        height='96'
        fill={bg}
      />
      {blobs}
    </svg>
  )
}
