// next version of complexStyle
import { propTypes, idx } from './util'

export default ({
  key,
  prop = 'variant'
}) => {
  const fn = (props) => idx(props.theme, key, props[prop]) || null
  fn.propTypes = {
    [prop]: propTypes.numberOrString
  }
  return fn
}
