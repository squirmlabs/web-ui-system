import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@symbols/core//withStyles';
import { FormLabel } from '../Form';

export const styles = (theme) => ({
  root: {
    transformOrigin: 'top left'
  },
  formControl: {
    position: 'absolute',
    left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: `translate(0, ${theme.spacing.unit * 3}px) scale(1)`
  },
  labelDense: {
    // Compensation for the `Input.inputDense` style.
    transform: `translate(0, ${theme.spacing.unit * 2.5 + 1}px) scale(1)`
  },
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.75)',
    transformOrigin: 'top left'
  },
  animated: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    })
  },
  disabled: {
    color: theme.palette.text.disabled
  }
});

function InputLabel(props, context) {
  const {
    children,
    classes,
    className: classNameProp,
    disableAnimation,
    disabled,
    FormControlClasses,
    margin: marginProp,
    shrink: shrinkProp,
    ...other
  } = props;

  const { uiFormControl } = context;
  let shrink = shrinkProp;

  if (typeof shrink === 'undefined' && uiFormControl) {
    shrink = uiFormControl.dirty || uiFormControl.focused || uiFormControl.adornedStart;
  }

  let margin = marginProp;
  if (typeof margin === 'undefined' && uiFormControl) {
    margin = uiFormControl.margin;
  }

  const className = classNames(
    classes.root,
    {
      [classes.formControl]: uiFormControl,
      [classes.animated]: !disableAnimation,
      [classes.shrink]: shrink,
      [classes.disabled]: disabled,
      [classes.labelDense]: margin === 'dense'
    },
    classNameProp
  );

  return (
    <FormLabel data-shrink={shrink} className={className} classes={FormControlClasses} {...other}>
      {children}
    </FormLabel>
  );
}

InputLabel.propTypes = {
  /**
   * The contents of the `InputLabel`.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: PropTypes.bool,
  /**
   * If `true`, apply disabled class.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: PropTypes.bool,
  /**
   * `classes` property applied to the `FormControl` element.
   */
  FormControlClasses: PropTypes.object,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense']),
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: PropTypes.bool
};

InputLabel.defaultProps = {
  disabled: false,
  disableAnimation: false
};

InputLabel.contextTypes = {
  uiFormControl: PropTypes.object
};

export default withStyles(styles, { name: 'UIInputLabel' })(InputLabel);
