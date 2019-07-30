import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FormatSize = props =>
  <SvgIconCustom {...props}>
    <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
  </SvgIconCustom>;

FormatSize = pure(FormatSize);
FormatSize.uiName = 'SvgIcon';

export default FormatSize;
