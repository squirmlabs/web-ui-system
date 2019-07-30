import { pxToRem } from './typographySpec';
export default (theme) => ({
  display4: theme.typography.display4,
  display3: theme.typography.display3,
  display2: theme.typography.display2,
  display1: theme.typography.display1,
  headline: theme.typography.headline,
  title: theme.typography.title,
  subheading: theme.typography.subheading,
  body2: theme.typography.body2,
  body1: theme.typography.body1,
  caption: theme.typography.caption,
  versionText: theme.typography.versionText,
  paragraph: {
    marginBottom: theme.spacing.unit * 2
  },
  subHeadingPhone: {
    textDecoration: 'none',
    color: theme.palette.text.link,
    '&:hover': {
      color: theme.palette.text.blue005
    }
  },
  typographyRoot: {
    maxWidth: '980px'
  },
  body2Root: {
    lineHeight: pxToRem(22)
  }
});
