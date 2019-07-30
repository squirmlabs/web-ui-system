import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { propTypes } from './propTypes';
import './Input.scss';

class Input extends Component {
  static propTypes = {
    ...propTypes,
    children: PropTypes.func.isRequired
  };

  state = {
    isFocused: false
  };

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      className,
      label,
      errorText,
      maxLength,
      inputRef,
      isOverCharCount,
      ...inputProps
    } = this.props;

    const { isFocused } = this.state;
    const error = isOverCharCount ? `Must be ${maxLength} characters or less` : errorText;

    return (
      <div
        className={classNames('Input', className, {
          Input__error: error,
          Input__focused: isFocused
        })}
      >
        {(label || maxLength) && (
          <div className="Input__info-row">
            <span className="Input__label">{label || ' '}</span>
            {isFocused &&
              maxLength && (
                <span className="Input__charCount">
                  {inputProps.value.length} / {maxLength}
                </span>
              )}
          </div>
        )}
        
        {this.props.children(this.handleFocus, this.handleBlur)}

        <div
          className={classNames({
            'Input__error-show': error,
            'Input__error-hidden': !error
          })}
        >
          <i className="fa fa-exclamation-circle" aria-hidden="true" />
          {error}
        </div>
        
      </div>
    );
  }
}

export default Input;
