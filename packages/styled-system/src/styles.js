import { system } from '@styled-system/core'
import { variant } from '@styled-system/variant'

export const boxShadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  }
})

export const opacity = system({ opacity: true })
export const overflow = system({ overflow: true })

// variants
export const buttonStyle = variant({ key: 'buttons' })
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' })
