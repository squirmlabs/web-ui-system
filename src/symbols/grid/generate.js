import { GUTTERS, GRID_SIZES } from './types';

export function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {};

  GRID_SIZES.forEach((size) => {
    const key = `grid-${breakpoint}-${size}`;

    // For the auto layouting
    if (size === true) {
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    }

    // Only keep 6 significant numbers.
    const width = `${Math.round((size / 12) * 10e6) / 10e4}%`;

    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

export function generateGutter(theme, breakpoint) {
  const styles = {};

  GUTTERS.forEach((spacing, index) => {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: -spacing / 2,
      width: `calc(100% + ${spacing}px)`,
      '& > $item': {
        padding: spacing / 2
      }
    };
  });

  return styles;
}
