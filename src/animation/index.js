import { system } from '../core';

export const animationConfig = {
  animation: true,
  animationName: true,
  animationDuration: true,
  animationTimingFunction: true,
  animationDelay: true,
  animationDirection: true,
  animationIterationCount: true,
  animationFillMode: true,
  animationPlayState: true,
};

export const animation = system(animationConfig);

export default animation;
