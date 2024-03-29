import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ViewHeadline = props =>
  <SvgIconCustom {...props}>
    <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
  </SvgIconCustom>;

ViewHeadline = pure(ViewHeadline);
ViewHeadline.uiName = 'SvgIcon';

export default ViewHeadline;
