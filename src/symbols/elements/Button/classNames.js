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
  size,
  twoFaced,
  twoFacedOpposite
) => {
  return classNames(
    classes.root,
    {
      [classes.active]: active,
      [classes.destructive]: destructive,
      [classes.disabled]: disabled,
      [classes.raised]: raised || fab,
      [classes.fab]: fab,
      [classes.mini]: fab && mini,
      [classes.colorInherit]: color === '#FFFFFF',
      [classes.link]: link && color === 'link',
      [classes.flatPrimary]: flat && color === 'primary',
      [classes.flatSecondary]: flat && color === 'secondary',
      [classes.raisedPrimary]: !flat && color === 'primary',
      [classes.raisedSecondary]: !flat && color === 'secondary',
      [classes[`size${capitalize(size)}`]]: size !== 'medium',
      [classes.fullWidth]: fullWidth,
      [classes.iconLeft]: iconLeft,
      [classes.iconRight]: iconRight,
      [classes.twoFaced]: twoFaced,
      [classes.twoFacedOpposite]: twoFacedOpposite,
      [classes.mini]: fab && mini,
    },
    classNameProp
  );
};
