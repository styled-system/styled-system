import { system } from '../core'

export const backgroundConfig = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
}

backgroundConfig.bgImage = backgroundConfig.backgroundImage
backgroundConfig.bgSize = backgroundConfig.backgroundSize
backgroundConfig.bgPosition = backgroundConfig.backgroundPosition
backgroundConfig.bgRepeat = backgroundConfig.backgroundRepeat

export const background = system(backgroundConfig)

export default background
