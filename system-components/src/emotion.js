import styled from 'react-emotion'
import System from './System'

const create = new System({
  createComponent: type => (...args) => styled(type)(...args)
})

export default create
