import { style, compose } from '../style'

export const background = style({
  prop: 'background',
})

export const backgroundColor = style({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
})

export const backgroundImage = style({
  prop: 'backgroundImage',
})

export const backgroundSize = style({
  prop: 'backgroundSize',
})

export const backgroundPosition = style({
  prop: 'backgroundPosition',
})

export const backgroundRepeat = style({
  prop: 'backgroundRepeat',
})

export const backgrounds = compose(
  background,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
)
