/* eslint-disable import/prefer-default-export */

import { cloneElement, Children, isValidElement } from 'react';
import classNames from 'classnames';

export function cloneElementWithClassName(child, className) {
  return React.cloneElement(child, {
    className: classNames(child.props.className, className)
  });
}

export function cloneChildrenWithClassName(children, className, props) {
  return Children.map(children, (child) => {
    return (
      isValidElement(child) &&
      cloneElement(child, {
        className: child.props.hasOwnProperty('className')
          ? `${child.props.className} ${className}`
          : className,
        ...props
      })
    );
  });
}

export function isUIElement(element, uiNames) {
  return isValidElement(element) && uiNames.indexOf(element.type.uiName) !== -1;
}

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function isUIComponent(element, uiNames) {
  return uiNames.indexOf(element.uiName) !== -1;
}
