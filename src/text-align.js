const responsiveStyle = require('./responsive-style')

// module.exports = style({ prop: 'align', cssProperty: 'textAlign' })
// todo: refactor responsiveStyle
// module.exports = responsiveStyle({ prop: 'align', cssProperty: 'textAlign' })
module.exports = responsiveStyle('textAlign', 'align')
