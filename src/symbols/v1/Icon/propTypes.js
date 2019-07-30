import { node, object, string, oneOf, bool } from 'prop-types';

export const propTypes = {
  /**
   * The name of the icon font ligature.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: oneOf(['inherit', 'secondary', 'action', 'disabled', 'error', 'primary']),
  /**
   * If `true`, the icon size will be determined by the font-size.
   */
  fontSize: bool
};
