// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@symbols/core/withStyles';
import ButtonBase from '@symbols/v1/ButtonBase';

import { isUIElement } from '@symbols/core/reactHelpers';
import { styles } from './styles';
import './Button.scss';
import { getClassnames } from './classNames';

function Button(props) {
  const {
    active,
    children: childrenProp,
    classes,
    className: classNameProp,
    color,
    disabled,
    destructive,
    disableFocusRipple,
    fullWidth,
    iconLeft,
    iconRight,
    mini,
    size,
    variant,
    ...other
  } = props;

  const fab = variant === 'fab';
  const raised = variant === 'raised';
  const link = variant === 'link';
  const flat = !raised && !fab && !active && !destructive;

  const className = getClassnames(
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
  );

  let children = childrenProp;

  if (fab) {
    children = React.Children.map(children, (child) => {
      if (isUIElement(child, ['Icon', 'SvgIcon'])) {
        return React.cloneElement(child, { fontSize: true });
      }
      return child;
    });
  }

  return (
    <ButtonBase
      className={classnames(className, 'Button')}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      keyboardFocusedClassName={classes.keyboardFocused}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
}

Button.propTypes = {
  /**
   * If `true`, the button will be active.
   */
  active: PropTypes.bool,
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
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
    'inherit',
    'active',
    'destructive',
    'link',
    'primary',
    'secondary'
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If `true`, the button will be destructive.
   */
  destructive: PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `fab` is `true`, will use mini floating action button styling.
   */
  /**
   * If `true`, the ripple effect will be disabled.
   */
  iconLeft: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  iconRight: PropTypes.bool,
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  variant: PropTypes.oneOf(['active', 'destructive', 'flat', 'raised', 'link', 'fab'])
};
Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'link'
};

export default withStyles(styles, { name: 'Button' })(Button);
