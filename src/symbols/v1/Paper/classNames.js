import classNames from 'classnames';

export const className = (classes, elevation, square, classNameProp) => classNames(
  classes.root,
  classes[`shadow${elevation >= 0 ? elevation : 0}`],
  {
    [classes.rounded]: !square,
  },
  classNameProp,
);
