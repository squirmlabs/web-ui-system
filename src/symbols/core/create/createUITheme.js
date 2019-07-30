// @flow

import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

import warning from 'warning';
import createTypography from './createTypography';
import createBreakpoints from './createBreakpoints';
import createPalette from './createPalette';
import createMixins from './createMixins';
import shadows from '../shadows';
import shape from '../shape';
import transitions from '../transitions';
import zIndex from '../zIndex';
import spacing from '../spacing';

function createUITheme(options: Object = {}) {
  const {
    palette: paletteInput = {},
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    typography: typographyInput = {},
    shadows: shadowsInput,
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const breakpoints = createBreakpoints(breakpointsInput);

  const uiTheme = {
    direction: 'ltr',
    palette,
    typography: createTypography(palette, typographyInput),
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    breakpoints,
    overrides: {}, // Inject custom 
    shadows: shadowsInput || shadows,
    ...deepmerge(
      {
        shape,
        transitions,
        spacing,
        zIndex
      },
      other
    )
  };

  warning(
    uiTheme.shadows.length === 25,
    'Storyline-UI: the shadows array provided to createUITheme should support 25 elevations.'
  );

  return uiTheme;
}

export default createUITheme;
