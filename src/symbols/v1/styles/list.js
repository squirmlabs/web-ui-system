import { pxToRem } from './typographySpec';
export default (theme) => ({
  list: {
    padding: 0,
    listStyle: 'none',
    lineHeight: pxToRem(22)
  },
  outlineList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    lineHeight: pxToRem(22)
  },
  listHeader: {
    composes: '$list',
    fontWeight: theme.typography.fontWeightBold
  },
  listItem: {
    paddingLeft: pxToRem(10)
  },
  listStyleDisc: {
    marginLeft: pxToRem(20),
    listStyle: 'disc'
  },
  listStyleCircle: {
    listStyle: 'circle'
  },
  listStyleNone: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  sublistItem: {
    marginLeft: pxToRem(30)
  },
});
