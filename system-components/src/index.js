import styled from 'styled-components'
import System from './System'

const create = new System({
  createComponent: type => (...args) => styled(type)([], ...args)
})

export default create
