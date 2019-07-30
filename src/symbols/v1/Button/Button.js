// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@symbols/core/withStyles';
import ButtonBase from '../ButtonBase';

import { isUIElement } from '@symbols/core/styleguide/reactHelpers';
import { styles } from './styles';
import { defaultProps, propTypes } from './propTypes';
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
    twoFaced,
    twoFacedOpposite,
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
    size,
    twoFaced,
    twoFacedOpposite
  );

  let children = childrenProp;

  if (fab) {
    children = React.Children.map(children, child => {
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles(styles, { name: 'UIButton' })(Button);
