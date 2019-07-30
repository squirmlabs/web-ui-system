export default (theme) => ({
  headlineLink: theme.typography.headlineLink,
    link: {
      ...theme.typography.link,
      '&:hover': {
        color: theme.palette.text.blue005
      }
    },
    inlineLink: {
      ...theme.typography.inlineLink,
      '&:hover': {
        color: theme.palette.text.blue005
      }
    },
    inlineLinkUnderline: {
      composes: '$inlineLink',
      textDecoration: 'underline'
    },
});
