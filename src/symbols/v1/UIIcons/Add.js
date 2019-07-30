import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let Add = props =>
  <SvgIconCustom {...props}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </SvgIconCustom>;

Add = pure(Add);
Add.uiName = 'SvgIcon';

export default Add;
