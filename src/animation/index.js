import { system } from '../core'

const config = {
  animation: {
    property: 'animation',
    scale: 'animations',
  },
  animationName: {
    property: 'animationName',
    scale: 'animationNames',
  },
  animationDuration: {
    property: 'animationDuration',
    scale: 'animationDurations',
  },
  animationTimingFunction: {
    property: 'animationTimingFunction',
    scale: 'animationTimingFunctions',
  },
  animationDelay: {
    property: 'animationDelay',
    scale: 'animationDelays',
  },
  animationDirection: {
    property: 'animationDirection',
    scale: 'animationDirections',
  },
  animationIterationCount: {
    property: 'animationIterationCount',
    scale: 'animationIterationCounts',
  },
  animationFillMode: {
    property: 'animationFillMode',
    scale: 'animationFillModes',
  },
  animationPlayState: {
    property: 'animationPlayState',
    scale: 'animationPlayStates',
  },
}

export const animation = system(config)

export default animation
