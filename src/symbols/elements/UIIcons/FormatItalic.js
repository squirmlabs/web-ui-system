import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FormatItalic = props =>
  <SvgIconCustom {...props}>
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
  </SvgIconCustom>;

FormatItalic = pure(FormatItalic);
FormatItalic.uiName = 'SvgIcon';

export default FormatItalic;
