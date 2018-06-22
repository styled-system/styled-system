import createMapper from './index'

export default createMapper({
  breakpoints: [ null, 'sm', 'md', 'lg' ],
  props: [
    'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
    'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    'h', 'bg',
  ],
  getter: ({ breakpoint, prop, value }) => breakpoint
    ? [ breakpoint, '-', prop, value ].join('')
    : [ prop, value ].join('')
})
