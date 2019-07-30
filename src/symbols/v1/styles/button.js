import { pxToRem } from './typographySpec';

export default (theme) => ({
  button: theme.typography.button,
  jumpUp: {
    color: '#30A88F',
    backgroundColor: '#F5F7F9',
    borderColor: '#40AE98',
    border: 'solid 1px',
    position: 'fixed',
    bottom: pxToRem(15),
    right: pxToRem(15),
    zIndex: 2,
    width: 40,
    height: 40,
    '@media(max-width:812px)': {
      bottom: pxToRem(65),
      right: pxToRem(15)
    }
  }
});
