import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../SvgIcon';

const SvgIconCustom = global.__UI_SvgIcon__ || SvgIcon;

let FormatQuote = props =>
  <SvgIconCustom {...props}>
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </SvgIconCustom>;

FormatQuote = pure(FormatQuote);
FormatQuote.uiName = 'SvgIcon';

export default FormatQuote;
