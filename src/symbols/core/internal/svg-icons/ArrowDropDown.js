import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../../v1/SvgIcon';

/**
 * @ignore - internal component.
 */
let ArrowDropDown = (props) => (
  <SvgIcon {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SvgIcon>
);

ArrowDropDown = pure(ArrowDropDown);
ArrowDropDown.uiName = 'SvgIcon';

export default ArrowDropDown;
