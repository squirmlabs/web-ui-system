import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FormatStrikethrough = props =>
  <SvgIconCustom {...props}>
    <path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
  </SvgIconCustom>;

FormatStrikethrough = pure(FormatStrikethrough);
FormatStrikethrough.uiName = 'SvgIcon';

export default FormatStrikethrough;
