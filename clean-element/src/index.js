import React from 'react'

export default Component => {
  return class Cleaned extends React.Component {
    render() {
      const next = {}
      const keys = Object.keys(Cleaned.propTypes || {})
      for (let key in this.props) {
        if (keys.includes(key)) continue
        next[key] = this.props[key]
      }

      console.log(next)
      console.log(keys)

      return React.createElement(Component, next)
    }
  }
}
