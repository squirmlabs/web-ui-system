import classNames from 'classnames';
import { capitalize } from '@symbols/core/helpers';

export const getClassnames = (
  active,
  classes,
  classNameProp,
  color,
  disabled,
  destructive,
  fab,
  flat,
  fullWidth,
  iconLeft,
  iconRight,
  link,
  mini,
  raised,
  size
) => {
  return classNames(
    classes.root,
    {
      [classes.active]: active,
      [classes.colorInherit]: color === '#FFFFFF',
      [classes.destructive]: destructive,
      [classes.disabled]: disabled,
      [classes.raised]: raised || fab,
      [classes.fab]: fab,
      [classes.link]: link && color === 'link',
      [classes.flatPrimary]: flat && color === 'primary',
      [classes.flatSecondary]: flat && color === 'secondary',
      [classes.fullWidth]: fullWidth,
      [classes.iconLeft]: iconLeft,
      [classes.iconRight]: iconRight,
      [classes.mini]: fab && mini,
      [classes.raisedPrimary]: !flat && color === 'primary',
      [classes.raisedSecondary]: !flat && color === 'secondary',
      [classes[`size${capitalize(size)}`]]: size !== 'medium'
    },
    classNameProp
  );
};
