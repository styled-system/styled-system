const omit = blacklist => props => {
  const next = {}
  for (let key in props) {
    if (blacklist[key]) continue
    next[key] = props[key]
  }
  return next
}

const noop = () => ''

const createMapper = ({
  breakpoints = [],
  props = [],
  getter = noop
} = {}) => {
  const blacklist = props.reduce((a, prop) => ({ ...a, [prop]: true }), {})
  const clean = omit(blacklist)

  const fn = props => {
    const classNames = []
    for (let prop in props) {
      if (!blacklist[prop]) continue
      const value = props[prop]
      if (value === null || value === undefined) continue
      if (!Array.isArray(value)) {
        classNames.push(
          getter({
            prop,
            value
          })
        )
        continue
      }

      value.forEach((val, i) => {
        if (val === null || val === undefined) return
        const breakpoint = breakpoints[i]
        classNames.push(
          getter({
            breakpoint,
            prop,
            value: val
          })
        )
      })
    }

    const next = clean(props)

    if (next.className) {
      next.className = [ next.className, ...classNames ].join(' ')
    } else {
      next.className = classNames.join(' ')
    }

    return next
  }

  return fn
}

export default createMapper
