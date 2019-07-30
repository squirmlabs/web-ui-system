import { bool, func, node, number, object, oneOfType, string } from 'prop-types';

export const propTypes = {
  /**
   * The content of the component.
   */
  children: node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: object.isRequired,
  /**
   * @ignore
   */
  className: string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: oneOfType([string, func]),
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: number,
  /**
   * If `true`, rounded corners are disabled.
   */
  square: bool
};

export const defaultProps = {
  component: 'div',
  elevation: 0,
  square: false
};
