import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import keycode from 'keycode';
import withStyles from '@symbols/core/withStyles';
import {
  listenForFocusKeys,
  detectKeyboardFocus,
  focusKeyPressed
} from '@symbols/core/keyboardFocus';
import TouchRipple from './TouchRipple/TouchRipple';
import createRippleHandler from './createRippleHandler';
import { styles } from './styles';
import { propTypes, defaultProps } from './propTypes';

const INVALID_COMPONENT_ROLE = ['a'];

class ButtonBase extends React.Component {
  state = {
    keyboardFocused: false
  };

  componentDidMount() {
    this.button = findDOMNode(this);
    listenForFocusKeys();
  }

  componentWillReceiveProps(nextProps) {
    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    if (!this.props.disabled && nextProps.disabled && this.state.keyboardFocused) {
      this.setState({
        keyboardFocused: false
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      this.props.focusRipple &&
      nextState.keyboardFocused &&
      !this.state.keyboardFocused &&
      !this.props.disableRipple
    ) {
      this.ripple.pulsate();
    }
  }

  componentWillUnmount() {
    this.button = null;
    clearTimeout(this.keyboardFocusTimeout);
  }

  onKeyboardFocusHandler = event => {
    this.keyDown = false;
    this.setState({ keyboardFocused: true });

    if (this.props.onKeyboardFocus) {
      this.props.onKeyboardFocus(event);
    }
  };

  onRippleRef = node => {
    this.ripple = node;
  };

  ripple = null;
  keyDown = false;
  button = null;
  keyboardFocusTimeout = null;
  keyboardFocusCheckTime = 50;
  keyboardFocusMaxCheckTimes = 5;

  handleKeyDown = event => {
    const {
      component, focusRipple, onKeyDown, onClick
    } = this.props;
    const key = keycode(event);

    // Check if key is already down to avoid repeats being counted as multiple activations
    if (
      focusRipple &&
      !this.keyDown &&
      this.state.keyboardFocused &&
      this.ripple &&
      key === 'space'
    ) {
      this.keyDown = true;
      event.persist();
      this.ripple.stop(event, () => {
        this.ripple.start(event);
      });
    }

    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (
      event.target === this.button &&
      onClick &&
      component &&
      component !== 'a' &&
      component !== 'button' &&
      (key === 'space' || key === 'enter')
    ) {
      event.preventDefault();
      onClick(event);
    }
  };

  handleKeyUp = event => {
    if (
      this.props.focusRipple &&
      keycode(event) === 'space' &&
      this.ripple &&
      this.state.keyboardFocused
    ) {
      this.keyDown = false;
      event.persist();
      this.ripple.stop(event, () => this.ripple.pulsate(event));
    }
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  };

  handleMouseDown = createRippleHandler(this, 'MouseDown', 'start', () => {
    clearTimeout(this.keyboardFocusTimeout);
    focusKeyPressed(false);
    if (this.state.keyboardFocused) {
      this.setState({ keyboardFocused: false });
    }
  });

  handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop');

  handleMouseLeave = createRippleHandler(this, 'MouseLeave', 'stop', event => {
    if (this.state.keyboardFocused) {
      event.preventDefault();
    }
  });

  handleTouchStart = createRippleHandler(this, 'TouchStart', 'start');

  handleTouchEnd = createRippleHandler(this, 'TouchEnd', 'stop');

  handleTouchMove = createRippleHandler(this, 'TouchEnd', 'stop');

  handleBlur = createRippleHandler(this, 'Blur', 'stop', () => {
    clearTimeout(this.keyboardFocusTimeout);
    focusKeyPressed(false);
    this.setState({ keyboardFocused: false });
  });

  handleFocus = event => {
    if (this.props.disabled) {
      return;
    }

    // Fix for https://github.com/facebook/react/issues/7769
    if (!this.button) {
      this.button = event.currentTarget;
    }

    event.persist();
    detectKeyboardFocus(this, this.button, () => {
      this.onKeyboardFocusHandler(event);
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  render() {
    const {
      buttonRef,
      centerRipple,
      children,
      classes,
      className: classNameProp,
      component,
      destructive,
      disabled,
      active,
      disableRipple,
      focusRipple,
      keyboardFocusedClassName,
      onBlur,
      onFocus,
      onKeyboardFocus,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex,
      type,
      ...other
    } = this.props;

    const className = classNames(
      classes.root,
      {
        [classes.active]: active,
        [classes.destructive]: destructive,
        [classes.disabled]: disabled,
        [keyboardFocusedClassName || '']: this.state.keyboardFocused
      },
      classNameProp,
      'ButtonBase'
    );
    const buttonProps = {};

    let ComponentProp = component;

    if (!ComponentProp) {
      if (other.href) {
        ComponentProp = 'a';
      } else {
        ComponentProp = 'button';
      }
    }

    if (ComponentProp === 'button') {
      buttonProps.type = type || 'button';
      buttonProps.disabled = disabled;
    } else if (INVALID_COMPONENT_ROLE.indexOf(ComponentProp) === -1) {
      buttonProps.role = 'button';
    }
    return (
      <ComponentProp
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onTouchEnd={this.handleTouchEnd}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
        tabIndex={disabled ? -1 : tabIndex}
        className={className}
        ref={buttonRef}
        {...buttonProps}
        {...other}

      >
        {children}
        {!disableRipple && !disabled ? (
          <TouchRipple innerRef={this.onRippleRef} center={centerRipple} />
        ) : null}
      </ComponentProp>
    );
  }
}

ButtonBase.propTypes = propTypes;
ButtonBase.defaultProps = defaultProps;

export default withStyles(styles, { name: 'UIButtonBase' })(ButtonBase);
