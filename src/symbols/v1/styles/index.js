import { pxToRem } from './typographySpec';
import alignment from './alignment';
import color from './color';
import gutters from './gutters';
import image from './image';
import link from './link';
import list from './list';
import typography from './typography';
import wrap from './wrap';
import button from './button';

export const styles = (theme) => {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    userGuide: {
      zIndex: 1,
      position: 'relative'
    },
    ...alignment(theme),
    ...button(theme),
    ...color(theme),
    ...gutters(theme),
    ...image(theme),
    ...link(theme),
    ...list(theme),
    ...typography(theme),
    ...wrap(theme),
  };
};
