import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let IndeterminateCheckBox = props =>
  <SvgIconCustom {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
  </SvgIconCustom>;

IndeterminateCheckBox = pure(IndeterminateCheckBox);
IndeterminateCheckBox.uiName = 'SvgIcon';

export default IndeterminateCheckBox;
