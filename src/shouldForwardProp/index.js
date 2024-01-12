import { backgroundConfig } from '../background';
import { animationConfig } from '../animation';
import { borderConfig } from '../border';
import { colorConfig } from '../color';
import { scales, transforms } from '../css';
import { flexBoxConfig } from '../flexbox';
import { spaceConfig } from '../space';
import { typographyConfig } from '../typography';
import { layoutConfig } from '../layout';
import { positionConfig } from '../position';
import { objectFitConfig } from '../object-fit';
import { listStyleConfig } from '../list-style';
import { gridConfig } from '../grid';
import { cursorConfig } from '../cursor';

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
    layoutConfig[propName] ||
    positionConfig[propName] ||
    objectFitConfig[propName] ||
    listStyleConfig[propName] ||
    gridConfig[propName] ||
    cursorConfig[propName] ||
    transforms[propName]
  );
}
