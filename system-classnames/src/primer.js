import createMapper from './index'

export default createMapper({
  breakpoints: [ null, 'sm', 'md', 'lg', 'xl' ],
  props: [
    'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
    'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    'text', 'bg', 'border', 'rounded', 'h', 'f'
  ],
  getter: ({ breakpoint, prop, value }) => breakpoint
    ? [ prop, breakpoint, value ].join('-')
    : [ prop, value ].join('-')
})
