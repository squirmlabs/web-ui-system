import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
import isPlainObject from 'is-plain-object';
import warning from 'warning';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './shape';
import spacing from './spacing';
import transitions from './transitions';
import zIndex from './zIndex';

function createSSTheme(options = {}) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    shadows: shadowsInput,
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const breakpoints = createBreakpoints(breakpointsInput);

  const ssTheme = {
    breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {}, // Inject custom styles
    palette,
    props: {}, // Inject custom properties
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput),
    ...deepmerge(
      {
        shape,
        spacing,
        transitions,
        zIndex,
      },
      other,
      {
        isMergeableObject: isPlainObject,
      },
    ),
  };

  warning(
    ssTheme.shadows.length === 25,
    'Material-UI: the shadows array provided to createSSTheme should support 25 elevations.',
  );

  return ssTheme;
}

export default createSSTheme;
