import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ArrowBack = props =>
  <SvgIconCustom {...props}>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </SvgIconCustom>;

ArrowBack = pure(ArrowBack);
ArrowBack.uiName = 'SvgIcon';

export default ArrowBack;
