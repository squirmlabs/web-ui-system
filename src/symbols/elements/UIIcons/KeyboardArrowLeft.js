import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let KeyboardArrowLeft = props =>
  <SvgIconCustom {...props}>
    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
  </SvgIconCustom>;

KeyboardArrowLeft = pure(KeyboardArrowLeft);
KeyboardArrowLeft.uiName = 'SvgIcon';

export default KeyboardArrowLeft;
