import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let VerticalAlignTop = props =>
  <SvgIconCustom {...props}>
    <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
  </SvgIconCustom>;

VerticalAlignTop = pure(VerticalAlignTop);
VerticalAlignTop.uiName = 'SvgIcon';

export default VerticalAlignTop;
