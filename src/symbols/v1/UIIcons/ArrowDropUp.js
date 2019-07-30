import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ArrowDropUp = props =>
  <SvgIconCustom {...props}>
    <path d="M7 14l5-5 5 5z" />
  </SvgIconCustom>;

ArrowDropUp = pure(ArrowDropUp);
ArrowDropUp.uiName = 'SvgIcon';

export default ArrowDropUp;
