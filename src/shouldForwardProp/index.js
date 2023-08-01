import { backgroundConfig } from '../background';
import { animationConfig } from '../animation';
import { borderConfig } from '../border';
import { colorConfig } from '../color';
import { scales, transforms } from '../css';
import { flexBoxConfig } from '../flexbox';
import { spaceConfig } from '../space';
import { typographyConfig } from '../typography';

export function shouldForwardProp(propName) {
  return !(
    typographyConfig[propName] ||
    backgroundConfig[propName] ||
    animationConfig[propName] ||
    borderConfig[propName] ||
    colorConfig[propName] ||
    flexBoxConfig[propName] ||
    spaceConfig[propName] ||
    scales[propName] ||
    transforms[propName]
  );
}
