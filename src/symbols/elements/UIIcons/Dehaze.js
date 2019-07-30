import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let Dehaze = props =>
  <SvgIconCustom {...props}>
    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
  </SvgIconCustom>;

Dehaze = pure(Dehaze);
Dehaze.uiName = 'SvgIcon';

export default Dehaze;
