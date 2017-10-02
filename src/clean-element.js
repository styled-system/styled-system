const React = require('react')

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

module.exports = cleanElement
