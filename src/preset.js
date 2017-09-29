const { merge } = require('./util')
module.exports = (fn, fallback = {}) => props => fn(merge(fallback, props))
