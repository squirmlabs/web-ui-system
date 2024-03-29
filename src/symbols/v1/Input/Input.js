import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@symbols/core//withStyles';
import Textarea from './Textarea';

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
export function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}

// Determine if field is dirty (a.k.a. filled).
//
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.
export function isDirty(obj, SSR = false) {
  return (
    obj &&
    ((hasValue(obj.value) && obj.value !== '') ||
      (SSR && hasValue(obj.defaultValue) && obj.defaultValue !== ''))
  );
}

// Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.
export function isAdornedStart(obj) {
  return obj.startAdornment;
}

export const styles = theme => {
  const light = theme.palette.type === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.ease,
    }),
  };
  const placeholderHidden = {
    opacity: 0,
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5,
  };
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';

  return {
    root: {
      // Mimics the default input display property used by browsers for an input.
      display: 'inline-flex',
      position: 'relative',
      fontFamily: theme.typography.fontFamily,
      color: light ? 'rgba(0, 0, 0, 0.87)' : theme.palette.common.white,
      fontSize: theme.typography.pxToRem(16),
    },
    formControl: {
      'label + &': {
        marginTop: theme.spacing.unit * 2,
      },
    },
    inkbar: {
      '&:after': {
        backgroundColor: theme.palette.primary[light ? 'dark' : 'light'],
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 2,
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        }),
        pointerEvents: 'none', // Transparent to the hover style.
      },
      '&$focused:after': {
        transform: 'scaleX(1)',
      },
    },
    error: {
      '&:after': {
        backgroundColor: theme.palette.error.main,
        transform: 'scaleX(1)', // error is always underlined in red
      },
    },
    focused: {},
    disabled: {
      color: theme.palette.text.disabled,
    },
    underline: {
      '&:before': {
        backgroundColor: bottomLineColor,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 1,
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.ease,
        }),
        pointerEvents: 'none', // Transparent to the hover style.
      },
      '&:hover:not($disabled):before': {
        backgroundColor: theme.palette.text.primary,
        height: 2,
      },
      '&$disabled:before': {
        background: 'transparent',
        backgroundImage: `linear-gradient(to right, ${bottomLineColor} 33%, transparent 0%)`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '5px 1px',
      },
    },
    multiline: {
      padding: `${theme.spacing.unit - 2}px 0 ${theme.spacing.unit - 1}px`,
    },
    fullWidth: {
      width: '100%',
    },
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: `${theme.spacing.unit - 2}px 0 ${theme.spacing.unit - 1}px`,
      border: 0,
      boxSizing: 'content-box',
      verticalAlign: 'middle',
      background: 'none',
      margin: 0, // Reset for Safari
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder, // Firefox 19+
      '&:-ms-input-placeholder': placeholder, // IE 11
      '&::-ms-input-placeholder': placeholder, // Edge
      '&:focus': {
        outline: 0,
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none',
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none',
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden, // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden, // IE 11
        '&::-ms-input-placeholder': placeholderHidden, // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible, // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible, // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible, // Edge
      },
    },
    inputDense: {
      paddingTop: theme.spacing.unit / 2 - 1,
    },
    inputDisabled: {
      opacity: 1, // Reset iOS opacity
    },
    inputType: {
      // type="date" or type="time", etc. have specific styles we need to reset.
      height: '1.1875em', // Reset (19px), match the native input line-height
    },
    inputMultiline: {
      resize: 'none',
      padding: 0,
    },
    inputSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield',
    },
  };
};

function formControlState(props, context) {
  let disabled = props.disabled;
  let error = props.error;
  let margin = props.margin;

  if (context && context.uiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = context.uiFormControl.disabled;
    }

    if (typeof error === 'undefined') {
      error = context.uiFormControl.error;
    }

    if (typeof margin === 'undefined') {
      margin = context.uiFormControl.margin;
    }
  }

  return {
    disabled,
    error,
    margin,
  };
}

class Input extends React.Component {
  state = {
    focused: false,
  };

  componentWillMount() {
    this.isControlled = this.props.value != null;

    if (this.isControlled) {
      this.checkDirty(this.props);
    }
  }

  componentDidMount() {
    if (!this.isControlled) {
      this.checkDirty(this.input);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    if (
      !formControlState(this.props, this.context).disabled &&
      formControlState(nextProps, nextContext).disabled
    ) {
      this.setState({
        focused: false,
      });
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (this.isControlled) {
      this.checkDirty(nextProps);
    } // else performed in the onChange

    // Book keep the focused state.
    if (
      !formControlState(this.props, this.context).disabled &&
      formControlState(nextProps, nextContext).disabled
    ) {
      const { uiFormControl } = this.context;
      if (uiFormControl && uiFormControl.onBlur) {
        uiFormControl.onBlur();
      }
    }
  }

  // Holds the input reference
  input = null;

  handleFocus = event => {
    // Fix an bug with IE11 where the focus/blur events are triggered
    // while the input is disabled.
    if (formControlState(this.props, this.context).disabled) {
      event.stopPropagation();
      return;
    }

    this.setState({ focused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ focused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleChange = event => {
    if (!this.isControlled) {
      this.checkDirty(this.input);
    }

    // Perform in the willUpdate
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  handleRefInput = node => {
    this.input = node;

    if (this.props.inputRef) {
      this.props.inputRef(node);
    } else if (this.props.inputProps && this.props.inputProps.ref) {
      this.props.inputProps.ref(node);
    }
  };

  checkDirty(obj) {
    const { uiFormControl } = this.context;

    if (isDirty(obj)) {
      if (uiFormControl && uiFormControl.onDirty) {
        uiFormControl.onDirty();
      }
      if (this.props.onDirty) {
        this.props.onDirty();
      }
      return;
    }

    if (uiFormControl && uiFormControl.onClean) {
      uiFormControl.onClean();
    }
    if (this.props.onClean) {
      this.props.onClean();
    }
  }

  render() {
    const {
      autoComplete,
      autoFocus,
      classes,
      className: classNameProp,
      defaultValue,
      disabled: disabledProp,
      disableUnderline,
      endAdornment,
      error: errorProp,
      fullWidth,
      id,
      inputComponent,
      inputProps: { className: inputPropsClassName, ...inputPropsProp } = {},
      inputRef,
      margin: marginProp,
      multiline,
      name,
      onBlur,
      onChange,
      onClean,
      onDirty,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      readOnly,
      rows,
      rowsMax,
      startAdornment,
      type,
      value,
      ...other
    } = this.props;

    const { uiFormControl } = this.context;
    const { disabled, error, margin } = formControlState(this.props, this.context);

    const className = classNames(
      classes.root,
      {
        [classes.disabled]: disabled,
        [classes.error]: error,
        [classes.fullWidth]: fullWidth,
        [classes.focused]: this.state.focused,
        [classes.formControl]: uiFormControl,
        [classes.inkbar]: !disableUnderline,
        [classes.multiline]: multiline,
        [classes.underline]: !disableUnderline,
      },
      classNameProp,
    );

    const inputClassName = classNames(
      classes.input,
      {
        [classes.inputDisabled]: disabled,
        [classes.inputType]: type !== 'text',
        [classes.inputMultiline]: multiline,
        [classes.inputSearch]: type === 'search',
        [classes.inputDense]: margin === 'dense',
      },
      inputPropsClassName,
    );

    const required = uiFormControl && uiFormControl.required === true;

    let InputComponent = 'input';
    let inputProps = {
      ...inputPropsProp,
      ref: this.handleRefInput,
    };

    if (inputComponent) {
      InputComponent = inputComponent;
      inputProps = {
        // Rename ref to inputRef as we don't know the
        // provided `inputComponent` structure.
        inputRef: this.handleRefInput,
        ...inputProps,
        ref: null,
      };
    } else if (multiline) {
      if (rows && !rowsMax) {
        InputComponent = 'textarea';
      } else {
        inputProps = {
          rowsMax,
          textareaRef: this.handleRefInput,
          ...inputProps,
          ref: null,
        };
        InputComponent = Textarea;
      }
    }

    return (
      <div onBlur={this.handleBlur} onFocus={this.handleFocus} className={className} {...other}>
        {startAdornment}
        <InputComponent
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={inputClassName}
          onChange={this.handleChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          disabled={disabled}
          required={required ? true : undefined}
          value={value}
          id={id}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          type={type}
          readOnly={readOnly}
          rows={rows}
          aria-required={required}
          aria-invalid={error}
          {...inputProps}
        />
        {endAdornment}
      </div>
    );
  }
}

Input.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * The CSS class name of the wrapper element.
   */
  className: PropTypes.string,
  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense', 'none']),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChange: PropTypes.func,
  /**
   * TODO
   */
  onClean: PropTypes.func,
  /**
   * TODO
   */
  onDirty: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * @ignore
   */
  readOnly: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,
  /**
   * The input value, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
};

Input.uiName = 'Input';

Input.defaultProps = {
  disableUnderline: false,
  fullWidth: false,
  multiline: false,
  type: 'text',
};

Input.contextTypes = {
  uiFormControl: PropTypes.object,
};

export default withStyles(styles, { name: 'UIInput' })(Input);
