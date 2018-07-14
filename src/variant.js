import { propTypes, get } from './util'

export default ({
  key,
  prop = 'variant'
}) => {
  const fn = (props) => get(props.theme, key, props[prop]) || null
  fn.propTypes = {
    [prop]: propTypes.numberOrString
  }
  return fn
}
