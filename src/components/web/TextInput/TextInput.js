import React, { Component } from 'react';
import Input from './Input';

import { propTypes } from './propTypes';

class TextInput extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className, label, errorText, maxLength, inputRef, ...inputProps
    } = this.props;
    const isOverCharCount = maxLength && inputProps.value.length > maxLength;

    return (
      <div className="TextInput">
        <Input {...this.props} isOverCharCount={isOverCharCount}>
          {(handleFocus, handleBlur) => (
            <input
              {...inputProps}
              type="text"
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          )}
        </Input>
      </div>
    );
  }
}
export default TextInput;
