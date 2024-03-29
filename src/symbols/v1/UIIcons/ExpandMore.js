import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let ExpandMore = props =>
  <SvgIconCustom {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </SvgIconCustom>;

ExpandMore = pure(ExpandMore);
ExpandMore.uiName = 'SvgIcon';

export default ExpandMore;
