import { pxToRem } from './typographySpec';
export default (theme) => ({
  gutterBottom: {
    marginBottom: pxToRem(20)
  },
  gutterBottom30: {
    marginBottom: pxToRem(30)
  },
  gutterBottom15: {
    marginBottom: pxToRem(15)
  },
  gutterBottom10: {
    marginBottom: pxToRem(10)
  },
  gutterBottom5: {
    marginBottom: pxToRem(5)
  },
  gutterTop30: {
    marginTop: pxToRem(30)
  },
  gutterTop: {
    marginTop: pxToRem(20)
  },
  gutterTop15: {
    marginTop: pxToRem(15)
  },
  gutterTop10: {
    marginTop: pxToRem(10)
  },
  gutterTop5: {
    marginTop: pxToRem(5)
  },
  noGutterTop: {
    marginTop: 0
  }
});

