import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ShortText = props =>
  <SvgIconCustom {...props}>
    <path d="M4 9h16v2H4zm0 4h10v2H4z" />
  </SvgIconCustom>;

ShortText = pure(ShortText);
ShortText.uiName = 'SvgIcon';

export default ShortText;
