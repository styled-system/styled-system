import { hoc } from './styled-components'

const bold = props => props.bold ? `font-weight:bold;` : null

const Text = hoc('p').extend`
  margin: 0;
`

export default Text
