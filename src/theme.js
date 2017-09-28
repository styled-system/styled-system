// theme getter
const get = require('lodash.get')
module.exports = (keys, fallback) => props => get(props.theme, keys, fallback)
