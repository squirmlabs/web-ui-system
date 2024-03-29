import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ViewArray = props =>
  <SvgIconCustom {...props}>
    <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" />
  </SvgIconCustom>;

ViewArray = pure(ViewArray);
ViewArray.uiName = 'SvgIcon';

export default ViewArray;
