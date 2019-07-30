export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    margin: 0
  },
  /* Styles applied to the root element if `variant="display4"`. */
  display4: theme.typography.display4,
  /* Styles applied to the root element if `variant="display3"`. */
  display3: theme.typography.display3,
  /* Styles applied to the root element if `variant="display2"`. */
  display2: theme.typography.display2,
  /* Styles applied to the root element if `variant="display1"`. */
  display1: theme.typography.display1,
  /* Styles applied to the root element if `variant="headline"`. */
  headline: theme.typography.headline,
  /* Styles applied to the root element if `variant="title"`. */
  title: theme.typography.title,
  /* Styles applied to the root element if `variant="subheading"`. */
  subheading: theme.typography.subheading,
  /* Styles applied to the root element if `variant="body2"`. */
  body2: theme.typography.body2,
  /* Styles applied to the root element if `variant="body1"`. */
  body1: theme.typography.body1,
  /* Styles applied to the root element if `variant="caption"`. */
  caption: theme.typography.caption,
  /* Styles applied to the root element if `variant="button"`. */
  button: theme.typography.button,
  /* Styles applied to the root element if `variant="h1"`. */
  h1: theme.typography.h1,
  /* Styles applied to the root element if `variant="h2"`. */
  h2: theme.typography.h2,
  /* Styles applied to the root element if `variant="h3"`. */
  h3: theme.typography.h3,
  /* Styles applied to the root element if `variant="h4"`. */
  h4: theme.typography.h4,
  /* Styles applied to the root element if `variant="h5"`. */
  h5: theme.typography.h5,
  /* Styles applied to the root element if `variant="h6"`. */
  h6: theme.typography.h6,
  /* Styles applied to the root element if `variant="subtitle1"`. */
  subtitle1: theme.typography.subtitle1,
  /* Styles applied to the root element if `variant="subtitle2"`. */
  subtitle2: theme.typography.subtitle2,
  /* Styles applied to the root element if `variant="overline"`. */
  overline: theme.typography.overline,
  /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
  srOnly: {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden'
  },
  /* Styles applied to the root element if `align="left"`. */
  alignLeft: {
    textAlign: 'left'
  },
  /* Styles applied to the root element if `align="center"`. */
  alignCenter: {
    textAlign: 'center'
  },
  /* Styles applied to the root element if `align="right"`. */
  alignRight: {
    textAlign: 'right'
  },
  /* Styles applied to the root element if `align="justify"`. */
  alignJustify: {
    textAlign: 'justify'
  },
  /* Styles applied to the root element if `align="nowrap"`. */
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  /* Styles applied to the root element if `gutterBottom={true}`. */
  gutterBottom: {
    marginBottom: '0.35em'
  },
  /* Styles applied to the root element if `paragraph={true}`. */
  paragraph: {
    marginBottom: 16
  },
  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit'
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main
  },
  /* Styles applied to the root element if `color="textPrimary"`. */
  colorTextPrimary: {
    color: theme.palette.text.primary
  },
  /* Styles applied to the root element if `color="textSecondary"`. */
  colorTextSecondary: {
    color: theme.palette.text.secondary
  },
  /* Styles applied to the root element if `color="error"`. */
  colorError: {
    color: theme.palette.error.main
  }
});
