import { hoc } from './styled-components'

const Button = hoc('a').extend`
  display: inline-flex;
  text-decoration: none;
  margin: 0;
  padding: 12px;
  color: white;
  background-color: #07c;
  border-radius: 6px;
  cursor: pointer;
`

export default Button
