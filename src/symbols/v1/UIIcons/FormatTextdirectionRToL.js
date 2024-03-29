import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FormatTextdirectionRToL = props =>
  <SvgIconCustom {...props}>
    <path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z" />
  </SvgIconCustom>;

FormatTextdirectionRToL = pure(FormatTextdirectionRToL);
FormatTextdirectionRToL.uiName = 'SvgIcon';

export default FormatTextdirectionRToL;
