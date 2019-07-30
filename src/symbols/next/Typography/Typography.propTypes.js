import PropTypes from 'prop-types';
import chainPropTypes from '../utils/chainPropTypes';

export const propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'default',
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary'
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   * The default mapping is the following:
   */
  headlineMapping: PropTypes.object,
  /**
   * A deprecated variant is used from an internal component. Users don't need
   * a deprecation warning here if they switched to the v2 theme. They already
   * get the mapping that will be applied in the next major release.
   *
   * @internal
   */
  internalDeprecatedVariant: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   * Use `body1` as the default value with the legacy implementation and `body2` with the new one.
   */
  variant: chainPropTypes(
    PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
      'button',
      'overline',
      'srOnly',
      'inherit',
      // deprecated
      'display4',
      'display3',
      'display2',
      'display1',
      'headline',
      'title',
      'subheading'
    ]),
    (props) => {
      const deprecatedVariants = [
        'display4',
        'display3',
        'display2',
        'display1',
        'headline',
        'title',
        'subheading'
      ];
      if (
        props.theme.typography.useNextVariants &&
        !props.internalDeprecatedVariant &&
        deprecatedVariants.indexOf(props.variant) !== -1
      ) {
        return new Error('You are using a deprecated typography variant: ' +
            `\`${props.variant}\` that will be removed in the next major release.` +
            '\nPlease read the migration guide under https://material-ui.com/style/typography#migration-to-typography-v2');
      }

      return null;
    }
  )
};
