import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let Check = props =>
  <SvgIconCustom {...props}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </SvgIconCustom>;

Check = pure(Check);
Check.uiName = 'SvgIcon';

export default Check;
