/* eslint-disable import/prefer-default-export */

import React from 'react';
import classNames from 'classnames';

export function cloneElementWithClassName(child, className) {
  return React.cloneElement(child, {
    className: classNames(child.props.className, className),
  });
}

export function cloneChildrenWithClassName(children, className) {
  return React.Children.map(children, child => {
    return React.isValidElement(child) && cloneElementWithClassName(child, className);
  });
}

export function isSSElement(element, ssNames) {
  return React.isValidElement(element) && ssNames.indexOf(element.type.ssName) !== -1;
}

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
