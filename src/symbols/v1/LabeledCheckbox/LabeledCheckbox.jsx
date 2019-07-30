import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './LabeledCheckbox.scss';

const { bool, func, string } = PropTypes;

class LabeledCheckbox extends Component {
  static propTypes = {
    label: string,
    selected: bool,
    onClick: func,
  };

  static defaultProps = {
    label: '',
    selected: false,
  };
  render() {
    const { label, onClick, selected } = this.props;
    const styles = classnames('LabeledCheckbox', {
      'LabeledCheckbox--selected': selected,
    });
    return (
      <div className={styles} onClick={onClick}>
        <div className="LabeledCheckbox__container">
          <div className="LabeledCheckbox__input" />
          <div className="LabeledCheckbox__label">
            {label}
          </div>
        </div>
      </div>
    );
  }
}

export default LabeledCheckbox;
