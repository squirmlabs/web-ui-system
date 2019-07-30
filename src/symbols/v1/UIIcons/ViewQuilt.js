import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ViewQuilt = props =>
  <SvgIconCustom {...props}>
    <path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" />
  </SvgIconCustom>;

ViewQuilt = pure(ViewQuilt);
ViewQuilt.uiName = 'SvgIcon';

export default ViewQuilt;
