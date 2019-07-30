// @flow

import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
import themeListener from '../themeListener';

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

export default function createTypography(palette: Object, typography: Object | Function) {
  const {
    fontFamily = 'Roboto, proxima-nova, sans-serif',
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightSemiBold = 600,
    fontWeightBold = 700,
    htmlFontSize = 16, // 16px is the default font-size used by browsers on the html element.
    ...other
  } =
    typeof typography === 'function' ? typography(palette) : typography;

  function pxToRem(value) {
    return `${value / htmlFontSize}rem`;
  }

  return deepmerge(
    {
      pxToRem,
      round,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightSemiBold,
      fontWeightBold,
      display4: {
        fontSize: pxToRem(36),
        fontWeight: fontWeightSemiBold,
        fontFamily,
        letterSpacing: '0',
        // letterSpacing: '-.04em',
        // lineHeight: `${round(128 / 112)}em`,
        marginLeft: '0',
        // marginLeft: '-.06em',
        color: palette.text.blue001
      },
      display3: {
        fontSize: pxToRem(24),
        fontWeight: fontWeightBold,
        fontFamily,
        letterSpacing: '0',
        // letterSpacing: '-.02em',
        // lineHeight: `${round(73 / 56)}em`,
        marginLeft: '0',
        // marginLeft: '-.04em',
        color: '#333',
        '@media(max-width:812px)': {
          fontSize: pxToRem(20),
        }
        // color: palette.text.blue002
      },
      display2: {
        fontSize: pxToRem(20),
        fontWeight: fontWeightSemiBold,
        fontFamily,
        // lineHeight: `${round(48 / 45)}em`,
        marginLeft: '0',
        // marginLeft: '-.04em',
        color: '#333',
        '@media(max-width:812px)': {
          fontSize: pxToRem(18),
        }
        // color: palette.text.blue002
      },
      display1: {
        fontSize: pxToRem(18),
        fontWeight: fontWeightSemiBold,
        fontFamily,
        // lineHeight: `${round(41 / 34)}em`,
        marginLeft: '0',
        // marginLeft: '-.04em',
        color: '#333',
      },
      headline: {
        fontSize: pxToRem(20),
        fontWeight: fontWeightSemiBold,
        fontFamily,
        lineHeight: `${round(32.5 / 24)}em`,
        color: palette.text.dark
      },
      title: {
        fontSize: pxToRem(20),
        fontWeight: fontWeightSemiBold,
        fontFamily,
        lineHeight: `${round(32.5 / 24)}em`,
        color: palette.text.dark
      },
      subheading: {
        fontSize: pxToRem(16),
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: `${round(24 / 16)}em`,
        color: palette.text.default
      },
      body2: {
        fontSize: pxToRem(16),
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: `${round(22 / 16)}em`,
        color: palette.text.default
      },
      body1: {
        fontSize: pxToRem(14),
        fontWeight: fontWeightLight ,
        fontFamily,
        lineHeight: `${round(20.5 / 14)}em`,
        color: palette.text.default
      },
      caption: {
        fontSize: pxToRem(14),
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: `${round(16.5 / 12)}em`,
        color: palette.text.caption
      },
      versionText: {
        fontSize: pxToRem(12),
        fontWeight: fontWeightRegular,
        fontFamily,
        lineHeight: `${round(16.5 / 12)}em`,
        color: palette.text.versions
      },
      button: {
        fontSize: pxToRem(fontSize),
        textTransform: 'Capitalize',
        fontWeight: fontWeightSemiBold,
        fontFamily
      },
      link: {
        fontSize: pxToRem(16),
        // textTransform: 'Capitalize',
        fontWeight: fontWeightSemiBold,
        fontFamily,
        cursor: 'pointer',
        display: 'inline',
        color: palette.text.link,
        '&:hover': {
          color: palette.text.blue005
        }
      },
      inlineLink: {
        fontSize: pxToRem(16),
        textTransform: 'normal',
        fontWeight: fontWeightSemiBold,
        fontFamily,
        textDecoration: 'none',
        cursor: 'pointer',
        color: palette.text.link,
        '&:hover': {
          color: palette.text.blue005
        }
      },
      headlineLink: {
        fontSize: pxToRem(20),
        textTransform: 'Capitalize',
        textDecoration: 'underline',
        fontWeight: fontWeightSemiBold,
        fontFamily,
        cursor: 'pointer',
        color: palette.text.headlineLink,
        '&:hover': {
          color: palette.text.blue005
        }
      }
    },
    other,
    {
      clone: false // No need to clone deep
    }
  );
}
