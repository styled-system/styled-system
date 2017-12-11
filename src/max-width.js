const responsiveStyle = require('./responsive-style')

module.exports = responsiveStyle({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
  key: 'maxWidths',
  numberToPx: true
})
