// theme getter
const { get } = require('./util')
module.exports = (keys, fallback) => props => get(props.theme, keys, fallback)
