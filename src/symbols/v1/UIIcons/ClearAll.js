import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ClearAll = props =>
  <SvgIconCustom {...props}>
    <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
  </SvgIconCustom>;

ClearAll = pure(ClearAll);
ClearAll.uiName = 'SvgIcon';

export default ClearAll;
