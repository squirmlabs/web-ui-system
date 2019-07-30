import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import './InlineProfileCard.scss';

const { string } = PropTypes;

class InlineProfileCard extends Component {
  static propTypes = {
    displayName: string,
    firstName: string,
    lastName: string,
    email: string,
    workPhone: string,
    personalCellPhone: string,
    workCellPhone: string,
  };

  static defaultProps = {
    displayName: '--',
    firstName: '--',
    lastName: '--',
    email: null,
    workPhone: null,
    workCellPhone: null,
    personalCellPhone: null,
  };
  constructor(props) {
    super(props);
    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.state = {
      isActive: false,
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.onOutsideClick, false);
    document.addEventListener('mouseup', this.onOutsideClick, false);
    document.addEventListener('touchstart', this.onOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick, false);
    document.removeEventListener('mouseup', this.onOutsideClick, false);
    document.removeEventListener('touchstart', this.onOutsideClick, false);
  }

  onOutsideClick(e) {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({ isActive: false });
    }
  }

  onToggleClick(e) {
    this.setState({ isActive: !this.state.isActive });
  }

  formatPhoneNumber(value) {
    return String(value).replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '($2) $3-$4');
  }

  render() {
    return (
      <div
        className={classNames('InlineProfileCard', {
          'InlineProfileCard--active': this.state.isActive,
        })}
      >
        <div className="InlineProfileCard__name" onClick={this.onToggleClick}>
          {this.props.displayName}
        </div>
        <ul className="InlineProfileCard__card">
          <li
            className="InlineProfileCard__name InlineProfileCard__name--in-card"
            onClick={this.onToggleClick}
          >
            {this.props.displayName}
          </li>
          <li
            className={classNames(
              'InlineProfileCard__card-item InlineProfileCard__card-item--email',
              { 'InlineProfileCard__card-item--no-data': !this.props.email },
            )}
          >
            <i className="fa fa-envelope-o" aria-hidden="true" />
            {this.props.email && (
              <a href={`mailto:${this.props.email}`}>Email {this.props.firstName}</a>
            )}
            {!this.props.email && <span>No email available</span>}
          </li>
          <li
            className={classNames(
              'InlineProfileCard__card-item InlineProfileCard__card-item--phone',
              { 'InlineProfileCard__card-item--no-data': !this.props.workPhone },
            )}
          >
            <i className="fa fa-phone" aria-hidden="true" />
            {this.props.workPhone && (
              <span>
                <a href={`tel:${this.props.workPhone}`}>
                  {this.formatPhoneNumber(this.props.workPhone)}
                </a>{' '}
                (work phone)
              </span>
            )}
            {!this.props.workPhone && <span>No work phone available</span>}
          </li>
          <li
            className={classNames(
              'InlineProfileCard__card-item InlineProfileCard__card-item--phone',
              { 'InlineProfileCard__card-item--no-data': !this.props.workCellPhone },
            )}
          >
            <i className="fa fa-phone" aria-hidden="true" />
            {this.props.workCellPhone && (
              <span>
                <a href={`tel:${this.props.workCellPhone}`}>
                  {this.formatPhoneNumber(this.props.workCellPhone)}
                </a>{' '}
                (work cell)
              </span>
            )}
            {!this.props.workCellPhone && <span>No work cell available</span>}
          </li>
          <li
            className={classNames(
              'InlineProfileCard__card-item InlineProfileCard__card-item--phone',
              { 'InlineProfileCard__card-item--no-data': !this.props.personalCellPhone },
            )}
          >
            <i className="fa fa-phone" aria-hidden="true" />
            {this.props.personalCellPhone && (
              <span>
                <a href={`tel:${this.props.personalCellPhone}`}>
                  {this.formatPhoneNumber(this.props.personalCellPhone)}
                </a>{' '}
                (personal cell)
              </span>
            )}
            {!this.props.personalCellPhone && <span>No personal cell available</span>}
          </li>
        </ul>
      </div>
    );
  }
}

export default InlineProfileCard;
