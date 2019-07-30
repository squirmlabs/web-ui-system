import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FormatAlignJustify = props =>
  <SvgIconCustom {...props}>
    <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" />
  </SvgIconCustom>;

FormatAlignJustify = pure(FormatAlignJustify);
FormatAlignJustify.uiName = 'SvgIcon';

export default FormatAlignJustify;
