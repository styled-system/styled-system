import React from 'react'

const cleanElement = Component => {
  const Cleaned = props => {
    const next = {}
    const keys = Object.keys(Cleaned.propTypes || {})
    for (let key in props) {
      if (keys.includes(key)) continue
      next[key] = props[key]
    }

    return React.createElement(Component, next)
  }

  return Cleaned
}

export default cleanElement
