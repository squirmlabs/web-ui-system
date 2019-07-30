import React, { Component } from 'react';
import Select from 'react-select';
import { string, oneOfType, bool, number } from 'prop-types';
import Input from '../TextInput/Input';
import '../../../../lib/react-select/react-select.scss';
import './Dropdown.scss';

class Dropdown extends Component {
  render() {
    const {
      className, label, errorText, maxLength, inputRef, ...inputProps
    } = this.props;

    return (
      <div className="Dropdown">
        <Input {...this.props}>
          {(handleFocus, handleBlur) => (
            <Select {...inputProps} onFocus={handleFocus} onBlur={handleBlur} />
          )}
        </Input>
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: string,
  errorText: oneOfType([string, bool]),
  isOverCharCount: bool,
  label: string,
  maxLength: number
};

export default Dropdown;
