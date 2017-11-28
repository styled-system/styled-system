// theme getter
import { get } from './util'
export default (keys, fallback) => props => get(props.theme, keys, fallback)
