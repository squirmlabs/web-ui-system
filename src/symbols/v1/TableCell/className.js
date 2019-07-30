import classNames from 'classnames';
import { capitalize } from '@symbols/core/helpers';

export const className = (classes, classNameProp, numeric, padding, tablelvl2, variant) => classNames(
  classes.root,
  {
    [classes.head]: variant ? variant === 'head' : tablelvl2 && tablelvl2.variant === 'head',
    [classes.body]: variant ? variant === 'body' : tablelvl2 && tablelvl2.variant === 'body',
    [classes.footer]: variant ? variant === 'footer' : tablelvl2 && tablelvl2.variant === 'footer',
    [classes.numeric]: numeric,
    [classes[`padding${capitalize(padding)}`]]: padding !== 'default'
  },
  classNameProp
);
