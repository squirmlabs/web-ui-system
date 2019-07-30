import { bool, func, oneOf, node, object, string, oneOfType } from 'prop-types';

export const defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  variant: 'body1'
};

export const propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: oneOf(['inherit', 'left', 'center', 'right', 'justify']),
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: oneOf([
    'inherit',
    'primary',
    'textSecondary',
    'secondary',
    'error',
    'default',
    'link',
    'blue001',
    'blue002',
    'blue003',
    'blue004',
    'caption'
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: oneOfType([string, func]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: bool,
  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: object,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: bool,
  /**
   * Applies the theme typography styles.
   */
  variant: oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subheading',
    'body2',
    'body1',
    'caption',
    'button',
    'link',
    'headlineLink'
  ])
};
