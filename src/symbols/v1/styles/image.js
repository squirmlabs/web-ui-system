import { pxToRem } from './typographySpec';

export default (theme) => ({
  responsiveImage: {
    maxWidth: pxToRem(675),
    width: '100%',
    border: 'solid 1px #979797'
  },
  iosStepsImage: {
    maxWidth: pxToRem(346),
    width: '100%',
    border: 'solid 1px #979797'
  },
  browsingNotesImage: {
    maxWidth: pxToRem(277),
    width: '100%',
    border: 'solid 1px #979797'
  },
  withinStoryElementsImage: {
    maxWidth: pxToRem(456),
    width: '100%',
    border: 'solid 1px #979797'
  },
  withinStoryEditorialNotesImage: {
    maxWidth: pxToRem(277),
    width: '100%',
    border: 'solid 1px #979797'
  }
});
