export const styles = (theme) => ({
  rightIcon: {
    marginLeft: `${theme.spacing.unit - 3}px`
  },
  leftIcon: {
    marginRight: `${theme.spacing.unit - 3}px`
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    '@media (max-width: 812px)': {
      width: '100%',
      margin: '0px',
      '& svg': {
        width: '16px',
        height: '16px'
      },
      '& span': {
        fontSize: '14px',
      }
    }
  },
  sizeLarge: {
    '@media (max-width: 812px)': {
      padding: '0px 8px 0px 5px',
      minHeight: '30px'
    }
  }
});
