
const px = n => typeof n === 'number' ? n + 'px' : n
const neg = n => n < 0
const arr = n => Array.isArray(n) ? n : [ n ]
const idx = (p, obj) => p.reduce((a, b) => (a && a[b]) ? a[b] : null, obj)
const bp = props => idx([ 'theme', 'breakpoints' ], props)


module.exports = {
  px,
  neg,
  arr,
  idx,
  bp,
}
