import createMapper from './index'

const breakpoints = [ null, 'sm', 'md', 'lg', 'xl' ]
const propsSupportingBreakpoints = [
  'col', 'order', 'offset',
  'd',

  'flex',
  // flex-row and flex-wrap can be used at the same time
  // flex=['row wrap']

  'justifyContent', 'alignItems', 'alignContent', 'alignSelf',
  'float',

  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',

  'text', // breakpoints supported supported for: left right center
]
const propsWithDuplicatedClassNames = ['embedResponsive', 'border']
const otherUtilityProps = [
  'bg',
  'borderTop', 'borderRight', 'borderBottom', 'borderLeft',
  'rounded', 'roundedTop', 'roundedRight', 'roundedBottom', 'roundedLeft', 'roundedCircle', 'roundedPill',
  'clearfix',
  'dPrint',
  'overflow',
  'position', 'fixed', 'sticky',
  'srOnly', 'srOnlyFocusable',
  'shadow',
  'w', 'h', 'mw', 'mh', 'minVw', 'minVh', 'vw', 'vh',
  'align',
  'visible', 'invisible'
]

const className = ({kebabProp, breakpoint, value}) =>
  value
    .toString()
    .split(' ')
    .map(value =>
      [
        kebabProp,
        breakpoint,
        value === 'true' ? undefined : value
      ]
      .filter(Boolean)
      .join('-')
    )
    .join(' ')

const camelToKebab = _ => _.replace(/([A-Z])/g, $1 => "-" + $1.toLowerCase())

export default createMapper({
  breakpoints,
  props: [
    ...propsSupportingBreakpoints,
    ...propsWithDuplicatedClassNames,
    ...otherUtilityProps
  ],
  getter: ({ breakpoint, prop, value }) => {
    if (breakpoint && !propsSupportingBreakpoints.includes(prop)) {
      console.warn(new Error(`The prop "${prop}" does not support breakpoints, do not use the array notation.`))
    }
    if (value === false) {
      return ''
    }
    const kebabProp = camelToKebab(prop)
    if (propsWithDuplicatedClassNames.includes(prop) && value !== true) {
      return kebabProp + ' ' + className({kebabProp, value})
    }
    return className({kebabProp, breakpoint, value})
  }
})
