import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../../elements/SvgIcon';

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
