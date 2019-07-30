export const styles = (theme) => {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    // body1: theme.typography.body1,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    headlineLink: theme.typography.headlineLink,
    link: theme.typography.link,
    button: theme.typography.button,
    alignLeft: {
      textAlign: 'left'
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    },
    alignJustify: {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};
