import themes from '@rebass/mdx/themes'
import merge from 'lodash.merge'

export default merge({}, themes.base, {
  colors: {
    lightgray: '#f6f6ff',
  },
  styles: {
    code: {
      color: 'secondary',
    },
    inlineCode: {
      color: 'secondary',
    },
  }
})
