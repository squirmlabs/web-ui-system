export default (theme, heightFiltersBody, widthFiltersBody) => ({
  openAnimation: {
    '& .animated-filters-enter': {
      opacity: 0.01,
      height: '0px'
    },
    '& .animated-filters-enter-active': {
      height: heightFiltersBody,
      opacity: 1,
      transition: 'height 150ms ease-out, opacity 150ms ease-out'
    },
    '& .animated-filters-exit': {
      opacity: 1,
      height: heightFiltersBody
    },
    '& .animated-filters-exit-active': {
      height: '0px',
      opacity: 0.01,
      transition: 'height 150ms ease-in, opacity 150ms ease-in'
    }
  }
});
