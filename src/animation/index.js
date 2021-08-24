import { system } from '../core';

const config = {
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

export const animation = system(config);

export default animation;
