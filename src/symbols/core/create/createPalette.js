import warning from 'warning';
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
import indigo from '../colors/indigo';
import teal from '../colors/teal';
import pink from '../colors/pink';
import grey from '../colors/grey';
import red from '../colors/red';
import storylineColors from '../colors/storylineColors';
import common from '../colors/common';
import { getContrastRatio, darken, lighten } from '../colorManipulator';
import { hexToRGB } from '../colors/utils/hexToRGB';

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    // default: 'rgba(0, 0, 0, 1)',
    default: hexToRGB('#474751'),
    dark: hexToRGB('#343534'),
    primary: 'rgba(255, 255, 255, 0.87)',
    white: 'rgba(255, 255, 255, 1)',
    blue: 'rgba(52, 53, 52, 1)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    blue001: 'rgba(11,60,93,1)',
    blue002: hexToRGB('#333A56'),
    blue003: hexToRGB('#3467B0'),
    blue004: hexToRGB('#328CC1'),
    blue005: hexToRGB('#264C87'),
    caption: hexToRGB('#64666A'),
    versions: hexToRGB('#939393'),
    headlineLink: hexToRGB('#203B67'),
    link: hexToRGB('#3467B0')
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: common.white,
    default: grey[50]
  },
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.14)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  },
  // Users should be able to configure the background color of Paper
  // Used to style the background color for different colored paper
  paper: {
    // grey: '#e9ecef',
    grey: 'rgba(233, 236, 239, 1)'
  }
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.2)',
    selected: 'rgba(255, 255, 255, 0.1)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffset * 1.5);
    }
  }
}

export default function createPalette(palette: Object) {
  const {
    primary = {
      light: teal[300],
      main: teal[500],
      dark: teal[700]
    },
    secondary = {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    },
    error = {
      light: red[300],
      main: red[500],
      dark: red[700]
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;

  function getContrastText(background) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    // if (process.env.NODE_ENV !== 'production') {
    //   const contrast = getContrastRatio(background, contrastText);
    //   warning(
    //     contrast >= 3,
    //     [
    //       `Storyline-UI: the contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
    //       'falls below the WACG recommended absolute minimum contrast ratio of 3:1.',
    //       'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
    //     ].join('\n'),
    //   );
    // }

    return contrastText;
  }

  function augmentColor(color, mainShade, lightShade, darkShade) {
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
  }

  augmentColor(primary, 500, 300, 700);
  augmentColor(secondary, 'A400', 'A200', 'A700');
  augmentColor(error, 500, 300, 700);

  const types = { dark, light };

  warning(types[type], `Storyline-UI: the palette type \`${type}\` is not supported.`);

  const paletteOutput = deepmerge(
    {
      // A collection of common colors.
      common,
      // The palette type, can be light or dark.
      type,
      // The colors used to represent primary interface elements for a user.
      primary,
      // The colors used to represent secondary interface elements for a user.
      secondary,
      // The colors used to represent storylines main theme.
      storylineColors,
      // The colors used to represent interface elements that the user should be made aware of.
      error,
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold,
      // Take a background color and return the color of the text to maximize the contrast.
      getContrastText,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark type object.
      ...types[type]
    },
    other,
    {
      clone: false // No need to clone deep
    }
  );

  return paletteOutput;
}
