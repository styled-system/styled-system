import style from './style'

const getDirectionProp = template => dir => template(dir)
const getWidthProp = getDirectionProp(dir => `border${dir}Width`)
const getStyleProp = getDirectionProp(dir => `border${dir}Style`)

const getDirections = props => {
  const directions = []
  if (props.borderTop) directions.push('Top')
  if (props.borderRight) directions.push('Right')
  if (props.borderBottom) directions.push('Bottom')
  if (props.borderLeft) directions.push('Left')
  return directions.length ? directions : null
}

export default props => {
  const directions = getDirections(props)
  const borderWidths = directions
    ? directions.map(dir => style({
      key: 'borderWidths',
      prop: 'borderWidth',
      cssProperty: getWidthProp(dir),
      numberToPx: true
    })(props))
    : [
      style({
        key: 'borderWidths',
        prop: 'borderWidth',
        numberToPx: true
      })(props)
    ]

  const borderStyles = directions
    ? directions.map(dir => ({
      [getStyleProp(dir)]: 'solid'
    }))
    : [ { borderStyle: 'solid' } ]

  return props.borderWidth || props.borderWidth === 0
    ? Object.assign({}, ...borderWidths, ...borderStyles)
    : null
}
