import { func, object } from 'prop-types';

export const propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: object,
  /**
   * Use that property to pass a ref callback to the decorated component.
   */
  innerRef: func
};
