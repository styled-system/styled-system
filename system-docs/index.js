// from system propTypes only
const getPropTypes = (propTypes = {}) => {
  const metadata = Object.keys(propTypes).reduce((a, key) => {
    const type = propTypes[key]
    const meta = type.meta
    if (!meta || typeof meta !== 'object') return a
    a[key] = meta
    return a
  }, {})
  return metadata
}

const getTagName = ext => {
  const [ last ] = ext.slice(-1)
  return last || 'div'
}

// from system-specific `is` prop
const getExtensions = (Comp, ext = []) => {
  if (!Comp.defaultProps || !Comp.defaultProps.is) return ext
  const e = Comp.defaultProps.is
  if (typeof e !== 'function') return ext
  ext.push(e)
  // recursive - side effects
  getExtensions(e, ext)
  return ext
}

module.exports = Comp => {
  if (!Comp || typeof Comp !== 'function') return {}

  const metadata = Object.assign({}, Comp)
  metadata.propTypes = getPropTypes(Comp.propTypes)
  metadata.extensions = getExtensions(Comp)
  metadata.tagName = getTagName(metadata.extensions)
  return metadata
}

module.exports.getPropTypes = getPropTypes
module.exports.getExtensions = getExtensions
