// theme getter
const { get } = require('dot-prop')
module.exports = (keys, fallback) => props => get(props.theme, keys, fallback)
