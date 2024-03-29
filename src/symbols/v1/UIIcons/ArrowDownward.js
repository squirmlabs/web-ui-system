import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ArrowDownward = props =>
  <SvgIconCustom {...props}>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </SvgIconCustom>;

ArrowDownward = pure(ArrowDownward);
ArrowDownward.uiName = 'SvgIcon';

export default ArrowDownward;
