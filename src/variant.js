import { idx } from './util'

export default ({ key }) => (props) =>
  idx(props.theme, key, props.variant) || null
