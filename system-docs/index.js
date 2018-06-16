module.exports = propTypes => {
  const metadata = Object.keys(propTypes).reduce((a, key) => {
    const type = propTypes[key]
    const meta = type.meta
    if (!meta || typeof meta !== 'object') return a
    a[key] = meta
    return a
  }, {})
  return metadata
}
