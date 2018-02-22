
import createMapper from './index'

export default createMapper({
  breakpoints: [ null, 'ns', 'm', 'l' ],
  props: [
    'ma', 'mt', 'mr', 'mb', 'ml', 'mh', 'mv',
    'pa', 'pt', 'pr', 'pb', 'pl', 'ph', 'pv',
    'w',
    'f', 'lh',
    'bg',
  ],
  getter: ({ breakpoint, prop, value }) => breakpoint
    ? [ prop, value, '-', breakpoint ].join('')
    : [ prop, value ].join('')
})
