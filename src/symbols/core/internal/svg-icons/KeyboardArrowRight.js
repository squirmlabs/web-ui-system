import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../../v1/SvgIcon';

/**
 * @ignore - internal component.
 */
let KeyboardArrowRight = (props) => (
  <SvgIcon {...props}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
  </SvgIcon>
);
KeyboardArrowRight = pure(KeyboardArrowRight);
KeyboardArrowRight.uiName = 'SvgIcon';

export default KeyboardArrowRight;
