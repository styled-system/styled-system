import styled from 'styled-components'
import System from './System'

export const createSystem = (styledFn) => new System({
  createComponent: type => (...args) => styledFn(type)([], ...args)
})

const create = createSystem(styled)

export default create
