import { darken, fade, lighten } from '@symbols/core//colorManipulator';

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    display: 'table-cell',
    verticalAlign: 'inherit',
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: `1px solid ${
      theme.palette.type === 'light'
        ? lighten(fade(theme.palette.divider, 1), 0.88)
        : darken(fade(theme.palette.divider, 1), 0.8)
    }`,
    textAlign: 'left',
    padding: '4px 56px 4px 24px',
    '&:last-child': {
      paddingRight: 24
    }
  },
  /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
  head: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightMedium
  },
  /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
  body: {
    // color: theme.palette.text.primary,
    color: '#666666',
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightRegular
  },
  /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
  footer: {
    borderBottom: 0,
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(12)
  },
  /* Styles applied to the root element if `numeric={true}`. */
  numeric: {
    textAlign: 'right',
    flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents
  },
  /* Styles applied to the root element if `padding="dense"`. */
  paddingDense: {
    paddingRight: 24
  },
  /* Styles applied to the root element if `padding="checkbox"`. */
  paddingCheckbox: {
    padding: '0 12px',
    '&:last-child': {
      paddingRight: 12
    }
  },
  /* Styles applied to the root element if `padding="none"`. */
  paddingNone: {
    padding: 0,
    '&:last-child': {
      padding: 0
    }
  }
});
