import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let VerticalAlignBottom = props =>
  <SvgIconCustom {...props}>
    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
  </SvgIconCustom>;

VerticalAlignBottom = pure(VerticalAlignBottom);
VerticalAlignBottom.uiName = 'SvgIcon';

export default VerticalAlignBottom;
